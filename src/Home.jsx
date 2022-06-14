import React from 'react'
import AboutSection from './Components/AboutSection'
import Community from './Components/Community';
import EducationSection from './Components/EducationSection';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Hero from './Components/Hero'
import ProjectSection from './Components/ProjectSection';
import SkillsSection from './Components/SkillsSection';

const Home = () => {
  return (
    <>
    <Header />
    <div id='container'>
    <Hero />
    <AboutSection />
    <SkillsSection />
    <Experience />
    <EducationSection />
    <ProjectSection />
    <Community />
    </div>
    <Footer />
    
    </>
  )
}

export default Home