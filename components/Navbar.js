import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillHome } from 'react-icons/ai'
import {HiUsers, HiShoppingBag,} from 'react-icons/hi'
import {IoChatboxEllipsesOutline} from 'react-icons/io5'
import {BsFillBellFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='horizontal-logo'>
          <div>
            <Image
              src="/images/linkedinlogo.png"
              alt='maniwebdev'
              width="40"
              height="40"
            />
          </div>
          <div>
            <input
              className='navbar-input'
              type="text"
              placeholder="Search..."
            // value={searchQuery}
            // onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <ul>
            <li className='navbar-li'>
              <Link className='navbar-link' href="#home"><div><AiFillHome size={30} /></div> <div>Home</div></Link>
              <Link className='navbar-link' href="#home"><div><HiUsers size={30}/></div> <div>My network</div></Link>
              <Link className='navbar-link' href="#home"><div><HiShoppingBag size={30} /></div> <div>Jobs</div></Link>
              <Link className='navbar-link' href="#home"><div><IoChatboxEllipsesOutline size={30} /></div> <div>Messages</div></Link>
              <Link className='navbar-link' href="#home"><div><BsFillBellFill size={30} /></div> <div>Notifications</div></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar