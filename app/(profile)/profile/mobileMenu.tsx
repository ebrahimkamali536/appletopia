
import { BellIcon, ChatBubbleLeftIcon, ClipboardIcon, PencilSquareIcon, PowerIcon, WrenchScrewdriverIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileMenu = ({ setOpen }: IProps) => {
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prevOpen) => false)}
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center fixed top-4 left-4"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>
      <nav>
        <ul className="mt-20 px-6 flex flex-col gap-y-6" onClick={() => setOpen(false)}>
          <li>
            <Link href="/profile" className="flex items-center gap-x-2">
              <div className={`w-8 h-8 bg-white flex justify-center items-center rounded-md`}>
                <WrenchScrewdriverIcon className={`w-4 h-4`} />
              </div>
              <span className={`text-white`}>داشبورد</span>
            </Link>
          </li>
          <li>
            <Link href="/profile/order-list" className="flex items-center gap-x-2">
              <div className={`w-8 h-8 bg-white flex justify-center items-center rounded-md`}>
                <ClipboardIcon className={`w-4 h-4`} />
              </div>
              <span className={`text-white`}>سفارشات</span>
            </Link>
          </li>
          <li>
            <Link href="/profile/edit" className="flex items-center gap-x-2">
              <div className={`w-8 h-8 bg-white flex justify-center items-center rounded-md`}>
                <PencilSquareIcon className={`w-4 h-4`} />
              </div>
              <span className={`text-white`}>مشخصات</span>
            </Link>
          </li>
          <li>
            <Link href="/profile" className="flex items-center gap-x-2">
              <div className={`w-8 h-8 bg-white flex justify-center items-center rounded-md`}>
                <BellIcon className={`w-4 h-4`} />
              </div>
              <span className={`text-white`}>اطلاعیه</span>
            </Link>
          </li>
          <li>
            <Link href="/profile" className="flex items-center gap-x-2">
              <div className={`w-8 h-8 bg-white flex justify-center items-center rounded-md`}>
                <ChatBubbleLeftIcon className={`w-4 h-4`} />
              </div>
              <span className={`text-white`}>نظرات</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center gap-x-2">
              <div className={`w-8 h-8 bg-white flex justify-center items-center rounded-md`}>
                <PowerIcon className={`w-4 h-4`} />
              </div>
              <span className={`text-white`}>خروج</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
