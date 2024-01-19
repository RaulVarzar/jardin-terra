import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="relative flex flex-col justify-start w-full min-h-screen bg-base-100">
      <Navbar />
      <div className="flex grow">
        <Outlet />
      </div>
    </div>
  );
}
