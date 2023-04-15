import {
  hari,
  jumlahHariTiapTahun,
  kurupId,
  kurupName,
  mangsaBiasa,
  mangsaKabisat,
  pasaran,
  pranataMangsa,
  wukuList,
} from "./constant";

export function WarsaInfo() {
  const alip = {
    warsa: "Alip",
    satuSura: {
      jatuhPada: kurupName,
      idHari: kurupId[0],
      idPasaran: kurupId[1],
    },
  };
  const ehe = {
    warsa: "Ehe",
    satuSura: {
      jatuhPada: `${hari[(kurupId[0] + jumlahHariTiapTahun[0]) % 7]["hari"]} ${
        pasaran[(kurupId[1] + jumlahHariTiapTahun[0]) % 5]["pasaran"]
      }`,
      idHari: (kurupId[0] + jumlahHariTiapTahun[0]) % 7,
      idPasaran: (kurupId[1] + jumlahHariTiapTahun[0]) % 5,
    },
  };
  const jimawal = {
    warsa: "Jimawal",
    satuSura: {
      jatuhPada: `${
        hari[(ehe.satuSura.idHari + jumlahHariTiapTahun[1]) % 7]["hari"]
      } ${
        pasaran[(ehe.satuSura.idPasaran + jumlahHariTiapTahun[1]) % 5][
          "pasaran"
        ]
      }`,
      idHari: (ehe.satuSura.idHari + jumlahHariTiapTahun[1]) % 7,
      idPasaran: (ehe.satuSura.idPasaran + jumlahHariTiapTahun[1]) % 5,
    },
  };
  const je = {
    warsa: "Jé",
    satuSura: {
      jatuhPada: `${
        hari[(jimawal.satuSura.idHari + jumlahHariTiapTahun[2]) % 7]["hari"]
      } ${
        pasaran[(jimawal.satuSura.idPasaran + jumlahHariTiapTahun[2]) % 5][
          "pasaran"
        ]
      }`,
      idHari: (jimawal.satuSura.idHari + jumlahHariTiapTahun[2]) % 7,
      idPasaran: (jimawal.satuSura.idPasaran + jumlahHariTiapTahun[2]) % 5,
    },
  };
  const dal = {
    warsa: "Dal",
    satuSura: {
      jatuhPada: `${
        hari[(je.satuSura.idHari + jumlahHariTiapTahun[3]) % 7]["hari"]
      } ${
        pasaran[(je.satuSura.idPasaran + jumlahHariTiapTahun[3]) % 5]["pasaran"]
      }`,
      idHari: (je.satuSura.idHari + jumlahHariTiapTahun[3]) % 7,
      idPasaran: (je.satuSura.idPasaran + jumlahHariTiapTahun[3]) % 5,
    },
  };
  const be = {
    warsa: "Bé",
    satuSura: {
      jatuhPada: `${
        hari[(dal.satuSura.idHari + jumlahHariTiapTahun[4]) % 7]["hari"]
      } ${
        pasaran[(dal.satuSura.idPasaran + jumlahHariTiapTahun[4]) % 5][
          "pasaran"
        ]
      }`,
      idHari: (dal.satuSura.idHari + jumlahHariTiapTahun[4]) % 7,
      idPasaran: (dal.satuSura.idPasaran + jumlahHariTiapTahun[4]) % 5,
    },
  };
  const wawu = {
    warsa: "Wawu",
    satuSura: {
      jatuhPada: `${
        hari[(be.satuSura.idHari + jumlahHariTiapTahun[5]) % 7]["hari"]
      } ${
        pasaran[(be.satuSura.idPasaran + jumlahHariTiapTahun[5]) % 5]["pasaran"]
      }`,
      idHari: (be.satuSura.idHari + jumlahHariTiapTahun[5]) % 7,
      idPasaran: (be.satuSura.idPasaran + jumlahHariTiapTahun[5]) % 5,
    },
  };
  const jimakir = {
    warsa: "jimakir",
    satuSura: {
      jatuhPada: `${
        hari[(wawu.satuSura.idHari + jumlahHariTiapTahun[6]) % 7]["hari"]
      } ${
        pasaran[(wawu.satuSura.idPasaran + jumlahHariTiapTahun[6]) % 5][
          "pasaran"
        ]
      }`,
      idHari: (wawu.satuSura.idHari + jumlahHariTiapTahun[6]) % 7,
      idPasaran: (wawu.satuSura.idPasaran + jumlahHariTiapTahun[6]) % 5,
    },
  };

  return [alip, ehe, jimawal, je, dal, be, wawu, jimakir];
}

export function AwalBulan(info: any) {
  const sapar = [3, 1];
  const mulud = [4, 5];
  const rabiulakir = [6, 5];
  const jumadilawal = [7, 4];
  const jumadilakir = [2, 4];
  const rejeb = [3, 3];
  const ruwah = [5, 3];
  const pasa = [6, 2];
  const sawal = [1, 2];
  const dulkaidah = [2, 1];
  const dulkijah = [4, 1];

  return {
    sura: `Sura, ${hari[info.satuSura.idHari % 7]["hari"]} ${
      pasaran[info.satuSura.idPasaran % 5]["pasaran"]
    }`,
    sapar: `Sapar, ${hari[(info.satuSura.idHari + sapar[0] - 1) % 7]["hari"]} ${
      pasaran[(info.satuSura.idPasaran + sapar[1] - 1) % 5]["pasaran"]
    }`,
    mulud: `Mulud/Rabiul awal, ${
      hari[(info.satuSura.idHari + mulud[0] - 1) % 7]["hari"]
    } ${pasaran[(info.satuSura.idPasaran + mulud[1] - 1) % 5]["pasaran"]}`,
    rabiulakir: `Bakda mulud/Rabiul akir, ${
      hari[(info.satuSura.idHari + rabiulakir[0] - 1) % 7]["hari"]
    } ${pasaran[(info.satuSura.idPasaran + rabiulakir[1] - 1) % 5]["pasaran"]}`,
    jumadilawal: `Jumadil awal, ${
      hari[(info.satuSura.idHari + jumadilawal[0] - 1) % 7]["hari"]
    } ${
      pasaran[(info.satuSura.idPasaran + jumadilawal[1] - 1) % 5]["pasaran"]
    }`,
    jumadilakir: `Jumadil akir, ${
      hari[(info.satuSura.idHari + jumadilakir[0] - 1) % 7]["hari"]
    } ${
      pasaran[(info.satuSura.idPasaran + jumadilakir[1] - 1) % 5]["pasaran"]
    }`,
    rejeb: `Rejeb, ${hari[(info.satuSura.idHari + rejeb[0] - 1) % 7]["hari"]} ${
      pasaran[(info.satuSura.idPasaran + rejeb[1] - 1) % 5]["pasaran"]
    }`,
    ruwah: `Ruwah/Syaban, ${
      hari[(info.satuSura.idHari + ruwah[0] - 1) % 7]["hari"]
    } ${pasaran[(info.satuSura.idPasaran + ruwah[1] - 1) % 5]["pasaran"]}`,
    pasa: `Pasa, ${hari[(info.satuSura.idHari + pasa[0] - 1) % 7]["hari"]} ${
      pasaran[(info.satuSura.idPasaran + pasa[1] - 1) % 5]["pasaran"]
    }`,
    syawal: `Syawal, ${
      hari[(info.satuSura.idHari + sawal[0] - 1) % 7]["hari"]
    } ${pasaran[(info.satuSura.idPasaran + sawal[1] - 1) % 5]["pasaran"]}`,
    dulkaidah: `Séla/Dulkaidah, ${
      hari[(info.satuSura.idHari + dulkaidah[0] - 1) % 7]["hari"]
    } ${pasaran[(info.satuSura.idPasaran + dulkaidah[1] - 1) % 5]["pasaran"]}`,
    dulkijah: `Besar/Dulkijah, ${
      hari[(info.satuSura.idHari + dulkijah[0] - 1) % 7]["hari"]
    } ${pasaran[(info.satuSura.idPasaran + dulkijah[1] - 1) % 5]["pasaran"]}`,
  };
}

export function Mangsa(unix: any) {
  let year = unix.getFullYear();
  let Rentang = Math.floor(
    (unix.getTime() - new Date(`${year}`).getTime()) / 1000 / 3600 / 24
  );
  let leap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

  let P = 0;
  let A = Rentang - 32;

  if (leap) {
    while (A > 0) {
      P += 1;
      A -= mangsaBiasa[P];
    }
  } else {
    while (A > 0) {
      P += 1;
      A -= mangsaKabisat[P];
    }
  }

  return pranataMangsa[P];
}

export function Weton(Rentang: any) {
  let hariid = Rentang % 7;
  let wetonid = Rentang % 5;

  return `${hari[hariid]["hari"]} ${pasaran[wetonid]["pasaran"]}`;
}

export function Neptu(Rentang: any) {
  let hariid = Rentang % 7;
  let wetonid = Rentang % 5;

  let neptu = pasaran[wetonid]["neptu"] + hari[hariid]["neptu"];
  return neptu;
}

export function Wuku(Rentang: any) {
  let penyesuaian = 12;
  let wukuId = Math.round((((Rentang - 1) / 7) % 30) + penyesuaian);

  return wukuList[wukuId];
}
