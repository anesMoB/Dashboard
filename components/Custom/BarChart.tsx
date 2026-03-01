
import React from 'react'

import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { Monitor, Smartphone } from 'lucide-react'

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
        icon: Monitor,
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
        icon: Smartphone,
    },
} satisfies ChartConfig
const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

function BarCharts() {
    return (
        <div className='w-full h-full'>
            <h1 className="text-lg font-semibold mb-4">Monthly Visitors</h1>
            <ChartContainer config={chartConfig} className="min-h-40">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => {
                            return value.slice(0, 3)
                        }}
                    />
                    <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}

export default BarCharts