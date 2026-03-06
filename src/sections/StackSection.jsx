import { motion } from "framer-motion";

const stackCategories = [
  {
    title: "FRONTEND",
    items: ["JavaScript", "React", "Next.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "BACKEND",
    items: ["Node.js", "PHP", "Laravel"],
  },
  {
    title: "DATABASE",
    items: ["MySQL", "MongoDB", "Supabase"],
  },
  {
    title: "TOOLS",
    items: ["Git","Github", "Figma","Canva", "VS Code"],
  },
];

const StackSection = () => {
  return (
    <section id="stack" className="py-24 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="mb-12"
      >
        <span className="text-4xl text-amber-600 font-bold tracking-widest flex items-center gap-2 mb-8">
          ✦ MY STACK
        </span>
      </motion.div>

      <div className="space-y-12">
        {stackCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="flex flex-col md:flex-row md:items-start gap-4 md:gap-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold min-w-[200px]">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: i * 0.05 + catIdx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm"
                >
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StackSection;