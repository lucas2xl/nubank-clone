import React from "react";
import { CardMoreInfo } from "../CardMoreInfo";
import { Line, Wrapper, Title, MoreInfo } from "./styles";

export const MoreInfoHorizontal = () => {
  return (
    <>
      <Line />
      <Wrapper>
        <Title>Descubra mais</Title>
        <MoreInfo horizontal showsHorizontalScrollIndicator={false}>
          <CardMoreInfo
            isNew
            title={"WhatsApp"}
            text={
              "Pagamentos seguros, rápidos e sem tarífa. A experiência Nubank sem enm sair da conversa."
            }
            buttonText={"Quero conhecer"}
            buttonSize={'140px'}
          />
          <CardMoreInfo
            title={"Indique seus amigos"}
            text={
              "Mostre aos seus amigos como é facil ter uma vida sem burocracia."
            }
            buttonText={"Indicar amigos"}
            buttonSize={'130px'}
          />
          <CardMoreInfo
            title={"Gostando do aplicativo?"}
            text={"Avalie o app do Nubank na App Store."}
            buttonText={"Avaliar aplicativo"}
            buttonSize={'150px'}
          />
        </MoreInfo>
      </Wrapper>
    </>
  );
};
