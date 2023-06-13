"use client";

import { Bars3Icon, HomeIcon, PowerIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import MobileMenu from "./mobileMenu";

const Header = () => {
    const [open, setOpen] = useState(false);

  return (
    <header className="bg-white px-4 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div>
            <button onClick={() => setOpen(prevState => !prevState)} className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
              <Bars3Icon className="text-secondary-700 w-5 h-5" />
            </button>
          </div>
          <div>
            <button className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
              <HomeIcon className="text-secondary-700 w-5 h-5" />
            </button>
          </div>
        </div>
        <div>
          <button className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
            <PowerIcon className="text-secondary-700 w-5 h-5" />
          </button>
        </div>
      </div>
      <div className={`transition-all duration-300 ${open ? "h-screen w-screen bg-primary-900 fixed top-0 left-0" : "hidden"}`}>
        <MobileMenu setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Header;
