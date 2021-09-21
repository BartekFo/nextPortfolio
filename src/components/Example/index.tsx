import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { getColor } from '@styles/utils';

const H1 = styled.h1`
  color: ${getColor('red')};
`;

const Example: FunctionComponent = () => <H1 style={{ textAlign: 'center' }}>Example</H1>;

export default Example;
