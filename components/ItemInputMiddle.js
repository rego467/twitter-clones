import React from 'react'

import {FaceSmileIcon, PhotoIcon} from '@heroicons/react/24/outline'

export default function ItemInputMiddle() {
  return (
    <div className='p-3 border-b'>
      <div className='flex'>
        <img src="gunung.jpg" alt="user" className='h-10 w-10 rounded-full' />
        <textarea cols="3" rows="4" placeholder="what's happening!" className='w-full ml-2 border-b px-2 py-2'></textarea>
      </div>
      <div className='ml-11 mt-3 flex justify-between'>
        <div className='flex items-center'>
          <PhotoIcon width={30} height={30} className='mr-2 hover:bg-blue-300 rounded-full p-1' />
          <FaceSmileIcon width={30} height={30} className='hover:bg-blue-300 rounded-full p-1' />
        </div>
          <div>
            <button type="button" className='bg-blue-400 p-1 px-2 text-lg rounded-lg hover:bg-blue-300'>tweet</button>  
          </div>
      </div>
    </div>
  )
}
