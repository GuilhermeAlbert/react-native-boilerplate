import { AppTheme } from "../../../types/theme";

const dark: AppTheme = {
  title: "dark",

  colors: {
    // Primary color for your app, usually your brand color.
    primary: "#4DB6AC",

    // Secondary color for your app which complements the primary color.
    accent: "#26A69A",

    // Background color for pages, such as lists.
    background: "#040511",

    // Background color for elements containing content, such as cards.
    surface: "#A7FFEB",

    // Text color for content.
    text: "#E0F2F1",

    // Color for disabled elements.
    disabled: "#B2DFDB",

    // Color for placeholder text, such as input placeholder.
    placeholder: "#80CBC4",

    // Color for backdrops of various components such as modals.
    backdrop: "#00BFA5",

    // Background color for snackbars
    onSurface: "#26A69A",

    // Background color for badges
    notification: "#009688",
  },

  // Various fonts used throughout different elements.
  fonts: {
    regular: "Roboto_400Regular",
    medium: "Roboto_500Medium",
    light: "Roboto_300Light",
    thin: "Roboto_100Thin",
  },

  animation: {
    // Scale for all animations
    scale: 0,
  },
};

export default dark;
