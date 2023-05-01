import React from 'react'

export default function FollowUsers({usernames, picture}) {
  return (
    <div className='px-2 py-2'>
      <div className='flex justify-between items-center'>
      <div className='flex'>
        <img src={picture} alt="img_user" className='rounded-full' />
        <h4 className='flex items-center px-2 text-sm'>{usernames}</h4>
      </div>
      <div>
        <button type="button" className='bg-slate-700 text-white px-3 py-1 rounded-lg mx-2 text-sm'>follow</button>
      </div>
      </div>
    </div>
  )
}
