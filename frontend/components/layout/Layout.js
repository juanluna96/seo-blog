import React from "react";
import dynamic from "next/dynamic";
const HeaderNoSSR = dynamic(() => import("./Header"), {
  ssr: false,
});

const Layout = ({ children }) => {
  return (
    <>
      <HeaderNoSSR />
      {children}
      <p>Footer</p>
    </>
  );
};

export default Layout;
