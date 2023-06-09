import CalendlyForm from "../components/CalendlyForm";
import Section from "../components/Section";
import classes from "../styles/Calendly.module.scss";
export default function Home() {
  return (
    <Section bg="light">
      <div className={classes.textAlign}>
        <h1 className={classes.padding}>Book Now.</h1>
        <h3 style={{ color: "rgb(104,104,104)" }}>
          Skip the wait and book your discovery call with our co-founder, Dan
          Coder now.
        </h3>{" "}
      </div>{" "}
      <CalendlyForm />
    </Section>
  );
}
