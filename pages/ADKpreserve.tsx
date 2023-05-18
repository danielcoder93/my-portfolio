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
      <p> Wordpress & HostHub</p>
      {/* <a
        href="https://www.duskre.com/"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      > */}
      COMING SOON
      <LaunchIcon style={{ paddingLeft: ".5rem" }} />
      {/* </a> */}
    </>
  );
}
function Adk() {
  return (
    <IndividualProject
      section1={{
        title: "ADK Preserve",
        body: `The Adirondack Preserve (ADK) offers a variety of lodging options to accommodate guests' varying needs and preferences. From rustic cabins to comfortable lodges, guests can choose the type of accommodation that best suits them. The lodges feature stunning views of the surrounding mountains and pristine lakes, with the property's expansive grounds allowing visitors to explore nature at their own pace. Guests can also enjoy a range of leisure activities in the outdoors, such as hiking, paddling, cross-country skiing, and snowshoeing, with knowledgeable guides available to lead tours and teach new skills. Whether guests are seeking a quiet retreat or a more adventurous vacation, the Adirondack Mountain Club Preserve is the perfect destination for those seeking a rejuvenating experience in the heart of nature.`,
        src: "/adkcell.png",
    alt: "ADK cell phone"
      }}
      leftSection1={{
        title: "Challenge",
        body: `ADK Preserve is a luxury lodging provider in the Adirondack Mountains of New York. They approached our web agency with a challenge of creating a custom website that would integrate seamlessly with Airbnb and VRBO booking systems. ADK Preserve wanted a visually appealing website that would showcase their luxury accommodations while also allowing potential guests to easily book their stay through their preferred booking platform.`,
      }}
      leftsolution={{
        title: "Solution",
        body: ` Our web agency worked closely with ADK Preserve to develop a custom website that met their specific needs. We utilized WordPress and HostHub to create a website that was not only visually stunning but also highly functional. The website was designed to showcase ADK Preserve's luxury accommodations with high-quality images and video content, and an intuitive user interface was incorporated to enhance the user experience.

        To integrate seamlessly with Airbnb and VRBO booking systems, we implemented a custom booking system that automatically synchronizes with these platforms. This feature allows guests to easily book their stay through their preferred booking platform while ensuring that the availability and pricing are always up to date.`,
      }}
      leftresults={{
        title: "Results",
        body: `The website we created for ADK Preserve has effectively conveyed their luxury image to potential guests while also providing seamless integration with Airbnb and VRBO booking systems. The custom booking system has led to increased bookings and revenue for ADK Preserve while also simplifying the booking process for guests. The user-friendly interface has also led to increased engagement, with users spending more time on the website.`,
      }}
      WhiteBox={WhiteBoxw}
      conclusion={{
        title: "Conclusion",
        body: `In conclusion, our web agency has successfully developed a custom website for ADK Preserve that effectively showcases their luxury accommodations and integrates seamlessly with Airbnb and VRBO booking systems. The website's design and functionality have resulted in increased engagement and conversions, leading to more revenue for the company. The ADK Preserve team has reported a significant increase in their booking rates, making it a highly successful project.`,
      }}
    />
  );
}

export default Adk;
