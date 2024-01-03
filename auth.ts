import NextAuth from "next-auth";
// import EmailProvider from "next-auth/providers/email";
import Google from 'next-auth/providers/google';
import type { NextAuthConfig } from "next-auth";

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    Google,
    // EmailProvider({
    //   server: {
    //     host: process.env.email_server_host,
    //     port: Number(process.env.email_server_port),
    //     auth: {
    //       user: process.env.email_server_user,
    //       pass: process.env.email_server_password
    //     }
    //   },
    //   from: process.env.email_from
    // }),
  ],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      console.log(auth);
      if (pathname.startsWith('/dashboard')) return !!auth;
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config)