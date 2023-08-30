// components/BottomNavigation.js
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { HiUsers, HiShoppingBag } from 'react-icons/hi';
import { BsFillBellFill } from 'react-icons/bs';
import { MdOutlineAddBox } from 'react-icons/md';

const BottomNavigation = () => {
  return (
    <nav className='bottomNav'>
      <Link href="/">
      <div className='bottom-items'><AiFillHome className='bottom-icon' /></div> <div className='bottom-text'>Home</div>
      </Link>
      <Link href="/network">
      <div className='bottom-items'><HiUsers className='bottom-icon'/></div> <div className='bottom-text'>My network</div>
      </Link>
      <Link href="/">
      <div className='bottom-items'><MdOutlineAddBox className='bottom-icon' /></div> <div className='bottom-text'>Post</div>
      </Link>
      <Link href="/">
      <div className='bottom-items'><BsFillBellFill className='bottom-icon' /></div> <div className='bottom-text'>Notifications</div>
      </Link>
      <Link href="/">
      <div className='bottom-items'><HiShoppingBag className='bottom-icon' /></div> <div className='bottom-text'>Jobs</div>
      </Link>
    </nav>
  );
};

export default BottomNavigation;
