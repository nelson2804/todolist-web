
import { ThemeProvider} from '@mui/material';
import './App.css';
import Login from './login/Login';
import { lightTheme } from './common/theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
