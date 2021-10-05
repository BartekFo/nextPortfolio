import { color, fontFamily, fontWeight, medias, animations, boxShadow } from '@styles/lightTheme';

type ThemeType = {
  fontFamily: typeof fontFamily;
  fontWeight: typeof fontWeight;
  color: typeof color;
  animations: typeof animations;
  medias: typeof medias;
  boxShadow: typeof boxShadow;
};

export default ThemeType;
