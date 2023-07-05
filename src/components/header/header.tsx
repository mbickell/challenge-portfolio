import * as React from "react";
import styles from "./header.module.scss";

interface IProps {
  title: string;
  valuation?: string;
}

export const Header: React.FC<IProps> = ({ title, valuation }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>{title}</h1>
      {valuation && (
        <div>
          <p className={styles.header__text}>Valuation</p>
          <p className={styles.header__valuation}>{valuation}</p>
        </div>
      )}
    </header>
  );
};
