export default function login() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black">
        <div className="w-full max-w-md bg-gradient-to-b from-slate-950 to-slate-900 border border-blue-500/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-400">
            Welcome Back, jani
          </h2>

          <input
            className="w-full mb-4 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white"
            placeholder="Email"
          />
          <input
            className="w-full mb-6 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white"
            placeholder="Password"
            type="password"
          />

          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </>
  )
}
