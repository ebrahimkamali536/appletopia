import { ReactNode } from "react";
import vazirFont from "../constants/localFont";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "./Providers";
export const metadata = {
  title: "فروشگاه اینترنتی اپل توپیا",
  description:
    "خرید انواع لوازم اپل مک بوک، ایفون، اپل واچ، ایپاد و ... با مناسب ترین قیمت در فروشگاه اینترنتی اپل توپیا",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Providers>
          <Toaster />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
