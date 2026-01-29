export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <div className="w-full max-w-sm">
        <div className="bg-slate-900 rounded-xl p-8 shadow-2xl border border-slate-800">
          <h1 className="text-2xl font-bold text-white text-center mb-6">Login</h1>
          
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
            
            <p className="text-center text-slate-400 text-sm mt-4">
              Need an account?{' '}
              <a href="/signup" className="text-blue-400 hover:text-blue-300">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}