import { Link } from 'react-router-dom';
import { useScrollState } from './useScrollState';

const Navbar = () => {
  const { scrollPosition } = useScrollState();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-blue-500 text-white font-bold text-lg z-10 transition duration-500 ease-in-out ${
        scrollPosition > 0 ? 'shadow' : ''
      }`}
    >
      <ul className="flex justify-center py-4">
        <li className="px-6">
          <Link to="/" className="text-white hover:text-blue-100">
            Home
          </Link>
        </li>
        <li className="px-6">
          <Link to="/about" className="text-white hover:text-blue-100">
            About
          </Link>
        </li>
        <li className="px-6">
          <Link to="/articles-list" className="text-white hover:text-blue-100">
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;