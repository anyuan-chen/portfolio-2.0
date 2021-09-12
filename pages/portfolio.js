import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import PortfolioItem from "../components/portfolioItem";
import portfolio from "../data/portfolio";
export default function Portfolio() {
  
  return (
    <div className="flex items-center flex-col">
      <Navbar></Navbar>
      <div className="w-page space-y-5 pt-5">
        {portfolio.map((item) => {
          return <PortfolioItem
            name={item.name}
            img={item.img}
            desc={item.desc}
          ></PortfolioItem>;
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}
