import * as React from "react";
import styles from "./securityTable.module.scss";
import { SecurityHoldings } from "@/models/portfolio";
import { Wrapper } from "@/components/wrapper/wrapper";
import { concatClassNames } from "@/helpers/classes";
import {
  formatNumber,
  formatLastPrice,
  formatChange,
} from "@/helpers/holdings";

interface IProps {
  holdings: SecurityHoldings[];
}

export const SecurityTable: React.FC<IProps> = ({ holdings }) => {
  return (
    <Wrapper className={styles.holdings}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th
              className={concatClassNames(
                styles.table__heading,
                styles["table__heading--large"],
              )}
            >
              Name
            </th>
            <th className={styles.table__heading}>Sector</th>
            <th
              className={concatClassNames(
                styles.table__heading,
                styles["table__heading--small"],
              )}
            >
              Shares
            </th>
            <th
              className={concatClassNames(
                styles.table__heading,
                styles["table__heading--medium"],
              )}
            >
              Last Price
            </th>
            <th
              className={concatClassNames(
                styles.table__heading,
                styles["table__heading--small"],
              )}
            >
              Change
            </th>
          </tr>
          {holdings.map((holding) => (
            <tr key={holding.id}>
              <td className={styles.table__data}>{holding.name}</td>
              <td className={styles.table__data}>{holding.sector.name}</td>
              <td
                className={concatClassNames(
                  styles.table__data,
                  styles["table__data--right"],
                )}
              >
                {formatNumber(holding.shares)}
              </td>
              <td
                className={concatClassNames(
                  styles.table__data,
                  styles["table__data--right"],
                )}
              >
                {formatLastPrice(holding.lastPrice)}
              </td>
              <td
                className={concatClassNames(
                  styles.table__data,
                  styles["table__data--right"],
                  holding.change >= 0
                    ? styles["table__data--positive"]
                    : styles["table__data--negative"],
                )}
              >
                {formatChange(holding.change)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};
