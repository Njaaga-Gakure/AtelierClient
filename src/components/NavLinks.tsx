import { type FC } from "react";
import { navLink } from "../utils/data";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
type NavLinkProps = {
  navLinks: navLink[];
};

const NavLinks: FC<NavLinkProps> = ({ navLinks }) => {
  return (
    <Wrapper>
      {navLinks.map(({ id, link, path }) => {
        return (
          <NavLink className="nav__link" key={id} to={path}>
            {link}
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

export default NavLinks;

const Wrapper = styled.ul`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    gap: 1rem;
    .nav__link {
      letter-spacing: var(--letter-spacing-1);
      text-transform: capitalize;
    }
    .nav__link--active {
      color: var(--primary-500);
    }
  }
`;
