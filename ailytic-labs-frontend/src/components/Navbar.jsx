import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-between items-center">
      <Link to='/'>
      <h1 className="text-2xl font-bold txt-sm sm:text-xl flex flex-wrap">
        <span className='text-blue-900'>AIlytics</span>
          <span className='text-blue-900'>Labs </span>
      </h1>
      </Link>
      <ul className="flex gap-4">
        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/robots" className="hover:text-blue-400">Robots</Link></li>
        <li><Link to="/drones" className="hover:text-blue-400">Drones</Link></li>
        <li><Link to="/applications" className="hover:text-blue-400">Applications</Link></li>
        <li><Link to="/sandboxlab" className="hover:text-blue-400">Sandbox Lab</Link></li>
        <li><Link to="/company" className="hover:text-blue-400">Company</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;