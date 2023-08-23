// components/BottomNavigation.js
import Link from 'next/link'; // Import your CSS module

const BottomNavigation = () => {
  return (
    <nav className='bottomNav'>
      <Link href="/">
        <div>Home</div>
      </Link>
      <Link href="/">
        <div>Network</div>
      </Link>
      <Link href="/">
        <div>Jobs</div>
      </Link>
      {/* Add more navigation links */}
    </nav>
  );
};

export default BottomNavigation;
