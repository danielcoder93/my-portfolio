import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyForm = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/createdrevolution" />
    </div>
  );
};

export default CalendlyForm;
