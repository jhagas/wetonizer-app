import React, { useState } from "react";
import { IoCalendar } from "react-icons/io5";
import Info from "./info";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Weton() {
  const [date, setDate] = useState(new Date());

  function convertFormat(date: Date) {
    return date.toISOString().split("T")[0];
  }

  function seek(day: number) {
    const followingDay = new Date(date.getTime() + day * 86400000);
    setDate(followingDay);
  }

  return (
    <div
      className="flex flex-col w-full items-center"
      style={{
        height: "calc(100% - 5rem)",
      }}
    >
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
              setDate(new Date(value));
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
      <Info date={convertFormat(date)} />
      <div className="fixed text-slate-500 text-xs bottom-3 text-center">
        &copy; 2023, Jhagas Hana Winaya.{" "}
        <a
          className="underline text-blue-700"
          href="https://github.com/jhagas/wetonizer-app"
        >
          MIT License
        </a>
      </div>
    </div>
  );

  type classProps = {
    className: string;
  };

  function Right(props: classProps) {
    return (
      <div
        onClick={() => seek(1)}
        className={`p-4 bg-white ${props.className} dark:bg-zinc-800 z-50 shadow-lg cursor-pointer rounded-2xl text-stone-700 dark:text-stone-300 flex gap-2 justify-center items-center`}
      >
        <p className="block md:hidden font-bold">Besok</p>
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
        <p className="block md:hidden font-bold">Kemarin</p>
      </div>
    );
  }
}
