import PageContextProvider from "@/context/PageContext";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageContextProvider>{children}</PageContextProvider>
    </>
  );
}
