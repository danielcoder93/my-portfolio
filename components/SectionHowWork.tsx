import Section from "./Section";
import { Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import classes from "../styles/SectionHowWork.module.scss";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";

import MuiAccordionSummary from "@mui/material/AccordionSummary";
const HowWeWork = () => {
  return (
    <Section bg="light">
      <Grid container spacing={6} direction="row">
        <Grid item xs={12} md={4}>
          <h2 className={classes.paddingBtm}>
            A web agency that goes the extra mile. Are we a match?
          </h2>
          <p>
            We would love to work with you, but we understand that you may have
            additional questions. This quick Q&A covers a lot of the basics. If
            you have any further questions, don't hesitate to reach out.
          </p>
        </Grid>
        <Grid item xs={12} md={8}>
          <ControlledAccordions />
        </Grid>
      </Grid>
    </Section>
  );
};

const ControlledAccordions = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        className={classes.accordion}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <MuiAccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">
            How much will it cost to design and develop my website?
          </Typography>
        </MuiAccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography>
            Each business/s needs are different, so due to variations in scope,
            pricing from one web design to the next can be quite different. Our
            typical end-to-end website redesign costs $10,000-$100,000.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.accordion}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <MuiAccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h5">
            How long does it take to build my website?
          </Typography>
        </MuiAccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography>
            Similar to questions regarding website cost, the timeline will vary
            greatly based on the scope of your web design project. Typically,
            our end-to-end build projects take 2-4 months to complete.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.accordion}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <MuiAccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h5">
            What size and type of companies do you work with?
          </Typography>
        </MuiAccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography>
            We have an even balance of start-ups, small businesses, non-profits,
            and enterprise clients across a multitude of industries. To get a
            better sense of our wide range of web design projects, check out our
            client/s list.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.accordion}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <MuiAccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography variant="h5">
            What makes us different from every other web design and web
            development agency?
          </Typography>
        </MuiAccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography>We know</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default HowWeWork;
