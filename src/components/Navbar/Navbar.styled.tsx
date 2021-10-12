import styled from 'styled-components';
import { getMedia } from '@styles/utils';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 2rem;
`;

export const NavCenter = styled.div`
  max-width: 1440px;
  margin: auto;
  width: 90vw;

  @media screen and (min-width: ${getMedia('navbar')}) {
    display: flex;
    align-items: center;
    width: 100vw;
  }
`;
