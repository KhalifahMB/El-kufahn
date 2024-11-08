import {
  Navbar,
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from "./components/";

function App() {
  return (
    <>
      <div className="bg-red-700">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
