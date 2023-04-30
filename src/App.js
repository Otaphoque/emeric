import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
import Home from "./Content/Home.js";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
