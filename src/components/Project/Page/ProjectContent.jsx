import React from "react";
import styled from "styled-components";
import {
  LeftContentBlock,
  RightContentBlock,
  MiddleContentBlock,
} from "./ContentBlocks";

const ProjectContent = ({ color, client, content }) => {
  return (
    <ProjectContentContainer color={color} client={client}>
      {content.map(({ image, title, copy, layout, video }, i) => {
        if (image !== null) {
          console.log(image);
          if (!image.childImageSharp.fluid.src.includes("/portfolio/")) {
            image.childImageSharp.fluid.src = image.childImageSharp.fluid.src.replace(
              "/static/",
              "/portfolio/static/"
            );
          }

          if (!image.childImageSharp.fluid.srcSet.includes("/portfolio/")) {
            image.childImageSharp.fluid.srcSet = image.childImageSharp.fluid.srcSet.replace(
              /\/static/g,
              "/portfolio/static"
            );
          }
        }
        if (layout === "left") {
          return (
            <LeftContentBlock
              key={i}
              index={i}
              image={image}
              title={title}
              copy={copy}
              layout={layout}
              video={video}
              client={client}
              color={color}
            />
          );
        } else if (layout === "right") {
          return (
            <RightContentBlock
              key={i}
              index={i}
              image={image}
              title={title}
              copy={copy}
              layout={layout}
              video={video}
              client={client}
              color={color}
            />
          );
        } else if (layout === "middle") {
          return (
            <MiddleContentBlock
              key={i}
              index={i}
              image={image}
              title={title}
              copy={copy}
              layout={layout}
              video={video}
              client={client}
              color={color}
            />
          );
        } else {
          return null;
        }
      })}
    </ProjectContentContainer>
  );
};

const ProjectContentContainer = styled.div`
  position: relative;
  overflow: hidden;
  grid-column: 1 / -1;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  margin-top: 6rem;
`;

export default ProjectContent;
