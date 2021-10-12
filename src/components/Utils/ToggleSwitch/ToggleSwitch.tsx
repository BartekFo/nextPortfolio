import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { getColor } from '@styles/utils';

const Label = styled.label<{ isChecked: boolean }>`
  position: relative;
  display: inline-block;
  pointer-events: none;
  width: 40px;
  height: 20px;
  cursor: pointer;
  background-color: ${getColor('messageBubbleBackground')};
  border-radius: 20px;
  transition: all 0.3s;

  &:after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background-color: white;
    top: 1px;
    left: 1px;
    transition: all 0.3s;

    ${({ isChecked }) =>
      isChecked &&
      css`
        transform: translateX(20px);
      `}
  }
`;

const Input = styled.input`
  position: absolute;
  left: -9999px;
`;

const ToggleSwitch: FC<{ isChecked: boolean }> = ({ isChecked }) => {
  return (
    <div>
      <Input type="checkbox" id="toggle" />
      <Label htmlFor="toggle" isChecked={isChecked} />
    </div>
  );
};

export default ToggleSwitch;
