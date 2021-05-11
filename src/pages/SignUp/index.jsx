import React, { useEffect } from "react";

import Layout from "../../components/Layout";
import scrollToTop from "../../utils/scrollToTop";
import "../../App.css";

function SignUp() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Layout>
      <h1 className="sign-up">SIGN UP</h1>
    </Layout>
  );
}

export default SignUp;
