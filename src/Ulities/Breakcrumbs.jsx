import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import icons from './icons';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const {MdNavigateNext} = icons
  return (
    <div>
      {pathnames.length > 0 && (
        <nav aria-label="breadcrumb" className='bg-gray-50 px-16 py-4 text-[18px] text-[#666666]'>
          <ol className="breadcrumb flex items-center gap-4">
            <li className="breadcrumb-item">
              <Link className='hover:text-[#658C4A] hover:font-bold transition-all duration-500' to="/">Home</Link>
            </li>
            <li>
              <MdNavigateNext size={24}/>
            </li>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              return isLast ? (
                <li key={name} className="breadcrumb-item active capitalize text-[#658C4A]" aria-current="page">
                  {name}
                </li>
              ) : (
                <>
                  
                  <li key={name} className="breadcrumb-item ">
                    <Link to={routeTo} className='hover:text-[#658C4A]'>{name}</Link>
                  </li>

                  <li>
                    <MdNavigateNext size={24}/>
                  </li>
                </>
              );
            })}
          </ol>
        </nav>
      )}
    </div>
  );
};

export default Breadcrumbs;