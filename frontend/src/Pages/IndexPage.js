import React from "react";
import HeaderSection from "../components/HeaderSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";
import ScrollToTop from "react-scroll-to-top";

const IndexPage = () => {
  return (
    <>
      <HeaderSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <ScrollToTop smooth={true} width="20" height="20" className="flex p-2" />
    </>
  );
};

export default IndexPage;
