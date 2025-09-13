import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import Providers from '@/components/common/Providers';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="">
        <body className={`font-hanken-grotesk antialiased`}>
          <Providers>
            <ReactLenis root>
              <Navbar />
              {children}
              <OnekoCat />
            </ReactLenis>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
