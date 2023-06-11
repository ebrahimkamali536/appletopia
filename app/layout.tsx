import { ReactNode } from "react";
import vazirFont from "../constants/localFont";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export const metadata = {
  title: "فروشگاه اینترنتی اپل توپیا",
  description:
    "خرید انواع لوازم اپل مک بوک، ایفون، اپل واچ، ایپاد و ... با مناسب ترین قیمت در فروشگاه اینترنتی اپل توپیا",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
