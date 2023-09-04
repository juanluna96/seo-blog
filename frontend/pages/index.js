import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <Link href="/signin">Sign In</Link>
      <Link href="/signup">Sign Up</Link>
    </Layout>
  );
};

export default Index;
