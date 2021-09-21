import styled, { css } from 'styled-components';

import MobileNavbarItems from '@components/Navbar/MobileNavbarItems/MobileNavbarItems';

const Nav = styled.nav.attrs<{ isTabletOrMobile: boolean }>(
  ({ isTabletOrMobile }) => isTabletOrMobile,
)`
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
`;

const H1 = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 3rem;
  font-weight: normal;
`;

const P = styled.p`
  font-size: 1.5rem;
`;

const ChangeLangButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
`;

const IconWrapper = styled.div`
  cursor: pointer;
`;

const NavbarItemsContainer = styled(MobileNavbarItems)`
  grid-area: navbarItemsContainer;
  width: 100%;
  height: 100%;
`;
