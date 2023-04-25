import Final from "@/components/Final";
import Middle from "@/components/Middle";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen container mx-auto flex">
      <main className="flex">
        <div className="grow-0">
          <Sidebar/>
        </div>
        <div className="grow">
          <Middle />
        </div>
        <div className="grow-0">
          <Final />
        </div>  
      </main>
      
    </div>
  )
}
