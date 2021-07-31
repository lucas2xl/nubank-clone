import styled from "styled-components/native";
import { Colors } from "../../tools/colors";

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 60px;
  background-color: ${Colors.gray.light};
  border-radius: 12px;
  margin: 0 16px;
  padding-left: 16px;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-weight: 700;
  padding-left: 16px;
`;
