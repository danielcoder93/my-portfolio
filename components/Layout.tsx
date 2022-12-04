import React from "react";
import Header from "./Header";

import classes from "../styles/Layout.module.scss";
import {ReactNode, FC} from "react";

const Layout:FC<{children: ReactNode }>  = ({ children }) => {
  return (
    <>
      <Header />
      <div className={classes.container}>{children}</div>
    </>
  );
};

export default Layout;
