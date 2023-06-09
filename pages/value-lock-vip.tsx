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
      <p>Shopify</p>
      <a
        href="https://www.valuelocksports.com/"
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
function Value() {
  return (
    <IndividualProject
      section1={{
        title: "Value-lock-vip",
        body: `Value Lock Sports is a team of research analysts who have over 50 years of combined experience in the sports betting industry.  We use Market knowledge, Research, Statistics, Data analysis and numerous other tools to find VALUE on each specific game.  Through our system, we track public betting percentages and line movements to find our VIP clients the biggest edge possible. To top it off, VLS uses an algorithm, which simulates every game 10,000 times and ultimately factors into our WINNING model.  Our system has proven to consistently return profits year after year!  We bet on numbers, not teams!`,
        src: "/vipcell.png",
        alt: "VIP cell phone",
      }}
      leftSection1={{
        title: "Challenge",
        body: `Value Lock Sports (VLS) approached our web agency with a challenge of creating a website that could accurately represent their team of research analysts with over 50 years of combined experience in the sports betting industry. They wanted a website that showcased their value-based approach to sports betting while conveying a sense of professionalism and trustworthiness to potential clients.`,
      }}
      leftsolution={{
        title: "Solution",
        body: ` Our web agency worked closely with VLS to develop a custom website that effectively showcased their services and approach to sports betting. In addition to creating a visually appealing website and incorporating a range of analytical tools, statistics, and an algorithm to create a winning model, we also developed a login system and membership functionality.

        The login system enables registered members to access exclusive betting tips and insights in the VIP section of the website. This feature not only adds value for existing clients but also encourages new visitors to sign up for the membership program. We also incorporated a membership functionality that allows users to manage their account details, including subscription payments and personal information.
        
        `,
      }}
      leftresults={{
        title: "Results",
        body: `Through an expertly designed website with strong SEO practices, we achieved an impressive sales growth of 177.977%. Our user-friendly interface, seamless functionality across devices, and optimized content attracted a larger audience and drove increased organic traffic. By converting visitors into satisfied customers, our website played a vital role in positioning us as a market leader in our industry.`,
      }}
      WhiteBox={WhiteBoxw}
      conclusion={{
        title: "Conclusion",
        body: ` In conclusion, our web agency has successfully developed a custom website for Value Lock Sports that accurately represents their services and approach to sports betting. The website's design and functionality have resulted in increased engagement and conversions, leading to more revenue for the company. The VLS team has reported a significant increase in their client base, making it a highly successful project.`,
      }}
    />
  );
}

export default Value;
