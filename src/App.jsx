import { BrowserRouter } from 'react-router-dom';
import AppThemeProvider from './contexts/ThemeContexts.jsx';
import { AppRoutes } from './routes/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <AppRoutes />
      </AppThemeProvider>
    </BrowserRouter> 
  );
}

export default App;
