import { FC } from 'react';

import { Link, useLocation } from 'react-router-dom';

const routes = {
  CALCULATOR: {
    path: '/',
    name: 'calculate',
  },
  SETTINGS: {
    path: '/settings',
    name: 'settings',
  },
} as const;

const Navbar: FC = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col gap-5 p-5 w-1/4 items-center bg-slate-200">
      {Object.values(routes).map(route => (
        <Link
          to={route.path}
          key={route.path}
          className={`hover:text-indigo-500 duration-300 hover:underline underline-offset-4 ${
            location.pathname === route.path && 'text-indigo-500 underline underline-offset-4'
          }`}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
