import React from 'react'
import Image from 'next/image'
import SidebarMenu from './SidebarMenu'

import { HomeIcon, HashtagIcon, BellIcon, InboxIcon, BookmarkIcon,ClipboardIcon, UserIcon,EllipsisHorizontalCircleIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {

  const menus = [
    {
      text : "Home",
      Icon: HomeIcon,
      id:1
    
    },
    {
      text : "Hastag",
      Icon: HashtagIcon,
      id:2
    },
    {
      text : "Notifications",
      Icon: BellIcon,
      id:3
    },
    {
      text : "Messages",
      Icon: InboxIcon,
      id:4
    },
    {
      text : "Bookmarks",
      Icon: BookmarkIcon,
      id:5
    },
    {
      text : "List",
      Icon: ClipboardIcon,
      id:6
    },
    {
      text : "Profile",
      Icon: UserIcon,
      id:7
    },
    {
      text : "More",
      Icon: EllipsisHorizontalCircleIcon,
      id:8
    },
  ]
  return (
    <div className='fixed hidden sm:inline h-full w-80'>
      <div className='mt-5 p-4'>
        <Image
          width={35}
          height={35} 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJffRXLnXA41eSmfas6sxpQqTUjdHRx2bipzcinlGKGsOe8XIz8Dk55Vvge0ySVZENKX8&usqp=CAU" />
      </div>
      <div className='mt-7'>
      {
        menus.map((menu)=>{
          return(
            <div key={menu.id}>
              <SidebarMenu text={menu.text} Icon={menu.Icon} active={menu.active} />    
            </div>
          )
          
        })
      }
      </div>

      {/* BUTTON */}
      <button type='button' className='bg-blue-400 rounded-full w-56 p-2 text-lg text-white hover:bg-blue-300 hidden xl:inline mt-4'>tweet</button>

      <div className='flex items-center mt-48 p-3 hover:bg-gray-300 hover:rounded-lg cursor-pointer mr-2'>
        <img src="gunung.jpg"  className="rounded-full items-center flex w-10 h-10" />
        <div className='hidden md:inline'>
          <h4 className='px-4'>regoedwar</h4>
          <p className='px-4'>@regoedwar</p>
        </div>
        <div className='hidden md:inline'>
          <EllipsisVerticalIcon width={30} />  
        </div>  
      </div>
    </div>
  )
}
