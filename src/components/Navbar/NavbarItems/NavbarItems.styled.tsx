import styled from 'styled-components';
import { getAnimation, getColor, getMedia } from '@styles/utils';

export const Wrapper = styled.div<{ isNavbarOpen: boolean }>`
  overflow: hidden;
  background-color: ${getColor('navbarLinksBackground')};
  display: flex;
  flex-direction: column;
  transition: ${getAnimation('defaultTransition')};
  height: ${({ isNavbarOpen }) => (isNavbarOpen ? '25rem' : '0')};
  border-radius: 22px;

  @media screen and (min-width: ${getMedia('navbar')}) {
    flex-direction: row;
    align-items: center;
    height: auto;
    width: 100%;
    background: none;
    border-radius: 0;
  }
`;

export const A = styled.a`
  text-decoration: none;
  user-select: none;
  font-size: 1.5rem;
  font-style: italic;
  margin-inline: auto;
  background-color: ${getColor('messageBubbleBackground')};
  border-radius: 10px;
  color: ${getColor('messageBubbleText')};
  width: fit-content;
  padding: 1rem 2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: ${getMedia('navbar')}) {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  width: 80%;
  margin: auto;
  padding: 1rem;
  color: ${getColor('textColor')};
  font-size: 1rem;
  letter-spacing: 0.05rem;

  svg {
    height: 20%;
    transform: rotate(-20deg);
  }

  span {
    margin-left: 0.5rem;
  }
`;
