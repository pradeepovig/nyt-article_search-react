import { ThemeProvider } from "styled-components";
import {AppProps} from "../../core/interfaces/app.interface";

const theme = {
  colors: {
    primary: '#fff',
    secondary: '#000',
    grayLight: '#e2e2e2',
    grayDark: '#333'
  },
  fontSizes: {
    normal: "1em",
    x2: "2em",
    x3: "3em"
  }
};

const Theme = (props: AppProps) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Theme;
