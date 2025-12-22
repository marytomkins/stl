import STL from '../assets/stl.png';

const Header = () => {
  return (
    <header className="header flex justify-between">
      <img className="logo w-1/5 ml-2" src={STL} alt="STL Logo" />
      <div className="flex w-1/2 justify-around items-center">
        <div className="">Home</div>
        <div className="">Inventory</div>
        <div className="">TOOL BOX</div>
        <div className="">About</div>
        <div className="">Contact</div>
      </div>
    </header>
  );
}

export default Header;