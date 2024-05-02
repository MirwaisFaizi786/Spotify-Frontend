import React from 'react'
import Navbar from './Navbar'
import ListenerStatistic from './statistic/ListenerStatistic'
import { IoMusicalNote } from 'react-icons/io5'
import {
  getTotalPlayedSongs,
  totalListenedSongs,
  totalListeningTimeSongs,
  findAverageDailyTimeWeListenToSongs,
  timeOfTheDayTheUserListenToSongs,
  toFindWhatSeasonOfTheYearTheUserListenToSongs,
} from "../utils/logic";

function Nav() {
  const playedSongs = getTotalPlayedSongs();
  const listenedSongs = totalListenedSongs();
  const listeningTime = totalListeningTimeSongs();
  const averageListeningTime = findAverageDailyTimeWeListenToSongs();
  const timeOfTheDayTheUserListenedToMusic = timeOfTheDayTheUserListenToSongs();
  const season = toFindWhatSeasonOfTheYearTheUserListenToSongs();
  return (
 
      <section className="flex w-full gap-2 rounded-md m-2">
     
        <div className="flex-1 flex flex-col bg-gray-800">
              <Navbar />
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
          
        </div>
      </section>

  )
}

export default Nav