
import { Navigate } from "react-router-dom";
import { loginAdmin } from "../service/api";

async function handleSubmit (e) {
  e.preventDefault();
  const response = await loginAdmin({
    email: e.target.email.value,
    password: e.target.password.value
  });

  if(response) {
    <Navigate to="/edit" replace />
  }
}

const Login = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-2xl bg-white dark:bg-ink-900 border border-paper-200 dark:border-white/10 shadow-2xl p-6">
            <div className=" h-11 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
              <h1>Authentication</h1>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 p-6 sm:p-8 space-y-4"
            >
              <input
                required
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl bg-paper-100 dark:bg-white/5 border border-transparent focus:border-brand-500 outline-none text-sm text-ink-950 dark:text-white placeholder:text-ink-900/40 dark:placeholder:text-paper-100/30"
              />

              <input
                required
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl bg-paper-100 dark:bg-white/5 border border-transparent focus:border-brand-500 outline-none text-sm text-ink-950 dark:text-white placeholder:text-ink-900/40 dark:placeholder:text-paper-100/30"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
    );
}

export default Login;