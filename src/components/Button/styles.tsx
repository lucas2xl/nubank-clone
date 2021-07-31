import styled from "styled-components/native";
import { Colors } from "../../tools/colors";

interface IButtonProps {
  size: string;
  color?: string;
  alignSelf?: boolean;
}
interface ITitleProps {
  color?: string;
}
export const Wrapper = styled.TouchableOpacity`
  width: ${(props: IButtonProps) => `${props.size}`};
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${(props: IButtonProps) =>
    props.color ? props.color : Colors.purple.dark};
  padding: 16px 14px;
  margin-top: 16px;
  align-self: ${(props: IButtonProps) => (props.alignSelf ? "center" : "auto")};
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props: ITitleProps) => (props.color ? props.color : Colors.white)};
`;
