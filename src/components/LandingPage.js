import React from "react";
import auth from "../auth/auth";

const LandingPage = props => {
  return (
    <div>
      <h1>Landing Page</h1>
      <h2>Please Login to access the app</h2>
      <button
        onClick={() => {
          auth.login(() => {
            props.history.push("/app");
          });
        }}
      >
        Login
      </button>
    </div>
  );
};
export default LandingPage;