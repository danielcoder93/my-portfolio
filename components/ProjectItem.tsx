import { Grid } from "@mui/material";
import Link from "next/link";
import classes from "../styles/ProjectItem.module.scss";
import { FC } from "react";

const ProjectItem: FC<{
  title: string;
  typeOfProject: string;
  link: string;
  image: string;
  imageAlt: string;
}> = (props) => {
  const { title, typeOfProject, link, image, imageAlt } = props;
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      padding={"2rem 0"}
    >
      <Grid item xs={12} md={4}>
        <div className={classes.textGrid}>
          <h4>{typeOfProject}</h4>
          <h2>{title}</h2>
          <Link href={link}>View Case Study</Link>
        </div>
      </Grid>
      <Grid item xs={12} md={8}>
        <img className={classes.projectItemImage} src={image} alt={imageAlt} />
      </Grid>
    </Grid> 
  );
};

export default ProjectItem;
