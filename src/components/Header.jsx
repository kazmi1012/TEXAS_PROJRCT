const Header = () => {
  return (
    <header className="flex justify-between text-white bg-blue-800 px-52px py-3">
      <h1>Logo</h1>

      <nav >
        <ul className="flex space-x-5">
                <li><a className="hover:text-gray-300" href="#">Home</a></li>
                <li><a className="hover:text-gray-300" href="#">About</a></li>
                <li><a className="hover:text-gray-300" href="#">Product</a></li>
                <li><a className="hover:text-gray-300" href="#">LookBook</a></li>
                </ul>
    
       
      </nav>

      <button className="bg-white text-blue-800 px-4 py-1 rounded hover:bg-gray-200">
        Contact Us
      </button>
    </header>
  );
};

export default Header;