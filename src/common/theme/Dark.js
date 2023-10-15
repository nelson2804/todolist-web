import { createTheme } from '@mui/material';
import { cyan, grey, orange } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: orange[500], 
      dark: orange[600],
      light: orange[300],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[400], 
      dark: cyan[500],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      default: grey[800],
      paper: grey[900],
    },
  }   
});