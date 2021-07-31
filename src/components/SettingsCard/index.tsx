import React from "react";
import { Wrapper, Label, Container } from "./styles";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  EvilIcons,
  AntDesign,
  Octicons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { Colors } from "../../tools/colors";
import { Line } from "../Investment/styles";

interface IPrimaryButtonProps {
  type:
    | "help"
    | "myData"
    | "configureApp"
    | "configurePixKeys"
    | "requestPJAccount"
    | "notifications"
    | "configureAccount"
    | "configureCard"
    | "about";
}
export const SettingsCard = ({ type }: IPrimaryButtonProps) => {
  let icon: any = "";
  let label: string = "";

  switch (type) {
    case "help":
      icon = <EvilIcons name="question" size={24} color={Colors.black} />;
      label = "Me ajuda";
      break;
    case "myData":
      icon = <AntDesign name="user" size={24} color={Colors.black} />;
      label = "Meus dados";
      break;
    case "configureApp":
      icon = <Octicons name="settings" size={24} color={Colors.black} />;
      label = "Configurar app";
      break;

    case "configurePixKeys":
      icon = (
        <MaterialCommunityIcons
          name="cube-send"
          size={24}
          color={Colors.black}
        />
      );
      label = "Configurar cahves pix";
      break;

    case "requestPJAccount":
      icon = <Entypo name="shop" size={24} color={Colors.black} />;
      label = "Pedir conta PJ";
      break;

    case "notifications":
      icon = (
        <Ionicons name="notifications-outline" size={24} color={Colors.black} />
      );
      label = "Notificações";
      break;
    case "configureAccount":
      icon = (
        <MaterialCommunityIcons
          name="credit-card-multiple-outline"
          size={24}
          color={Colors.black}
        />
      );
      label = "Configurar conta";
      break;

    case "configureCard":
      icon = <Feather name="smartphone" size={24} color={Colors.black} />;
      label = "Configurar cartao";
      break;

    case "about":
      icon = (
        <Ionicons name="md-newspaper-outline" size={24} color={Colors.black} />
      );
      label = "Sobre";
      break;
    default:
      break;
  }
  return (
    <>
      <Wrapper activeOpacity={0.4}>
        <Container>
        {icon}
        <Label>{label}</Label>

        </Container>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color={Colors.gray.dark}
        />
      </Wrapper>
      <Line />
    </>
  );
};
