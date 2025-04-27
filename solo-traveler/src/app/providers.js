// app/providers.js (Client Component)
"use client"; // This makes it a Client Component

import { SessionProvider } from "next-auth/react";

export default function Providers({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
