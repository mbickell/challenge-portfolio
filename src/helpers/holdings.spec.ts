import {
  BASIC_MATERIALS,
  CONSUMER_CYCLICALS,
  CONSUMER_DEFENSIVES,
} from "@/mocks/portfolio.mocks";
import {
  formatChange,
  formatLastPrice,
  formatNumber,
  formatValuation,
  getValuationFromHoldings,
} from "./holdings";

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

describe("formatNumber tests", () => {
  it("should return a formatted number from a number", () => {
    expect(formatNumber(1000)).toBe("1,000");
  });

  it("should return a formatted number from a string", () => {
    expect(formatNumber("1000")).toBe("1,000.00");
  });
});

describe("formatLastPrice tests", () => {
  it('should add a "p" sign to the end', () => {
    expect(formatLastPrice(100)).toBe("100.00p");
    expect(formatLastPrice(100.52)).toBe("100.52p");
    expect(formatLastPrice(100.52234343)).toBe("100.52p");
  });
});

describe("formatChange tests", () => {
  it("should return a negative value to 2 decimal places", () => {
    expect(formatChange(-20)).toBe("-20.00");
    expect(formatChange(-2.2132)).toBe("-2.21");
  });

  it("should add a plus sign if positive", () => {
    expect(formatChange(0.41)).toBe("+0.41");
    expect(formatChange(2.41)).toBe("+2.41");
  });
});

describe("formatValuation tests", () => {
  it("should add a pound sign to the end of the number", () => {
    expect(formatValuation(321.9)).toBe("£321.90");
    expect(formatValuation(4321.9)).toBe("£4,321.90");
  });
});

describe("getValuationFromHoldings tests", () => {
  it("should accurately sum the holdings", () => {
    expect(getValuationFromHoldings(mockHoldings)).toBe(17506.5);
  });
});
