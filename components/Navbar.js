import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import {HiUsers, HiShoppingBag,} from 'react-icons/hi'
import {IoChatboxEllipsesOutline} from 'react-icons/io5'
import {BsFillBellFill} from 'react-icons/bs'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='horizontal-logo'>
          <div className='logo-image'>
            <Image
              src="/images/linkedinlogo.png"
              alt='maniwebdev'
              width="35"
              height="35"
            />
          </div>
          <div className='navbar-input'>
          <AiOutlineSearch style={{color:'grey'}} size={18} />
            <input
            className='search-input'
              type="text"
              placeholder="Search..."
            // value={searchQuery}
            // onChange={handleInputChange}
            />
          </div>
          <div className='navbar-message-icon'><IoChatboxEllipsesOutline color='grey' size={25} /></div>
        </div>
        <div>
          <ul>
            <li className='navbar-li'>
              <Link className='navbar-link' href="#home"><div><AiFillHome color='grey' size={25} /></div> <div className='navbar-text'>Home</div></Link>
              <Link className='navbar-link' href="#home"><div><HiUsers color='grey' size={25}/></div> <div className='navbar-text'>My network</div></Link>
              <Link className='navbar-link' href="#home"><div><HiShoppingBag color='grey' size={25} /></div> <div className='navbar-text'>Jobs</div></Link>
              <Link className='navbar-link' href="#home"><div><IoChatboxEllipsesOutline color='grey' size={25} /></div> <div className='navbar-text'>Messages</div></Link>
              <Link className='navbar-link' href="#home"><div><BsFillBellFill color='grey' size={25} /></div> <div className='navbar-text'>Notifications</div></Link>
              <Link className='navbar-link' href="#home"><div><Image className='navbar-menu-image' src='/images/usm.jpg' alt="maniwebdev" width="20" height="20" /></div> <div className='navbar-text'>Me</div></Link>
              <div className='navbar-border'></div>
              <Link className='navbar-link' href="#home"><div><TbGridDots color='grey' size={25} /></div> <div className='navbar-text'>Business</div></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar