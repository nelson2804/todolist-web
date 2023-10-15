import React, { useState } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useAppThemeContext } from '../contexts/ThemeContexts';

function Login() {
  const theme = useTheme();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { toggleTheme } = useAppThemeContext();

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        window.location.href = '/tasks';
      } else {
        setError('Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao efetuar login:', error);
    }
  };

  return (
    <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
      <Typography>Login</Typography>
      <form>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick={toggleTheme}>MudarCorTheme</Button>
        <Button variant='contained' color='primary' onClick={handleLogin}>Entra</Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </Box>
  );
}

export default Login;