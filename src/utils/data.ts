import art1 from "../assets/art-1.jpg";
import art2 from "../assets/art-2.jpg";
import art3 from "../assets/art-3.jpg";
import art4 from "../assets/art-4.jpg";
import art5 from "../assets/art-5.jpg";
import art6 from "../assets/art-6.jpg";

export type navLink = {
  id: number;
  link: string;
  path: string;
};

export const navLinks: navLink[] = [
  {
    id: 1,
    link: "home",
    path: "/",
  },
  {
    id: 2,
    link: "about",
    path: "/about",
  },
  {
    id: 3,
    link: "gallery",
    path: "/gallery",
  },
  {
    id: 4,
    link: "contact us",
    path: "/contact",
  },
];

enum AuctionStatus {
  Active = "active",
  Close = "close",
}

export type AuctionProduct = {
  id: number;
  startDate: Date;
  expiryDate: Date;
  bids: number;
  status: AuctionStatus;
  startPrice: number;
  highestBid: number;
  name: string;
  description: string;
  image: string;
  userId: string;
};

export const auctionProducts: AuctionProduct[] = [
  {
    id: 1,
    startDate: new Date("2024-01-17T12:00:00Z"),
    expiryDate: new Date("2024-01-31T18:00:00Z"),
    bids: 5,
    status: AuctionStatus.Active,
    startPrice: 100,
    highestBid: 150,
    name: "Artwork 1",
    description: "A beautiful piece of art",
    image: art1,
    userId: "user1",
  },
  {
    id: 2,
    startDate: new Date("2024-02-01T09:00:00Z"),
    expiryDate: new Date("2024-02-15T15:00:00Z"),
    bids: 8,
    status: AuctionStatus.Active,
    startPrice: 200,
    highestBid: 250,
    name: "Artwork 2",
    description: "An abstract masterpiece",
    image: art2,
    userId: "user2",
  },
  {
    id: 3,
    startDate: new Date("2024-01-17T12:00:00Z"),
    expiryDate: new Date("2024-01-31T18:00:00Z"),
    bids: 5,
    status: AuctionStatus.Active,
    startPrice: 100,
    highestBid: 150,
    name: "Artwork 1",
    description: "A beautiful piece of art",
    image: art3,
    userId: "user1",
  },
  {
    id: 4,
    startDate: new Date("2024-02-01T09:00:00Z"),
    expiryDate: new Date("2024-02-15T15:00:00Z"),
    bids: 8,
    status: AuctionStatus.Active,
    startPrice: 200,
    highestBid: 250,
    name: "Artwork 2",
    description: "An abstract masterpiece",
    image: art4,
    userId: "user2",
  },
  {
    id: 5,
    startDate: new Date("2024-03-10T14:00:00Z"),
    expiryDate: new Date("2024-03-25T20:00:00Z"),
    bids: 3,
    status: AuctionStatus.Active,
    startPrice: 150,
    highestBid: 180,
    name: "Artwork 3",
    description: "A surreal painting",
    image: art5,
    userId: "user3",
  },
  {
    id: 6,
    startDate: new Date("2024-04-05T11:30:00Z"),
    expiryDate: new Date("2024-04-20T17:30:00Z"),
    bids: 6,
    status: AuctionStatus.Active,
    startPrice: 120,
    highestBid: 200,
    name: "Artwork 4",
    description: "Nature-inspired art",
    image: art6,
    userId: "user4",
  },
];

export const categories = [
  { id: 1, name: "classical", img: art1 },
  { id: 2, name: "portraits", img: art2 },
  { id: 3, name: "realism", img: art3 },
  { id: 4, name: "abstract", img: art4 },
  { id: 4, name: "contemporary", img: art6 },
];
