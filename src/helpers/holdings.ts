export const formatNumber = (number: number | string) => {
  if (typeof number === "number") {
    return number.toLocaleString();
  }

  if (number.length <= 5) {
    return `${number}`;
  }

  const [whole, decimal] = number.split(".");
  const cleanedWhole = whole
    .split("")
    .reverse()
    .reduce((previous, current, index) => {
      if (index % 3 === 0) {
        return `${current},${previous}`;
      }

      return current + previous;
    });

  return `${cleanedWhole}.${decimal}`;
};

export const formatLastPrice = (number: number) =>
  formatNumber(number.toFixed(2)) + "p";

export const formatChange = (number: number) => {
  if (number < 0) {
    return formatNumber(number.toFixed(2));
  }

  return "+" + formatNumber(number.toFixed(2));
};
