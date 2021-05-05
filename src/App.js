import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Services from "./pages/services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sing-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
