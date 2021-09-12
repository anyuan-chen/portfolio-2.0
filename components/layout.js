import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
export default function Layout({children}) {
  return (
    <div className="flex flex-col items-center">
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
