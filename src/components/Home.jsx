import React, { useState } from "react";
import {
  top100Artists,
  top100ArtistsFromPeriod,
  top100AlbumFromPeriod,
  top100Album,
} from "../utils/logic";

function Home() {
  const [showMore, setShowMore] = useState(false);
  const dataTopArtists = top100Artists();
  const data = top100ArtistsFromPeriod(28);
  const dataTopAlbumPeriod = top100AlbumFromPeriod(28);
  const top100AlbumsList = top100Album();

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      
      <div className="flex gap-4 mb-5">
        <button className="text-white bg-gray-400 py-2 px-3 rounded-md hover:bg-gray-500 hover:text-black ">
          4 weeks
        </button>
        <button className="text-white bg-gray-400 py-2 px-3 rounded-md">
          6 months
        </button>
        <button className="text-white bg-gray-400 py-2 px-3 rounded-md">
          last year
        </button>
        <button className="text-white bg-gray-400 py-2 px-3 rounded-md">
          all time
        </button>
      </div>
      <div className="flex gap-4">
        <ul className="grid grid-cols-1">
          <h2 className="text-white">Top 100 Albums from period of time</h2>
          {top100AlbumsList.map((artist, indexParent) =>
            
            artist.map(
              (song, index) =>
                index !== 1 && (
                  <li
                    className="flex justify-start items-center gap-6"
                    key={indexParent}
                  >
                    {" "}
                    <span className=" text-white">{indexParent + 1}</span>{" "}
                    <span className="font-semibold text-white">{song}</span>{" "}
                  </li>
                )
            )
          )}
        </ul>
        <ul>
          <h2 className="text-white">Top 100 Albums period of time</h2>
          {dataTopAlbumPeriod.map((song, index) => (
            <li className="flex justify-start items-center gap-6" key={index}>
              {" "}
              <span className=" text-white">{index + 1}</span>{" "}
              <span className="font-semibold text-white">{song}</span>{" "}
            </li>
          ))}
        </ul>

        <ul>
          <h2 className="text-white">Top 100 Artists from period of time</h2>
          {data.map((song, index) => (
            <li className="flex justify-start items-center gap-6" key={index}>
              {" "}
              <span className=" text-white">{index + 1}</span>{" "}
              <span className="font-semibold text-white">{song}</span>{" "}
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-1">
          <h2 className="text-white">Top 100 attists</h2>
          {dataTopArtists.map((artist, indexParent) =>
            artist.map(
              (song, index) =>
                index !== 1 && (
                  <li
                    className="flex justify-start items-center gap-6"
                    key={indexParent}
                  >
                    {" "}
                    <span className=" text-white">{indexParent + 1}</span>{" "}
                    <span className="font-semibold text-white">{song}</span>{" "}
                  </li>
                )
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Home;
