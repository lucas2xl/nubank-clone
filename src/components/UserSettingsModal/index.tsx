import React from "react";
import { Modal } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import {
  Wrapper,
  WrapperModal,
  Header,
  WrapperRow,
  UserNameText,
  UserAccountNumber,
  UserIcon,
  BankText,
  ScrollView,
} from "./styles";
import { Colors } from "../../tools/colors";
import { SettingsCard } from "../SettingsCard";
import { Button } from "../Button";

interface IUserSettingsModalProps {
  isShowModal: boolean;
  setShowModal: (props: boolean) => void;
  name: string;
  accountNumber: string;
}
export const UserSettingsModal = ({
  isShowModal,
  setShowModal,
  name,
  accountNumber,
}: IUserSettingsModalProps) => {
  return (
    <Wrapper>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShowModal}
        // onRequestClose={() => {
        //   setModalVisible(!isShowModal);
        // }}
      >
        <WrapperModal>
          <Header>
            <EvilIcons
              name="close"
              size={32}
              color={Colors.black}
              onPress={() => setShowModal(false)}
            />
            <WrapperRow>
              <UserIcon>
                <AntDesign name="user" size={24} color={Colors.white} />
              </UserIcon>
              <UserNameText>{name}</UserNameText>
            </WrapperRow>
            <UserAccountNumber>{accountNumber}</UserAccountNumber>
            <BankText>Banco 0260•Nu Pagamentos S.A.</BankText>
          </Header>
          <ScrollView>
            <SettingsCard type={"help"} />
            <SettingsCard type={"myData"} />
            <SettingsCard type={"configureApp"} />
            <SettingsCard type={"configurePixKeys"} />
            <SettingsCard type={"requestPJAccount"} />
            <SettingsCard type={"notifications"} />
            <SettingsCard type={"configureAccount"} />
            <SettingsCard type={"configureCard"} />
            <SettingsCard type={"about"} />
            <Button
              color={Colors.gray.light}
              titleColor={Colors.black}
              title={"Sair do aplicativo"}
              size={"90%"}
              alignSelf
            />
          </ScrollView>
        </WrapperModal>
      </Modal>
    </Wrapper>
  );
};
