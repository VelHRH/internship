import { FC } from 'react';

interface LoadMoreProps {
  fetcher: () => void;
}

const LoadMore: FC<LoadMoreProps> = ({ fetcher }) => {
  return (
    <button
      onClick={fetcher}
      className="hover:text-indigo-500 hover:underline underline-offset-4 duration-300"
    >
      Load more
    </button>
  );
};

export default LoadMore;
