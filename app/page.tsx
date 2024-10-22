import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="z-0 overflow-y-scroll overflow-x-hidden text-white bg-[rgb(36,36,36)] h-screen scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />

      <section id="hero" className="">
        <Hero />
      </section>
    
      <section id="about" className="">
        <About />
      </section>

      <section id="experience" className="">
        <WorkExperience />
      </section>

      <section id="skills" className="">
        <Skills />
      </section>

      <section id="projects" className="">
        <Projects />
      </section>

      <section id="contact" className="">
        <ContactMe />
      </section>
    </div>
  );
}
