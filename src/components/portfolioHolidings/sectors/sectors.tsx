import * as React from "react";
import styles from "./sectors.module.scss";
import { Sector } from "@/models/sector";
import { Wrapper } from "@/components/wrapper/wrapper";

interface IProps {
  sectors: Sector[];
}

interface ISectorTagProps {
  name: string;
}

const SectorTag: React.FC<ISectorTagProps> = ({ name }) => {
  return <span className={styles.tag}>{name}</span>;
};

export const Sectors: React.FC<IProps> = ({ sectors }) => {
  return (
    <Wrapper className={styles.sectors}>
      <h2 className={styles.sectors__title}>Sectors:</h2>
      <div className={styles.sectors__tags}>
        {sectors.map((sector) => (
          <SectorTag key={sector.id} name={sector.name} />
        ))}
      </div>
    </Wrapper>
  );
};
