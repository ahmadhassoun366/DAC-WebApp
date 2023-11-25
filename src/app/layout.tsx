import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ContextComponent from "@/components/context/context.component";
import "src/scss/globals.scss";
import AppConfig from "@/static/app.config";
import AppInit from "@/components/app-init/app-init.component";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: AppConfig.name,
  description: AppConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ContextComponent>
          <AppInit>
            {children}
            <Toaster position="top-center" />
          </AppInit>
        </ContextComponent>
      </body>
    </html>
  );
}
