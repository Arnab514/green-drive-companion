
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-24">
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold text-center mb-8 text-primary">Welcome Back</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-dark-lighter border border-accent/10 rounded-lg 
                             focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-3 bg-dark-lighter border border-accent/10 rounded-lg 
                             focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-dark font-semibold py-3 px-4 rounded-lg
                           hover:bg-primary-hover transition-colors"
                >
                  Log In
                </button>
              </form>
              <p className="mt-6 text-center text-sm">
                Don't have an account?{" "}
                <a href="#" className="text-primary hover:underline">
                  Sign up
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
