import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

const Content = () => {
  return (
    <div className="content flex flex-col min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Content;
