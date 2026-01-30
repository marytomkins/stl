const Home = () => {
  return (
    <div className="home-content flex-1 flex flex-col items-center text-center">
      <div className="m-8 mt-0">
        <h1>The STL Mission...</h1>
        <div className="h-56 w-100 bg-gray-500"></div>
      </div>

      <div className="m-8">
        <div>Find what you need</div>
        <div>Inventory Page Link</div>
      </div>

      <div className="m-8">
        <div>Still need to figure out what you need?</div>
        <div>Tool Box Page Link</div>
      </div>

      <div className="m-8">
        <div>Member Properties</div>
        <div>ATSM for Dummies</div>
      </div>

      <div className="m-8">
        <div>Contact Us</div>
      </div>
    </div>
  );
};

export default Home;
