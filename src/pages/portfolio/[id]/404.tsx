import { Error } from "@/components/error/error";
import Head from "next/head";

interface IProps {
  id: string;
  message?: string;
}

const NotFoundPage: React.FC<IProps> = (props) => {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <Error {...props} />;
    </>
  );
};

export default NotFoundPage;
