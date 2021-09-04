import { Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/utils/theme/theme";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
