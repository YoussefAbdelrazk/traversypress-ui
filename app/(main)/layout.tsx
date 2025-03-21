import Nabar from "@/components/Nabar";
import Sidebar from "@/components/Sidebar";



export default function Mainlayout({children}:{children:React.ReactNode}) {
  return (
    <> 
         <Nabar/>
        <div className="flex">
          <div className=" hidden md:block h-screen w-[300px]">
            <Sidebar/>
          </div>
          <div className="w-full md:max-w-[1140px] p-5 ">
            {children}
          </div>
        </div>
    </>
  )
}
