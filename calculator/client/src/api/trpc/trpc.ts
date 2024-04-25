import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '../../../../server/src/trpc/router';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: process.env.API_URL!,
    }),
  ],
});
