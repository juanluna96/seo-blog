import React from "react";
import Layout from "../components/layout/Layout";
import SignInComponent from "../components/auth/SignInComponent";

const SignIn = () => {
  return (
    <Layout>
      <h2>Sign In Page</h2>
      <SignInComponent />
    </Layout>
  );
};

export default SignIn;
