import React from "react";
import {
  Line,
  Wrapper,
  WrapperRow,
  Title,
  Text,
} from "./styles";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Colors } from "../../tools/colors";
import { Button } from "../Button";

interface IInvestmentButtonProps {
  title: string;
  text: string;
  textButton:string
}
export const InvestmentButton = ({ title, text, textButton }: IInvestmentButtonProps) => {
  return (
    <>
      <Line />
      <Wrapper activeOpacity={0.4}>
        <Feather name="bar-chart" size={24} color={Colors.black} />
        <WrapperRow>
          <Title>{title}</Title>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={Colors.gray.dark}
          />
        </WrapperRow>
        <Text>{text}</Text>
       <Button title={textButton} size={'100px'}/>
      </Wrapper>
    </>
  );
};
