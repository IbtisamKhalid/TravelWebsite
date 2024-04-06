import Hero from "./MoreThanOnce/hero.jsx";
import Navbar from "./MoreThanOnce/Navbar.jsx";
import Trip from "./MoreThanOnce/Trip.jsx";
import Destination from "./MoreThanOnce/Destination.jsx";
import Footer from "./MoreThanOnce/Footer.jsx";
import Ik from "./MoreThanOnce/Ik.png";

export default function Home() {
  const destinationStyle1 = {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "4.5rem",
    display: "flex",
  };
  const destinationStyle2 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "3rem",
    flexDirection: "row-reverse",
  };
  const buttonStyle = {
    p: "1rem 2rem",
    bgcolor: "rgb(255, 255, 255)",
    borderRadius: "8px",
    color: "black",
    fontFamily:
      "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    fontSize: "1.1rem",
    fontWeight: "bold",
    "&:hover": {
      bgcolor: "rgb(235, 229, 219)",
      cursor: "pointer",
    },
  };
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        imgg="https://images.unsplash.com/photo-1516438214679-78119bf1f252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
        ch1="hc"
        h1t="Your Journey Starts From Here"
        cp="pc"
        pt="Choose Your Favourite Destination"
        buttonStyle={buttonStyle}
        style="contained"
        btnt="Let's Go"
      />
      <Destination
        h1t="Popular Destinations"
        p1t="Tours gives you the oppurtunity to see alot, within shortest time frame"
        cName="Destination-areas"
        style={destinationStyle1}
        h2t="Northern Areas of Pakistan"
        p2t="These are the Northern areas of the Pakistan. These are considerd to be one of the best places in the earth to spend the time that you want to be spending in peaceful and calm,Pakistan is famous for its beautiful landscapes highest mountainous peaks for its Hospitatlity.the people here are so kind and welcoming that who ever visits the country never wants to leave given the chance. Pakistan is rich in it History of the continent which makes a very good touring spots"
        img1="https://images.unsplash.com/photo-1514558427911-8e293bebf18c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        img2="https://images.unsplash.com/photo-1550586678-f7225f03c44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      />
      <Destination
        cName="Destination-areas2"
        style={destinationStyle2}
        h2t="Northern Areas of Pakistan"
        p2t="These are the Northern areas of the Pakistan. These are considerd to be one of the best places in the earth to spend the time that you want to be spending in peaceful and calm,Pakistan is famous for its beautiful landscapes highest mountainous peaks for its Hospitatlity.the people here are so kind and welcoming that who ever visits the country never wants to leave given the chance. Pakistan is rich in it History of the continent which makes a very good touring spots"
        img1="https://images.unsplash.com/photo-1550586678-f7225f03c44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        img2="https://images.unsplash.com/photo-1514558427911-8e293bebf18c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      />
      <Trip />
      <Footer />
    </>
  );
}
