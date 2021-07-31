import React from "react";
import { Button } from "../Button";
import {
  Wrapper,
  TextWrapper,
  WrapperNew,
  WrapperRow,
  TextNew,
  Title,
  Text,
} from "./styles";

interface ICardMoreInfoProps {
  title: string;
  text: string;
  buttonText: string;
  buttonSize: string;
  isNew?: boolean;
}
export const CardMoreInfo = ({
  title,
  text,
  buttonText,
  buttonSize,
  isNew,
}: ICardMoreInfoProps) => {
  return (
    <Wrapper>
      <TextWrapper>
        <WrapperRow>
          <Title>{title}</Title>
          {isNew && (
            <WrapperNew>
              <TextNew>Novo</TextNew>
            </WrapperNew>
          )}
        </WrapperRow>
        <Text>{text}</Text>
      </TextWrapper>
      <Button title={buttonText} size={buttonSize} />
    </Wrapper>
  );
};
