import Button from '../../components/Button/button'
import StatCard from '../../components/Cart/Cart'
import Header from '../../components/Header/Header'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 space-y-8">
      {/* Header */}
      <Header />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Users" value="1,245" />
        <StatCard title="Active" value="312" />
        <StatCard title="Revenue" value="$8,450" />
        <StatCard title="Errors" value="3" />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-3 text-slate-300">
            <li> New user registered</li>
            <li>Login successful</li>
            <li> Profile updated</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            Quick Actions
          </h2>

          <Button className="w-full py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl font-semibold hover:scale-105 transition">
            Create New
          </Button>
        </div>
      </div>
    </div>
  )
}
