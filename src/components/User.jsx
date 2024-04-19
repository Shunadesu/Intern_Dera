import React, {useState} from 'react'
import icons from '../Ulities/icons'
import { Link, Redirect } from 'react-router-dom'
import path from '../Ulities/path'
const User = () => {
const {CiUser, MdOutlineExitToApp} = icons
const [username, setUsername] = useState(localStorage.getItem('username'));
  const [show, setShow] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null);
  };

  return (
    <div>
    {username ? (
      <div className='flex gap-2 justify-center items-center text-[40px]
      md-max-3:text-[30px] md-max-4:text-[24px]
      '>
        <MdOutlineExitToApp onClick={handleLogout} className='hover:text-[#658C4A] cursor-pointer'/> 
        <p className='text-[18px] md-max-2:text-[16px] md-max-4:text-[14px]' >Hello, {username}</p>
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