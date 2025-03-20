
import { LucideIcon, Newspaper } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

type DashboardCardProps = {
  title: string,
  count: number,
  icon : React.ReactElement<LucideIcon>
}
export default function DashboardCard({title, count, icon}: DashboardCardProps) {
  return (
    <Card className=" bg-slate-100 dark:bg-slate-800 rounded-lg p-5 pb-0 shadow-md">
      <CardContent>
        <h3  className=' text-3xl font-bold text-center mb-4 text-slate-500 dark:text-slate-200'>{title}</h3>
        <div className=' flex gap-5 items-center justify-center'>
          {icon}
          <h3 className=' font-semibold text-5xl text-slate-500 dark:text-slate-200'> {count} </h3>
        </div>
      </CardContent>
    </Card>
  )
}
