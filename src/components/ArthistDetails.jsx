import React from 'react'
import { calculateArtistPercentages, searchForArtistPercentage, top20BestSongsThisArtist } from '../utils/logic';
import { useParams } from 'react-router-dom';
import { BiAlbum } from 'react-icons/bi';
import { RiAlbumFill } from 'react-icons/ri';
import { GiLoveSong } from 'react-icons/gi';
import { PiMusicNoteSimpleFill } from 'react-icons/pi';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';



function ArthistDetails() {
    const param = useParams();
    const top20BestSongs = top20BestSongsThisArtist(param.id);
    const artistPercentage = searchForArtistPercentage(param.id);
    const artistPercentagesLists =calculateArtistPercentages();
    console.log("artis percent ",artistPercentagesLists);
 
  return (
    <div>
        <div className='flex justify-center items-center border py-4 px-6'>
         
            <h1 className="flex text-gray-700 font-semibold  p-6 border bggrad rounded-lg text-center capitalize  bg-gradient-to-r from-teal-400 to-teal-500  hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500">{artistPercentage}%</h1>
        </div>
        <div>
            <h1 className="flex text-gray-300 font-semibold  p-2 rounded-lg text-center capitalize my-4">
                top 20 best songs from <span className='font-semibold text-orange-400 flex'><PiMusicNoteSimpleFill size={20} color='white'/>{param.id}</span>
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {
                top20BestSongs.map((song,index)=>{
                    return <li className="flex flex-col  text-white px-4 m-2 rounded py-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 " key={index}>
                        <h1 className="flex items-center gap-3"><RiAlbumFill size={20} color='black'/>Album Name : {song.master_metadata_album_album_name}</h1>
                        <h1 className="flex items-center gap-3"><GiLoveSong size={20} color='black'/> Song Name : {song.master_metadata_track_name}
                        </h1>
                    </li>
                })
            }
            </ul>

        </div>
    </div>
  )
}

export default ArthistDetails


