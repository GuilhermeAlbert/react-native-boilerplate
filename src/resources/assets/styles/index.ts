import styled from "styled-components/native";
import { AppTheme } from "../../../types/theme";

export const AppContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props: { theme: AppTheme }) =>
    props.theme.colors.background};
`;

export const AppTitle = styled.Text`
  color: ${(props: { theme: AppTheme }) => props.theme.colors.text};
  font-family: ${(props: { theme: AppTheme }) => props.theme.fonts.regular};
  font-size: 24px;
`;
