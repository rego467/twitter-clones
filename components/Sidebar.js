import React from 'react'
import Image from 'next/image'
import SidebarMenu from './SidebarMenu'

import { HomeIcon, HashtagIcon, BellIcon, InboxIcon, BookmarkIcon,ClipboardIcon, UserIcon,EllipsisHorizontalCircleIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {

  const menus = [
    {
      text : "Home",
      Icon: HomeIcon,
    
    },
    {
      text : "Hastag",
      Icon: HashtagIcon
    },
    {
      text : "Notifications",
      Icon: BellIcon
    },
    {
      text : "Messages",
      Icon: InboxIcon
    },
    {
      text : "Bookmarks",
      Icon: BookmarkIcon
    },
    {
      text : "List",
      Icon: ClipboardIcon
    },
    {
      text : "Profile",
      Icon: UserIcon
    },
    {
      text : "More",
      Icon: EllipsisHorizontalCircleIcon
    },
  ]
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='mt-5 p-2'>
        <Image
          width={35}
          height={35} 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJffRXLnXA41eSmfas6sxpQqTUjdHRx2bipzcinlGKGsOe8XIz8Dk55Vvge0ySVZENKX8&usqp=CAU" />
      </div>
      <div className='mt-7'>
      {
        menus.map((menu, index)=>{
          return(
            <div key={index}>
              <SidebarMenu text={menu.text} Icon={menu.Icon} active={menu.active} />    
            </div>
          )
          
        })
      }
      </div>

      {/* BUTTON */}
      <button type='button' className='bg-blue-400 rounded-full w-56 p-2 text-lg text-white hover:bg-blue-300 hidden xl:inline mt-4'>tweet</button>

      <div className='hoverCustom flex items-center mt-auto'>
        <img src="gunung.jpg"  className="rounded-full items-center flex w-10 h-10" />
        <div className='hoverCustom hidden lg:inline'>
          <h4>regoedwar</h4>
          <p>@regoedwar</p>
        </div>
        <EllipsisVerticalIcon width={30} />
      </div>
    </div>
  )
}
