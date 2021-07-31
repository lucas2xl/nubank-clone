import React, { useState } from "react";
import { RefreshControl } from "react-native";
import { SafeAreaViewTop, Body, BackGround } from "./styles";

import { Header } from "../../components/Header";
import { AccountButton } from "../../components/AccountButton";
import { PaymentMethodsHorizontal } from "../../components/PaymentMethods";
import { MyCardsButton } from "../../components/MyCardsButton";
import { InfoMethodsHorizontal } from "../../components/InfoMethods";
import { CreditCardButton } from "../../components/CreditCardButton";
import { LoanButton } from "../../components/Loan";
import { Colors } from "../../tools/colors";
import { InvestmentButton } from "../../components/Investment";
import { LifeInsuranceButton } from "../../components/LifeInsurance";
import { MoreInfoHorizontal } from "../../components/MoreInfo";
import { UserSettingsModal } from "../../components/UserSettingsModal";

export const Home = () => {
  const [isShowModal, setShowModal] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [isValueVisible, setValueVisible] = useState(true);

  const wait = (timeout = 2000) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback((timeout) => {
    setRefreshing(true);
    wait(timeout).then(() => setRefreshing(false));
  }, []);
  return (
    <>
      <SafeAreaViewTop />
      <UserSettingsModal
        name={"Lucas"}
        accountNumber={"Agência 0001•Conta 291234-0"}
        isShowModal={isShowModal}
        setShowModal={setShowModal}
      />
      <Body
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            style={{ backgroundColor: Colors.purple.dark }}
            tintColor={Colors.white}
            refreshing={refreshing}
            onRefresh={() => onRefresh(2000)}
          />
        }
      >
        <Header
          name={"Lucas"}
          onPressUserSettings={() => setShowModal(true)}
          isVisible={isValueVisible}
          setVisible={setValueVisible}
        />
        <BackGround>
          <AccountButton
            title={"Conta"}
            accountValue={"40.232,00"}
            isVisible={isValueVisible}
          />
          <PaymentMethodsHorizontal />
          <MyCardsButton title={"Meus cartões"} />
          <InfoMethodsHorizontal />
          <CreditCardButton
            title={"Cartão de crédito"}
            invoiceText={"Fatura atual"}
            invoiceAmountText={"R$ 0,00"}
            availableLimitText={"Limite disponivel de R$ 12.250,00"}
            isVisible={isValueVisible}
          />
          <LoanButton
            title={"Empréstimo"}
            label={"Valor disponivel de até"}
            availableLimitText={"R$ 50.000,00"}
          />
          <InvestmentButton
            title={"Investimento"}
            text={
              "A revolução roxa começou. Invista de maneira simples, sem burocracias e 100% digital."
            }
            textButton={"Conhecer"}
          />
          <LifeInsuranceButton
            title={"Seguro de vida"}
            text={"Conheça Nubank Vida: um seguro simples e que cabe no bolso."}
          />
          <MoreInfoHorizontal />
        </BackGround>
      </Body>
    </>
  );
};
