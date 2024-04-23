import React, {useState} from 'react'
import icons from '../Ulities/icons'
import { Link, Redirect } from 'react-router-dom'
import path from '../Ulities/path'
const User = () => {
const {CiUser, MdOutlineExitToApp, HiOutlineUserCircle} = icons
const [username, setUsername] = useState(localStorage.getItem('username'));
  const [show, setShow] = useState(false);
  const [isLogout, setIsLogout] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null);
  };

  return (
    <div>
    {username ? (
      <div className='flex flex-col gap-2 justify-center items-center text-[40px]
      md-max-3:text-[30px] md-max-4:text-[24px]
      '>
        <HiOutlineUserCircle onClick={()=>setIsLogout(!isLogout)} className='hover:text-[#658C4A] cursor-pointer relative'/>
        {
          isLogout ? '' : 
          <div 
          onClick={handleLogout}
          className='text-[18px] absolute -bottom-4 border px-4 py-2 cursor-pointer
          hover:text-white hover:bg-[#658c4a] transition-all duration-400 hover:font-semibold
          md-max-2:text-[16px]
          md-max-4:text-[14px]
          '>Logout</div>
        } 
      </div>
    ) : (
      <Link to={path.LOGIN} className='hover:text-[#658C4A] cursor-pointer text-[40px]
      md-max-3:text-[30px] md-max-4:text-[24px]'>
        <CiUser/>
      </Link>
    )}
    {username && show && <div>Your content here...</div>}
  </div>
  )
}

export default User