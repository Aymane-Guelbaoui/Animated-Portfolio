import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const menuItems = ["Home", "Projects", "Stack", "Contact"];
  const socials = [
    { name: "Github", href: "https://github.com/Aymane-Guelbaoui" },
    { name: "Twitter", href: "https://x.com/AymaneGuelbaoui" },
    { name: "Instagram", href: "https://www.instagram.com/_aymaane_77" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/aymane-guelbaoui" },
  ];

  return (
    <footer id="footer" className="border-t border-border">
      <div className="px-4 md:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-sm font-bold mb-4 border-b pb-2">
              Menu
            </h4>
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm hover:text-amber-600 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 border-b pb-2">
              Socials
            </h4>
            <ul className="space-y-1">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-amber-600 transition-colors duration-200"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between items-end">
            <div />
            <div className="text-right">
              <p className="text-xs font-bold tracking-widest mb-1">LOCAL TIME</p>
              <p className="text-sm">{time}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="mt-6 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;