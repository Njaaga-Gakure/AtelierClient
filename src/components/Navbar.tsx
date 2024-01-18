import styled from "styled-components";
import NavLinks from "./NavLinks";
import { navLinks } from "../utils/data";
import { FaOpencart } from "react-icons/fa";
import { CiMenuBurger, CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="content--center nav--center">
        <div className="logo">
          <h3 className="logo__text">
            <span>Atel</span>ier
          </h3>
        </div>
        <NavLinks navLinks={navLinks} />
        <button className="nav__toggle">
          <CiMenuBurger />
        </button>
        <div className="nav__profile">
          <NavLink className="nav__cart" to="/cart">
            <FaOpencart />
          </NavLink>
          <button className="nav__avatar">
            <CiUser />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  height: 4rem;
  display: flex;
  align-items: center;
  .nav--center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid black; */
  }

  .nav__profile {
    display: none;
  }
  .logo__text {
    letter-spacing: var(--letter-spacing-1);
    color: var(--gray-600);
    span {
      font-weight: 700;
      color: var(--primary-500);
    }
  }
  .nav__toggle {
    background: transparent;
    display: flex;
    align-items: center;
    border: none;
    font-size: 1.5rem;
  }
  @media (min-width: 800px) {
    .nav__toggle {
      display: none;
    }
    .nav__profile {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .nav__cart {
      font-size: 1.5rem;
    }
    .nav__avatar {
      background: transparent;
      display: flex;
      align-items: center;
      border: none;
      font-size: 1.5rem;
    }
  }
`;
