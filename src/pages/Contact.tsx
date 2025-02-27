
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-24">
        <section className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
              <p className="text-lg mb-8">
                Have questions about electric vehicles or sustainable transportation? We're here to help!
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📧</span>
                  <p>info@greendrivehub.com</p>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📞</span>
                  <p>(555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📍</span>
                  <p>123 Green Street<br />Eco City, EC 12345</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 bg-dark-lighter border border-accent/10 rounded-lg 
                               focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
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
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 bg-dark-lighter border border-accent/10 rounded-lg 
                               focus:border-primary focus:outline-none resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-dark font-semibold py-3 px-4 rounded-lg
                             hover:bg-primary-hover transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
