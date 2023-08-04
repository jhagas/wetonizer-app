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
    nama: "Kapitu (Palguna)",
    deskripsi:
      "Benih padi mulai ditanam di sawah, banyak hujan dan angin, banyak sungai yang banjir, banyak penyakit. \"Wisa Kentar ing Maruta\".",
  },
  {
    nama: "Kawolu (Wasika)",
    deskripsi:
      "Padi mulai hijau, ulat padi mulai banyak, dan padi rawan berpenyakit, musim kucing kawin. \"Anjrah Jroning Kayun\".",
  },
  {
    nama: "Kasanga (Jita)",
    deskripsi:
      "Padi mulai berkembang dan sebagian sudah berisi, jangkrik mulai muncul, kucing mulai kawin, banyak serangga mulai bersuara. \"Wedaring Wacara Mulya\".",
  },
  {
    nama: "Kasadasa (Srawana)",
    deskripsi:
      "Padi mulai menguning, mulai panen, banyak hewan hamil, burung-burung kecil mulai menetas dan membuat sarang, tanam palawija di lahan kering. \"Gedong Minep Jroning Kalbu\".",
  },
  {
    nama: "Dhesta (Pradawana)",
    deskripsi:
      "Seluruhnya memanen padi, masih ada waktu untuk palawija. \"Sotya (anak burung) Sinara Wedi (disuapi makanan)\".",
  },
  {
    nama: "Sadha (Asuji)",
    deskripsi:
      "Para petani mulai menjemur padi dan memasukkan ke lumbung. Di sawah hanya tersisa jerami. \"Tirta Sah Saking Sasana\" (air pergi dari sumbernya, masa ini musim dingin, jarang orang berkeringat).",
  },
  {
    nama: "Kasa (Kartika)",
    deskripsi:
      "Para petani membakar jerami yang tertinggal di sawah dan dimulai menanam palawija, sejenis belalang masuk ke tanah, daun-daunan berjatuhan. \"Lir Sotya (dedaunan) Murca Saka Ngembanan (kayu-kayuan)\".",
  },
  {
    nama: "Karo (Poso)",
    deskripsi:
      "Palawija mulai tumbuh (waktu tanam palawija kedua), pohon randu dan mangga, tanah mulai retak/berlubang. \"Bantala (tanah) Rengka (retak)\".",
  },
  {
    nama: "Katelu",
    deskripsi:
      "Musimnya/waktunya lahan tidak ditanami, sebab panas sekali, palawija mulai di panen, berbagai jenis bambu tumbuh, dan ubi-ubian bertunas. \"Suta (anak) Manut ing Bapa (lanjaran)\".",
  },
  {
    nama: "Kapat (Sitra)",
    deskripsi:
      "Sawah tidak ada (jarang) tanaman, sebab musim kemarau, sumur kering, para petani mulai menggarap sawah untuk ditanami padi, pohon randu mulai berbuah, burung-burung kecil mulai bertelur, waktu menanam pisang. \"Waspa kumembeng jroning kalbu (sumber)\".",
  },
  {
    nama: "Kalima (Manggala)",
    deskripsi:
      "Mulai ada hujan, selokan sawah diperbaiki, mulai menyebar padi, pohon asam mulai tumbuh daun muda, kunyit bertunas, ulat mulai keluar. \"Pancuran (hujan) Emas Sumawur (turun deras) ing Jagad\".",
  },
  {
    nama: "Kanem (Naya)",
    deskripsi:
      "Para petani mulai menyebar bibit tanaman padi di pembenihan, banyak buah-buahan (durian, rambutan, manggis dan lain-lainnya), burung blibis mulai kelihatan di tempat-tempat berair. Rasa Mulya Kasucian.",
  },
  {
    nama: "Kapitu (Palguna)",
    deskripsi:
      "Benih padi mulai ditanam di sawah, banyak hujan dan angin, banyak sungai yang banjir, banyak penyakit. \"Wisa Kentar ing Maruta\".",
  },
];
