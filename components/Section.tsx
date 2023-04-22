import React, { FC, ReactNode } from "react";
import clsx from "clsx";

import classes from "../styles/Section.module.scss";

const Section: FC<{ children: ReactNode; bg: string, className?: string }> = ({ children, bg, className }) => {
  return (
    <section
      className={clsx(
        classes.section,
        bg === "light" ? classes.lightBg : classes.darkBg,
        className && className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
