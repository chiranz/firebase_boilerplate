import React from "react";
import { TextField, Button } from "@material-ui/core";
import { SignInWithGoogle } from "../firebase/firebase.utils";
import { AiOutlineGoogle } from "react-icons/ai";

export default function Register() {
  return (
    <div>
      <TextField
        id="username"
        type="text"
        name="username"
        label="Username"
        variant="outlined"
      />
      <br />
      <TextField
        id="email"
        type="text"
        name="password"
        label="Email"
        variant="outlined"
      />
      <br />

      <TextField
        id="password"
        type="password"
        name="password"
        label="Password"
        variant="outlined"
      />
      <br />

      <TextField
        id="confirm_password"
        type="password"
        name="confirm_password"
        label="Confirm Password"
        variant="outlined"
      />
      <br />

      <Button variant="contained">Sign Up</Button>
      <Button variant="contained" color="primary" onClick={SignInWithGoogle}>
        <AiOutlineGoogle style={{ color: "yellow", marginRight: ".5rem" }} />{" "}
        Register with
      </Button>
    </div>
  );
}
