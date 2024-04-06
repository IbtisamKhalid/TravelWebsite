import "./Destination.css";

import { Box, Typography } from "@mui/material";

export default function Destination(props) {
  return (
    <>
      <Box>
        <Box
          className="Destination-container"
          sx={{ margin: "4rem  6rem", textAlign: "center" }}
        >
          <Typography variant="h5" className="h1t" sx={{ fontSize: "3rem" }}>
            {props.h1t}
          </Typography>
          <Typography variant="h6" className="p1t" sx={{ p: "5px 0 70px 0" }}>
            {props.p1t}
          </Typography>
          <Box className={props.cName} sx={props.style}>
            <Box
              className="Destination-desc"
              sx={{ textAlign: "start", width: "45%", fontSize: "1.1rem" }}
            >
              <Typography variant="h5">{props.h2t}</Typography>
              <Typography variant="h6" className="p2t">
                {props.p2t}
              </Typography>
            </Box>
            <Box
              className="Destination-img"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
                position: "relative",
                zIndex: "-99"
              }}
            >
              <img src={props.img1} alt="" />
              <img src={props.img2} alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
