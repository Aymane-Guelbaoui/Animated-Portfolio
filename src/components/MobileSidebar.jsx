import { motion, AnimatePresence } from "framer-motion";
import { Home, FolderOpen, Layers, Mail, X } from "lucide-react";
import ProfileCard from "./ProfileCard";



const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Layers, label: "Stack", href: "#stack" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const MobileSidebar = ({ isOpen, onClose }) => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 backdrop-blur-sm z-[60]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] border-l border-border z-[70] overflow-y-auto"
          >
            <div className="p-6">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="mt-12 mb-8">
                <ProfileCard />
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.href)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer"
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;