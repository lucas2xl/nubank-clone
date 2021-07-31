import React from "react";
import {
  Wrapper,
  WrapperIcons,
  UserIcon,
  WrapperOptions,
  UserName,
} from "./styles";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../tools/colors";

interface IHeaderProps {
  name: string;
  onPressUserSettings: () => void;
  setVisible: (props: boolean) => void;
  isVisible: boolean;
}

export const Header = ({
  name,
  onPressUserSettings,
  isVisible,
  setVisible,
}: IHeaderProps) => {
  return (
    <Wrapper>
      <WrapperIcons>
        <UserIcon activeOpacity={0.4} onPress={onPressUserSettings}>
          <AntDesign name="user" size={24} color={Colors.white} />
        </UserIcon>
        <WrapperOptions>
          <MaterialCommunityIcons
            name={isVisible ? "eye-outline" : "eye-off-outline"}
            size={24}
            color={Colors.white}
            onPress={() => setVisible(!isVisible)}
          />
          <AntDesign name="questioncircleo" size={20} color={Colors.white} />
          <MaterialCommunityIcons
            name="email-plus-outline"
            size={24}
            color={Colors.white}
          />
        </WrapperOptions>
      </WrapperIcons>
      <UserName>Olá, {name}</UserName>
    </Wrapper>
  );
};
