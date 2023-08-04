import {
  jumlahHariTiapTahun,
  bulan,
  kabisat,
  biasa,
  kurupTahun,
  wulan,
  windu,
  lambang,
  kurup,
  epoch,
} from "./constant";
import { WarsaInfo, AwalBulan, Mangsa, Weton, Neptu, Wuku } from "./function";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

function Input(unix: any) {
  let hari = unix.getDate();
  let namaBulan = bulan[unix.getMonth()];
  let tahun = unix.getFullYear();

  return `${hari} ${namaBulan} ${tahun}`;
}

function Jawa(unix: any, Rentang: any) {
  let A = Rentang % 2835;

  let B = 0;
  let I = 0;
  let x = A - jumlahHariTiapTahun[I] + 1;

  while (x > 0) {
    I += 1;
    x -= jumlahHariTiapTahun[I];
  }
  let D = x + jumlahHariTiapTahun[I] - 30;
  let H = D + 30;

  if (jumlahHariTiapTahun[I] == 355) {
    while (D > 0) {
      H = D;
      B += 1;
      D -= kabisat[B];
    }
  }
  if (jumlahHariTiapTahun[I] == 354) {
    while (D > 0) {
      H = D;
      B += 1;
      D -= biasa[B];
    }
  }

  let warsaInfo = WarsaInfo();
  let info = warsaInfo[I];
  let awal = AwalBulan(info);
  let mangsa = Mangsa(unix);

  let T = Math.floor(Rentang / 2835) * 8 + kurupTahun + I;
  let L = Math.floor((((Rentang % 5670) + 2835) % 5670) / 2835);

  let winduNow = Math.floor((Rentang % 11340) / 2535);
  let weton = Weton(Rentang);
  let neptu = Neptu(Rentang);
  let wuku = Wuku(Rentang);

  return {
    weton: weton,
    neptu: neptu,
    tanggal: H,
    wuku,
    bulan: wulan[B],
    mangsa,
    tahun: T,
    warsa: info.warsa,
    awalBulan: awal,
    windu: windu[winduNow],
    lambang: lambang[L],
    kurup: kurup,
  };
}

export default function handler(tanggal: string) {
  let unix = new Date(tanggal);
  let date = unix.getTime();
  let Rentang = Math.floor((date - epoch) / 1000 / 3600 / 24);

  let jawa = Jawa(unix, Rentang);
  let inputFormatted = Input(unix);

  return {
    input: inputFormatted,
    jawa,
  };
}
