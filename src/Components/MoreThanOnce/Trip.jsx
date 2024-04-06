import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const card = (props) => {
  return (
    <Box sx={{padding:"20px 30px",transition:"0.5s ease" ,":hover": {transform:"scale(1.05)"}}}>
    <Card
      sx={{height:"300px",}}
    >
      <CardMedia
        sx={{ height: "150px", margin: "10px 30px" }}
        image="https://images.unsplash.com/photo-1550586678-f7225f03c44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          SWAT PAKISTAN
        </Typography>
        <Typography variant="body2" color="text.secondary">
          BEST PLACE TO SPEND YOUR FREE TIME CALMY AND PEACEFULLY
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
};
const Trip = () => {
  return (
    <Box container sx={{ margin:"0px 20px" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginTop: "50px", fontWeight: "bold",marginBottom:"10px" }}
      >
        Trips Section
      </Typography>
      <Grid container spacing={10} sx={{marginBottom:"75px"}} >
        <Grid item xs={12} sm={4} md={4} lg={4} sx={{}}>{card()}</Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} sx={{}}>{card()}</Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} sx={{}}>{card()}</Grid>
      </Grid>
    </Box>
  );
};

export default Trip;
