import React, { useEffect } from "react";

import Cards from "../../components/Cards";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import scrollToTop from "../../utils/scrollToTop";
import "../../App.css";

function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Layout>
      <Hero />
      <Cards />
    </Layout>
  );
}

export default Home;
