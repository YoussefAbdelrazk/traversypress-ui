import { Darkmode } from "@/components/Darkmode";




export default function Authlayout({children}:{children:React.ReactNode}) {
  return (
    <div className=" h-screen flex items-center justify-center relative">
      <div className=" absolute bottom-5 right-0">
        <Darkmode/>
      </div>
       {children}
    </div>
  )
}
