import React, { useEffect, useState } from 'react'
import SearchFinal from './SearchFinal'
import NewsFinal from './NewsFinal'
import FollowUsers from './FollowUsers';

export default function Final({news, users}) {
  console.log(users,"karo")
  const [more, setMore] =useState(3);
  const [random, setRandom] = useState([]);
  

  const [follow, setFollow] = useState(4);
  // const [user, setUsers] = useState([]);

  const getRandom = () =>{
    const sortRandom = news.sort(()=> Math.random() - 0.5)
    setRandom(sortRandom)
  }

  const handleRefresh = () =>{
    setMore(3);
    getRandom()
  }

  useEffect(()=>{
    handleRefresh();
  },[])


  return (
    <div className='container h-full flex flex-col items-center'>
      <SearchFinal />
      <div className='bg-slate-200 rounded-md'>
      {
        random?.slice(0,more).map((article)=>{
          return(
            <div key={article.publishedAt}>
             <NewsFinal title={article.title} url={article.url} urlToImage={article.urlToImage} author={article.author}/>
            </div>
          )
        })
      }
        <div className='flex text-blue-800 justify-center p-2 hover:bg-slate-300'>
          <a className='text-blue-800 cursor-pointer' onClick={()=>setMore(more + 3)}>Show more</a>
        </div>
      </div>

      <div className='bg-slate-200 rounded-md mt-5 w-full'>
        {
          users?.slice(0,follow).map((user)=>{
            return(
              <div key={user.login.uuid}>
                <FollowUsers usernames={user.login.username} picture={user.picture.thumbnail} />
              </div>
            )
          })
        }
        <div className='flex text-blue-800 justify-center p-2 hover:bg-slate-300'>
          <a className='text-blue-800 cursor-pointer' onClick={()=> setFollow(follow+4)} >Show more</a>
        </div>  
      </div>
    </div>
  )
}
