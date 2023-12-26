import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  makeStyles,
  TextField,
  Button,
  Container,
  Typography,
} from "@mui/material";

import HomeNavbar from "../components/HomeNavbar";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`Login with email: ${email} and password: ${password}`);
  };

  return (
    <>
      <HomeNavbar />
      <Container component="main" maxWidth="xs">
        <Paper
          sx={{
            padding: "25px",
            width: "auto",
            height: "60vh",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Typography variant="body2" align="right" sx={{ marginTop: 1.5 }}>
              <Link to="/forgot-password">Forgot Password?</Link>
            </Typography>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              sx={{ marginTop: 4 }}
            >
              Login
            </Button>
            <Typography variant="body2" align="center" sx={{ padding: 1 }}>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </Typography>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default LoginPage;
