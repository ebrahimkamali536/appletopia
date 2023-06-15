import { ReactNode } from "react";
import vazirFont from "../../../constants/localFont";
import Header from "./header";
import Footer from "../../../layout/Footer";
import "../../../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "./../../Providers";
import SideBar from "./sideBar";

export const metadata = {
  title: "فروشگاه اینترنتی اپل توپیا",
  description:
    "خرید انواع لوازم اپل مک بوک، ایفون، اپل واچ، ایپاد و ... با مناسب ترین قیمت در فروشگاه اینترنتی اپل توپیا",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans bg-[#ecf1f7]`}>
        <Providers>
          <Toaster />
          <div className="grid grid-cols-11">
            <div className="hidden lg:block col-span-2">
              <SideBar />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <Header />
              <main className="min-h-screen col-span-8">{children}</main>
            </div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
