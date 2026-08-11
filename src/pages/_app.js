import { Outfit, Reddit_Sans, Readex_Pro, Mulish } from 'next/font/google';
import localFont from 'next/font/local'; 
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

// ---- Local Fonts (Tartuffo Trial) ----

const tartuffo = localFont({
  src: [
    {
      path: '../fonts/Tartuffo_Trial-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Tartuffo_Trial-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Tartuffo_Trial-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
  ],
  variable: '--font-tartuffo', 
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`${outfit.variable} ${redditSans.variable} ${readexPro.variable} ${mulish.variable} ${tartuffo.variable} font-sans`}
    >
      <LoadingScreen />
      {/* <CustomCursor /> */}
      <Component {...pageProps} />
    </div>
  );
}