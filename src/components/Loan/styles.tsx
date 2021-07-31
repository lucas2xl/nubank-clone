import styled from "styled-components/native";
import { Colors } from "../../tools/colors";

export const Line = styled.View`
  height: 2px;
  background-color: ${Colors.gray.light};
`;

export const Wrapper = styled.TouchableOpacity`
  padding: 16px; ;
`;

export const WrapperRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
`;

export const Title = styled.Text`
  color: ${Colors.black};
  font-size: 20px;
  font-weight: 600;
`;

export const InvoiceText = styled.Text`
  color: ${Colors.gray.dark};
  font-size: 12px;
  font-weight: 500;
  padding-bottom: 8px;
`;

export const AvailableLimit = styled(InvoiceText)`
  font-size: 12px;
`;
