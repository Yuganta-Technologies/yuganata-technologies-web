// types/next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

// Extend the User interface to include the role
declare module "next-auth" {
  interface Session {
    user: {
      role: string; // Add the role field
      fname: string;
      lname: string;
    } & DefaultSession["user"];
  }

  interface User {
    fname: string;
    lname: string;
    role: string; // Add the role field to the User type
  }
}

// Extend the JWT interface to include the role
declare module "next-auth/jwt" {
  interface JWT {
    fname: string;
    lname: string;
    role: string; // Add the role field to the JWT token
  }
}
