'use client';
import { useEffect, useState } from "react";
import BarCharts from "@/components/Custom/BarChart";
import ChartPieDonutText from "@/components/Custom/PieCharts";
import { ChartLineInteractive } from "@/components/Custom/LineChart";
import CardList from "@/components/Custom/CardList";
import TodoList from "@/components/Custom/TodoList";


export default function Home() {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const storedOpen = localStorage.getItem("sidebar-open");
    if (storedOpen !== null) {
      setOpen(storedOpen === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-open", open.toString());
  }, [open]);


  return (

        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
          <div className="bg-primary-foreground rounded-lg p-4 md:col-span-2">
            <BarCharts/>
            </div>
          <div className="bg-primary-foreground rounded-lg p-4"><ChartPieDonutText/> </div>
          <div className="bg-primary-foreground rounded-lg p-4"><CardList title="Popular Content"/></div>
          <div className="bg-primary-foreground rounded-lg p-4"><CardList title="Latest Transactions"/></div>
          <div className="bg-primary-foreground rounded-lg p-4"><TodoList/></div>
          <div className="bg-primary-foreground rounded-lg p-4 md:col-span-3"><ChartLineInteractive /></div>

        </div>
      
  );
}
