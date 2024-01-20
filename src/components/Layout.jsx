import { Outlet } from 'react-router';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-base-300">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
