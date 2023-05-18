import React, { FC } from "react";
import classes from "../styles/SectionHowWork.module.scss";
import { Grid } from "@mui/material";
import clsx from "clsx";
import Section from "../components/Section";
import Image from "next/image";
import classed from "../styles/ProjectItem.module.scss"
interface SectionProps {
  title: string;
  body: string;
  src?: string;
  alt?: string;
}
interface IndividualProjectProps {
  section1: SectionProps;
  leftSection1: SectionProps;
  leftsolution: SectionProps;
  leftresults: SectionProps;
  WhiteBox: React.ComponentType;
  conclusion: SectionProps;
}

const IndividualProject: FC<IndividualProjectProps> = ({
  section1,
  leftSection1,
  leftsolution,
  leftresults,
  WhiteBox,
  conclusion,
}) => {
  return (
    <>
      <Section bg="light">
        <h1 className={classes.paddingBtm}>{section1.title}</h1>
        <p className={classes.textCenter}>{section1.body}</p>
        
        {section1.src && section1.alt && (
          <div className={classes.imageCenter}>
          <Image
            className={classed.projectItemImage}
            src={section1.src}
            alt={section1.alt}
            width="0"
            height="0"
            sizes="100vw"
            style={{width:"100%", height: "auto", maxWidth: "400px",}}
          />
          </div>
        )}
      </Section>

      <Section bg="light">
        <Grid container rowSpacing={1}>
          {/* Right side */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <h2>{leftSection1.title}</h2>
                <p>{leftSection1.body}</p>
              </Grid>
              <Grid item xs={12} md={6}>
                <h3>{leftsolution.title}</h3>
                <p>{leftsolution.body}</p>
              </Grid>
              <Grid item xs={12} md={6}>
                <h3>{leftresults.title}</h3>
                <p>{leftresults.body}</p>
              </Grid>
            </Grid>
          </Grid>
          {/* Left side */}
          <Grid item xs={12} md={4}>
            <div
              style={{
                margin: "2rem",
                padding: "2rem",
                backgroundColor: "white",
              }}
            >
              <WhiteBox />
            </div>
          </Grid>
        </Grid>
      </Section>
      <Section bg="light">
        <h2 className={clsx(classes.paddingBottom, classes.textCenter)}>
          {conclusion.title}
        </h2>
        <p className={classes.textCenter}>{conclusion.body}</p>
      </Section>
    </>
  );
};

export default IndividualProject;
