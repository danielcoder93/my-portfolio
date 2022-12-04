import React, { FC, ReactNode } from "react";
import clsx from "clsx";

import classes from "../styles/Section.module.scss";

const Section: FC<{ children: ReactNode; bg: string }> = ({ children, bg }) => {
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
