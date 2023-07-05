import * as React from "react";
import styles from "./portfolioHoldings.module.scss";
import { Header } from "./header/header";
import { Sectors } from "./sectors/sectors";
import { SecurityTable } from "./securityTable/securityTable";
import { SecurityHoldings } from "@/models/portfolio";
import { getSectorsFromHoldings } from "@/helpers/sector";

interface IProps {
  holdings: SecurityHoldings[];
}

export const PortfolioHoldings: React.FC<IProps> = ({ holdings }) => {
  return (
    <section className={styles.container}>
      <Header holdingsNo={holdings.length || 0} />
      <Sectors sectors={getSectorsFromHoldings(holdings)} />
      <SecurityTable />
    </section>
  );
};
