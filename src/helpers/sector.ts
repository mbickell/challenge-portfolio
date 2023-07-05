import { SecurityHoldings } from "@/models/portfolio";
import { Sector } from "@/models/sector";

export const getSectorsFromHoldings = (
  holdings: SecurityHoldings[],
): Sector[] => {
  const sectors = holdings.map((holding) => holding.sector);

  const cleanedSectors = sectors.filter(
    (sector, index, self) =>
      index === self.findIndex((checkSector) => checkSector.id === sector.id),
  );
  return cleanedSectors;
};
