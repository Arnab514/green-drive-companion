
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-24">
        <section className="about-hero container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold">Our Mission</span>
            <h1 className="mt-4 text-5xl md:text-6xl font-bold leading-tight">
              Driving Sustainable Mobility
            </h1>
            <p className="mt-6 text-lg text-accent/80">
              At GreenDrive Hub, we're committed to accelerating the world's transition to sustainable transportation.
            </p>
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
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-accent/80">
                Creating a world where clean transportation is accessible to everyone, reducing our carbon footprint one vehicle at a time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-accent/80">
                Sustainability, innovation, and community drive everything we do as we work towards a greener future.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold mb-4">Our Impact</h3>
              <p className="text-accent/80">
                Since our founding, we've helped reduce CO2 emissions by promoting electric and hybrid vehicle adoption.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
