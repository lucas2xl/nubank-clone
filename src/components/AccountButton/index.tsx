import React from "react";
import { Wrapper, WrapperRow, Title, AccountValue, NoAccountValue } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../tools/colors";

interface IAccountButtonProps {
  title: string;
  accountValue: string;
  isVisible: boolean;
}
export const AccountButton = ({
  title,
  accountValue,
  isVisible,
}: IAccountButtonProps) => {
  return (
    <Wrapper activeOpacity={0.4}>
      <WrapperRow>
        <Title>{title}</Title>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color={Colors.gray.dark}
        />
      </WrapperRow>
      {isVisible ? (
        <AccountValue>R$ {accountValue}</AccountValue>
      ) : (
        <NoAccountValue />
      )}
    </Wrapper>
  );
};
