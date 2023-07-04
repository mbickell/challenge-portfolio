import { Error } from "@/components/error/error";

interface IProps {
  id: string;
  message?: string;
}

const NotFoundPage: React.FC<IProps> = (props) => {
  return <Error {...props} />;
};

export default NotFoundPage;
