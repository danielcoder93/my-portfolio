import React from "react";
import Section from "../components/Section";
// import { Grid } from "@mui/material";
import Page from "../components/Page";
import classes from "../styles/AboutUs.module.scss";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Page title="About us">
      <Section bg="light">
       
        <div>
          {/* <p>
          Our agency is committed to providing our clients with the highest
          level of service and expertise. We understand that every client has
          unique needs and goals, and we strive to tailor our approach to meet
          those specific requirements. Our team of experienced professionals is
          dedicated to delivering exceptional value to our clients through a
          combination of strategic planning, innovative solutions, and
          unparalleled customer service. We pride ourselves on our ability to
          understand our client&apos;s needs and develop customized solutions
          that help them achieve their objectives. So whether you&apos;re
          looking to increase revenue, improve efficiency, or enhance your
          brand, we&apos;re here to help. You can trust us to give you the
          support and guidance you need to succeed.
        </p> */}
        <div className={classes.imagecontainer}>
          <Image
            src="/dancamila.png"
            alt="Picture of daniel coder and camila Coder"
            width="0"
            height="0"
            sizes="90vw"
            style={{ width: "auto", height: "auto" }}
            
          />
          </div>
          <h2>Camila Coder</h2>

          <p style={{ paddingBottom: "1.5rem" }}>
            Camila Coder, co-head of our agency, brings a wealth of experience
            and expertise to the table. With a background in both startups and
            large companies like Walmart, she has a unique perspective on the
            challenges and opportunities facing businesses of all sizes. Camila
            has also worked at other agencies, giving her a broad understanding
            of the industry and the ability to provide creative solutions to her
            clients. With her knowledge and experience, Camila is able to
            identify key areas for growth and develop strategies that drive
            results. She has a proven track record of helping companies to
            increase revenue, improve efficiency, and enhance their brand.
            Camila is a leader in her field and her clients trust her to provide
            them with the support and guidance they need to succeed.
          </p>
          <div>
            <h2>Daniel Coder</h2>

            <p>
              Daniel Coder, co-head of our agency, is an experienced
              professional with a diverse background in working with companies
              of all sizes and clients from various industries. He has a wealth
              of experience working with real estate brokers, security
              companies, membership sites, and the hotel/camping industry. He
              has a broad understanding of the unique challenges and
              opportunities facing these industries and the ability to provide
              creative solutions to his clients. He has a proven track record of
              helping companies to increase revenue, improve efficiency, and
              enhance their brand. His ability to understand the specific needs
              of his clients and tailor his approach accordingly has allowed him
              to build solid and long-lasting relationships with them.
              Daniel&apos;s clients trust him to give them the support and
              guidance they need to succeed. He is an expert in his field and
              leads by example to provide the best service and results for the
              agency and its clients.
            </p>
          </div>
        </div>
      </Section>
    </Page>
  );
};

export default AboutUs;
