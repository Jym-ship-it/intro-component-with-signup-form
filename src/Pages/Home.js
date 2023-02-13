import {
  Button,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Background from "../Assets/Images/bg-intro-desktop.png";
import ErrorIcon from "@mui/icons-material/Error";
export default function Home() {
  const style = {
    mainCon: {
      backgroundImage: `url(${Background})`,
      width: "100vw",
      height: "100vh",
      backgroundSize: "cover",
      backgroundColor: "hsl(0, 100%, 74%) ",
      display: "flex",
    },
    boxCenterCon: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "75px",
    },
    title: {
      width: "450px",
      fontSize: "48px",
      fontFamily: "Poppins",
      fontWeight: "700",
      color: "#FFFFFF",
    },
    subInfo: {
      width: "550px",
      fontSize: "16px",
      fontFamily: "Poppins",
      fontWeight: "400",
      color: "#FFFFFF",
      marginTop: "20px",
      marginLeft: "100px",
    },
    promoPaper: {
      backgroundColor: "hsl(248, 32%, 49%)",
      borderRadius: "8px",
    },
    promo: {
      padding: "18px 128.5px",
      color: "#FFFFFF",
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "16px",
      display: "flex",
    },
    span: {
      marginLeft: "5px",
      fontWeight: "400",
      color: "hsl(246, 25%, 77%)",
      fontFamily: "Poppins",
    },
    textFieldsPaper: {
      padding: "35px 35px",
      marginTop: "20px",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
    },
    textField: {
      width: "30vw",
      marginBottom: "25px",
    },
    claimButton: {
      marginTop: "25px",
      padding: "15px",
      backgroundColor: "hsl(154, 59%, 51%)",
      color: "#FFFFFF",
      "&:hover": {
        backgroundColor: "#75dcaf",
      },
    },
    termsAndServices: {
      display: "flex",
      fontSize: "12px",
      color: "hsl(246, 25%, 77%)",
      fontFamily: "Poppins",
      marginTop: "25px",
      justifyContent: "center",
    },
    spanForTermsAndServices: {
      fontSize: "12px",
      color: "hsl(0, 100%, 74%)",
      fontFamily: "Poppins",
      fontWeight: "500",
      marginLeft: "5px",
      textDecoration: "none",
    },
    error: {
      textAlign: "right",
      fontSize: "12px",
      fontFamily: "Poppins",
      color: "red",
      fontStyle: "italic",
    },
  };
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [FnameError, setFnameError] = useState("");
  const [LnameError, setLnameError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const [ValidEmail, setValidEmail] = useState(true);
  const handleFname = (e) => {
    setFname(e.target.value);
    setFnameError(false);
  };
  const handleLname = (e) => {
    setLname(e.target.value);
    setLnameError(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
    setValidEmail(true)
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };
  const handleSubmit = () => {
    if (Fname === "") {
      setFnameError(true);
    }
    if (Lname === "") {
      setLnameError(true);
    }
    if (Email === "") {
      setEmailError(true);
    } else if (regex.test(Email) === false) {
      setValidEmail(false);
      setEmail("");
    }
    if (Password === "") {
      setPasswordError(true);
    }
  };
  return (
    <Box sx={style.mainCon}>
      <Box sx={style.boxCenterCon}>
        <Typography sx={style.title}>
          Learn to code by watching others
        </Typography>
        <Typography sx={style.subInfo}>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </Typography>
      </Box>
      <Box sx={style.boxCenterCon}>
        <Paper sx={style.promoPaper}>
          <Typography sx={style.promo}>
            Try it free
            <Typography sx={style.span}>then $20/mo. thereafter</Typography>
          </Typography>
        </Paper>
        <Paper sx={style.textFieldsPaper}>
          <TextField
            sx={style.textField}
            placeholder="First Name"
            value={Fname}
            error={FnameError ? true : false}
            onChange={handleFname}
            helperText={
              FnameError ? (
                <Typography sx={style.error}>
                  First name cannot be empty
                </Typography>
              ) : (
                ""
              )
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {FnameError ? <ErrorIcon style={{ color: "red" }} /> : ""}
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            sx={style.textField}
            placeholder="Last Name"
            value={Lname}
            onChange={handleLname}
            error={LnameError ? true : false}
            helperText={
              LnameError ? (
                <Typography sx={style.error}>
                  Last name cannot be empty
                </Typography>
              ) : (
                ""
              )
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {LnameError ? <ErrorIcon style={{ color: "red" }} /> : ""}
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            sx={style.textField}
            type="email"
            placeholder={ValidEmail ? "Email" : "email@example.com"}
            value={Email}
            onChange={handleEmail}
            error={EmailError ? true : ValidEmail ? false : true}
            helperText={
              EmailError ? (
                <Typography sx={style.error}>Email cannot be empty</Typography>
              ) : ValidEmail ? (
                ""
              ) : (
                <Typography sx={style.error}>
                  Looks like this is not an email
                </Typography>
              )
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {EmailError ? <ErrorIcon style={{ color: "red" }} /> : ValidEmail ? "": <ErrorIcon style={{ color: "red" }} />}
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            sx={style.textField}
            type="password"
            placeholder="Password"
            value={Password}
            onChange={handlePassword}
            error={PasswordError ? true : false}
            style={{ marginBottom: "0px" }}
            helperText={
              PasswordError ? (
                <Typography sx={style.error}>
                  Password cannot be empty
                </Typography>
              ) : (
                ""
              )
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {PasswordError ? <ErrorIcon style={{ color: "red" }} /> : ""}
                </InputAdornment>
              ),
            }}
            inputProps={{ maxLength: 16 }}
          ></TextField>
          <Button sx={style.claimButton} onClick={handleSubmit}>
            Claim Your Free Trial
          </Button>
          <Typography sx={style.termsAndServices}>
            By clicking the button, you are agreeing to our
            <Link href="#" sx={style.spanForTermsAndServices}>
              Terms and Services
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
