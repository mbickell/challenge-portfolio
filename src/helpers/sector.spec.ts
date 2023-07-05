import {
  BASIC_MATERIALS,
  CONSUMER_CYCLICALS,
  CONSUMER_DEFENSIVES,
} from "@/mocks/portfolio.mocks";
import { getSectorsFromHoldings } from "./sector";

const mockHoldings = [
  {
    id: 1,
    name: "Reach",
    sector: CONSUMER_CYCLICALS,
    lastPrice: 89.9,
    change: 0.8,
    shares: 10000,
  },
  {
    id: 2,
    name: "Sylvania Platinum",
    sector: BASIC_MATERIALS,
    lastPrice: 91,
    change: 1.5,
    shares: 3000,
  },
  {
    id: 3,
    name: "Associated British Foods",
    sector: CONSUMER_DEFENSIVES,
    lastPrice: 1886.5,
    change: -97.5,
    shares: 100,
  },
  {
    id: 4,
    name: "Virgin Wines UK",
    sector: CONSUMER_DEFENSIVES,
    lastPrice: 39,
    change: -3.25,
    shares: 10000,
  },
];

it("should return a clean list of sectors from the holdings", () => {
  expect(getSectorsFromHoldings(mockHoldings)).toStrictEqual([
    { id: 1, name: "Consumer Cyclicals" },
    { id: 2, name: "Basic Materials" },
    { id: 3, name: "Consumer Defensives" },
  ]);
});
