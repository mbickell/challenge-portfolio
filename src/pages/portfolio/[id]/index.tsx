import * as React from "react";
import { Portfolio } from "@/models/portfolio";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import NotFound from "./404";
import { Header } from "@/components/header/header";
import styles from "./index.module.scss";
import { PortfolioHoldings } from "@/components/portfolioHolidings/portfolioHoldings";

export const getServerSideProps: GetServerSideProps<{
  portfolio: Portfolio;
}> = async (context) => {
  const res = await fetch(
    `${process.env.URL}/api/portfolio/${context.query.id}`,
  );
  const portfolio = await res.json();

  return {
    props: { portfolio },
  };
};

const PortfolioPage: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ portfolio }) => {
  const router = useRouter();

  if (!portfolio.id) {
    return <NotFound id={router.query.id as string} />;
  }

  return (
    <main className={styles.portfolio}>
      <Header title={portfolio.name} valuation="£10,276.00" />
      <PortfolioHoldings holdings={portfolio.holdings} />
    </main>
  );
};

export default PortfolioPage;
