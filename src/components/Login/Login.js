import React from "react";
import { TextField, Button, Link } from "@mui/material";
import "../Login/login.css";

const Login = () => {
  return (
    <section>
      <div className="g-login">
        <div
          style={{
            margin: "20px 0px 0px 70px",
            color: "blue",
            fontSize: "1.8rem",
          }}
        >
          <p style={{ fontSize: "1.8rem" }}>Station Operator Login</p>
        </div>
        <div style={{ margin: "30px 0px 30px 70px" }}>
          <TextField
            id="outlined-basic"
            label="Username"
            style={{ width: "280px" }}
            variant="outlined"
          />
        </div>
        <div style={{ margin: "0px 0px  30px 70px " }}>
          <TextField
            id="outlined-basic"
            label="Password"
            style={{ width: "280px" }}
            variant="outlined"
          />
        </div>
        <Button variant="contained" style={{ margin: "10px 0px 10px 70px" }}>
          Login
        </Button>
        <Button variant="contained" style={{ margin: "10px 0px 10px 70px" }}>
          Cancel
        </Button>
      </div>
    </section>
  );
};

export default Login;
