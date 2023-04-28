import Final from "@/components/Final";
import Middle from "@/components/Middle";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-3">
        <div className="">
          <Sidebar/>
        </div>
        <div className="sm:col-span-2">
          <Middle />    
        </div>  
        <div className="">
          <Final />
        </div>
      </div>  
    </main>
  )
}
