import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Wrapper, TextButton } from "./styles";

interface IButtonProps {
  title: string;
  titleColor?: string;
  size: string;
  color?: string;
  alignSelf?: boolean;
}

export const Button = ({ title, size, color, alignSelf, titleColor }: IButtonProps) => {
  return (
    <Wrapper size={size} color={color} alignSelf={alignSelf}>
      <TextButton color={titleColor}>{title}</TextButton>
    </Wrapper>
  );
};
