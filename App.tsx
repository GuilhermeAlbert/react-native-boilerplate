import { StatusBar, StatusBarStyle } from "expo-status-bar";
import React from "react";
import { ColorSchemeName, Text, useColorScheme, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { AppContainer, AppTitle } from "./src/resources/assets/styles";
import themes from "./src/resources/themes";
import { AppTheme } from "./src/types/theme";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_300Light,
  Roboto_100Thin,
} from "@expo-google-fonts/roboto";

export default function App() {
  const deviceTheme: ColorSchemeName = useColorScheme();
  let theme: AppTheme = themes["dark"];
  let statusBarStyle: StatusBarStyle = "dark";

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_300Light,
    Roboto_100Thin,
  });

  if (deviceTheme) {
    theme = themes[deviceTheme];
    statusBarStyle = deviceTheme;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <AppTitle>React Native Boilerplate</AppTitle>

          <StatusBar style={statusBarStyle === "dark" ? "light" : "dark"} />
        </AppContainer>
      </ThemeProvider>
    );
  }
}
