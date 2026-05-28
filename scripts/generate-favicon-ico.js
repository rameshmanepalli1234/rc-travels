/**
 * Generates a 32×32 favicon.ico — RT monogram + route arc (matches favicon.svg).
 */
const fs = require("fs");
const path = require("path");

const SIZE = 32;

const GLYPHS = {
  R: [
    "01110",
    "01001",
    "01001",
    "01110",
    "01010",
    "01001",
    "01001",
  ],
  T: [
    "11111",
    "00100",
    "00100",
    "00100",
    "00100",
    "00100",
    "00100",
  ],
};

const BRAND = { r: 79, g: 189, b: 57 };
const BRAND_DARK = { r: 45, g: 138, b: 71 };
const WHITE = { r: 255, g: 255, b: 255 };

function setPixel(pixels, x, y, color, alpha = 255) {
  if (x < 0 || y < 0 || x >= SIZE || y >= SIZE) return;
  const idx = ((SIZE - 1 - y) * SIZE + x) * 4;
  pixels[idx] = color.b;
  pixels[idx + 1] = color.g;
  pixels[idx + 2] = color.r;
  pixels[idx + 3] = alpha;
}

function lerpColor(a, b, t) {
  return {
    r: Math.round(a.r + (b.r - a.r) * t),
    g: Math.round(a.g + (b.g - a.g) * t),
    b: Math.round(a.b + (b.b - a.b) * t),
  };
}

function backgroundColor(x, y) {
  const t = (x + y) / (SIZE * 2 - 2);
  return lerpColor(BRAND, BRAND_DARK, t);
}

function roundedRectDistance(x, y, radius) {
  const corners = [
    [radius, radius],
    [SIZE - 1 - radius, radius],
    [radius, SIZE - 1 - radius],
    [SIZE - 1 - radius, SIZE - 1 - radius],
  ];
  let inside = true;
  for (const [cx, cy] of corners) {
    if (x < radius && y < radius && Math.hypot(x - cx, y - cy) > radius) inside = false;
    if (x > SIZE - 1 - radius && y < radius && Math.hypot(x - cx, y - cy) > radius)
      inside = false;
    if (x < radius && y > SIZE - 1 - radius && Math.hypot(x - cx, y - cy) > radius)
      inside = false;
    if (x > SIZE - 1 - radius && y > SIZE - 1 - radius && Math.hypot(x - cx, y - cy) > radius)
      inside = false;
  }
  return inside;
}

function drawGlyph(pixels, glyph, originX, originY, scale, color) {
  for (let row = 0; row < glyph.length; row++) {
    for (let col = 0; col < glyph[row].length; col++) {
      if (glyph[row][col] !== "1") continue;
      for (let sy = 0; sy < scale; sy++) {
        for (let sx = 0; sx < scale; sx++) {
          setPixel(pixels, originX + col * scale + sx, originY + row * scale + sy, color);
        }
      }
    }
  }
}

function drawRouteArc(pixels) {
  for (let x = 2; x < SIZE - 2; x++) {
    const t = (x - 2) / (SIZE - 5);
    const y = Math.round(28 - 3 * Math.sin(t * Math.PI));
    for (let w = -1; w <= 1; w++) {
      setPixel(pixels, x, y + w, WHITE, w === 0 ? 70 : 35);
    }
  }
}

function writeFaviconIco(outputPath) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const bmpHeader = Buffer.alloc(40);
  bmpHeader.writeUInt32LE(40, 0);
  bmpHeader.writeInt32LE(SIZE, 4);
  bmpHeader.writeInt32LE(SIZE * 2, 8);
  bmpHeader.writeUInt16LE(1, 12);
  bmpHeader.writeUInt16LE(32, 14);
  bmpHeader.writeUInt32LE(SIZE * SIZE * 4, 20);

  const pixels = Buffer.alloc(SIZE * SIZE * 4);
  const scale = 3;
  const gap = 2;
  const letterW = 5 * scale;
  const letterH = 7 * scale;
  const wordW = letterW * 2 + gap;
  const startX = Math.floor((SIZE - wordW) / 2);
  const startY = 4;

  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (!roundedRectDistance(x, y, 5)) continue;
      setPixel(pixels, x, y, backgroundColor(x, y));
    }
  }

  drawRouteArc(pixels);
  drawGlyph(pixels, GLYPHS.R, startX, startY, scale, WHITE);
  drawGlyph(pixels, GLYPHS.T, startX + letterW + gap, startY, scale, WHITE);

  const dotX = startX + letterW + gap + 2 * scale;
  const dotY = startY + 6 * scale;
  setPixel(pixels, dotX, dotY, BRAND);
  setPixel(pixels, dotX + 1, dotY, BRAND);

  const maskRowBytes = Math.ceil(SIZE / 32) * 4;
  const mask = Buffer.alloc(maskRowBytes * SIZE, 0);
  const imageData = Buffer.concat([bmpHeader, pixels, mask]);

  const entry = Buffer.alloc(16);
  entry[0] = SIZE;
  entry[1] = SIZE;
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(imageData.length, 8);
  entry.writeUInt32LE(22, 12);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, Buffer.concat([header, entry, imageData]));
}

module.exports = { writeFaviconIco };

if (require.main === module) {
  const targets = process.argv.slice(2);
  const defaultTargets = [
    path.join(__dirname, "..", "public", "favicon.ico"),
    path.join(__dirname, "..", "dist", "favicon.ico"),
  ];

  for (const target of targets.length > 0 ? targets : defaultTargets) {
    writeFaviconIco(target);
    console.log(`generate-favicon-ico: wrote ${target}`);
  }
}
