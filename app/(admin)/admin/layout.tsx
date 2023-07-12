import { ReactNode } from "react";
import vazirFont from "../../../constants/localFont";
import "../../../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "./../../Providers";
import AdminSideBar from "./AdminSideBar";

export const metadata = {
  title: "فروشگاه اینترنتی اپل توپیا",
  description:
    "خرید انواع لوازم اپل مک بوک، ایفون، اپل واچ، ایپاد و ... با مناسب ترین قیمت در فروشگاه اینترنتی اپل توپیا",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning={true}>
      <body className={`${vazirFont.variable} font-sans bg-[#ecf1f7]`}>
        <Providers>
          <Toaster />
          <div className="grid grid-cols-11">
            <div className="hidden lg:block col-span-2">
              <AdminSideBar />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <main className="min-h-screen col-span-8 my-6">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
