import styled from 'styled-components';
import { getAnimation, getColor, getMedia } from '@styles/utils';

export const TextWrapper = styled.div`
  grid-area: textWrapper;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-around;
  background-color: ${getColor('messageBubbleBackground')};
  border: 1px solid ${getColor('messageBubbleBorder')};
  border-radius: 45px;
  width: 100%;
  padding: 40px;
  animation: ${getAnimation('float')} 5s ease-in-out infinite;
  mix-blend-mode: multiply;
  letter-spacing: 3px;
  color: ${getColor('messageBubbleText')};
  position: relative;
  box-shadow: 20px 20px ${getColor('messageBubbleBoxShadow')};

  @media screen and (max-width: ${getMedia('navbar')}) {
    width: 90%;
  }

  &:after {
    transform: translatey(0px);
    animation: ${getAnimation('float2')} 5s ease-in-out infinite;
    content: '.';
    -webkit-text-fill-color: ${getColor('messageBubbleBackground')};
    text-shadow: 22px 22px ${getColor('messageBubbleBoxShadow')};
    text-align: left;
    font-size: 55px;
    width: 55px;
    height: 11px;
    line-height: 30px;
    border-radius: 45px;
    background-color: ${getColor('messageBubbleBackground')};
    position: absolute;
    display: block;
    bottom: -30px;
    left: 0;
    box-shadow: 22px 22px ${getColor('messageBubbleBoxShadow')};
    z-index: -2;
  }
`;

export const AboutInfo = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 50px;
`;

export const AboutLink = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${getColor('messageBubbleText')};
`;
