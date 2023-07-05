import { concatClassNames } from "./classes";

it("should return a concatenated string of class names", () => {
  const classNames = concatClassNames("container", "header");

  expect(classNames).toBe("container header");
});

it("should return a concatenated string of class names", () => {
  const classNames = concatClassNames("container", undefined);

  expect(classNames).toBe("container");
});

it("should return a concatenated string of class names", () => {
  const classNames = concatClassNames(undefined, undefined);

  expect(classNames).toBe("");
});
