import { GraphQLFormattedError } from 'graphql';

type OriginalError =
  | { message: string | string[]; statusCode: number }
  | undefined;

const formatError = (err: GraphQLFormattedError) => {
  const originalError = err.extensions?.originalError as OriginalError;
  return {
    message: originalError?.message?.toString() ?? err.message,
    status: err.extensions?.code,
    statusCode: originalError?.statusCode ?? 500,
  };
};

export default formatError;
