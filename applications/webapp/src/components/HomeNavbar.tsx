// Navbar.tsx
import React from "react";
import {
  Stack,
  Avatar,
  AppBar,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const HomeNavbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffe",
        color: "black",
        marginTop: -1,
        marginLeft: -1,
      }}
      elevation={3}
    >
      <Toolbar>
        <Link to="/">
          <Avatar
            alt="Logo"
            src="/PSTS-LOGO2.png"
            sx={{ width: "auto", height: "auto", color: "inherit" }}
          />
        </Link>
        <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
        <Stack direction="row" spacing={2}>
          <Link to="/aboutus">
            <Button color="inherit">About</Button>
          </Link>
          <Link to="/login">
            <Button color="success" variant="contained">
              Login
            </Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default HomeNavbar;
