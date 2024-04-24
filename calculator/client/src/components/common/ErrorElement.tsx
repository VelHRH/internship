import { FC, ReactNode } from 'react';

interface ErrorElementProps {
  children: ReactNode;
}

const ErrorElement: FC<ErrorElementProps> = ({ children }) => <p>{children}</p>;

export default ErrorElement;
