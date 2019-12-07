import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import breakpoints from "../../shared/breakpoints";
import { transitions } from "../../shared/transitions";
import colors from "../../shared/colors";

export const Card = styled(AniLink)`
  position: relative;
  overflow: hidden;
  padding-top: 100%;
  grid-column: span 2;

  ${breakpoints.tablet} {
    padding-top: ${({ index }) => (index % 3 === 0 ? `50%` : `100%`)};

    grid-column: ${({ index }) => (index % 3 === 0 ? `span 2` : `span 1`)};
  }
`;

export const Background = styled.span`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
`;

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
`;

export const Copy = styled.div`
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
  padding: 2rem;

  h2,
  p {
    font-size: 1.8rem;
  }

  color: ${({ client }) => (client === "Binance" ? `#02394A` : colors.white)};

  ${breakpoints.desktop} {
    padding: 4rem;
    top: auto;
    bottom: ${({ client }) => (client === "Binance" ? `auto` : `0`)};

    h2 {
      font-size: 4rem;
    }
  }
`;

export const Client = styled.p`
  font-weight: 200;
  ${breakpoints.desktop} {
    font-weight: 400;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: ${({ index }) => (index % 3 === 0 ? `50%` : `100%`)};
  height: ${({ index }) => (index % 3 === 0 ? `50%` : `100%`)};
  overflow: hidden;
  transform: scale(1);
  ${transitions.satanSnap};
  transform-origin: ${({ client }) => `50%`};

  ${Card}:hover & {
    transform: scale(1.1);
  }

  ${Card}:focus & {
    transform: scale(1.1);
  }

  ${breakpoints.tablet} {
    height: 100%;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 0;
  padding: 1.5rem 4rem;
  text-align: right;
  color: ${colors.white};
  background-color: ${colors.black};
  transform: translateY(6rem);
  ${transitions.mediumSnap};

  ${Card}:hover & {
    transform: translateY(0rem);
  }
  ${Card}:focus & {
    transform: translateY(0rem);
  }

  ${breakpoints.desktop} {
    right: 4rem;
    bottom: ${({ client }) => (client === "Binance" ? `0` : `auto`)};

    transform: ${({ client }) =>
      client === "Binance" ? `translateY(6rem)` : `translateY(-6rem)`};
  }
`;
