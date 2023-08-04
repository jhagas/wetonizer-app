"use client"

import { useDark } from "@/lib/dark";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BsSun, BsCloudMoonFill } from "react-icons/bs";

export default function Nav() {
  const [dark, toogleDark] = useDark();

  return (
    <div className="flex flex-row items-center px-4 sm:px-8 h-16 justify-between select-none">
      <div className="flex flex-row items-center dark:text-amber-400 text-blue-600 transition-colors duration-300">
        <AiTwotoneThunderbolt size="24px" />
        <p className="text-lg transition font-semibold ml-1 text-slate-900 dark:text-stone-100">
          Wetonizer
        </p>
      </div>
      <div
        onClick={toogleDark}
        className="cursor-pointer border py-2 px-4 rounded-lg border-zinc-700 dark:hover:border-amber-400 hover:border-blue-600 flex gap-2 transition-colors duration-300 hover:text-blue-600 dark:hover:text-amber-400 text-slate-700 dark:text-white"
      >
        <p className="font-semibold text-sm md:block hidden">{!dark ? "Dark" : "Light"} Mode</p>
        <div>
          {dark ? <BsSun size="20px" /> : <BsCloudMoonFill size="20px" />}
        </div>
      </div>
    </div>
  );
}