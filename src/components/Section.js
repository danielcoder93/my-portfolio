import React from "react";
import clsx from "clsx";

import classes from "./Section.module.scss";

const Section = ({ children, bg }) => {
  return (
    <section
      className={clsx(
        classes.section,
        bg === "light" ? classes.lightBg : classes.darkBg
      )}
    >
      {children}
    </section>
  );
};

export default Section;
