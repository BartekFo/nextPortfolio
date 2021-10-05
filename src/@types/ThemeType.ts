import { color, fontFamily, fontWeight, medias, animations } from '@styles/theme';

type ThemeType = {
  fontFamily: typeof fontFamily;
  fontWeight: typeof fontWeight;
  color: typeof color;
  animations: typeof animations;
  medias: typeof medias;
};

export default ThemeType;
