/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const NavItem = ({ name, path }) => {
  const { pathname } = useLocation();
  const isActive = pathname === `/100105-experience-product/${path}`;

  return (
    <li>
      <Link
        to={`/100105-experience-product/${path}`}
        className={`flex items-center rounded-lg px-3 py-2 text-${isActive ? 'white' : 'slate-900'} ${isActive ? 'bg-custom-color' : 'hover:bg-slate-100'} light:text-dark light:hover:bg-slate-700`}
      >
        <span className="ml-3 flex-1">{name}</span>
      </Link>
    </li>
  );
};

export default NavItem;

