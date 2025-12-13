import { typography } from "@styles/tokens/typographyTokens";

export const defaultFontStyles = `
  text-transform: inherit;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif`;

export const displayLarge = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_4XL};
  line-height: ${typography.LINE_HEIGHT_3XL};
  font-weight: ${typography.FONT_WEIGHT_MEDIUM};`;

export const displayMedium = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_XL};
  line-height: ${typography.LINE_HEIGHT_L};
  font-weight: ${typography.FONT_WEIGHT_MEDIUM};`;

export const headingXLarge = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_3XL};
  line-height: ${typography.LINE_HEIGHT_2XL};
  font-weight: ${typography.FONT_WEIGHT_LIGHT};`;

export const headingLarge = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_2XL};
  line-height: ${typography.LINE_HEIGHT_XL};
  font-weight: ${typography.FONT_WEIGHT_REGULAR};`;

export const headingMedium = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_XL};
  line-height: ${typography.LINE_HEIGHT_L};
  font-weight: ${typography.FONT_WEIGHT_REGULAR};`;

export const headingSmall = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_L};
  font-weight: ${typography.FONT_WEIGHT_MEDIUM};
  line-height: ${typography.LINE_HEIGHT_M};`;

export const headingSmallSemiBold = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_L};
  font-weight: ${typography.FONT_WEIGHT_SEMIBOLD};
  line-height: ${typography.LINE_HEIGHT_M};`;

export const headingXsmall = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_M};
  font-weight: ${typography.FONT_WEIGHT_SEMIBOLD};
  line-height: ${typography.LINE_HEIGHT_S};`;

export const bodyMediumDefault = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_M};
  font-weight: ${typography.FONT_WEIGHT_REGULAR};
  line-height: ${typography.LINE_HEIGHT_M};`;

export const bodyMediumStrong = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_M};
  font-weight: ${typography.FONT_WEIGHT_SEMIBOLD};
  line-height: ${typography.LINE_HEIGHT_M};`;

export const bodySmallDefault = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_S};
  font-weight: ${typography.FONT_WEIGHT_REGULAR};
  line-height: ${typography.LINE_HEIGHT_S};`;

export const bodySmallStrong = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_S};
  font-weight: ${typography.FONT_WEIGHT_SEMIBOLD};
  line-height: ${typography.LINE_HEIGHT_S};`;

export const labelLargeDefault = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_M};
  font-weight: ${typography.FONT_WEIGHT_REGULAR};
  line-height: ${typography.LINE_HEIGHT_M};`;

export const labelLargeAccent = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_M};
  font-weight: ${typography.FONT_WEIGHT_MEDIUM};
  line-height: ${typography.LINE_HEIGHT_M};`;

export const labelMediumDefault = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_S};
  font-weight: ${typography.FONT_WEIGHT_REGULAR};
  line-height: ${typography.LINE_HEIGHT_S};`;

export const labelMediumAccent = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_S};
  font-weight: ${typography.FONT_WEIGHT_MEDIUM};
  line-height: ${typography.LINE_HEIGHT_S};`;

export const labelSmall = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_XS};
  font-weight: ${typography.FONT_WEIGHT_SEMIBOLD};
  line-height: ${typography.LINE_HEIGHT_XS};
  /* text-transform: uppercase; */`;

export const mainMenuCompactMenuItem = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_XS};
  font-weight: ${typography.FONT_WEIGHT_REGULAR};  
  line-height: ${typography.LINE_HEIGHT_XS};
  letter-spacing: -0.28px;
  `;

export const mainMenuCompactMenuItemAccent = `
  ${defaultFontStyles};
  font-size: ${typography.FONT_SIZE_XS};
  font-weight: ${typography.FONT_WEIGHT_SEMIBOLD};  
  line-height: ${typography.LINE_HEIGHT_XS};
  letter-spacing: -0.28px;
`;

export const textStyles = {
  defaultFontStyles,
  displayLarge,
  displayMedium,
  headingXLarge,
  headingLarge,
  headingMedium,
  headingSmall,
  headingXsmall,
  bodyMediumDefault,
  bodyMediumStrong,
  bodySmallDefault,
  labelLargeDefault,
  labelLargeAccent,
  labelMediumDefault,
  labelMediumAccent,
  labelSmall,
  mainMenuCompactMenuItem,
  mainMenuCompactMenuItemAccent,
  headingSmallSemiBold,
  bodySmallStrong,
};
