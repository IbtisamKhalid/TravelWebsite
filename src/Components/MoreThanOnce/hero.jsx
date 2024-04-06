import "./Hero.css";
import { Typography, Button, Box } from "@mui/material";
const hero = (props) => {
  const hc = {
    fontSize: "3rem",
    fontWeight: "800",
    color: "white",
  };
  const Hero = {
    width: "100%",
    height: "100vh",
    position: "relative",
    bgcolor: "bisque",
  };
  const picc = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  };
  const txtdiv = {
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  };
  const pc = {
    fontSize: "1.3rem",
    color: "white",
    padding: "0.5rem 0 2rem 0",
  };
  return (
    <>
      <Box className={props.cName} sx={Hero}>
        <Box
          component="img"
          sx={picc}
          alt="The house from the offer."
          src={props.imgg}
        />
        <Box sx={txtdiv}>
          <Typography variant="h3" sx={hc}>
            {props.h1t}
          </Typography>
          <Typography variant="h5" sx={pc}>
            {props.pt}
          </Typography>
          <Button
            className="buton"
            href="https://www.w3schools.com/cssref/css3_pr_animation.php"
            variant={props.style}
            sx={props.buttonStyle}
          >
            {props.btnt}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default hero;
