import { DefaultTheme, keyframes } from 'styled-components';

export const fontFamily = {
  roboto: "'Roboto', sans-serif",
  pacifico: "'Pacifico', cursive",
} as const;

export const fontWeight = {
  regular: '400',
};

export const color = {
  mainBackground: 'hsl(0,55%,97%)',
  white: '#fff',
  black: '#000',
} as const;

export const animations = {
  rotateSpinner: keyframes`
    from {
        transform: rotate(0)
    }
    to {
        transform: rotate(360deg)
    }
`,
};

export const medias = {};

const theme: DefaultTheme = {
  fontFamily,
  fontWeight,
  color,
  medias,
  animations,
} as const;

export default theme;
