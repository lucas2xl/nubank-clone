import React from "react";
import { Wrapper, InfoMethods } from "./styles";
import { CardInfo } from "../CardInfo";

export const InfoMethodsHorizontal = () => {
  return (
    <Wrapper>
      <InfoMethods horizontal showsHorizontalScrollIndicator={false}>
        <CardInfo
          text={"Você tem R$ 25.000,00 disponíveis para"}
          bold={"empréstimo."}
        />
        <CardInfo
          text={"Conquiste planos futuros: conheça as opções para"}
          bold={"guardar dinheiro."}
        />
      </InfoMethods>
    </Wrapper>
  );
};
