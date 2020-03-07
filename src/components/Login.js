import React from "react";
import { TextField, Button } from "@material-ui/core";
import { SignInWithGoogle } from "../firebase/firebase.utils";

export default function Login() {
  return (
    <div>
      <TextField
        id="email"
        type="text"
        name="password"
        label="Email"
        variant="outlined"
      />
      <TextField
        id="password"
        type="password"
        name="password"
        label="Password"
        variant="outlined"
      />
      <Button>Sign In</Button>
      <Button onClick={SignInWithGoogle}>Sign In With Google</Button>
    </div>
  );
}
