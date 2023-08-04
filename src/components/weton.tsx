"use client";

import { IoCalendar } from "react-icons/io5";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { addDays } from "date-fns";
import { convertFormat } from "@/lib/convert";

export default function Weton({ date }: { date: Date }) {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full items-center">
      <p className="font-semibold text-slate-700 dark:text-stone-300 m-1">
        Pilih Tanggal (Masehi)
      </p>
      <div className="flex flex-row items-center justify-center gap-2">
        <Left className="hidden md:block" />
        <div className="flex transition-colors duration-300 justify-between items-center h-12 w-48 px-5 text-stone-700 dark:text-stone-300 bg-white dark:bg-zinc-700 rounded-xl border-transparent focus:outline-2 focus:outline-sky-500 shadow-md">
          <input
            value={convertFormat(date)}
            onChange={(e) => {
              const value =
                e.target.value === ""
                  ? convertFormat(new Date())
                  : e.target.value;
              router.push(`?date=${value}`);
            }}
            type="date"
            className="flex items-center h-full w-full outline-none bg-transparent z-30"
          />
          <IoCalendar size="22px" className="fixed translate-x-32" />
        </div>
        <Right className="hidden md:block" />
      </div>
      <div className="flex gap-2 mt-3">
        <Left className="block md:hidden" />
        <Right className="block md:hidden" />
      </div>
    </div>
  );

  type classProps = {
    className: string;
  };

  function seek(add: number): void {
    const added = addDays(date, add);
    router.push(`?date=${convertFormat(added)}`);
  }

  function Right(props: classProps) {
    return (
      <div
        onClick={() => seek(1)}
        className={`p-4 bg-white ${props.className} dark:bg-zinc-800 z-50 shadow-lg cursor-pointer rounded-2xl text-stone-700 dark:text-stone-300 flex gap-2 justify-center items-center`}
      >
        <AiOutlineArrowRight />
      </div>
    );
  }

  function Left(props: classProps) {
    return (
      <div
        onClick={() => seek(-1)}
        className={`p-4 bg-white ${props.className} dark:bg-zinc-800 z-50 cursor-pointer shadow-lg rounded-2xl text-stone-700 dark:text-stone-300 flex gap-2 justify-center items-center`}
      >
        <AiOutlineArrowLeft />
      </div>
    );
  }
}
