import React from "react";
import { Wrapper, PaymentMethods } from "./styles";
import { CircleButton } from "../CircleButton";

export const PaymentMethodsHorizontal = () => {
  return (
    <Wrapper>
      <PaymentMethods horizontal showsHorizontalScrollIndicator={false}>
        <CircleButton type={"pix"} />
        <CircleButton type={"pay"} />
        <CircleButton type={"transfer"} />
        <CircleButton type={"deposit"} />
        <CircleButton type={"takeALoan"} />
        <CircleButton type={"cellPhoneRecharge"} />
        <CircleButton type={"demand"} />
        <CircleButton type={"donation"} />
        <CircleButton type={"findShortcuts"} />
      </PaymentMethods>
    </Wrapper>
  );
};
