
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass-card bg-dark/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              GreenDrive Hub
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/vehicles" className="nav-link">Vehicles</Link>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <section className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold">Welcome to the Future</span>
            <h1 className="mt-4 text-5xl md:text-6xl font-bold leading-tight">
              Drive the Change,
              <br /> Power the Future
            </h1>
            <p className="mt-6 text-lg text-accent/80">
              Discover the world of electric and hybrid vehicles. Join us in creating a
              sustainable future through smarter transportation choices.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/vehicles"
                className="btn-primary"
              >
                Explore Vehicles
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 text-accent border border-accent/20 rounded-lg 
                         hover:bg-accent/10 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold mb-4">Electric Vehicles</h3>
              <p className="text-accent/80">
                Zero emissions, maximum performance. Discover the latest in EV technology.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold mb-4">Hybrid Solutions</h3>
              <p className="text-accent/80">
                The perfect balance of efficiency and convenience for your daily drive.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold mb-4">Charging Network</h3>
              <p className="text-accent/80">
                Access to thousands of charging stations nationwide.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="text-center py-12">
          <ChevronDown className="w-6 h-6 mx-auto animate-bounce text-primary" />
        </div>
      </main>
    </div>
  );
};

export default Index;
