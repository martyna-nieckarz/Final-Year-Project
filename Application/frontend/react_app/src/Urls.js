import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import PasswordUpdate from "./components/PasswordUpdate";
import Analysis from "./components/Analysis";
import Learn from "./components/Learn";
import Profile from "./components/Profile";
import Details from "./components/Details";
import Results from "./components/Results";

// A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.
function PrivateRoute({ isAuthenticated, children, ...rest}) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
        isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

function Urls(props) {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" ><Home {...props}/></Route>
                    <Route exact path="/login/"> <Login {...props} /></Route>
                    <Route exact path="/register/"> <Register {...props} /></Route>
                    <PrivateRoute exact path="/profile/update_password/" isAuthenticated={props.isAuthenticated}><PasswordUpdate {...props}/></PrivateRoute>
                    <PrivateRoute exact path="/profile/details/" isAuthenticated={props.isAuthenticated}><Details {...props}/></PrivateRoute>
                    <PrivateRoute exact path="/profile/results/" isAuthenticated={props.isAuthenticated}><Results {...props}/></PrivateRoute>
                    <PrivateRoute exact path="/profile/" isAuthenticated={props.isAuthenticated}><Profile {...props}/></PrivateRoute>
                    <PrivateRoute exact path="/analysis/" isAuthenticated={props.isAuthenticated}><Analysis {...props}/></PrivateRoute>
                    <PrivateRoute exact path="/learn/" isAuthenticated={props.isAuthenticated}><Learn {...props}/></PrivateRoute>
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default Urls;
