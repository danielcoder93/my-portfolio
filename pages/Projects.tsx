import React from "react";
import Section from "../components/Section";
import ProjectItem from "../components/ProjectItem";
import Page from "../components/Page";
// import duskre from "/public/dusk-re"
const Projects = () => {
  return (
    <Page title="Projects">
      <Section bg="light">
        <ProjectItem
          typeOfProject="WEB DEVELOPMENT"
          title="Value Lock Vip"
          link="/value-lock-vip"
          image="/../public/testimage.jpeg"
          imageAlt="this is a test"
        />
        <ProjectItem
          typeOfProject="Real Estate Company"
          title="Dusk RE"
          link="/Dusk"
          image="/../public/dusk-re.png"
          imageAlt="Dusk RE website"
        />
      </Section>
    </Page>
  );
};

export default Projects;
