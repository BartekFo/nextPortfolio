import styled from 'styled-components';
import { getColor } from '@styles/utils';

export const ListWrapper = styled.ul`
  padding: 0 20px 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 30px 30px;
  grid-template-areas: '. . . . .';
  list-style: none;
  background-color: ${getColor('navbarLinksBackground')};
  height: 40px;
  border-radius: 28px;
`;

export const A = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-style: italic;
`;

export const ListItem = styled.li`
  height: 100%;
  display: flex;
  width: 120%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  height: 100%;
  color: ${getColor('textColor')};
  gap: 10px;
  font-size: 1rem;
  letter-spacing: 0.05rem;

  svg {
    height: 20%;
    transform: rotate(-20deg);
  }
`;
