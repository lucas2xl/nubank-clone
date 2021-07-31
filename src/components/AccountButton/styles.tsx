import styled from "styled-components/native";
import { Colors } from "../../tools/colors";


export const Wrapper = styled.TouchableOpacity`
  padding: 32px 16px 16px 16px;
`;

export const WrapperRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: ${Colors.black};
  font-size: 20px;
  font-weight: 600;
`;

export const AccountValue = styled.Text`
  color: ${Colors.black};
  font-size: 24px;
  font-weight: 600;
`;

export const NoAccountValue = styled.View`
  background-color: ${Colors.gray.light};
  width: 250px;
  height: 30px;
`;
