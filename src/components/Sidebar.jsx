import { createContext, useContext, useState } from "react";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { MdMoreVert } from "react-icons/md";

const SideBarContext = createContext();
function Sidebar(props) {
 
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="flex-1 bg-gray-800 rounded-md">
      <nav className="h-full flex flex-col shadow-sm bg-gray-800 rounded-md">
        <div className="HEADER-NAV flex justify-between items-center p-4 border-b border-gray-600 pb-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            className={`overflow-hidden transition-all ${
              expanded ? "w-8" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 bg-gray-700 rounded-lg hover:bg-gray-600"
          >
            {expanded ? (
              <LuChevronFirst size={25} />
            ) : (
              <LuChevronLast size={25} />
            )}
          </button>
        </div>
        <SideBarContext.Provider value={{expanded}}>
          <ul className="flex-1 px-3 py-2">{props.children}</ul>
        </SideBarContext.Provider>
        <div className="border-t flex p-3">
          <img
            src="https://avatars.githubusercontent.com/u/39876?v=4"
            className="w-8 h-8 rounded-full object-cover"
            alt=""
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all 
            ${expanded ? "w-52 ml-3" : "w-0"}`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Samera</h4>
              <p className="text-sm text-gray-600">samera.f@gmail.com</p>
            </div>
            <MdMoreVert size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}
export const useProvider = () => useContext(SideBarContext);

export default Sidebar;
