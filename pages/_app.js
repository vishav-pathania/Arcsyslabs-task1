import "@/styles/globals.css";
import { Open_Sans, Poppins } from "next/font/google";
import { ContactProvider } from '../components/Contactcontext';

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-open-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  return (
    <ContactProvider>
      <div className={`${openSans.variable} ${poppins.variable}`}>
        <Component {...pageProps} />
      </div>
    </ContactProvider>
  );
}
