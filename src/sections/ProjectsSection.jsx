import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FolderOpen} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Typical Candy",
    subtitle: "E-commerce Platform",
    description: "Thoughtfully crafted digital experience that blends utility and aesthetics into something functional, memorable, and refined.",
    tags: ["React", "JavaScript", "Tailwind"],
    color: "hsl(30, 60%, 35%)",
    link: "#"
  },
  {
    id: 2,
    title: "NURA",
    subtitle: "Brand Website",
    description: "A premium brand identity with immersive visual storytelling and seamless navigation across all devices.",
    tags: ["React", "JavaScript", "Tailwind"],
    color: "hsl(200, 40%, 30%)",
    link: "#"
  },
  {
    id: 3,
    title: "Dashboard Pro",
    subtitle: "Analytics Platform",
    description: "Real-time data visualization dashboard with elegant charts, responsive layout, and intuitive user interface.",
    tags: ["React", "JavaScript", "Tailwind"],
    color: "hsl(150, 30%, 28%)",
    link: "#"
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCounter(entry.isIntersecting);
      },
      { threshold: 0.38 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;

    const viewportCenter = window.innerHeight / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      
      const cardRect = card.getBoundingClientRect();
      const cardCenterY = cardRect.top + cardRect.height / 2;
      
      const distance = Math.abs(cardCenterY - viewportCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveProject(closestIndex);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="px-4 md:px-8 mb-4"
      >
        <span className="text-4xl font-bold tracking-widest text-amber-600 flex items-center gap-2">
          <FolderOpen size={35} /> PROJECTS
          </span>
        <p className="max-w-md mt-4 leading-relaxed">
          Thoughtfully crafted digital experiences that blend utility and aesthetics 
          into something functional, memorable, and refined.
        </p>
      </motion.div>

     
      <AnimatePresence>
        {showCounter && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden md:block fixed left-[calc(50%-350px)] lg:left-[calc(64%-400px)] top-1/2 -translate-y-1/2 z-10 "
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeProject}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-[12rem] lg:text-[16rem] font-bold"
              >
                0{activeProject + 1}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-32 px-4 md:px-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            ref={(el) => (cardRefs.current[index] = el)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:ml-auto max-w-full lg:max-w-[60%]"
          >
            <div
              className="rounded-2xl overflow-hidden aspect-video flex items-end p-6 relative"
              style={{ background: project.color }}
            >
              <div />
              <div className="relative z-10">
                <h3 className="text-3xl mb-1">{project.title}</h3>
                <p className="text-sm ">{project.subtitle}</p>
              </div>
            </div>

            <p className="mt-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.a
              href={project.link}
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 mt-4 text-sm"
            >
              View Project <ArrowRight size={14} />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;