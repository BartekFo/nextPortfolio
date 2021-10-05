import styled, { css } from 'styled-components';

import { getColor, getFontFamily, getMedia } from '@styles/utils';

export const Nav = styled.nav<{ isNavbarOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: auto;

  & a {
    text-decoration: none;
    color: ${getColor('textColor')};
  }

  @media screen and (max-width: ${getMedia('navbar')}) {
    ${({ isNavbarOpen }) =>
      isNavbarOpen &&
      css`
        grid-template-rows: 1fr 3fr;
      `}
    display: grid;
    grid-template-columns: 1.7fr 0.3fr;
    gap: 0;
    grid-template-areas:
      '. .'
      'navbarItemsContainer navbarItemsContainer';
  }
`;

export const H1 = styled.h1`
  font-family: ${getFontFamily('pacifico')};
  font-size: 3rem;
  font-weight: normal;
`;

export const P = styled.p`
  font-size: 1.5rem;
`;

export const ChangeLangButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  position: relative;
  width: 30px;
  height: auto;
  padding-top: 30px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  justify-self: start;
  margin-bottom: 1rem;
  & svg,
  path {
    fill: ${getColor('textColor')};
    stroke: ${getColor('textColor')};
  }
`;
