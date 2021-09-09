import Head from "next/head";
import Layout from "../components/layout.js";
import Navbar from "../components/navbar.js";
export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar></Navbar>
      <div className="flex flex-row  pt-5">
        <div className="flex justify-center flex-col w-page pt-4">
          <h1>
            I'm an engineering student, currently focused on problem-solving
            skills from Toronto, Ontario.{" "}
          </h1>
          <p className="pt-6">
            In my free time, I enjoy cooking, following esports, and cycling.
          </p>
        </div>
      </div>
    </div>
    
  );
}
