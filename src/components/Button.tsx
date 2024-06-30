import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

const Button: React.FC<MuiButtonProps> = (props) => {
  return <MuiButton {...props} />;
};

export default Button;
