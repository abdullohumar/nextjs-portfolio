import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero"; 
import SelectedProject from "@/components/selected-project";
import ContactMe from "@/components/contact-me";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <Hero />
      <SelectedProject/>
      <ContactMe/>
      <div className="h-12"/>
      <Footer/>
    </div>
  );
}