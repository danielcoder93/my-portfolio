import React from "react";
import Section from "../components/Section";
import Hero from "../components/Hero";
import Classes from "../styles/Home.module.scss";
import HowWeWork from "../components/SectionHowWork";
import { Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const items = [
  {
    name: "DUSK RE",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "VIP SPORTS",
    description: "Hello World!",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Section bg="light">
        <Grid
          container
          spacing={"1rem"}
          direction="row"
          text-align="center"
          alignItems="center"
          justifyContent="center"
          padding={"2rem 0"}
        >
          <Grid item xs={12} md={6} lg={3}>
            <h2>High-Quality Custom Designs</h2>
            <p>
              Our creative team specializes in creating intuitive, modern, and
              impactful designs tailored meet each individual customer’s needs.
            </p>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <h2>Proven Development Process</h2>
            <p>
              We use a proven development process to ensure efficiency,
              accuracy, and the highest level of quality for all of our
              projects.
            </p>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <h2>Wealth of Experience</h2>
            <p>
              Our talented team of web developers, architects, and designers has
              a wealth of experience developing websites and web applications
              for businesses of all sizes.
            </p>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <h2>Comprehensive Support</h2>
            <p>
              We provide comprehensive support packages to ensure that our
              customers have the resources they need to constantly improve their
              websites. From weekly check-ins, to bug fixes and maintenance, we
              strive to keep our customers’ websites up-to-date and running
              smoothly.
            </p>
          </Grid>
        </Grid>
      </Section>
      <Section bg="light">
        <p>
          As a web agency, we are committed to delivering the highest quality
          products and services to your clients. Our team of professionals is
          highly skilled and experienced in all aspects of web design and
          development, ensuring that every project is completed with precision
          and attention to detail.
        </p>
        <p>
          In addition to technical expertise, our agency values strong
          communication and collaboration with clients. We understand that a
          successful project requires a close working relationship and a deep
          understanding of our clients needs and goals. By working closely with
          our clients and keeping them informed every step of the way, you are
          able to deliver personalized solutions that exceed their expectations.
          With our agency, clients can trust that their website will be in good
          hands from start to finish.
        </p>
      </Section>
      <Section bg="light">
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Section>
      <HowWeWork />
    </>
  );
};

function Item(props: any) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Home;
