import React from "react";
import IndividualProject from "../components/IndividualProject";
import LaunchIcon from "@mui/icons-material/Launch";

function WhiteBoxw() {
  return (
    <>
      <h3>What We Did</h3>
      <p>
        Digital Strategy
        <br />
        UI/UX
        <br />
        Website Design
        <br />
        Website Development
        <br />
        Development
      </p>
      <h3 style={{ paddingTop: ".5rem" }}>Platform</h3>
      <p> Wordpress & Frontity</p>
      <a
        href="https://www.duskre.com/"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        View live site
        <LaunchIcon style={{ paddingLeft: ".5rem" }} />
      </a>
    </>
  );
}
function Dusk() {
  return (
    <IndividualProject
      section1={{
        title: "Dusk",
        body: `Dusk Group is an innovative real estate company founded by Uriel
    Setareh and Kevin Darouvar in 2022. The company provides real estate
    services to individuals, family offices, corporations, and
    institutions. The company mission is to determine and implement
    quality real estate solutions tailored to its clients needs. The
    company prides itself on prioritizing the relationships it builds with
    its clients, offering the same standard of professionalism and
    attention, regardless of deal size. The company approached our web
    agency with the challenge of creating a website that effectively
    showcased its services and values to its clients`,
    src: "/Duskcell.png",
    alt: "Dusk cell phone"
      }}
      leftSection1={{
        title: "Challenge",
        body: `Dusk Group faced the challenge of creating a website
    representing its core values and effectively showcasing its
    real estate services. The company aimed to build a website to
    attract potential clients and provide an easy-to-use platform
    to showcase its properties. Additionally, the website had to
    be optimized for search engines to increase visibility and
    attract more clients.`,
      }}
      leftsolution={{
        title: "Solution",
        body: `   Our web agency utilized a combination of WordPress and React
        to develop a custom solution for Dusk Group challenge
        of creating a highly customized website that effectively
        showcased their real estate services. In addition, we worked
        closely with Dusk Group to create an engaging and visually
        appealing website with a user-friendly interface optimized for
        search engines. Our custom solution was tailored to Dusk
        Group's specific needs and preferences, resulting in a
        highly effective and successful website. The website&apos;s
        search engine optimization efforts led to increased visibility
        and traffic, resulting in more conversions and revenue. The
        company reported a significant increase in clients and
        revenue, making it a highly successful project.`,
      }}
      leftresults={{
        title: "Results",
        body: ` The website we created for Dusk Group achieved the
        company's goals and objectives. The website was highly
        engaging, attracting potential clients and effectively
        showcasing the company's real estate services. In
        addition, the website's design and user interface
        enhanced the user experience, increasing engagement and
        customer satisfaction. The company has reported a significant
        increase in the number of clients, which has led to a rise in
        revenue. Additionally, the website's search engine
        optimization efforts have increased visibility and traffic,
        leading to more conversions and revenue.`,
      }}
      WhiteBox={WhiteBoxw}
      conclusion={{
        title: "Conclusion",
        body: ` In conclusion, our web agency utilized WordPress and React to develop
        a custom solution that effectively addressed the challenge of creating
        a customized website for Dusk Group. Our website was visually
        appealing, user-friendly, and optimized for search engines. Our custom
        solution resulted in a highly effective and successful website, with
        increased revenue and client acquisition for Dusk Group`,
      }}
    />
  );
}

export default Dusk;
