import { Home, FolderOpen, Layers, Mail, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Theme from "@/pages/Theme/Theme";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Layers, label: "Stack", href: "#stack" },
  { icon: Mail, label: "Contact", href: "#contact" },
  { icon: Theme, label: "Theme", href: "#theme" }
];

const Navbar = ({ onMobileSidebarToggle, isMobileSidebarOpen }) => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:flex items-center gap-1 backdrop-blur-md rounded-3xl border border-border"
      >
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollTo(item.href)}
            className="p-3"
            title={item.label}
          >
            <item.icon size={18} className="transition-transform duration-200 hover:scale-115 cursor-pointer"/>
          </button>
        ))}
      </motion.div>

      <div className="md:hidden fixed top-4 right-4 z-50"> 
        <div className="p-3 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-lg shadow-lg shadow-black/30">
        <button
          onClick={onMobileSidebarToggle}
          className="p-3 rounded-full backdrop-blur-md d-flex shadow-lg shadow-black/30 cursor-pointer"
        >
          
          {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <Theme/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;