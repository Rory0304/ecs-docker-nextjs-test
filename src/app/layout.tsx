'use client';

import React from 'react'

import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { AnalyticsManager } from '@/managers/analytics';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = 'G-GMP3GJNCQP'
  const GTM_ID = "GTM-KH25H6Z9"

  React.useEffect(() => {
      AnalyticsManager.view_plantdetail({
        plant_id: 'test',
        plant_name: 'test',
      });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="-bNmD_cjUf9Zgt5Kl4q6N86jiist513T7BNDj5tO-Zg" />
      </head>
      <body className={inter.className}>{children}
      <GoogleTagManager gtmId={GTM_ID} /> 
      <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}
