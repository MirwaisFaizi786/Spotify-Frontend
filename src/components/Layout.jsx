import React from "react";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";
import { SlSocialSpotify } from "react-icons/sl";
import { ImHome } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import { IoPlayBack } from "react-icons/io5";
import Navbar from "./Navbar";

// import imageSource from "../assets/Rectangle.png";

function Layout() {
  return (
    <main className="flex min-h-screen bg-black">
      <section className="flex w-full gap-2 rounded-md m-2">
        <div className="flex">
          <Sidebar>
            <SidebarItem icon={<SlSocialSpotify />} text="Spotify" active />
            <SidebarItem icon={<ImHome />} text="Home" />
            <SidebarItem icon={<IoIosSearch />} text="Search" alert />
          </Sidebar>
        </div>
        <div className="flex-1 flex flex-col bg-gray-800">
          <Navbar />
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default Layout;

{
  /* <div className="flex flex-col min-h-screen bg-black">
      <main className="flex flex-1 w-full border border-black">
        <div className="flex ">
          <div className="flex ">
            <Sidebar>
              <SidebarItem icon={<SlSocialSpotify />} text="Spotify" active />
              <SidebarItem icon={<ImHome />} text="Home" />
              <SidebarItem icon={<IoIosSearch />} text="Search" alert />
            </Sidebar>
          </div>

          <div className="flex-1 flex flex-col   border border-red-700">
            <div className="flex w-full h-[200px] object-cover">
              <img className="w-full object-cover" src="banner.jpg" alt="" />
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div> */
}
