import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero"; 
export default function Home() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
    </div>
  );
}