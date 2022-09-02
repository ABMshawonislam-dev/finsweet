import React from "react";
import Banner from "../components/banner/Banner";
import Blog from "../components/blog/Blog";
import Client from "../components/client/Client";
import Design from "../components/design/Design";
import Faq from "../components/faq/Faq";
import Navbar from "../components/navbar/Navbar";
import Project from "../components/project/Project";
import Startup from "../components/startup/Startup";
import Work from "../components/work/Work";
const Home = () => {
  return (
    <>
      <Banner />
      <Work />
      <Project />
      <Design />
      <Client />
      <Faq />
      <Startup />
      <Blog />
    </>
  );
};

export default Home;
