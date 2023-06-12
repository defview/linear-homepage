import Head from "next/head";
import "../app/globals.css";
import { AnalyticsWrapper } from "./components/analytics";
import { CopyrightLinearBanner } from "./components/copyright-linear-banner";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export const metadata = {
  title: "Fola Alex | Recreating linear webapp",
  description: "Landing Page using Nextjs and Tailwind CSS",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          <main className="bg-page-gradient pt-navigation-height">
            {children}
          </main>
          <Footer />
          <CopyrightLinearBanner />
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
