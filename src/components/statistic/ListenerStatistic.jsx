import React from 'react'

function ListenerStatistic({message,statistic, icon}) {
  return (
    <div className='p-5 flex justify-between shadow-2xl  bg-gray-50  rounded-lg '>
      <div>
      <h1 className='font-bold capitalize'>{message}</h1>
      <h1 className='w-20 h-20 rounded-full flex justify-center items-center bg-orange-700 text-white'>{statistic}</h1>
      </div>
    
      <button className='self-start' >{icon}</button>
    </div>
  )
}

export default ListenerStatistic