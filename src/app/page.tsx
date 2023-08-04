import Info from "@/components/info";
import Nav from "@/components/nav";
import Redirect from "@/components/redirect";
import Weton from "@/components/weton";
import { convertFormat } from "@/lib/convert";
import { formatInTimeZone } from "date-fns-tz";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const dateString =
    searchParams["date"] ??
    formatInTimeZone(new Date(), "Asia/Jakarta", "yyyy-MM-dd");

  if (Number.isNaN(Date.parse(dateString))) {
    return <Redirect to="/" />;
  }

  const date = new Date(dateString);

  return (
    <div className="min-h-screen transition duration-300 w-full bg-slate-100 dark:bg-zinc-900">
      <Nav />
      <Weton date={date} />
      <div className="w-full flex justify-center">
        <Info date={convertFormat(date)} />
      </div>
      <div className="mt-5 text-slate-500 text-xs py-4 text-center sticky top-[100vh] w-full">
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
}
