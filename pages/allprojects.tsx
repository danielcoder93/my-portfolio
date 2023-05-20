import React from "react";
import Section from "../components/Section";
import ProjectItem from "../components/ProjectItem";
import Page from "../components/Page";
import duskre from "../public/duskfull.png";
import vls from "../public/vipfull.png";
import adk from "../public/adkfull.png";

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
          image={vls}
          imageAlt="Value lock vip"
        />
        <ProjectItem
          typeOfProject="Real Estate Company"
          title="Dusk RE"
          link="/duskre"
          image={duskre}
          imageAlt="dusk re"
        />
        <ProjectItem
          typeOfProject="Lodging"
          title="ADK Preserve"
          link="/adkpreserve"
          image={adk}
          imageAlt="ADL Preserve"
        />
      </Section>
    </Page>
  );
};

export default Projects;
