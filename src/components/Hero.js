import React from "react";
import { Box, Button, Typography } from "@mui/material";
import heroVideo from "../assets/hero-header.mov";
import classes from "./Hero.module.scss";


const Hero = () => {
  return (
    <section className={classes.section}>
      <video
        autoPlay
        muted
        loop
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Typography variant="h3" component="h1" className={classes.title}>
            BUILDING QUALITY WEBSITES IN A TIMELY FASHION
          </Typography>
          <br></br>
          <h3>
            {" "}
            <p>
              Manage your business with an easy-to-use website that converts
              visitors<div></div> to customers, and displays your brand with the
              respect it deserves.{" "}
            </p>
          </h3>
          <div>
            <br></br>
            <Button color="primary" variant="contained">
              VIEW OUR WORK
            </Button>
          </div>
        </Box>
      </div>
    </section>
  );
};

export default Hero;
