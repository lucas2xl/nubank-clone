import styled from "styled-components/native";
import { Colors } from "../../tools/colors";

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px;
  height: 70px;
`;

export const Label = styled.Text`
  color: ${Colors.black};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding-left: 16px;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
