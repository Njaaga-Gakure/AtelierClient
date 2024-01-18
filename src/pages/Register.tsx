import { ChangeEvent, useState } from "react";
import { FormRow } from "../components";
import styled from "styled-components";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
};

const Register = () => {
  const [isMember, setIsMember] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => {
      return { ...prevUser, [name]: value };
    });
  };
  return (
    <Wrapper className="register">
      <div className="register__banner">
        <div>
          <h2 className="register__tagline">
            <span>
              Your Imagination, <br />
            </span>
            Our Canvas.
          </h2>
          <p className="register__description">
            Elevate your space with curated masterpieces. Bid, win, and adorn
            your world with artistry.
          </p>
        </div>
      </div>
      <form className="register__form">
        <h5 className="form__title">{isMember ? "Login" : "Register"}</h5>
        {!isMember && (
          <FormRow
            name="firstName"
            label="first name"
            type="text"
            handleChange={handleChange}
          />
        )}
        {!isMember && (
          <FormRow
            name="lastName"
            label="last name"
            type="text"
            handleChange={handleChange}
          />
        )}
        <FormRow name="email" type="email" handleChange={handleChange} />
        {!isMember && (
          <FormRow
            name="phoneNumber"
            label="phone number"
            type="text"
            handleChange={handleChange}
          />
        )}
        <FormRow name="password" type="password" handleChange={handleChange} />
        <button className="btn btn--secondary btn--dark btn--block form__btn">
          {isMember ? "Login" : "Register"}
        </button>
        {isMember ? (
          <p className="form__fine-print">
            Not a member?{" "}
            <button
              type="button"
              onClick={() => setIsMember(!isMember)}
              className="member__btn"
            >
              Register
            </button>
          </p>
        ) : (
          <p className="form__fine-print">
            Already a member?{" "}
            <button
              type="button"
              onClick={() => setIsMember(!isMember)}
              className="member__btn"
            >
              Login
            </button>
          </p>
        )}
      </form>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.main`
  display: grid;
  gap: 2rem;
  padding-bottom: 5rem;
  /* Banner */
  .register__banner {
    padding: 2rem;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.5)
      ),
      url("/register-bg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .register__tagline,
  .register__description {
    letter-spacing: var(--letter-spacing-1);
    color: var(--white);
    text-align: center;
  }
  .register__tagline {
    margin-bottom: 1rem;
    span {
      color: var(--primary-400);
    }
  }
  /* Form  */
  .register__form {
    display: grid;
    gap: 0.5rem;
    width: 80vw;
    max-width: 500px;
    margin: 0 auto;
    box-shadow: var(--shadow-1);
    padding: 2rem;
    border-radius: 10px;
  }
  .form__title {
    text-align: center;
    color: var(--primary-700);
    letter-spacing: var(--letter-spacing-2);
  }
  .form__btn {
    margin-top: 1rem;
  }
  .form__fine-print {
    text-align: center;
    letter-spacing: 1px;
    margin-top: 0.5rem;
  }
  .member__btn {
    background-color: transparent;
    border: none;
    letter-spacing: var(--letter-spacing-1);
    color: var(--primary-500);
  }
  .member__btn:hover {
    color: var(--primary-300);
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    padding: 0;
    .register__banner {
      display: grid;
      place-items: center;
      min-height: 100vh;
    }
    .register__form {
      margin: 2rem 0;
      align-self: center;
    }
  }
`;
