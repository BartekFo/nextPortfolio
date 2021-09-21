import { animations, color, fontFamily, fontWeight } from './theme';

export const getColor = (colorName: keyof typeof color) => (): string => color[colorName];

export const getFontFamily = (fontName: keyof typeof fontFamily) => (): string =>
  fontFamily[fontName];

export const getFontWeight = (fontWeightName: keyof typeof fontWeight) => (): string | number =>
  fontWeight[fontWeightName];

export const getAnimation = (animationName: keyof typeof animations) => () =>
  animations[animationName];
