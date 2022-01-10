import { ThemeProvider } from "styled-components";
import {AppProps} from "../../core/interfaces/app.interface";

const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D"
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = (props: AppProps) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Theme;
