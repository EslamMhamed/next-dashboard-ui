'use client'
import Image from 'next/image';
import { Pie, PieChart } from 'recharts';

// #region Sample data
const data = [
  { name: 'Group A', value: 92, fill: "#c3ebfa" },
  { name: 'Group B', value: 8, fill: "#fae27c" },
];

function Performance() {
  return (
   <div className="bg-white p-4 rounded-md h-80 relative ">
    <div className="flex items-center justify-between">
        <h1 className='text-xl font-semibold '>Performance</h1>
        <Image src='/moreDark.png' width={16} height={16} alt='more' />
    </div>
     <PieChart  responsive>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%"
        cy="65%"
        outerRadius="120%"
        fill="#8884d8"
        
        innerRadius={70}
        // isAnimationActive={isAnimationActive}
      />
    </PieChart>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
        <h1 className='text-3xl font-black'>9.2</h1>
        <p className='text-xs text-gray-300'>of max LTS</p>
    </div>
    <h2 className="font-medium absolute bottom-16 left-0 right-0 m-0 text-center ">1st Semester - 2nd Semester</h2>
   </div>
  )
}

export default Performance