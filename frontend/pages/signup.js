import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import SignUpComponent from "../components/auth/SignUpComponent";

const SignUp = () => {
  return (
    <Layout>
      <SignUpComponent />
    </Layout>
  );
};

export default SignUp;
