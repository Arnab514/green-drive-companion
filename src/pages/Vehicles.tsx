
import { motion } from "framer-motion";

const Vehicles = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-24">
        <section className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold">Electric & Hybrid Vehicles</span>
            <h1 className="mt-4 text-5xl md:text-6xl font-bold leading-tight">
              Explore The Future of Mobility
            </h1>
            <p className="mt-6 text-lg text-accent/80">
              Discover our comprehensive guide to electric and hybrid vehicles, charging solutions, and sustainable transportation.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-24">
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Battery Electric Vehicles (BEV)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-6"
                >
                  <div className="text-4xl mb-4">🚗</div>
                  <h3 className="text-xl font-bold mb-4">Pure Electric</h3>
                  <p className="mb-4">Zero emissions, purely electric vehicles with ranges up to 400+ miles.</p>
                  <ul className="space-y-2">
                    <li>✔️ Zero emissions</li>
                    <li>✔️ Lower running costs</li>
                    <li>✔️ Minimal maintenance</li>
                  </ul>
                </motion.div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Plug-in Hybrid Electric Vehicles (PHEV)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-6"
                >
                  <div className="text-4xl mb-4">🚙</div>
                  <h3 className="text-xl font-bold mb-4">Plug-in Hybrid</h3>
                  <p className="mb-4">The best of both worlds - electric for daily commutes, gas for longer trips.</p>
                  <ul className="space-y-2">
                    <li>✔️ Flexibility of fuel choices</li>
                    <li>✔️ Extended range</li>
                    <li>✔️ Lower emissions</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Vehicles;
