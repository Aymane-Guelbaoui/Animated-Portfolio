import { motion } from "framer-motion";

import Tailwind from "@/assets/img/TailwindCSS.png";
import Laravel from "@/assets/img/Laravel.svg";
import Supabase from "@/assets/img/Supabase.svg";
import Canva from "@/assets/img/Canva.png";
import Bootstrap from "@/assets/img/Bootstrap.png";

const stackCategories = [
  {
    title: "FRONTEND",
    items: [
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Bootstrap", src: Bootstrap },
      { name: "Tailwind CSS", src: Tailwind },
    ],
  },
  {
    title: "BACKEND",
    items: [
      { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "Laravel", src: Laravel },
    ],
  },
  {
    title: "DATABASE",
    items: [
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Supabase", src: Supabase },
    ],
  },
  {
    title: "TOOLS",
    items: [
      { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Canva", src: Canva },
      { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    ],
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
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: i * 0.05 + catIdx * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 p-2 cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
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