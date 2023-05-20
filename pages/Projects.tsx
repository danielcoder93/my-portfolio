import React from "react";
import Section from "../components/Section";
import ProjectItem from "../components/ProjectItem";
import Page from "../components/Page";
// import duskre from "/public/dusk-re"

const Projects = () => {
  return (
    <Page title="Projects">
      <Section bg="light">
        <h3>
          Here at created revolution we are dedicated to delivering exceptional
          value to our clients through our unparalleled service and expertise.
        </h3>
        <ProjectItem
          typeOfProject="WEB DEVELOPMENT"
          title="Value Lock Vip"
          link="/value-lock-vip"
          image="/duskfull.png"
          imageAlt="Dusk images"
        />
        <ProjectItem
          typeOfProject="Real Estate Company"
          title="Dusk RE"
          link="/Dusk"
          image="/vipfull.png"
          imageAlt="VIP Sports website images"
        />
        <ProjectItem
          typeOfProject="Lodging"
          title="ADK Preserve"
          link="/ADKpreserve"
          image="/adkfull.png"
          imageAlt="Dusk RE website"
        />
      </Section>
    </Page>
  );
};

export default Projects;
