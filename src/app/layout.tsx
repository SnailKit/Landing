import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';
import '@public/icomoon/style.css';
import React from 'react';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});
export const metadata: Metadata = {
  title: 'Cuberium',
  description: 'CUBERIUM - Community Games Meme tokens Infrastructure',
};
const RootLayout = ({
                      children,
                    }: {
  children: React.ReactNode
}) => (
    <html lang="en">
    <body className={montserrat.className} suppressHydrationWarning={true}>
      {children}
    </body>
    </html>
);
export default RootLayout;
