import styled from "styled-components/native";
import { Colors } from "../../tools/colors";

export const Wrapper = styled.TouchableOpacity`
  height: 90px;
  width: 300px;
  justify-content: center;
  border-radius: 15px;
  background-color: ${Colors.gray.light};
  margin: 16px;
  padding: 16px;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: ${Colors.black};
`;

export const Bold = styled(Text)`
  font-weight: 400;
  color: ${Colors.purple.light};
`;
