'use client'

import { analyticsData } from '@/data/analytics'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
export default function AnalyticsChart() {
  return (
    <>
  <Card>
    <CardHeader>
      <CardTitle>Analytics For This Year</CardTitle>
      <CardDescription>Views Per Month</CardDescription>
    </CardHeader>
    <CardContent>
      <div style={{width:'100%', height: 300}}>
              <ResponsiveContainer>
                <LineChart width={1100} height={300} data={analyticsData}>
                        <Line type='monotone' dataKey='uv' stroke='#8884d8' />
                        <CartesianGrid stroke='#ccc' />
                        <XAxis dataKey='name'/>
                        <YAxis/>
                </LineChart>
              </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
    </>
  )
}
