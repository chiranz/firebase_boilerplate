import React from "react";
import { TextField, Button } from "@material-ui/core";
import { SignInWithGoogle } from "../firebase/firebase.utils";
import { AiOutlineGoogle } from "react-icons/ai";

export default function Login() {
  return (
    <div>
      <TextField
        id="email"
        type="text"
        name="password"
        label="Email"
        variant="outlined"
        style={{ flex: 1 }}
      />
      <br />

      <TextField
        id="password"
        type="password"
        name="password"
        label="Password"
        variant="outlined"
        style={{ flex: 1 }}
      />
      <br />

      <Button variant="contained">Sign In</Button>
      <Button variant="contained" color="primary" onClick={SignInWithGoogle}>
        <AiOutlineGoogle style={{ color: "yellow", marginRight: ".5rem" }} />{" "}
        Sign In
      </Button>
    </div>
  );
}
