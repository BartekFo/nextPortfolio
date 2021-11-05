import styled, { css } from 'styled-components';
import { getColor, getFontFamily, getMedia } from '@styles/utils';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  @media screen and (min-width: ${getMedia('navbar')}) {
    margin-right: 2rem;
  }
`;

export const H1 = styled.h1`
  font-family: ${getFontFamily('pacifico')};
  font-size: 3rem;
  font-weight: normal;
  a {
    text-decoration: none;
    color: ${getColor('textColor')};
  }
`;

export const P = styled.p`
  font-size: 1.5rem;
`;

export const ChangeLangButton = styled.button<{ isActive: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  position: relative;
  width: 30px;
  height: auto;
  padding-top: 30px;
  margin-inline: 0.5rem;
  transition: all 0.2s ease-in-out;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: scale(1.2);
    `}
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  justify-self: start;
  & svg,
  path {
    fill: ${getColor('textColor')};
    stroke: ${getColor('textColor')};
  }

  @media screen and (min-width: ${getMedia('navbar')}) {
    display: none;
  }
`;
