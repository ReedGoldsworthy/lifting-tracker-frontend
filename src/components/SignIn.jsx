import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
import axios from 'axios';

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    try {
      const response = await axios.post('http://localhost:3001/api/login/email', {
        email,
        password,
      });

      // Redirect to the specified URL
        window.location.href = `http://localhost:5173/#access_token=${response.data}`; // for render

      

    } catch (error) {
      console.error('Invalid Login Credentials:', error);
      alert('Invalid Login Credentials');
    }
  };

  const handleRedirect = () => {
    // Redirect to the specified URL
    window.location.href = 'http://localhost:3001/api/login/google'; // for render
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
      position: 'relative', // For positioning child elements
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
      Sign in
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
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>

      <Button
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
        onClick={handleRedirect}
      >
        Sign In With Google
      </Button>
      <Grid container>
        <Grid item xs>
        <Link
            component={RouterLink} // Use RouterLink for navigation
            to="/recover-password"
            variant="body2"
          >
            {"Forgot password?"}
          </Link>
        </Grid>
        <Grid item>
          <Link
            component={RouterLink} // Use RouterLink for navigation
            to="/sign-up"
            variant="body2"
          >
            {"Don't have an account? Sign Up"}
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
