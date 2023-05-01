import React from 'react'

export default function NewsFinal({title, url, urlToImage, author}) {
  return (
    <div className='p-2 cursor-pointer hover:bg-slate-300'>
      <a href={url} target='_blank'>
        <img src={urlToImage} alt="gambar-news" className='w-full rounded-lg' />
        <h3 className='text-md'>{title}</h3>
        <span className='text-sm text-gray-500'>{author}</span>
      </a>
    </div>
  )
}
