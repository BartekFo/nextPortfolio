import styled from 'styled-components';
import { getAnimation } from '@styles/utils';

const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid;
    border-color: #774f38 transparent #774f38 transparent;
    animation: ${getAnimation('rotateSpinner')} 1.2s linear infinite;
  }
`;

const LoadingSpinner = () => {
  return <Spinner />;
};

export default LoadingSpinner;
