import React from "react";
import { Wrapper, Text, Bold } from "./styles";

interface ICardInfoProps {
  text: string;
  bold: string;
}
export const CardInfo = ({ text, bold }: ICardInfoProps) => {
  return (
    <Wrapper>
      <Text>
        {text}
        <Bold> {bold}</Bold>
      </Text>
    </Wrapper>
  );
};
