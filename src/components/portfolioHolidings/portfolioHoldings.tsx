import * as React from "react";
import styles from "./portfolioHoldings.module.scss";
import { Header } from "./header/header";
import { Sectors } from "./sectors/sectors";
import { SecurityTable } from "./securityTable/securityTable";

interface IProps {}

export const PortfolioHoldings: React.FC<IProps> = () => {
  return (
    <section className={styles.container}>
      <Header />
      <Sectors />
      <SecurityTable />
    </section>
  );
};
