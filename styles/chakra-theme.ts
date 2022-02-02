import { extendTheme } from "@chakra-ui/react";

export const CustomTheme = extendTheme({
  colors: {
    transparent: "transparent",
    black: "#1A1A40",
    white: "#F3F3F3",
    gray: {
      300: "#7C7C94",
      500: "#484870",
      700: "#272754",
    },
    primary: {
      300: "#2F009C",
      500: "#270082",
      700: "#1F0066",
    },
    secondary: {
      300: "#8A0CD9",
      500: "#7A0BC0",
      700: "#6909A6",
    },
    accent: {
      300: "#FF40AF",
      500: "#FA58B6",
      700: "#E04FA3",
    },
  },
  fonts: {
    body: "Oswald, system-ui, sans-serif",
    heading: "Merriweather-BoldItalic, serif",
  },
  fontSizes: {
    "md": "1rem",
    "lg": "1.125rem",
    "xl": "1.5rem",
    "2xl": "2rem",
    "3xl": "3rem",
    "4xl": "4.5rem"
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
      },
    }
  },
  components: {
    Heading: {
      baseStyle: {
        textColor: "black",
        fontSize: "3xl"
      }
    }
  }
});
