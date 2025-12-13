const fs = require('fs');
const path = require('path');

console.log('🔍 Checking build output...');

const distPath = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

if (!fs.existsSync(distPath)) {
  console.error('❌ dist directory not found. Run "yarn build" first.');
  process.exit(1);
}

if (!fs.existsSync(indexHtmlPath)) {
  console.error('❌ index.html not found in dist directory.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Check for common issues
const issues = [];

if (indexHtml.includes('%PUBLIC_URL%')) {
  issues.push('❌ %PUBLIC_URL% placeholders found in index.html');
}

if (indexHtml.includes('http://localhost')) {
  issues.push('❌ localhost URLs found in index.html');
}

if (!indexHtml.includes('<div id="root"></div>')) {
  issues.push('❌ root div not found in index.html');
}

if (!indexHtml.includes('.js')) {
  issues.push('❌ No JavaScript files referenced in index.html');
}

if (issues.length > 0) {
  console.error('🚨 Build issues found:');
  issues.forEach(issue => console.error(issue));
  process.exit(1);
}

console.log('✅ Build output looks good!');
console.log('📁 Files in dist directory:');
const files = fs.readdirSync(distPath);
files.forEach(file => {
  const stats = fs.statSync(path.join(distPath, file));
  const size = stats.isDirectory()
    ? 'DIR'
    : `${(stats.size / 1024).toFixed(1)}KB`;
  console.log(`   ${file} (${size})`);
});
