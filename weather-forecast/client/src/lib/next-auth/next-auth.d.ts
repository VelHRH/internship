/* eslint-disable import/order */
import "next-auth";

declare module "next-auth" {
  interface Session {
    id: number;
    email: string;
    accesstoken: string;
    refreshtoken: string;
    expiresin: number;
  }
}

import "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    email: string;
    accesstoken: string;
    refreshtoken: string;
    expiresin: number;
  }
}
