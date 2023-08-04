import handler from "@/lib/jv";

type Info = {
  date: string;
};

export default function Info(props: Info) {
  const api = handler(props.date);
  let hari = `${api?.jawa.weton}, ${api?.jawa.tanggal} ${api?.jawa.bulan} ${api?.jawa.tahun}`;
  let mangsa = api?.jawa.mangsa;

  return (
    <div className="mt-5 px-4 max-w-2xl text-center text-slate-900">
      <div className="text-stone-700 dark:text-stone-300">
        <p className="text-xl lg:text-2xl text-blue-600 dark:text-amber-500 font-extrabold mb-1">
          {hari}
        </p>
        <p>
          Neptu: {api?.jawa.neptu}, Warsa {api?.jawa.warsa}
        </p>
        <p>Kurup {api?.jawa.kurup}</p>
      </div>
      <div className="text-slate-800 dark:text-stone-300 mt-5">
        <p className="font-semibold md:text-lg">Mangsa {mangsa?.nama}</p>
        <p>{mangsa?.deskripsi}</p>
      </div>
    </div>
  );
}
