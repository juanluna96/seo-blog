import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import SignUpComponent from "../components/auth/SignUpComponent";

const SignUp = () => {
  return (
    <Layout>
      <h2 className="text-center mb-4">SignUp Page</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SignUpComponent />
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
