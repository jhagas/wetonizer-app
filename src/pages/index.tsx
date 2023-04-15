import Nav from "../components/nav";
import Weton from "@/components/weton";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function Home() {
  const [dark, setDark] = useLocalStorage("dark", false);

  return (
    <main className={dark ? "dark" : "light"}>
      <div className="h-screen transition duration-300 w-full bg-slate-100 dark:bg-zinc-900">
        <Nav dark={dark} setDark={setDark} />
        <Weton />
      </div>
    </main>
  );
}
