import UserCard from "@/components/UserCard";

function AdminPage() {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* LEFT */}
      <div className="w-2/3">
        <div className="flex  gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/3">R</div>
    </div>
  );
}

export default AdminPage;
