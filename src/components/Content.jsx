import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Inventory from "./Inventory";
import Properties from "./Properties";

const Content = () => {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="main-content flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/steel-properties" element={<Properties/>} />
            <Route path="/unit-converter" element={<></>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default Content;
