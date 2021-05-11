import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/rdt-react-website/" exact component={Home} />
          <Route path="/rdt-react-website/services" component={Services} />
          <Route path="/rdt-react-website/products" component={Products} />
          <Route path="/rdt-react-website/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
