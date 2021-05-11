import React, { useEffect } from "react";

import Layout from "../../components/Layout";
import scrollToTop from "../../utils/scrollToTop";
import "../../App.css";

function Products() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Layout>
      <h1 className="products">LIST OF PRODUCTS</h1>
    </Layout>
  );
}

export default Products;
