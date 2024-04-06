import Footer from "./MoreThanOnce/Footer.jsx";
import Hero from "./MoreThanOnce/hero.jsx";
import Navbar from "./MoreThanOnce/Navbar.jsx";
import Trip from "./MoreThanOnce/Trip.jsx";

export default function Services() {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        imgg="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1496&q=80"
        ch1="hc"
        h1t="The Services That We Provide"
        cp="pc"
        pt="Choose The Service You Want"
      />
      <Trip />
      <Footer />
    </>
  );
}
