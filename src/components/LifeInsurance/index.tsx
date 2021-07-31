import React from "react";
import {
  Line,
  Wrapper,
  WrapperRow,
  Title,
  Text,
} from "./styles";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Colors } from "../../tools/colors";

interface ILifeInsuranceButtonProps {
  title: string;
  text: string;
}
export const LifeInsuranceButton = ({
  title,
  text,
}: ILifeInsuranceButtonProps) => {
  return (
    <>
      <Line />
      <Wrapper activeOpacity={0.4}>
        <AntDesign name="hearto" size={24} color={Colors.black} />
        <WrapperRow>
          <Title>{title}</Title>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={Colors.gray.dark}
          />
        </WrapperRow>
        <Text>{text}</Text>
      </Wrapper>
    </>
  );
};
