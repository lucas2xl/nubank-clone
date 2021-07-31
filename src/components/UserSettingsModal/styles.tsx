import styled from "styled-components/native";
import { Colors } from "../../tools/colors";

export const Wrapper = styled.View`
  flex: 1;
`;

export const WrapperModal = styled.View`
  flex: 1;
  background-color: ${Colors.white};
`;
export const Header = styled.View`
  padding: 60px 16px 16px;
  background-color: ${Colors.gray.light};
`;
export const WrapperRow = styled.View`
  flex-direction: row;
  align-items: center;

  margin: 32px 0;
`;
export const UserNameText = styled.Text`
  color: ${Colors.black};
  font-size: 16px;
  font-weight: 600;
  padding-left: 16px;
`;
export const UserAccountNumber = styled.Text`
  color: ${Colors.black};
  font-size: 14px;
  font-weight: 600;
`;

export const BankText = styled(UserAccountNumber)`
  padding-bottom: 16px;
`;
export const UserIcon = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${Colors.purple.dark};

  align-items: center;
  justify-content: center;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.white};
  margin-bottom: 40px;
`;
