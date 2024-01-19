import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen ">
      {/* <Navbar /> */}
      <div className="w-full h-full ">
        <Outlet />
      </div>
    </div>
  );
}
