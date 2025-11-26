"use client";

import Image from "next/image";
import { RadialBarChart, RadialBar, Legend } from "recharts";

// #region Sample data
const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#fae27c",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#c3ebfa",
  },
];



function CountChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="moreDark" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <RadialBarChart
          innerRadius='40%'
          outerRadius='100%'
          cx="50%"
          cy='50%'
          barSize={32}
          data={data}
        >
          <RadialBar
            background
            dataKey="count"
          />
        </RadialBarChart>
        <Image src='/maleFemale.png' alt="maleFemal" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16 ">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
          <h1 className="font-black ">1.2534</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
          <h1 className="font-black ">1.2534</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
}

export default CountChart;
