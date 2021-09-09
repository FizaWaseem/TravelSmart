import { Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/utils/theme/theme";
import Routes from "./routes";
import { createStore } from 'redux'
import rootReducer from './Redux/reducer/rootReducer'
import { Provider } from 'react-redux'
const store = createStore(rootReducer)
function App() {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
    </Provider>
  );
}

export default App;
