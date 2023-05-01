import Final from "@/components/Final";
import Middle from "@/components/Middle";
import Sidebar from "@/components/Sidebar";

export default function Home({newsResult, randomUser}) {
 
  return (
    <main className="mx-auto min-h-screen max-w-7xl flex">
      <div className="sm:mr-52">
          <Sidebar/>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3">
        <div className="sm:col-span-2">
          <Middle />    
        </div>  
        <div className="">
          <Final news={newsResult.articles} users={randomUser.results} />
        </div>
      </div>  
    </main>
  )
}

// https://saurav.tech/NewsAPI/top-headlines/category/health/in.json
// https://randomuser.me/api/?results=20&inc=name,name,login,picture
export async function getServerSideProps(){
  const newsResult = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json").then(res => res.json());

  // get user login
  const randomUser = await fetch("https://randomuser.me/api/?results=20&inc=login,picture").then(res => res.json());
  return{
    props:{
      newsResult,
      randomUser
    }
  }
}