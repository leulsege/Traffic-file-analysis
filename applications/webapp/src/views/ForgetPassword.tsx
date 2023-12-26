// ForgotPassword.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Container, Paper } from "@mui/material";
import HomeNavbar from "../components/HomeNavbar";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    console.log(`Forgot password for email: ${email}`);
  };

  return (
    <>
      <HomeNavbar />
      <Container component="main" maxWidth="xs">
        <Paper sx={{ marginTop: 5, height: "60vh", padding: 2 }}>
          <Typography component="h1" variant="h5">
            Forgot Password
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
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleForgotPassword}
              sx={{ marginTop: 2, marginBottom: 1 }}
            >
              Reset Password
            </Button>
            <Typography variant="body2" align="center">
              <Link to="/login">Remembered your password? Login</Link>
            </Typography>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default ForgotPassword;
