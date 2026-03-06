import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home"className="min-h-screen flex flex-col justify-center py-24 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2">
          FULLSTACK
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-amber-600">
          DEVELOPER
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-md text-lg leading-relaxed mb-12"
      >
        Passionate about creating intuitive and engaging user experiences. 
        Specialize in transforming ideas into beautifully crafted products.
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex gap-12 mb-12"
      >
        {[
          { num: "+2", label: "YEARS OF\nEXPERIENCE" },
          { num: "+7", label: "PROJECTS\nCOMPLETED" },
        ].map((stat) => (
          <div key={stat.num}>
            <span className="text-4xl md:text-5xl font-bold">{stat.num}</span>
            <p className="text-xs mt-1 whitespace-pre-line tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex flex-wrap gap-4"
      >
        <div className="rounded-xl p-6 flex-1 min-w-[200px]" style={{ background: "#c2eb47" }}>
          <h3 className="text-sm font-bold tracking-wider text-background">
            MAKING DYNAMIC WEBSITES
          </h3>
        </div>
        <div className="rounded-xl p-6 flex-1 min-w-[200px]" style={{ background: "#c2eb47" }}>
          <h3 className="flex items-center gap-2 text-sm font-bold tracking-wider text-background">
            <MapPin size={20}/>
            <span>BASED IN MOROCCO</span>
          </h3>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;