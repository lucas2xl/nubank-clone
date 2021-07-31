import styled from "styled-components/native";
import { Colors } from "../../tools/colors";

export const Line = styled.View`
  height: 2px;
  background-color: ${Colors.gray.light};
`;

export const Wrapper = styled.View`
  margin: 8px 0;
`;

export const MoreInfo = styled.ScrollView``;

export const Title = styled.Text`
  color: ${Colors.black};
  font-size: 18px;
  font-weight: 500;
  padding: 8px 0 16px 16px;
`;
