import profileImg from "../assets/img/profile.jpeg";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const SocialLinks = [
  { icon: Github, href: "https://github.com/Aymane-Guelbaoui" },
  { icon: Twitter, href: "https://x.com/AymaneGuelbaoui" },
  { icon: Instagram, href: "https://www.instagram.com/_aymaane_77" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aymane-guelbaoui" },
];

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="ProfileCard rounded-2xl p-6 max-w-[340px] w-full mx-auto"
      style={{
        backgroundColor: "var(--profile-bg)",
        color: "var(--profile-text)",
        borderColor: "var(--profile-border)",
      }}
    >
      
      <div className="relative mb-5">
        <div
          className="rounded-xl overflow-hidden border-4 shadow-lg"
          style={{ borderColor: "var(--profile-border)" }}
        >
          <img src={profileImg} alt="Profile" className="w-full aspect-[4/5]" />
        </div>

        <div
          className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-dashed rounded-tl-2xl"
          style={{ borderColor: "var(--profile-border)" }}
        />
        <div
          className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-dashed rounded-br-2xl"
          style={{ borderColor: "var(--profile-border)" }}
        />
      </div>

      <h2 className="text-2xl font-bold text-center">
        AYMANE
      </h2>

      
      <p
        className="text-md text-center leading-relaxed mb-5 mt-4"
        style={{ color: "var(--profile-bio)" }}
      >
        A Software Engineer who has developed countless innovative solutions.
      </p>

      
      <div className="flex justify-center gap-4 text-amber-600 ">
      {SocialLinks.map(({ icon: Icon, href }, i) => (
        <a key={i} href={href} className="transition-transform duration-200 hover:scale-115">
          <Icon size={20} />
        </a>
      ))}
      </div>
    </motion.div>
  );
};

export default ProfileCard;