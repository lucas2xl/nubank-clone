import React from "react";
import {
  Line,
  Wrapper,
  WrapperRow,
  Title,
  InvoiceText,
  AvailableLimit,
} from "./styles";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../../tools/colors";

interface ILoanButtonProps {
  title: string;
  label: string;
  availableLimitText: string;
}
export const LoanButton = ({
  title,
  label,
  availableLimitText,
}: ILoanButtonProps) => {
  return (
    <>
      <Line />
      <Wrapper activeOpacity={0.4}>
        <FontAwesome5 name="hand-holding-usd" size={24} color={Colors.black} />
        <WrapperRow>
          <Title>{title}</Title>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={Colors.gray.dark}
          />
        </WrapperRow>
        <InvoiceText>{label}</InvoiceText>
        <AvailableLimit>{availableLimitText}</AvailableLimit>
      </Wrapper>
    </>
  );
};
