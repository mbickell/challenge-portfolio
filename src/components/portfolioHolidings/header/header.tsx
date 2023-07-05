import * as React from "react";
import styles from "./header.module.scss";
import { SecurityHoldings } from "@/models/portfolio";
import { Wrapper } from "@/components/wrapper/wrapper";

interface IProps {
  holdings: SecurityHoldings[];
}

export const Header: React.FC<IProps> = ({ holdings }) => {
  return (
    <Wrapper className={styles.holdings}>
      <h2 className={styles.holdings__title}>
        Holdings ({holdings?.length || 0})
      </h2>
    </Wrapper>
  );
};
