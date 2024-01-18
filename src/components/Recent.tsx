import styled from "styled-components";
import Header from "./Header";
import AuctionItem from "./AuctionItem";
import { auctionProducts } from "../utils/data";

const Recent = () => {
  return (
    <Wrapper>
      <div className="recent--center content--center">
        <Header
          title="new arrivals"
          description="Discover vibrant masterpieces in our latest artwork arrivals"
        />
        <div className="recent__products">
          {auctionProducts.slice(0, 3).map((product) => {
            return <AuctionItem key={product.id} auctionProduct={product} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Recent;

const Wrapper = styled.section`
  min-height: 100vh;
  padding: 5rem 0;
  .recent__products {
    margin-top: 3rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
