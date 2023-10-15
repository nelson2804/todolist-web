
import AppThemeProvider from './contexts/ThemeContexts.jsx';
import Login from './login/Login.jsx';

function App() {
  return (
     <AppThemeProvider>
      <Login />
     </AppThemeProvider>
  );
}

export default App;
