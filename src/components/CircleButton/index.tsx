import React from "react";
import { Wrapper, Circle, Label } from "./styles";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  EvilIcons,
} from "@expo/vector-icons";
import { Colors } from "../../tools/colors";

interface IPrimaryButtonProps {
  type:
    | "pix"
    | "pay"
    | "transfer"
    | "deposit"
    | "takeALoan"
    | "cellPhoneRecharge"
    | "demand"
    | "donation"
    | "findShortcuts";
}
export const CircleButton = ({ type }: IPrimaryButtonProps) => {
  let icon: any = "";
  let label: string = "";

  switch (type) {
    case "pix":
      icon = (
        <MaterialCommunityIcons
          name="cube-send"
          size={24}
          color={Colors.black}
        />
      );
      label = "Pix";
      break;
    case "pay":
      icon = (
        <MaterialCommunityIcons name="barcode" size={24} color={Colors.black} />
      );
      label = "Pagar";
      break;
    case "transfer":
      icon = (
        <MaterialCommunityIcons
          name="credit-card-minus-outline"
          size={24}
          color={Colors.black}
        />
      );
      label = "Transferir";
      break;

    case "deposit":
      icon = (
        <MaterialCommunityIcons
          name="credit-card-plus-outline"
          size={24}
          color={Colors.black}
        />
      );
      label = "Depositar";
      break;

    case "takeALoan":
      icon = (
        <FontAwesome5 name="hand-holding-usd" size={24} color={Colors.black} />
      );
      label = "Pegar emprestado";
      break;

    case "cellPhoneRecharge":
      icon = (
        <MaterialCommunityIcons
          name="cellphone"
          size={24}
          color={Colors.black}
        />
      );
      label = "Recarga de celular";
      break;
    case "demand":
      icon = (
        <FontAwesome5 name="comment-dollar" size={24} color={Colors.black} />
      );
      label = "Cobrar";
      break;

    case "donation":
      icon = <Entypo name="heart-outlined" size={24} color={Colors.black} />;
      label = "Doação";
      break;

    case "findShortcuts":
      icon = <EvilIcons name="question" size={28} color={Colors.black} />;
      label = "Encontrar atalhos";
      break;
    default:
      break;
  }
  return (
    <Wrapper activeOpacity={0.4}>
      <Circle>{icon}</Circle>

      <Label>{label}</Label>
    </Wrapper>
  );
};
