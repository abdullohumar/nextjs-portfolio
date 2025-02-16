import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero"; 
import SelectedProject from "@/components/selected-project";
export default function Home() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <SelectedProject/>
    </div>
  );
}