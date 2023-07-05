export const concatClassNames = (...classNames: (string | undefined)[]) => {
  return classNames.reduce((list, className) => {
    if (className) {
      return list + " " + className;
    }

    return list;
  });
};
