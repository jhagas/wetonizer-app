//hardcoded, hard to predict the 120y kurup cycle
// started at 24 Mar 1936, 1867
export const kurupTahun = 1867;
export const kurup = "Asapon (Alip jatuh pada Selasa Pon)";
export const kurupName = "Selasa Pon";
export const kurupId = [0, 0];
// Date when kurup (120y cycle) asapon is started
// depends on keraton yogyakarta and keraton mataram
export const epoch = new Date(1936, 2, 24).getTime();

export const hari = [
  { hari: "Selasa", neptu: 3 },
  { hari: "Rabu", neptu: 7 },
  { hari: "Kamis", neptu: 8 },
  { hari: "Jum'at", neptu: 6 },
  { hari: "Sabtu", neptu: 9 },
  { hari: "Minggu", neptu: 5 },
  { hari: "Senin", neptu: 4 },
];
export const pasaran = [
  { pasaran: "Pon", neptu: 7 },
  { pasaran: "Wage", neptu: 4 },
  { pasaran: "Kliwon", neptu: 8 },
  { pasaran: "Legi", neptu: 5 },
  { pasaran: "Pahing", neptu: 9 },
];
export const bulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const jumlahHariTiapTahun = [354, 355, 354, 354, 355, 354, 354, 355];
export const kabisat = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30];
export const biasa = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29];
export const wulan = [
  "Sura",
  "Sapar",
  "Mulud",
  "Bakda Mulud",
  "Jumadil Awal",
  "Jumadil Akir",
  "Rejeb",
  "Ruwah",
  "Pasa",
  "Sawal",
  "Séla",
  "Besar",
];
export const wukuList = [
  "Sinta",
  "Landep",
  "Wukir",
  "Kurantil",
  "Tolu",
  "Gumbreg",
  "Warigalit",
  "Warigagung",
  "Julungwangi",
  "Sungsang",
  "Galungan",
  "Kuningan",
  "Langkir",
  "Mandasiya",
  "Julungpujut",
  "Pahang",
  "Kuruwelut",
  "Marakeh",
  "Tambir",
  "Medangkungan",
  "Maktal",
  "Wuye",
  "Manahil",
  "Prangbakat",
  "Bala",
  "Wugu",
  "Wayang",
  "Kulawu",
  "Dukut",
  "Watugunung",
];

export const windu = ["Adi", "Kuntara", "Sengara", "Sancaya"];
export const lambang = ["Kelawu", "Langkir"];

export const mangsaBiasa = [32, 25, 25, 24, 23, 41, 41, 23, 24, 25, 27, 43, 10];
export const mangsaKabisat = [32, 26, 25, 24, 23, 41, 41, 23, 24, 25, 27, 43, 10];
export const pranataMangsa = [
  {
    nama: "Kapitu (palguna)",
    deskripsi:
      "Benih padi mulai ditanam di sawah, banyak hujan, banyak sungai yang banjir. Penampakannya/ibaratnya : wisa kentar ing ing maruta (bisa larut dengan angin, itu masanya banyak penyakit). Musim banjir, badai longsor mulai tandur.",
  },
  {
    nama: "Kawolu (wasika)",
    deskripsi:
      "Padi mulai hijau, uret mulai banyak. Penampakannya/ibaratnya : anjrah jroning kayun (merata dalam keinginan, musimnya kucing kawin). Musim padi beristirahat, banyak ulat, banyak penyakit.",
  },
  {
    nama: "Kasanga (jita)",
    deskripsi:
      "Padi mulai berkembang dan sebagian sudah berbuah, jangkrik mulai muncul, kucing mulai kawin, cenggeret mulai bersuara. Penampakannya/ibaratnya : wedaring wacara mulya ( binatang tanah dan pohon mulai bersuara). Musim padi berbunga, turaes (sebangsa serangga) ramai berbunyi.",
  },
  {
    nama: "Kasadasa (srawana)",
    deskripsi:
      "Padi mulai menguning, mulai panen, banyak hewan hamil, burung-burung kecil mulai menetas telurnya. Penampakannya/ibaratnya : gedong minep jroning kalbu (masa hewan sedang hamil). Musim padi berisi tapi masih hijau, burung-burung membuat sarang, tanam palawija di lahan kering.",
  },
  {
    nama: "Dhesta (pradawana)",
    deskripsi:
      "Seluruhnya memanen padi. Penampakannya/ibaratnya: sotya (anak burung) sinara wedi (disuapi makanan). Masih ada waktu untuk palawija, burung-burung menyuapi anaknya.",
  },
  {
    nama: "Sadha (asuji)",
    deskripsi:
      "Para petani mulai menjemur padi dan memasukkan ke lumbung. Di sawah hanya tersisa dami. Penampakannya/ibaratnya : tirta (keringat) sah saking sasana (badan) (air pergi darisumbernya, masa ini musim dingin, jarang orang berkeringat, sebab sangat dingin). Musim menumpuk jerami,tanda-tanda udara dingin pada pagi hari.",
  },
  {
    nama: "Kasa (kartika)",
    deskripsi:
      "Para petani membakar dami yang tertinggal di sawah dan di masa ini dimulai menanam palawija, sejenis belalang masuk ke tanah, daun-daunan berjatuhan. Penampakannya/ibaratnya : lir sotya (dedaunan) murca saka ngembanan (kayu-kayuan).",
  },
  {
    nama: "Karo (poso)",
    deskripsi:
      "Palawija mulai tumbuh, pohon randu dan mangga, tanah mulai retak/berlubang. Penampakannya/ibaratnya : bantala (tanah) rengka (retak). Musim kapok bertunas tanam palawija kedua.",
  },
  {
    nama: "Katelu",
    deskripsi:
      "Musimnya/waktunya lahan tidak ditanami, sebab panas sekali, yang mana Palawija mulai di panen, berbagai jenis bambu tumbuh. Penampakannya/ibaratnya : suta (anak) manut ing Bapa (lanjaran). Musim ubi-ubian bertunas panen palawija.",
  },
  {
    nama: "Kapat (sitra)",
    deskripsi:
      "Sawah tidak ada (jarang) tanaman, sebab musim kemarau, para petani mulai menggarap sawah untuk ditanami padi gaga, pohon kapuk mulai berbuah, burung-burung kecil mulai bertelur. Penampakannya/ibaratnya : waspa kumembeng jroning kalbu (sumber). Musim sumur kering, kapuk berbuah, tanam pisang. Pada masa ini kemarau berakhir.",
  },
  {
    nama: "Kalima (manggala)",
    deskripsi:
      "Mulai ada hujan, selokan sawah diperbaiki dan membuat tempat mengalir air di pinggir sawah, mulai menyebar padi gaga, pohon asem mulai tumbuh daun muda, ulat-ulat mulai keluar. Penampakannya/ibaratnya : pancuran (hujan) emas sumawur (hujannya) ing jagad. Musim turun hujan, pohon asam bertunas, pohon kunyit berdaun muda.",
  },
  {
    nama: "Kanem (naya)",
    deskripsi:
      "Para petani mulai menyebar bibit tanaman padi di pembenihan, banyak buah-buahan (durian, rambutan, manggis dan lain-lainnya), burung blibis mulai kelihatan di tempat-tempat berair. Penampakannya/ibaratnya : rasa mulya kasucian (sedang banyak-banyaknya buah-buahan). Musim buah-buahan mulai tua, mulai menggarap sawah.",
  },
  {
    nama: "Kapitu (palguna)",
    deskripsi:
      "Benih padi mulai ditanam di sawah, banyak hujan, banyak sungai yang banjir. Penampakannya/ibaratnya : wisa kentar ing ing maruta (bisa larut dengan angin, itu masanya banyak penyakit). Musim banjir, badai longsor mulai tandur.",
  },
];
