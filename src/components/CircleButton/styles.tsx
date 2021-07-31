import styled from "styled-components/native";
import { Colors } from "../../tools/colors";

export const Wrapper = styled.TouchableOpacity`
  align-items: center;
  margin-left: 8px;
  width: 80px;
`;

export const Circle = styled.View`
  height: 75px;
  width: 75px;
  border-radius: 37.5px;

  background-color: ${Colors.gray.light};

  align-items: center;
  justify-content: center;

  margin-bottom: 12px;
`;

export const Label = styled.Text`
  color: ${Colors.black};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
