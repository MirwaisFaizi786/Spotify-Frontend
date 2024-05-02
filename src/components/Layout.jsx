import React, { useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { SlSocialSpotify } from "react-icons/sl";
import { ImHome } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import Navbar from "./Navbar";
import ListenerStatistic from "./statistic/ListenerStatistic";
import {
  getTotalPlayedSongs,
  totalListenedSongs,
  totalListeningTimeSongs,
  findAverageDailyTimeWeListenToSongs,
  timeOfTheDayTheUserListenToSongs,
  toFindWhatSeasonOfTheYearTheUserListenToSongs,
} from "../utils/logic";
import { IoMusicalNote } from "react-icons/io5";

// import imageSource from "../assets/Rectangle.png";

function Layout() {
  const [navLinkClicked, setNavLinkClicked] = useState(false);
  const url = useLocation();

  
  console.log(url.pathname);

  return (
    <div className="flex bg-black gap-1">
      <div className="flex">
        <Sidebar>
          <SidebarItem
            icon={<SlSocialSpotify className="text-gray-300" />}
            text="Main Page"
            path="/"
            setNavLinkClicked={setNavLinkClicked}
            navLinkClicked={navLinkClicked}
            active
          />
          <SidebarItem
            icon={<ImHome className="text-gray-300" />}
            text="Home"
            path="/home"
            setNavLinkClicked={setNavLinkClicked}
            navLinkClicked={navLinkClicked}
          />
          <SidebarItem
            icon={<IoIosSearch className="text-gray-300" />}
            text="Search"
            path="/search"
            setNavLinkClicked={setNavLinkClicked}
            navLinkClicked={navLinkClicked}
            alert
          />
        </Sidebar>
      </div>
      <main className="w-full h-screen bg-gray-800">
       <Outlet />
      </main>
      
    </div>
  );
}

export default Layout;
