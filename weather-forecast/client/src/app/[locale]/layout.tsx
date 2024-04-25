import { Container } from "@mui/material";
import type { Metadata } from "next";

import Providers from "@/components/Providers";
import Navbar from "@/components/navigation/Navbar";
import BoxShadow from "@/components/ui/BoxShadow";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weather App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }

  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <BoxShadow>
              <Container
                sx={{
                  py: { xs: 23, sm: 27 },
                  minHeight: "100vh",
                }}
              >
                {children}
              </Container>
            </BoxShadow>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
