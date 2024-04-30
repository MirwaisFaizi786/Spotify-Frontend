import { IoPlayBack } from "react-icons/io5"


function Navbar() {
  return (
    <div className="group relative overflow-hidden flex justify-center items-center cursor-pointer transition-shadow hover:shadow-2xl  hover:shadow-black/30">
    <div className="h-76 w-full ">
      <img
        className=" w-full h-60 object-cover rounded-md transition-transform group-hover:scale-105 group-hover:rotate-1"
        src="banner.jpg"
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex justify-center items-center text-white text-3xl capitalize ">
        <h1>list of played songs</h1>
        <button className="absolute bottom-5 right-5">
          <IoPlayBack  className="w-15 h-15 rounded-full bg-orange-700 p-1"/>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Navbar