import styled from "styled-components";
import Header from "./Header";
import CategoriesGrid from "./CategoriesGrid";

const Categories = () => {
  return (
    <Wrapper>
      <div className="categories--center content--center">
        <Header
          title="categories"
          description="Discover vibrant masterpieces in our latest artwork arrivals"
        />
        <CategoriesGrid />
      </div>
    </Wrapper>
  );
};

export default Categories;

const Wrapper = styled.section`
  min-height: 100vh;
  padding-bottom: 5rem;
`;
