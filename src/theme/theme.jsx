import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#1976D2";
const arcWhiteBlue = "#2196F3";
const arcOrange = "#FFC107";


export default createMuiTheme({
  palette: {
    common: {
      arcBlue: arcBlue,
      arcOrange: arcOrange,
      arcWhiteBlue: arcWhiteBlue,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
});
