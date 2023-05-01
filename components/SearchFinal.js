import React from 'react'

import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

export default function SearchFinal() {
  return (
    <div className='flex sticky top-0 p-2 bg-white w-full'>
      <div className='bg-white w-full flex p-2 rounded-md border'>
        <input type="text" name="search" className='w-full h-7 px-1' placeholder='Search' />
        <MagnifyingGlassIcon width={30} color='gray' className='cursor-pointer'/>
      </div>
    </div>
  )
}
