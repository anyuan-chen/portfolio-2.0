import React from "react";
import Navbar from "./navbar";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center">
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  );
}
