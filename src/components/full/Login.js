import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleSubmit = () => {
    if (!user.username || !user.password) {
      alert("Please Fill the values");
    } else if (user.password.length <= 8) {
      alert("password should be greater than 8");
    } else if (/^[0-9-!@#%^&*()_+ ,_]*$/.test(user.username) == true) {
      alert("username have only alphabets");
    } else if (/^[ ]*$/.test(user.password) == true) {
      alert("no space is valid");
    } else {
      sessionStorage.setItem("user", JSON.stringify(user));
      history.push("/secured");
    }
  };

  //   if(/^[a-zA-Z0-9- ,_]*$/.test(str) == false){
  //     //error message
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   padding: "50px",
          marginTop: "25px",
          //   backgroundColor: "#F0F8FF",
        }}
      >
        <Avatar sx={{ mt: 5, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="UserName"
            name="username"
            value={user.username}
            autoComplete="username"
            autoFocus
            onChange={handleChange}
            helperText="{only alphabets and no special char, symbol,
and space}"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            value={user.password}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            helperText={
              !user.password ? (
                <span style={{ color: "red" }}>
                  {"{8 char only and to be alphanumeric and no space}"}
                </span>
              ) : (
                ""
              )
            }
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
        </Box>
      </Box>
    </Container>
  );
};
export default Login;
