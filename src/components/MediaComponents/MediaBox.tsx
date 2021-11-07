import styled from 'styled-components';
import { getColor } from '@styles/utils';
import { color } from '@styles/lightTheme';
import { motion } from 'framer-motion';

const MediaBox = styled(motion.div)<{ colorName: keyof typeof color }>`
  color: white;
  background-color: ${({ colorName }) => getColor(colorName)};
  border-radius: 58px;
  height: 250px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
  margin: 0 50px 100px 50px;
`;

export default MediaBox;
