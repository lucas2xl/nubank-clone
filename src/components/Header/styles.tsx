import styled from "styled-components/native";
import { Colors } from "../../tools/colors";

export const Wrapper = styled.View`
  height: 8%;
  padding: 0 16px;
  background-color: ${Colors.purple.dark};
`;

export const WrapperIcons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const UserIcon = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${Colors.purple.light};

  align-items: center;
  justify-content: center;
`;

export const WrapperOptions = styled.View`
  width: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserName = styled.Text`
  color: ${Colors.white};
  font-size: 24px;
  font-weight: 600;
`;
