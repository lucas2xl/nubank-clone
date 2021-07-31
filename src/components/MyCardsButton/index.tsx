import React from "react";
import { Wrapper, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../tools/colors";

interface IMyCardButtonProps {
  title: string;
}

export const MyCardsButton = ({ title }: IMyCardButtonProps) => {
  return (
    <Wrapper activeOpacity={0.7}>
      <Feather name="smartphone" size={20} color={Colors.black} />
      <Title>{title}</Title>
    </Wrapper>
  );
};
