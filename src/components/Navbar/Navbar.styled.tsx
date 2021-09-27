import styled from 'styled-components';

import { getFontFamily, getMedia } from '@styles/utils';

export const Nav = styled.nav<{ isTabletOrMobile: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  & a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: ${getMedia('navbar')}) {
    grid-template-rows: 1fr 4.2fr;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    grid-template-areas:
      '. .'
      'navbarItemsContainer navbarItemsContainer';
  }
`;

export const LogoWrapper = styled.div`
  margin-left: 2rem;

  @media screen and (max-width: 320px) {
    margin-left: 0;
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
`;
