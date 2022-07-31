import classes from "./Page.module.scss";

const Page = ({ title, children }) => {
  return (
    <>
      <h1 className={classes.pageSpacing}>{title}</h1>
      {children}
    </>
  );
};

export default Page;
