import React from 'react'

import {EllipsisHorizontalCircleIcon, ChatBubbleOvalLeftIcon, HeartIcon, ShareIcon, ChartBarIcon} from '@heroicons/react/24/outline'

export default function PostMiddle({name, username, userImg, imgs, text, timesTamp}) {
  return (
    <div className='p-3 border-b'>
      <div className='flex justify-between'>
        <div className='flex'>
          <img src={userImg} alt="user" className='h-12 w-12 rounded-full' />
          <div className='flex-col flex'>
            <h3 className='text-sm sm:text-lg font-bold pl-2'>{name}</h3>
            <span className=' pl-1 text-xs'>{username}</span>
          </div>
          <div>
            <span className='text-xs pl-2 pt-3'>{timesTamp}</span>
          </div>
        </div>
        <EllipsisHorizontalCircleIcon width={25} className='pb-5'/>
      </div>
      <div className='flex items-center justify-center'>
        <img src={imgs} alt="image-user" className='pt-3 object-cover w-full rounded-xl flex'/>
      </div>
      <div className='mt-3'>
        <p className='sm:text-base leading-relaxed text-gray-700'>
          {text}
        </p>
      </div>
      <div className='flex justify-evenly mt-4'>
        <ChatBubbleOvalLeftIcon width={30} className='mr-2 hover:bg-blue-300 rounded-full p-1'/>
        <HeartIcon width={30} className='mr-2 hover:bg-blue-300 rounded-full p-1'/>
        <ShareIcon width={30} className='mr-2 hover:bg-blue-300 rounded-full p-1'/>
        <ChartBarIcon width={30} className='mr-2 hover:bg-blue-300 rounded-full p-1'/>
      </div>
    </div>
  )
}
