import React from "react";
import SEO from "../components/Layout/SEO";
import { ContentContainer } from "../components/Common/Container";
import { Link } from "gatsby";
import { animations } from "../shared/transitions";

const About = () => {
  return (
    <>
      <SEO title="About" />
      <ContentContainer style={animations.verticleSlide(`15rem`, 0)}>
        <h1>About</h1>
        <p>
          I'm a full stack engineer currently working on projects here in Austin
          Texas.
          <br />
          <br />
          I graduated from Texas A&M University with a degree in computer
          science in 2012. After graduation I worked in a software consulting
          company in Houston for 2 years. I worked in onsite in many fields and
          businesses including and Macquarie -energy trading bank and Houston
          Chronicle - a large houston news site.
          <br />
          <br />
          After my time in Houston I went to Seattle to work for Amazon for 4
          years. At Amazon I did warehouse robotics software for 2 years and gps
          mapping software similar to google maps for 2 years. I worked with
          service oriented architecture and a huge portion of the AWS stack. I
          developed multiple new applications from start to finish to help
          associates get packages out of the warehouse. These systems were built
          for scalability and serve hundreds of requests a second in a time
          sensitive manner.
          <br />
          <br />
          I also worked with ML models on how to predict traffic speed and
          driver activity classification. We worked with a massive dataset of
          all drivers in the Amazon network. After time at Amazon I took a year
          off to travel the world! It was an amazing year and I worked along the
          way on projects at coffee shops and coworking places. I lived in Bali
          for 2 months to work at a co-working space. I created cryptocurrency
          webapps and mobile games. Recently I have moved back to Texas from my
          travels to work fulltime from Austin.
          <br />
          <br />
          Outside of work I like to work on full stack web applications with a
          combination of React and backend services like Firebase. This allows
          me play around with new technology and gives me a better understanding
          of the new hotness digital industry as a whole.
          <br />
          <br />
          If I'm not desiging or coding something I'll be gaming, drinking
          coffee or doing some travelling.
          <br />
          <br />
          If that sounds like someone you’d like to collaborate with then{" "}
          <Link to="/contact">get in touch.</Link>
        </p>
      </ContentContainer>
    </>
  );
};

export default About;
