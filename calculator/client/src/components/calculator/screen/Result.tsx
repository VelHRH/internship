import { FC, ReactNode } from 'react';

interface ResultProps {
  children: ReactNode;
}

const Result: FC<ResultProps> = ({ children }) => {
  return <div className="text-2xl">{children}</div>;
};

export default Result;
