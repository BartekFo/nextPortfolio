import styled, { css } from 'styled-components';

// import MobileNavbarItems from '@components/Navbar/MobileNavbarItems/MobileNavbarItems';
import { getFontFamily, getMedia } from '@styles/utils';

export const Nav = styled.nav<{ isTabletOrMobile: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  ${({ isTabletOrMobile }) =>
    isTabletOrMobile &&
    css`
      grid-template-rows: 1fr 4.2fr;
      gap: 0;
      grid-template-areas:
        '. .'
        'navbarItemsContainer navbarItemsContainer';
    `}

  & a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: ${getMedia('navbar')}) {
    grid-template-columns: 1fr 1fr;
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

// export const NavbarItemsContainer = styled(MobileNavbarItems)`
//   grid-area: navbarItemsContainer;
//   width: 100%;
//   height: 100%;
// `;
