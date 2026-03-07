import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import MobileSidebar from "@/components/MobileSidebar";
import Snowfall from "@/components/Snowfall";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import StackSection from "@/sections/StackSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";

const Layout = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const footerRef = useRef(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setFooterVisible(entry.isIntersecting);
    },
   {
      threshold: 0,
      rootMargin: "0px 0px 150px 0px"
    }
  );

  if (footerRef.current) {
    observer.observe(footerRef.current);
  }

  return () => {
    if (footerRef.current) {
      observer.unobserve(footerRef.current);
    }
  };
}, []);

  return (
    <div className="relative min-h-screen bg-background">
      <Snowfall/>
      <Navbar
        onMobileSidebarToggle={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        isMobileSidebarOpen={mobileSidebarOpen}
      />
      <MobileSidebar isOpen={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)}/>

      <aside
        className={`hidden md:flex flex-col items-center justify-center
        w-[380px] lg:w-[40%] p-6 z-20 top-0 left-0 h-screen fixed
        transition-transform duration-300 ease-out
        ${footerVisible ? "-translate-y-70" : "translate-y-0"}`}
      >
        <ProfileCard />
      </aside>
      <main className="md:ml-[380px] lg:ml-[40%] relative z-10">
        <HeroSection />
        <ProjectsSection />
        <StackSection />
        <ContactSection />
      </main>

      <footer ref={footerRef} className="relative z-30">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;