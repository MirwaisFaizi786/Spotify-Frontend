import React, {  useState } from "react";
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

  const playedSongs = getTotalPlayedSongs();
  const listenedSongs = totalListenedSongs();
  const listeningTime = totalListeningTimeSongs();
  const averageListeningTime = findAverageDailyTimeWeListenToSongs();
  const timeOfTheDayTheUserListenedToMusic = timeOfTheDayTheUserListenToSongs();
  const season = toFindWhatSeasonOfTheYearTheUserListenToSongs();
  console.log(url.pathname);

  return (
    <main className="flex min-h-screen bg-black">
      <section className="flex w-full gap-2 rounded-md m-2">
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
        <div className="flex-1 flex flex-col bg-gray-800">
          {(navLinkClicked || url.pathname !== "/") ? (
            <Outlet />
          ) : (
            <>
              <Navbar
                setNavLinkClicked={setNavLinkClicked}
                navLinkClicked={navLinkClicked}
              />

              <div className="grid grid-cols-3 gap-4 mt-5 mx-3">
                <ListenerStatistic
                  message="total played songs"
                  statistic={playedSongs}
                  icon={
                    <IoMusicalNote className="text-5xl w-15 h-15 bg-orange-700 rounded-full p-1 text-white" />
                  }
                />

                <ListenerStatistic
                  message="total listened songs"
                  statistic={listenedSongs}
                  icon={
                    <IoMusicalNote className="text-5xl w-15 h-15 bg-orange-700 rounded-full p-1 text-white" />
                  }
                />

                <ListenerStatistic
                  message="total song listened time "
                  statistic={listeningTime}
                  icon={
                    <IoMusicalNote className="text-5xl w-15 h-15 bg-orange-700 rounded-full p-1 text-white" />
                  }
                />

                <ListenerStatistic
                  message="total Average song listened time "
                  statistic={averageListeningTime}
                  icon={
                    <IoMusicalNote className="text-5xl w-15 h-15 bg-orange-700 rounded-full p-1 text-white" />
                  }
                />

                <ListenerStatistic
                  message="time of day the music listened "
                  statistic={timeOfTheDayTheUserListenedToMusic}
                  icon={
                    <IoMusicalNote className="text-5xl w-15 h-15 bg-orange-700 rounded-full p-1 text-white" />
                  }
                />

                <ListenerStatistic
                  message="season of the year the user listen to songs"
                  statistic={season}
                  icon={
                    <IoMusicalNote className="text-5xl w-15 h-15 bg-orange-700 rounded-full p-1 text-white" />
                  }
                />
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default Layout;
