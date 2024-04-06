import Footer from "./MoreThanOnce/Footer.jsx";
import Hero from "./MoreThanOnce/hero.jsx";
import Navbar from "./MoreThanOnce/Navbar.jsx";
import { Typography, Box, TextField, Button } from "@mui/material";

export default function ContactMe() {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        imgg="https://images.unsplash.com/photo-1467664631004-58beab1ece0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ch1="hc"
        h1t="Contact With Us To Know More"
        cp="pc"
        pt="Message to have a full conversation"
      />
      <Box textAlign={"center"} display={"block"} marginTop={"50px"}>
        <Typography variant="h3">Fill the Form</Typography>
        <TextField
          placeholder=""
          label="Name"
          variant="outlined"
          sx={{ width: "500px", marginBottom: "30px", marginTop: "50px" }}
        />{" "}
        <br />
        <TextField
          placeholder=""
          label="Email"
          variant="outlined"
          sx={{ width: "500px", marginBottom: "30px" }}
        />
        <br />
        <TextField
          placeholder=""
          label="Contact"
          variant="outlined"
          sx={{ width: "500px", marginBottom: "30px" }}
        />
        <br />
        <TextField
          placeholder=""
          type=""
          label="Service Needed"
          variant="outlined"
          sx={{ width: "500px", marginBottom: "30px" }}
        />
        <br />
        <Button
          variant="contained"
          sx={{ width: "100px", marginBottom: "30px" }}
        >
          Submit
        </Button>
      </Box>
      <br />
      <Footer />
    </>
  );
}
