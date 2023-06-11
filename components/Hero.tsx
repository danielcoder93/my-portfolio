import React from "react";
import { Box, Button, Typography } from "@mui/material";
import classes from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <section className={classes.section}>
      <video
        autoPlay
        muted
        loop
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: "30px",
        }}
      >
        <source src="./hero-header.mov" type="video/mp4" />
      </video>
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
          paddingX={6}
        >
          <Typography
            variant="h3"
            component="h1"
            className={classes.title}
            paddingBottom={7}
          >
            Transforming ideas into digital solutions
          </Typography>

          <h3 style={{ textAlign: "center" }}>
            Manage your business with an easy-to-use website that converts
            visitors to customers/clients
          </h3>
          <div>
            <Button
              href="/allprojects"
              size="large"
              variant="contained"
              className={classes.button}
            >
              VIEW OUR WORK
            </Button>
          </div>
        </Box>
      </div>
    </section>
  );
};

export default Hero;
