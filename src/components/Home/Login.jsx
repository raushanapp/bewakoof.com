import React, { useState } from "react";
import "./login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useContext } from "react"

import { AuthContext } from "../../contexts/Authcontext";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const {handleAuth}=useContext(AuthContext)
  const [mobNo, setMobNo] = useState("");

  const handleChange = (e) => {
    setMobNo(e.target.value);
    // console.log("mobile", mobNo);
  };

  const handleLogin = (mobileNumber) => {
    axios
      .post("https://bewakoof-projects.herokuapp.com/number", {
        mobileNumber: mobileNumber,
      })
      .then((res) => {
         console.log("abhi",res.data.token)
        // setUserName(res.data.user.fullName);
        if(res.data.token){
          handleAuth(true)
            navigate(-2 ,{replace:true})
        }
        navigate("/");
      })
      .catch((e) => {
        // console.log(e.message);
        navigate("/signup");
      });
  };

  return (
    <div className="Zcontainer">
      <div className="Zimg_div">
        <h1>Welcome to the world of Bewakoof!</h1>
        <img
          src="https://images.bewakoof.com/web/group-19-1617704502.png"
          alt=""
        />
      </div>
      <div className="Zlogin_div">
        <h1>Login / Sign up</h1>
        <p>for Latest trends, exciting offers and everything Bewkoof!</p>

        <div className="Zform">
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              onChange={handleChange}
              fullWidth
              label="Enter Mobile Number"
              id="fullWidth"
            />
          </Box>
          <Stack className="Zbutton" spacing={2} direction="row">
            <Button
              onClick={() => {
                // navigate('/signup');
                handleLogin(mobNo);
              }}
              sx={{
                width: "450px",
                height: "60px",
                fontFamily: "montserrat-bold, sans-serif",
                fontSize: "20px",
                padding: "6px",
                background: "#42a2a2",
                marginTop: "15px",
              }}
              variant="contained"
            >
              Continue
            </Button>
          </Stack>
        </div>

        <div>
          <Button
            variant="outlined"
            sx={{
              width: "410px",
              height: "39px",
              color: "#b8b8b8",
              border: "#b8b8b8 1px solid",
            }}
          >
            CONTINUE WITH EMAIL
          </Button>
          <div className="Zsocial_button">
            <Button
              variant=""
              sx={{
                width: "195px",
                height: "39px",
                color: "#b8b8b8",
                border: "#b8b8b8 1px solid",
              }}
            >
              GOOGLE
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "195px",
                height: "39px",
                color: "#b8b8b8",
                border: "#b8b8b8 1px solid",
              }}
            >
              FACEBOOK
            </Button>
          </div>
        </div>

        <div
          style={{
            width: "450px",
            margin: "auto",
            marginTop: "25px",
            fontSize: "12px",
            fontFamily: "montserrat-bold, sans-serif",
            lineHeight: "20px",
            color: "#808080",
          }}
        >
          <p>
            By creating an account or logging in, you agree with Bewkoof's Terms
            and Conditions and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};
