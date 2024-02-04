"use client";

import React, { createContext, useContext, useState } from "react";

type PageContextType = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const PageContext = createContext<PageContextType | null>(null);

export default function PageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const context = useContext(PageContext);
  if (context == null) {
    throw new Error("usePage erro");
  }
  return context;
}
