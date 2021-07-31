import styled from "styled-components/native";
import { Colors } from "../../tools/colors";

export const Wrapper = styled.TouchableOpacity`
  height: 190px;
  width: 300px;
  justify-content: space-around;
  border-radius: 15px;
  background-color: ${Colors.gray.light};
  margin: 16px 0 16px 16px;
  padding: 16px;
`;
export const WrapperRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperNew = styled.View`
  background-color: ${Colors.purple.dark};
  padding: 4px;
  margin-left: 8px;
  border-radius: 5px;
`;
export const TextNew = styled.Text`
  color: ${Colors.white};
  font-weight: bold;
`;

export const TextWrapper = styled.View`
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${Colors.black};
  padding-bottom: 8px;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: ${Colors.black};
`;
