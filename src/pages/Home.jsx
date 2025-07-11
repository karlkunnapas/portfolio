import { StarBackground } from "@/components/StarBackground.jsx";
import { NavBar } from "@/components/NavBar.jsx";
import { HeroSection } from "@/components/HeroSection.jsx";
import { AboutSection } from "@/components/AboutSection.jsx";
import { ProjectsSection } from "@/components/ProjectsSection.jsx";
import { ContactSection } from "@/components/ContactSection.jsx";
import { Footer } from "@/components/Footer.jsx";


export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Background effects */}
            <StarBackground />
            {/* Navbar */}
            <NavBar />
            {/* Main content */}
            <main>
                <HeroSection />
                <AboutSection />
                <ProjectsSection/>
                <ContactSection/>
            </main>
            {/* Footer */}
            <Footer/>

    </div>
    );
};