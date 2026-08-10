import { Outfit, Reddit_Sans, Readex_Pro, Mulish } from 'next/font/google';
// import localFont from 'next/font/local'; // uncomment once Tartuffo files are added
import '@/styles/globals.css';
import LoadingScreen from '@/components/LoadingScreen';
// import CustomCursor from '@/components/CustomCursor';

// ---- Google Fonts (auto-hosted by Next.js) ----

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
});

const redditSans = Reddit_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-reddit-sans',
});

const readexPro = Readex_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-readex-pro',
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-mulish',
});



export default function App({ Component, pageProps }) {
  return (
    <div
      className={`${outfit.variable} ${redditSans.variable} ${readexPro.variable} ${mulish.variable} font-sans`}
    >
      <LoadingScreen />
      {/* <CustomCursor /> */}
      <Component {...pageProps} />
    </div>
  );
}