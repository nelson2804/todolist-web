import { createTheme } from '@mui/material';
import { cyan, green, grey } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: green[500], 
      dark: green[600],
      light: green[300],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[400], 
      dark: cyan[500],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      default: grey[900],
      paper: grey[100],
    },
  }   
});