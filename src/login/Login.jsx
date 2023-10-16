import React, { useState } from 'react';
import { Box, Button, TextField, useTheme } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Brightness4Icon from '@mui/icons-material/Brightness4';
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
    <Box
      width="100vw"
      height="100vh"
      
      display="flex"
      bgcolor="#009688"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="400px"
        height="500px"
        borderRadius={7}
        bgcolor={theme.palette.background.default}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <PersonIcon
          sx={{
            fontSize: 200,
            color: "#009688",
          }}
        />
        <Box
          width="80%"
          padding={2}
          display="flex" 
          flexDirection="column"
          gap={2}
          >
          <TextField
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Entra
          </Button>
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            {theme.palette.mode === 'dark' ? (
              <Brightness4Icon  /> 
            ) : (
              <NightsStayIcon />
            )}
          </Button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </Box>
      </Box>
    </Box>
  );
}

export default Login;