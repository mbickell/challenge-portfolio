import * as React from "react";
import styles from "./wrapper.module.scss";
import { concatClassNames } from "@/helpers/classes";

interface IProps {
  className?: string;
}

export const Wrapper: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  className,
}) => {
  return (
    <div className={concatClassNames(styles.wrapper, className)}>
      {children}
    </div>
  );
};
