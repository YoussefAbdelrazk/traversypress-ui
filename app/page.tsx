import DashboardCard from "@/components/Dashboard/DashboardCard";
import PostTable from "@/components/posts/PostTable";
import { Folder, Folders, MessageCircle, Newspaper, User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
  <>

  <div className=" flex flex-col gap-5 mb-5 md:flex-row  justify-between">
    <DashboardCard title="Posts" count={100} icon={<Newspaper className=' mx-auto text-slate-500 dark:text-slate-200' size={72}/>} />
    <DashboardCard title="Users" count={182} icon={<User className=' mx-auto text-slate-500 dark:text-slate-200' size={72}/>} />
    <DashboardCard title="Categories" count={12} icon={<Folders className=' mx-auto text-slate-500 dark:text-slate-200' size={72}/>} />
    <DashboardCard title="Comments" count={1200} icon={<MessageCircle className=' mx-auto text-slate-500 dark:text-slate-200' size={72}/>} />
  </div>
  <PostTable title="Latest Posts" />
  </>
  );
}
