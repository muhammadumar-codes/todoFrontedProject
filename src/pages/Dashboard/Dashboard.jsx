import StatCard from "../../components/Cart/Cart";
export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-slate-400">
          Overview of your account and activity
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Users" value="1,240" />
        <StatCard title="Revenue" value="$8,450" />
        <StatCard title="Sessions" value="312" />
      </div>


     
    </div>
  );
}

