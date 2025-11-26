import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

function AdminPage() {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8 ">
        <div className="flex  gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        
        {/* MIDDLE CHARTS */}
        <div className="flex flex-col lg:flex-row gap-4 ">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px] ">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px] ">
            
          </div>
        </div>

        {/* BOTTOM CHARTS */}
        <div className="flex flex-col lg:flex-row gap-4 "></div>

      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
}

export default AdminPage;
