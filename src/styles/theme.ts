import { DefaultTheme, keyframes } from 'styled-components';

export const fontFamily = {
  roboto: "'Roboto', sans-serif",
  pacifico: "'Pacifico', cursive",
} as const;

export const fontWeight = {
  regular: '400',
  medium: '500',
  bold: '700',
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
  waveAnimation: keyframes`
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }  
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) } 
    100% { transform: rotate( 0.0deg) }
  `,
  float: keyframes`
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
`,
  float2: keyframes`
    0% {
      line-height: 30px;
      transform: translatey(0px);
    }
    55% {
      transform: translatey(-20px);
    }
    60% {
      line-height: 10px;
    }
    100% {
      line-height: 30px;
      transform: translatey(0px);
    }
`,
};

export const medias = {
  navbar: '1124px',
};

const theme: DefaultTheme = {
  fontFamily,
  fontWeight,
  color,
  medias,
  animations,
} as const;

export default theme;
