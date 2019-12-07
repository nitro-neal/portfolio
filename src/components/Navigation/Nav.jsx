import React, { useState } from "react";
import NavLink from "./NavLink";
import logo from "../../images/favicon.jpg";
import navArray from "../../shared/navigationArray";
import { Link } from "gatsby";
import { Container, Logo, LinkList, Bar, MenuButton } from "./NavStyles";
import { FaGithub, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import NavLinkIcon from "./NavLinkIcon";

const Nav = ({ toggleNav, visible, animation }) => {
  // This state handles the position of the sliding bar.
  const [position, setPosition] = useState({
    width: 0,
    left: 0,
  });

  // This state handles the opacity of the sliding bar.
  // Also use this to reset the position of bar when mouse leaves list.
  const [active, setActive] = useState(0);

  // Map the sliding bar to the element the mouse is over.
  const mouseOver = target => {
    const barRect = target.getBoundingClientRect();
    setPosition({
      width: barRect.width,
      left: barRect.left + window.scrollX - (window.innerWidth - barRect.width),
    });
  };

  // Make bar visible when mouse enters link list.
  const mouseEnterList = () => {
    setActive(1);
  };

  // Make bar invisible when mouse leaves list.
  const mouseLeaveList = () => {
    setActive(0);
  };

  return (
    <Container>
      <Link to="/">
        <Logo
          style={{
            transform: animation.positive.interpolate(
              y => `translate3d(0, ${y}rem, 0)`
            ),
          }}
          src={logo}
          alt="Neal Roessler - Logo"
        />
      </Link>
      <LinkList
        onFocus={mouseEnterList}
        onBlur={mouseLeaveList}
        onMouseOver={mouseEnterList}
        onMouseOut={mouseLeaveList}
      >
        {navArray.map((item, key) => (
          <NavLink
            mouseOver={mouseOver}
            key={key}
            text={item.text}
            to={item.to}
          />
        ))}
        <NavLinkIcon
          to="https://github.com/nitro-neal"
          icon={<FaGithub />}
          mouseOver={mouseOver}
        />
      </LinkList>
      <Bar position={position} active={active} />
      <MenuButton onClick={toggleNav}>
        {!visible ? <FaBars /> : <FaTimes />}
      </MenuButton>
    </Container>
  );
};

export default Nav;
