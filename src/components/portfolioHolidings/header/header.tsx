import * as React from "react";
import styles from "./header.module.scss";
import { SecurityHoldings } from "@/models/portfolio";
import { Wrapper } from "@/components/wrapper/wrapper";

interface IProps {
  holdingsNo: number;
}

export const Header: React.FC<IProps> = ({ holdingsNo }) => {
  return (
    <Wrapper className={styles.holdings}>
      <h2 className={styles.holdings__title}>Holdings ({holdingsNo})</h2>
    </Wrapper>
  );
};
