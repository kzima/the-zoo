import "firebase/firestore";
import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "material-ui/Button";

import logo from "./logo.svg";
import firebase from "./firebase";
import People from "./People";
import "./App.css";

class App extends Component {
  login = () => {
    const firebaseProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return firebase.auth().signInWithRedirect(firebaseProvider);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const { user } = this.props;
    console.log("user", user);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          {user && !user.isAnonymous ? (
            <People />
          ) : (
            <Button raised color="primary" onClick={this.login}>
              Login with Facebook
            </Button>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  };
};

export default connect(mapStateToProps)(App);
