import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero"; 
import SelectedProject from "@/components/selected-project";
import ContactMe from "@/components/contact-me";
export default function Home() {
  return (
    <div className="bg-gray-900 overflow-hidden">
      <Navbar />
      <Hero />
      <SelectedProject/>
      <ContactMe/>
    </div>
  );
}