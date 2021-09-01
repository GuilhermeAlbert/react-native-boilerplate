import { AppTheme } from "../../../types/theme";

const light: AppTheme = {
  title: "light",

  colors: {
    // Primary color for your app, usually your brand color.
    primary: "#00695C",

    // Secondary color for your app which complements the primary color.
    accent: "#00BFA5",

    // Background color for pages, such as lists.
    background: "#E0F2F1",

    // Background color for elements containing content, such as cards.
    surface: "#00695C",

    // Text color for content.
    text: "#004D40",

    // Color for disabled elements.
    disabled: "#B2DFDB",

    // Color for placeholder text, such as input placeholder.
    placeholder: "#00796B",

    // Color for backdrops of various components such as modals.
    backdrop: "#00897B",

    // Background color for snackbars
    onSurface: "#009688",

    // Background color for badges
    notification: "#26A69A",
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

export default light;
