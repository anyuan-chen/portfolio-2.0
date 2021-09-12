import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Navbar from "../components/navbar";

export default function Contact() {
    const sendToInbox = () => {

    }
  return (
    <div className="flex items-center flex-col">
      <Navbar></Navbar>

      <div className="w-page">
        <h1 className="pt-4 text-lg">Contact Me</h1>
        <form className="space-y-4" onClick={sendToInbox}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              className="border"
              type="text"
              placeholder="first last"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              className="border"
              type="text"
              placeholder="example@domain.com"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="border"
              placeholder="type something here"
            ></textarea>
          </div>
          <button type="submit" className="border py-2 px-8">Submit</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}
