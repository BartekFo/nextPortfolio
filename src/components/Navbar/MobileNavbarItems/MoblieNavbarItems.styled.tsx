import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getColor } from '@styles/utils';

export const Wrapper = styled(motion.div)`
  grid-area: navbarItemsContainer;
  width: 100%;
  height: 100%;
`;

export const ListWrapper = styled(motion.ul)`
  padding: 20px 0 20px 0;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  align-items: center;
  justify-items: center;
  list-style: none;
  background-color: ${getColor('navbarLinksBackground')};
  border-radius: 28px;
  width: 90%;
  margin: auto auto 30px auto;
`;

export const ListItem = styled(motion.li)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40%;
`;
