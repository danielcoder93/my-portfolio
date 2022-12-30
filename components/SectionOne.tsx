import React from "react";
import { FC } from "react";
import Section from "./Section";
import classes from "../styles/SectionOne.module.scss";

const SectionOne: FC<{ title: string; text: string }> = (props) => {
  const { title, text } = props;
  {
    return (
       
      <Section bg="light">
         <div className={classes.firstText}>
          <h2>{title}</h2>
          <h4>{text}</h4>
          </div>
      </Section>
      
    );
  }
};

export default SectionOne;
