import { ThemeProvider } from "@/app/components/theme-provider";
import Header from "@/app/shared/header";
import HeaderAdmin from "@/app/shared/hederAdmin";
import { headers } from "next/headers";
import Footer from "@/app/shared/footer";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Besley } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/github-dark.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const besley = Besley({
  subsets: ["latin"],
  variable: "--font-besley",
});

export const metadata: Metadata = {
  title: "Ghifari Ezra Ramadhan",
  description: "My Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const isAuthenticated = headersList.get("x-user-authenticated") === "true";

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${besley.variable} bg-zinc-50 dark:bg-zinc-800 antialiased select-none text-zinc-950/80 dark:text-zinc-50/90 font-[family-name:var(--font-plus-jakarta-sans)] tracking-wider`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          value={{
            light: "light",
            dark: "dark",
          }}
        >
          {
            isAuthenticated ? (
              <HeaderAdmin />
            ) : (
              <Header />
            )
          }
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
