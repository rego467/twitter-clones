import React from 'react'

export default function SidebarMenu({text, Icon, active}) {
  return (
    <div className='hoverCustom flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3 p-3'>
      <Icon className="h-7" />
      <span className={`${active && "font-bold"} hidden xl:inline`}>{text}</span>
    </div>
  )
}
