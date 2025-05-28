import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">AIlytic Labs</h1>
      <ul className="flex gap-4">
        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
        <li><Link to="/products" className="hover:text-blue-400">Products</Link></li>
        <li><Link to="/demo" className="hover:text-blue-400">Demo</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;