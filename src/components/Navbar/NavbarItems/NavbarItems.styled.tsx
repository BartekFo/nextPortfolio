import styled from 'styled-components';
import Switch from 'react-switch';
import { FaSun, FaMoon } from 'react-icons/fa';
import { getAnimation, getColor, getMedia } from '@styles/utils';

export const Wrapper = styled.div`
  overflow: hidden;
  transition: ${getAnimation('defaultTransition')};

  & > div {
    background-color: ${getColor('navbarLinksBackground')};
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 22px;
  }

  @media screen and (min-width: ${getMedia('navbar')}) {
    height: auto !important;
    width: 100%;
    div {
      flex-direction: row;
      align-items: center;
      background: none;
      border-radius: 0;
    }
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

export const StyledSwitch = styled(Switch)`
  cursor: pointer;
  margin-inline: 2rem 5rem;

  @media screen and (max-width: ${getMedia('navbar')}) {
    width: max-content;
    margin-inline: 0;
    margin-block: 0.5rem;
    height: 100%;
  }
`;

export const StyledMoon = styled(FaMoon)`
  margin: 0.375rem;
`;

export const StyledSun = styled(FaSun)`
  margin: 0.375rem 0.25rem;
`;
