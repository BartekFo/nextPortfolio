import { DefaultTheme, keyframes } from 'styled-components';

export const fontFamily = {
  montserrat: "'Montserrat', sans-serif",
  pacifico: "'Pacifico', cursive",
} as const;

export const fontWeight = {
  regular: '400',
  medium: '500',
  bold: '700',
};

export const color = {
  textColor: 'hsl(0, 0%, 100%)',
  navbarLinkHover: 'hsla(0, 0%, 0%, 0.4)',
  navbarLinksBackground: 'hsla(0, 0%, 0%, 0.2)',
  mainBackground: 'hsl(207, 26%, 17%)',
  elementsColor: 'hsl(209, 23%, 22%)',
  black: 'hsl(0, 0%, 0%)',
  facebook: 'hsl(221, 44%, 41%)',
  gitHub: 'hsl(0, 0%, 20%)',
  linkedIn: 'hsl(199, 85%, 36%)',
  spotify: 'hsl(141, 73%, 42%)',
  twitter: 'hsl(203, 89%, 53%)',
  messageBubbleText: 'hsl(0, 0%, 100%)',
  messageBubbleBackground: 'hsl(209, 23%, 22%)',
  messageBubbleBoxShadow: 'hsla(0, 0%, 0%, 0.2)',
  messageBubbleBorder: 'hsl(209, 23%, 22%)',
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
  defaultTransition: '0.3s ease-in-out all',
};

export const medias = {
  navbar: '1124px',
};

export const boxShadow = {
  default: '0 0 1em rgba(0, 0, 0, 0.3)',
};

const theme: DefaultTheme = {
  fontFamily,
  fontWeight,
  color,
  medias,
  animations,
  boxShadow,
} as const;

export default theme;
