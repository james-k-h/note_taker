import './globals.css';
import { Inter, Manrope } from 'next/font/google';
import { cx } from '../utils';
import siteMetadata from '../utils/siteMetaData';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import Providers from '@/components/Providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-in',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mr',
});

export const metadata = {
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  siteLogo: '/logo.png',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          'font-mr bg-silver dark:bg-dark'
        )}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
