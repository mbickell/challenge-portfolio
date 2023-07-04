import * as React from "react";
import { Portfolio } from "@/models/portfolio";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import NotFound from "./404";

export const getServerSideProps: GetServerSideProps<{
  portfolio: Portfolio;
}> = async (context) => {
  const res = await fetch(
    `${process.env.URL}/api/portfolio/${context.query.id}`,
  );
  console.log(context.query.id);

  const portfolio = await res.json();

  return {
    props: { portfolio },
  };
};

const PortfolioPage: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ portfolio }) => {
  const router = useRouter();
  console.log(portfolio);

  if (!portfolio.id) {
    return <NotFound id={router.query.id as string} />;
  }

  return <h1>Hello {portfolio.name}</h1>;
};

export default PortfolioPage;
