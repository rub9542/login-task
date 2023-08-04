import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import errIcon from "../../assets/redicon.svg";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
export default function InputFields() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleInputChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
  };
  useEffect(() => {
    if (isSubmit) {
      setTimeout(() => setIsSubmit(false), 5000);
    }
  }, [isSubmit]);
  console.log("is valid", isValid);

  return (
    <div className="input-page">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleInputChange}
          id="standard-basic "
          label="Email"
          variant="standard"
          value={email}
        />
        {(!isValid || isSubmit) && (
          <div className="err-msg">
            <img src={errIcon} />
            <div>
              {email !== ""
                ? "Please enter a valid email Id"
                : "The email field is required"}{" "}
            </div>
          </div>
        )}
        <TextField
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          id="standard-password-input "
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        {isSubmit && (
          <div className="err-msg">
            <img src={errIcon} />
            <div>The Password field is required</div>
          </div>
        )}
      </Box>
      <button onClick={() => setIsSubmit(true)} className="sign-btn pointer">
        Sign In
      </button>
    </div>
  );
}
