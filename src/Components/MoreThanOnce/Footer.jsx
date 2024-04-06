import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Box
      component="div"
      style={{
        border: "1px solid black",
        backgroundColor: "black",
        display: "block",
        padding: "60px 30px",
        color: "white",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Box component="div">
          <Typography variant="h4">Trippy</Typography>
          <Typography variant="h6">Change your Destination Here</Typography>
        </Box>
        <Box component="div">
          <a href="#">
            <FontAwesomeIcon
              className="nav-icons"
              icon="fa-brands fa-facebook-square"
              color="white"
              fontSize={"2rem"}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              className="nav-icons"
              icon="fa-brands fa-instagram-square"
              color="white"
              fontSize={"2rem"}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              className="nav-icons"
              icon="fa-brands fa-twitter-square"
              color="white"
              fontSize={"2rem"}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              className="nav-icons"
              icon="fa-brands fa-behance-square"
              color="white"
              fontSize={"2rem"}
            />
          </a>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box component="div">
          <Typography variant="h6">Projects</Typography>
          <Typography variant="subtitle1">ChangeLog</Typography>
          <Typography variant="subtitle1">Status</Typography>
          <Typography variant="subtitle1">License</Typography>
          <Typography variant="subtitle1">AllVersions</Typography>
        </Box>
        <Box component="div">
          <Typography variant="h6">Community</Typography>
          <Typography variant="subtitle1">Github</Typography>
          <Typography variant="subtitle1">Issues</Typography>
          <Typography variant="subtitle1">Project</Typography>
          <Typography variant="subtitle1">Twitter</Typography>
        </Box>
        <Box component="div">
          <Typography variant="h6">Help</Typography>
          <Typography variant="subtitle1">Support</Typography>
          <Typography variant="subtitle1">Troubleshooting</Typography>
          <Typography variant="subtitle1">COntactUS</Typography>
        </Box>
        <Box component="div">
          <Typography variant="h6">Others</Typography>
          <Typography variant="subtitle1">Term Of Services</Typography>
          <Typography variant="subtitle1">Privacy Policy</Typography>
          <Typography variant="subtitle1">LIcense</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
