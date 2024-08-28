import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink for navigation

const defaultTheme = createTheme();

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await axios.post('http://localhost:3001/api/login/sign-up', {
        email: data.get('email'),
        password: data.get('password'),
      });

      // If sign-up is successful, display a success message or redirect to another page
      alert(response.data.message);
    } catch (error) {
      console.error('Sign-up failed:', error.response.data.message);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(/images/background2.png)', // Correct path for public directory
            backgroundColor: 'darkblue',
            backgroundSize: 'cover',
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

<IconButton
      component="a"
      href="https://github.com/ReedGoldsworthy"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: 'fixed', // Position relative to the viewport
        top: 16, // Adjusts the distance from the top of the viewport
        right: 16, // Adjusts the distance from the right of the viewport
        color: 'lightgrey', // Light grey color
        zIndex: 1300, // Ensures the icon is above other content
      }}
    >
      <GitHubIcon sx={{ fontSize: 40 }} />
    </IconButton>
            
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              {errorMessage && (
                <Typography color="error" variant="body2">
                  {errorMessage}
                </Typography>
              )}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    component={RouterLink} // Use RouterLink for navigation
                    to="/sign-in"
                    variant="body2"
                  >
                    {"Already have an account? Sign in"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
