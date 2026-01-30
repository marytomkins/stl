import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Inventory from "./Inventory";

const Content = () => {
  return (
    <Router>
      <div className="App h-100vh flex flex-col">
        <Header />
        <div className="main-content grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/toolbox" element={<></>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Content;
