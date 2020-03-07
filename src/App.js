import React, { useEffect, useState } from "react";
import "./app.style.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [email, setEmail] = useState(null);
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth.email) {
        setEmail(userAuth.email);
      }
    });
    return () => unSubscribe();
  }, []);
  return (
    <Router>
      <div>
        <h1>Navbar</h1>
        <div>
          {email ? (
            <h6 onClick={() => auth.signOut()}>Logout</h6>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
      <Switch>
        <Route exact path="/" render={() => <h1>Homepage</h1>} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
