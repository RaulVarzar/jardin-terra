import { Outlet } from 'react-router';
import ScrollToHashElement from './utils/ScrollToHashElement';

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-base-100">
      <ScrollToHashElement />
      <Outlet />
    </div>
  );
}
