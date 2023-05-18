import React from "react";
import Section from "../components/Section";
import Hero from "../components/Hero";
import Classes from "../styles/Home.module.scss";
import HowWeWork from "../components/SectionHowWork";
import { Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Link from "next/link";

type Item = { name: string; description: string; link: string };

const items: Array<Item> = [
  {
    name: "DUSK RE",
    description:
      "I couldn't be happier with the website that was created for my business by this web agency. After launching our new website, we received numerous compliments from potential clients, and many of them were asking us why we weren't already working together. The website perfectly represented our brand, and the functionality and user experience were top-notch. The team was incredibly professional and easy to work with throughout the entire process. I would highly recommend this web agency to any business owner looking for a high-quality website that will elevate their brand and drive conversions.",
    link: "/Dusk",
  },
  {
    name: "VIP SPORTS",
    description:
      "I am so grateful for the website that was created for my business by this web agency. The team truly listened to my needs and developed a website that perfectly represented my brand and showcased my products. The website is easy to navigate, and the user experience is excellent. The best part is that the website has freed up so much of my time, allowing me to focus on other aspects of my business. I no longer have to worry about maintaining a website or troubleshooting technical issues. The team at this web agency has truly exceeded my expectations, and I would highly recommend them to anyone looking for a high-quality website that will help grow their business.",
    link: "/value-lock-vip",
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
          align-items="center"
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
      {/* <Section bg="light">
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
      </Section> */}
      <Section bg="light">
        <Carousel>
          {items.map((item) => (
            <Item key={item.name} {...item} />
          ))}
        </Carousel>
      </Section>
      <HowWeWork />
    </>
  );
};

function Item(item: Item) {
  return (
    <Section bg="light">
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Link href={item.link}>View Case Study</Link>
    </Section>
  );
}

export default Home;
