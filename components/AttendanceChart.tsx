"use client";

import Image from "next/image";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 40,
    absent: 24,
  },
  {
    name: "Tue",
    present: 30,
    absent: 13,
  },
  {
    name: "Wed",
    present: 20,
    absent: 98,
  },
  {
    name: "Thu",
    present: 27,
    absent: 39,
  },
  {
    name: "Fri",
    present: 15,
    absent: 48,
  },
];

function AttendanceChart() {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center" >
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="moredark" width={20} height={20} />
      </div>
      <BarChart
        
        width='100%'
        height='90%'
        responsive
        data={data}
        barSize={20}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
        <XAxis dataKey="name" tick={{fill:'#d1d5db'}} axisLine={false} tickLine={false}  />
        <YAxis width="auto" tick={{fill:'#d1d5db'}} axisLine={false}  tickLine={false}/>
        <Tooltip contentStyle={{borderRadius:'10px', borderColor:'lightgray'}} />
        <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop: '20px', paddingBottom: '40px'}} />
        <Bar
          dataKey="present"
          fill="#fae27c"
          radius={[10, 10 ,0 , 0]}
          legendType="circle"
        />
        <Bar
        legendType="circle"
          dataKey="absent"
          fill="#c3ebfa"
          radius={[10, 10 ,0 ,0 ]}
        />
      </BarChart>
    </div>
  );
}

export default AttendanceChart;
