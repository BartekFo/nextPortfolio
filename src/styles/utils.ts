import { Keyframes } from 'styled-components';

import ThemeType from '@root/@types/ThemeType';

import { animations, color, fontFamily, fontWeight, medias, boxShadow } from './lightTheme';

type StyledComponentsTheme = { theme: ThemeType };
export const getColor =
  (colorName: keyof typeof color) =>
  ({ theme }: StyledComponentsTheme): string =>
    theme.color[colorName];

export const getFontFamily =
  (fontName: keyof typeof fontFamily) =>
  ({ theme }: StyledComponentsTheme): string =>
    theme.fontFamily[fontName];

export const getFontWeight =
  (fontWeightName: keyof typeof fontWeight) =>
  ({ theme }: StyledComponentsTheme): string =>
    theme.fontWeight[fontWeightName];

export const getMedia =
  (mediaName: keyof typeof medias) =>
  ({ theme }: StyledComponentsTheme): string =>
    theme.medias[mediaName];

export const getAnimation =
  (animationName: keyof typeof animations) =>
  ({ theme }: StyledComponentsTheme): Keyframes =>
    theme.animations[animationName];

export const getBoxShadow =
  (boxShadowName: keyof typeof boxShadow) =>
  ({ theme }: StyledComponentsTheme): string =>
    theme.boxShadow[boxShadowName];
