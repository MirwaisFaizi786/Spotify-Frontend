import React from 'react'
import {getTotalPlayedSongs, totalListenedSongs,totalListeningTimeSongs} from '../utils/logic'

function Home() {
  
  return (
    <div>
      <h1> total played songs {getTotalPlayedSongs()}</h1>
      <h1> total tracked listened songs {totalListenedSongs()}</h1>
      <h1>total listening time {totalListeningTimeSongs()}</h1>
    </div>
  )
}

export default Home


