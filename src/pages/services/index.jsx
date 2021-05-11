import React, { useEffect } from "react";

import Layout from "../../components/Layout";
import scrollToTop from "../../utils/scrollToTop";
import "../../App.css";

function Services() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Layout>
      <h1 className="services">OURS SERVICES</h1>
    </Layout>
  );
}

export default Services;
