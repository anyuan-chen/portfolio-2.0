import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Navbar() {
  const router = useRouter();
  const textStyle = "font-mono text-sm text-gray-600";
  const highlightedTextStyle =
    "font-mono text-sm text-gray-600 font-bold underline";
  return (
    <div className="w-page pt-5">
      <div>
        <h1 className="font-sans text-3xl pb-3">Andrew Chen</h1>
      </div>
      <div className="flex flex-row">
        <ul className=" w-full pt-3 border-t border-b pb-3 grid grid-cols-3">
          <div className="flex flex-col pr-8 border-r">
            <li
              className={
                router.pathname === "/" ? highlightedTextStyle : textStyle
              }
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                router.pathname === "/portfolio"
                  ? highlightedTextStyle
                  : textStyle
              }
            >
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </div>
          <div className="flex flex-col border-r pl-3 ">
            <li
              className={
                router.pathname === "/writing"
                  ? highlightedTextStyle
                  : textStyle
              }
            >
              <Link href="/writing">Writing</Link>
            </li>
            <li
              className={
                router.pathname === "/contact"
                  ? highlightedTextStyle
                  : textStyle
              }
            >
              <Link href="/contact">Contact</Link>
            </li>
          </div>
          <div className="flex flex-col pl-3 ">
            <li
              className={
                router.pathname === "/resume" ? highlightedTextStyle : textStyle
              }
            >
              <Link href="/resume">Resume</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
