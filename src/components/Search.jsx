import { useState } from "react";
import { allArthistList, searchArtistDetails } from "../utils/logic";
import { Link } from "react-router-dom";
import { MdSettingsVoice } from "react-icons/md";

function Search() {
  const [seeMore, setSeeMore] = useState(false);
  const [search, setSearch] = useState("");
  const [showList, setShowList] = useState(false);
  const artistList = allArthistList();
  const artistDetails = searchArtistDetails(search);
  console.log("Artist List", artistDetails);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setShowList(e.target.value !== ""); // Show list if input is not empty
  };

  const handleMouseLeave = () => {
    setShowList(false); // Hide list when mouse leaves input field
  };

  return (
    <div className="flex flex-col h-full">
      <div
        className="flex relative flex-col justify-center  w-full items-center"
        onMouseLeave={handleMouseLeave}
      >
        <input
          className="spotify-search relative  p-2 bg-gray-700 rounded-md mt-4 mx-2 w-1/2 text-white"
          value={search}
          onChange={handleInputChange}
          type="search"
          placeholder="Search"
          name="search"
          id="search"
        />
        <h1 className="text-white mt-4 capitalize   "> List of artist</h1>
        {showList &&
          search && ( // Only render list if showList is true and search input is not empty
            <ul className="absolute top-14 h-60 overflow-auto shadow-2xl w-1/2 bg-gray-700 rounded-md w-1/2bg-gray-700">
              {artistDetails.map((artist, index) => (
                <Link to={`/arthist/${artist}`} key={index}>
                  <li
                    className=" text-white flex  justify-start gap-5 py-2 px-4 rounded-lg hover:bg-gray-600 cursor-pointer"
                    key={index}
                  > 
                  <MdSettingsVoice size={20} color='white'/>
                    {artist}
                  </li>
                </Link>
              ))}
            </ul>
          )}
      </div>

      <div className="flex flex-col w-full">
        <button
          className="text-white self-end bg-gray-400 py-2 px-3 rounded-md hover:bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "See less" : "See more"}
        </button>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center">
          {artistList.map((artist, index) => {
            if (!seeMore && index >= 20) {
              return null; // Skip rendering this item
            }
            return (
            <Link to={`/arthist/${artist}`} key={index}>
              <li
                className="flex justify-start gap-4 items-center text-white px-4 m-2 rounded py-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                key={index}
              >
                <MdSettingsVoice size={20} color='black'/>
                {artist}
              </li>
            </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Search;
