import React  from 'react'
import {  useProvider } from './Sidebar'

function SidebarItem({icon,text,active,alert}) {
  const {expanded} = useProvider();
  console.log(`context ${expanded}`);
  return (
    <li className={`relative flex items-center group py-2 px-3 my-1 font-medium cursor-pointer rounded-md transition-colors ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 " : "hover:bg-indigo-50 text-gray-600"}`}>

      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
      {
        alert && <div className={`absolute w-2 h-2 rounded bg-indigo-400 right-2 ${expanded ? "": "top-2"}`}></div>
      }
      {!expanded && <div className="absolute left-full rounded-md px-2 py-1 ml-6
      bg-indigo-100 text-indigo-800 text-sm invisible  opacity-20 -translate-x-3
      transition-all
      group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">{text + "hello"}</div>}
    </li>
  )
}

export default SidebarItem