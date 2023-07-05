import { SecurityHoldings } from "@/models/portfolio";

export const formatNumber = (number: number | string) => {
  if (typeof number === "number") {
    return number.toLocaleString();
  }

  const [whole, decimal] = number.toString().split(".");

  if (whole.length <= 3) {
    return number;
  }

  const cleanedWhole = whole
    .split("")
    .reverse()
    .reduce((previous, current, index) => {
      if (index % 3 === 0) {
        return `${current},${previous}`;
      }

      return current + previous;
    });

  return `${cleanedWhole || 0}.${decimal || "00"}`;
};

export const formatLastPrice = (number: number) =>
  formatNumber(number.toFixed(2)) + "p";

export const formatChange = (number: number) => {
  if (number < 0) {
    return formatNumber(number.toFixed(2));
  }

  return "+" + formatNumber(number.toFixed(2));
};

export const formatValuation = (number: number) =>
  "£" + formatNumber(number.toFixed(2));

export const getValuationFromHoldings = (holdings: SecurityHoldings[]) =>
  holdings
    .map((holding) => holding.lastPrice * holding.shares)
    .reduce((a, b) => a + b) / 100;
