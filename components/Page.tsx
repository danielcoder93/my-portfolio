import classes from "../styles/Page.module.scss";
import React, {FC, ReactNode} from 'react'

const Page: FC<{title: string; children:ReactNode}> = ({ title, children }) => {
  return (
    <>
      <h1 className={classes.pageSpacing}>{title}</h1>
      {children}
    </>
  );
};

export default Page;