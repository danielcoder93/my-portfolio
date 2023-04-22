import React from "react";
import classes from "../styles/SectionHowWork.module.scss";
import { Grid } from "@mui/material";
import clsx from "clsx";
import Dusks from "../styles/Dusks.module.scss";
import Page from "../styles/Page.module.scss";
import Section from "../components/Section";
function Dusk() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Section bg="light">
        <h1 className={classes.paddingBtm}>Dusk</h1>
        <h3 className={classes.textCenter}>
          Dusk Group is an innovative real estate company founded by Uriel
          Setareh and Kevin Darouvar in 2022. The company provides real estate
          services to individuals, family offices, corporations, and
          institutions. The company&apos;s mission is to determine and implement
          quality real estate solutions tailored to its client&apos;s needs. The
          company prides itself on prioritizing the relationships it builds with
          its clients, offering the same standard of professionalism and
          attention, regardless of deal size. The company approached our web
          agency with the challenge of creating a website that effectively
          showcased its services and values to its clients
        </h3>
      </Section>

      <Section bg="light" className={Dusks.container}>
        <div className={Dusks.header}>
          <h2 className={clsx(classes.textCenter, classes.paddingBottom)}>
            Challenge
          </h2>

          <h3 className={clsx(classes.textCenter, classes.paddingBtm)}>
            Dusk Group faced the challenge of creating a website representing
            its core values and effectively showcasing its real estate services.
            The company aimed to build a website to attract potential clients
            and provide an easy-to-use platform to showcase its properties.
            Additionally, the website had to be optimized for search engines to
            increase visibility and attract more clients.
          </h3>
        </div>
        <div className={Dusks.main1}>
          <h2 className={clsx(classes.paddingBottom, classes.textCenter)}>
            Solution
          </h2>
          <h3 className={classes.textCenter}>
            Our web agency utilized a combination of WordPress and React to
            develop a custom solution for Dusk Group&apos;s challenge of
            creating a highly customized website that effectively showcased
            their real estate services. In addition, we worked closely with Dusk
            Group to create an engaging and visually appealing website with a
            user-friendly interface optimized for search engines. Our custom
            solution was tailored to Dusk Group&apos;s specific needs and
            preferences, resulting in a highly effective and successful website.
            The website&apos;s search engine optimization efforts led to
            increased visibility and traffic, resulting in more conversions and
            revenue. The company reported a significant increase in clients and
            revenue, making it a highly successful project.
          </h3>
        </div>
        <div className={Dusks.main2}>
          <h2 className={clsx(classes.paddingBottom, classes.textCenter)}>
            Results
          </h2>
          <h3 className={classes.textCenter}>
            The website we created for Dusk Group achieved the company&apos;s
            goals and objectives. The website was highly engaging, attracting
            potential clients and effectively showcasing the company&apos;s real
            estate services. In addition, the website&apos;s design and user
            interface enhanced the user experience, increasing engagement and
            customer satisfaction. The company has reported a significant
            increase in the number of clients, which has led to a rise in
            revenue. Additionally, the website&apos;s search engine optimization
            efforts have increased visibility and traffic, leading to more
            conversions and revenue.
          </h3>
        </div>
        <div className={Dusks.footer}>
          <h2 className={clsx(classes.paddingBottom, classes.textCenter)}>
            Conclusion
          </h2>
          <h3 className={classes.textCenter}>
            In conclusion, our web agency utilized WordPress and React to
            develop a custom solution that effectively addressed the challenge
            of creating a customized website for Dusk Group. Our website was
            visually appealing, user-friendly, and optimized for search engines.
            Our custom solution resulted in a highly effective and successful
            website, with increased revenue and client acquisition for Dusk
            Group
          </h3>
        </div>
      </Section>
    </div>
  );
}

export default Dusk;
