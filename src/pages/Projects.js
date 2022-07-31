import React from "react";
import Section from "../components/Section";
import ProjectItem from "../components/ProjectItem";
import testimage from "../images/testimage.jpeg";
import duskre from "../images/dusk-re.png";
import Page from "../components/Page";

const Projects = () => {
  return (
    <Page title="Projects">
      <Section bg="light">
        <ProjectItem
          typeOfProject="WEB DEVELOPMENT"
          title="Value Lock Vip"
          link="/value-lock-vip"
          image={testimage}
          imageAlt="this is a test"
        />
        <ProjectItem
          typeOfProject="WORDPRESS"
          title="Dusk RE"
          link="/dusk-re"
          image={duskre}
          imageAlt="Dusk RE website"
        />
      </Section>
    </Page>
  );
};

export default Projects;
