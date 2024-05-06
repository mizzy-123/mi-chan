"use client";

import Content from "@/components/content";
import Header from "@/components/header";
import Image from "next/image";
import { createContext, useRef } from "react";

export const AppContext = createContext(null);

export default function Home() {
  const secRefs = useRef([]);
  return (
    <main className="box-border min-h-screen p-0 m-0 no-underline border-none outline-none bg-background">
      <AppContext.Provider
        value={{
          secRefs,
        }}
      >
        <Header />
        <Content />
      </AppContext.Provider>
    </main>
  );
}
