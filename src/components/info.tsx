import { useEffect, useState } from "react";
import Loading from "./loading";

type Info = {
  date: string;
};

type response = {
  input: string;
  jawa: {
    weton: string;
    neptu: number;
    tanggal: number;
    wuku: string;
    bulan: string;
    mangsa: {
      nama: string;
      deskripsi: string;
    };
    tahun: number;
    warsa: string;
    awalBulan: {
      sura: string;
      sapar: string;
      mulud: string;
      rabiulakir: string;
      jumadilawal: string;
      jumadilakir: string;
      rejeb: string;
      ruwah: string;
      pasa: string;
      syawal: string;
      dulkaidah: string;
      dulkijah: string;
    };
    windu: string;
    lambang: string;
    kurup: string;
  };
};

export default function Info(props: Info) {
  const [api, setAPI] = useState<response | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/jv", {
        method: "POST",
        body: JSON.stringify(props.date),
      });
      const data = await response.json();
      setAPI(data);
      setLoading(false);
    }
    getData();
  }, [props.date]);
  console.log(api);

  const Show = () => {
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
  };

  return <div>{loading ? <Loading /> : <Show />}</div>;
}
