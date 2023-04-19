import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./themes/appTheme";

import ResponsiveDatePickers from "./components/DatePickerComponent/DatePicker";

function App() {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={appTheme}>
        <div className="App">
          this is the App
          <ResponsiveDatePickers />{" "}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
