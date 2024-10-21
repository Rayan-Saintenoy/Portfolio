import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projet from "@/components/Projet";
import Technologie from "@/components/Technologie";

export default function Home() {
  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <div className="overflow-x-hidden">
        <Navbar />
        <About />
        <Projet />
        <Technologie />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
