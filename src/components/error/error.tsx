import * as React from "react";
import styles from "./error.module.scss";
import { Wrapper } from "../wrapper/wrapper";

interface IProps {
  id: string;
  message?: string;
}

export const Error: React.FC<IProps> = ({ id, message }) => {
  return (
    <main className={styles.container}>
      <Wrapper className={styles.error}>
        <h1 className={styles.error__type}>Portfolio not found</h1>
        <p className={styles.error__message}>
          {message
            ? message
            : `We apologise, but we could not locate a portfolio associated with the ID ${id}.`}
        </p>
      </Wrapper>
    </main>
  );
};
