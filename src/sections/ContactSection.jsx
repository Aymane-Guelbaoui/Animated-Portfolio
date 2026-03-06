import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_y94zw9r",
        "template_akrgh3p",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "pyl6BTLvL9uKAgtN2"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong.");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Let's Work
          <span className="text-amber-600"> Together</span>
        </h2>
        <p className="max-w-md mb-12">
          Have a project in mind? Let's create something extraordinary.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">

        
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >

          <div>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border-b border-border py-3 outline-none"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border-b border-border py-3 outline-none"
            />
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full border-b border-border py-3 outline-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="flex bg-amber-600 items-center gap-2 px-8 py-3 rounded-full font-medium text-sm text-white"
          >
            {loading ? "Sending..." : "Send Message"} <Send size={14} />
          </motion.button>
        </motion.form>

        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          {[
            { icon: Mail, label: "aymaneguelbaoui@gmail.com" },
            { icon: Phone, label: "+212 631371921" },
            { icon: MapPin, label: "Beni Mellal, MA" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <item.icon size={16} className="text-accent" />
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;