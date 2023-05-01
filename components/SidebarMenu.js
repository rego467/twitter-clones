import React from 'react'

export default function SidebarMenu({text, Icon, active}) {
  return (
    <div className='flex text-gray-700 text-lg space-x-3 p-4 hover:rounded-lg hover:text-red-400 cursor-pointer items-center'>
      <Icon className="h-7 justify-start sm:justify-end flex" />
      <span className={`${active && "font-bold"}`}>{text}</span>
    </div>
  )
}
