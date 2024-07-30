import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { LockOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error", error);
      setError("Invalid email or password");
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "100px" }}>
      <Box
        component="form"
        noValidate
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "black" }}>
          <LockOutlined />
        </Avatar>

        <Typography variant="h3" component="h1" gutterBottom>
          Crystal Gas
        </Typography>
        <Typography variant="h6" gutterBottom>
          Gas Management made easy
        </Typography>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography
            color="error"
            variant="body2"
            style={{ marginTop: "10px" }}
          >
            {error}
          </Typography>
        )}
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: "16px", borderRadius: "20px" }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginScreen;
