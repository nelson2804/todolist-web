import { AppThemeProvide } from './contexts/ThemeContexts';
import Login from './login/Login';

function App() {
  return (
    <AppThemeProvide>
      <Login />
    </AppThemeProvide>   
  );
}

export default App;
