import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const SignIn = () => {
  return (
    <Layout>
      <h2>Sign In Page</h2>
      <Link href="/">Home</Link>
    </Layout>
  );
};

export default SignIn;
