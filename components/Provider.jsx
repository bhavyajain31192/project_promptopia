'use client'
import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';

const Provider = ({ children, session }) => {

  return  (
    <NextAuthSessionProvider session={session}>{children}</NextAuthSessionProvider>
  );
};

export default Provider;