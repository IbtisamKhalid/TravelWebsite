import Navbar from "./MoreThanOnce/Navbar.jsx";
import Hero from "./MoreThanOnce/hero.jsx";
import Footer from "./MoreThanOnce/Footer.jsx";
import { Typography, Box, Button } from "@mui/material";

export default function AboutMe() {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        imgg="https://images.unsplash.com/photo-1467664631004-58beab1ece0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ch1="hc"
        h1t="Your Journey Starts From Here"
        cp="pc"
        pt="Choose Your Favourite Destination"
      />
      <Box container padding={"60px 80px"}>
        <Box>
          <Typography variant="h4" sx={{ fontFamily: "revert-layer" }}>
            MY INTRO
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontFamily: "sans-serif" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero
            magnam porro provident ipsum deserunt perspiciatis cupiditate
            placeat, at molestias! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi nemo et velit beatae adipisci, minima
            similique consequatur voluptates omnis error?
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ fontFamily: "revert-layer" }}>
            SERVICES
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontFamily: "sans-serif" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero
            magnam porro provident ipsum deserunt perspiciatis cupiditate
            placeat, at molestias! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore vero odit aspernatur veniam sed ipsam,
            omnis quos quod. Velit, culpa.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ fontFamily: "revert-layer" }}>
            CONTACT
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontFamily: "sans-serif" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero
            magnam porro provident ipsum deserunt perspiciatis cupiditate
            placeat, at molestias! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore vero odit aspernatur veniam sed ipsam,
            omnis quos quod. Velit, culpa.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ fontFamily: "revert-layer" }}>
            MEET ME
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontFamily: "sans-serif" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero
            magnam porro provident ipsum deserunt perspiciatis cupiditate
            placeat, at molestias! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore vero odit aspernatur veniam sed ipsam,
            omnis quos quod. Velit, culpa.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
