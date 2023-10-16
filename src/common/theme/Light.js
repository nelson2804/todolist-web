import { createTheme } from '@mui/material';
import { cyan, teal } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: teal[700],
      dark: teal[800],
      light: teal[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: cyan[100],
      default: cyan[50],
    }
  }
});