const $ = (id) => document.getElementById(id);
const NOMOR_WA = "6282286446950", EMAIL = "kagemotoanry2886@gmail.com";

/* DATA: ganti nama file gambar di sini */
const peran = [
  {
    id: "swe", nama: "Software Engineer", sub: "Web & JavaScript", img: "Slider/software engineer.webp", cari: "Teknologi",
    item: ["JavaScript", "HTML & CSS", "Web development", "Debugging", "System design"],
    tips: "Sedang memperdalam JavaScript lewat kuliah TRPL dan proyek pribadi."
  },
  {
    id: "net", nama: "Network Technician", sub: "Jaringan & perangkat", img: "Slider/network technician.webp", cari: "Teknologi",
    item: ["Konfigurasi jaringan", "Troubleshooting", "Cable pulling ODP", "Perangkat Wi-Fi"],
    tips: "Pengalaman instalasi dan maintenance untuk klien rumah dan bisnis."
  },
  {
    id: "bil", nama: "Billing Staff", sub: "Tagihan & data", img: "Slider/billing staff.webp", cari: "Bisnis",
    item: ["Rekonsiliasi pembayaran", "Kuitansi", "Google Sheets", "Data pelanggan"],
    tips: "Teliti pada angka dan rapi dalam pencatatan."
  },
  {
    id: "mkt", nama: "Sales Marketing", sub: "Promosi & klien", img: "Slider/sales marketing.webp", cari: "Desain",
    item: ["Brosur promo", "Relasi klien", "Strategi promosi", "Komunikasi"],
    tips: "Terbiasa membuat materi promosi sendiri, dari layout sampai isi."
  },
  {
    id: "toko", nama: "Shopkeeper", sub: "Toko & pelanggan", img: "Slider/shopkeeper.webp", cari: "Bisnis",
    item: ["Manajemen stok", "Kasir dan POS", "Layanan pelanggan", "Penjualan online"],
    tips: "Mengelola toko batik khas Kepulauan Riau, offline dan online."
  },
  {
    id: "cetak", nama: "Printing Staff", sub: "Produksi cetak", img: "Slider/printing staff.webp", cari: "Desain",
    item: ["Mesin cetak", "Quality control", "Finishing", "Order pelanggan"],
    tips: "Memahami standar kualitas hasil cetak sebelum diserahkan."
  },
  {
    id: "spv", nama: "Supervisor Operasional", sub: "Tim & SOP", img: "Slider/supervisor operasional.webp", cari: "Bisnis",
    item: ["Koordinasi tim", "SOP", "Evaluasi kinerja", "Pengambilan keputusan"],
    tips: "Memimpin lintas fungsi dan memastikan standar terpenuhi."
  }
];
const proyek = [
  {
    nama: "Warrior Fallen", kat: "Teknologi", img: "Project/warrior fallen.webp", tags: ["JavaScript", "HTML5", "Game"],
    desk: "Game RPG di browser dengan combat bergiliran, inventori, fog of war, 6 skill, dan dungeon 5 lantai. JavaScript murni tanpa framework."
  },
  {
    nama: "Instalasi dan maintenance Wi-Fi", kat: "Teknologi", img: "Project/wifi.webp", tags: ["Jaringan", "ODP", "Lapangan"],
    desk: "Instalasi, konfigurasi, dan perawatan Wi-Fi untuk klien rumah dan bisnis di Proxi Jaringan Nusantara, termasuk tarik kabel dari ODP."
  },
  {
    nama: "Poster inovasi digital marketing", kat: "Desain", img: "Project/poster inovasi.webp", tags: ["Desain visual", "Kompetisi"],
    desk: "Poster untuk kompetisi Politeknik Entrepreneur University, menggambarkan perubahan dari era produk ke era pengalaman."
  },
  {
    nama: "Brosur promo internet", kat: "Desain", img: "Project/poster kemerdekaan.webp", tags: ["Pemasaran", "Desain grafis"],
    desk: "Brosur paket internet Hari Kemerdekaan 2025 untuk Proxi Jaringan Nusantara. Layout, desain, dan isi dikerjakan mandiri."
  },
  {
    nama: "Billing dan data pelanggan Wi-Fi", kat: "Bisnis", img: "Project/billing.webp", tags: ["Billing", "Google Sheets"],
    desk: "Pencatatan kuitansi manual, pembaruan data pembayaran, dan spreadsheet terpusat untuk pelanggan Wi-Fi."
  },
  {
    nama: "Toko batik dan layanan pelanggan", kat: "Bisnis", img: "Project/batik shop.webp", tags: ["Retail", "Penjualan online"],
    desk: "Mengelola toko batik khas Kepulauan Riau: melayani pelanggan offline dan online, pembayaran, dan pesanan digital."
  }
];

/* Data skill: edit level, deskripsi, dan poin di sini */
const SKILL = [
  {
    "id": "javascript",
    "nama": "JavaScript",
    "kat": "Programming Language",
    "lvl": 55,
    "desc": "JavaScript adalah bahasa pemrograman utama yang saat ini sedang aku pelajari secara aktif sebagai mahasiswa TRPL. Dipakai untuk membangun logika interaktif di web — dari DOM manipulation, event handling, hingga game logic seperti yang ada di Dungeon Quest.",
    "poin": [
      "Memahami dasar-dasar sintaks, variabel, fungsi, dan loop",
      "Bisa membangun DOM manipulation untuk interaksi halaman web",
      "Menerapkan event handling untuk tombol, keyboard, dan mouse",
      "Membangun game logic sederhana (state management, collision detection)",
      "Menggunakan localStorage untuk penyimpanan data sementara"
    ],
    "tags": [
      "ES6+",
      "DOM API",
      "Event Handling",
      "Game Logic",
      "Async basics"
    ],
    "pakai": [
      {
        "t": "Game Development",
        "d": "Membangun Warrior Fallen dengan sistem battle, inventory, dan map generation."
      },
      {
        "t": "Web Interactivity",
        "d": "Animasi scroll, custom cursor, dan dynamic content seperti portfolio ini."
      },
      {
        "t": "Data Management",
        "d": "Pengelolaan state aplikasi untuk toko, billing tracker, dan checklist ops."
      },
      {
        "t": "Tooling",
        "d": "Membuat tools sederhana untuk otomasi laporan dan kalkulasi data."
      }
    ],
    "proyek": [
      0
    ],
    "grup": "Teknis"
  },
  {
    "id": "html-css",
    "nama": "HTML / CSS",
    "kat": "Web Markup & Styling",
    "lvl": 70,
    "desc": "HTML dan CSS adalah fondasi dari setiap halaman web. Saya menggunakannya untuk membangun struktur konten yang semantik dan tampilan visual yang bersih, responsif, dan modern — seperti portfolio ini sendiri.",
    "poin": [
      "Struktur HTML semantik yang baik dan accessible",
      "CSS modern: Flexbox, Grid, animasi, dan transisi",
      "Responsive design dengan media queries",
      "CSS variables untuk theming yang konsisten",
      "Animasi scroll-triggered dan keyframe animations"
    ],
    "tags": [
      "HTML5",
      "CSS3",
      "Flexbox",
      "Grid",
      "Responsive",
      "Animations"
    ],
    "pakai": [
      {
        "t": "Portfolio Web",
        "d": "Membangun halaman portfolio profesional dengan layout modern dan animasi."
      },
      {
        "t": "Responsive Design",
        "d": "Tampilan yang adaptif di semua ukuran layar dari desktop hingga mobile."
      },
      {
        "t": "UI Components",
        "d": "Card, button, modal, navbar, dan komponen UI lainnya dari scratch."
      },
      {
        "t": "Micro-interactions",
        "d": "Hover effects, loading animations, dan transisi halus untuk UX yang baik."
      }
    ],
    "proyek": [
      0
    ],
    "grup": "Teknis"
  },
  {
    "id": "networking",
    "nama": "Networking",
    "kat": "Network Infrastructure",
    "lvl": 80,
    "desc": "Sebagai Network Technician, saya terbiasa menangani instalasi, konfigurasi, dan troubleshooting jaringan di lingkungan operasional nyata — mulai dari setup perangkat hingga diagnosa koneksi yang bermasalah di jam-jam kritis.",
    "poin": [
      "Instalasi dan konfigurasi router, switch, dan access point",
      "Troubleshooting koneksi: identifikasi bottleneck, packet loss, latency",
      "Manajemen IP addressing, DHCP, dan DNS",
      "Monitoring uptime dan performa jaringan secara real-time",
      "Penanganan gangguan jaringan saat peak hour operasional"
    ],
    "tags": [
      "TCP/IP",
      "DHCP",
      "DNS",
      "Router Config",
      "LAN/WAN",
      "Troubleshooting"
    ],
    "pakai": [
      {
        "t": "Office Network",
        "d": "Setup dan maintain jaringan kantor untuk kebutuhan operasional harian."
      },
      {
        "t": "Field Repair",
        "d": "Troubleshooting on-site saat koneksi down di tengah jam operasional."
      },
      {
        "t": "Access Point",
        "d": "Konfigurasi WiFi coverage yang optimal untuk area kerja."
      },
      {
        "t": "Monitoring",
        "d": "Pemantauan performa jaringan dan early detection gangguan."
      }
    ],
    "proyek": [
      1
    ],
    "grup": "Teknis"
  },
  {
    "id": "windows",
    "nama": "Windows OS",
    "kat": "Operating System",
    "lvl": 85,
    "desc": "Familiar dengan ekosistem Windows untuk kebutuhan operasional, teknis, dan administrasi. Dari setup workstation hingga troubleshooting sistem di lingkungan kerja.",
    "poin": [
      "Instalasi, konfigurasi, dan maintenance Windows OS",
      "Registry, Group Policy, dan system administration",
      "Troubleshooting performance issue, BSOD, dan software conflicts",
      "Remote Desktop dan manajemen user accounts",
      "Backup, restore, dan disaster recovery prosedur"
    ],
    "tags": [
      "Windows 10/11",
      "Admin Tools",
      "Registry",
      "Task Manager",
      "CMD/PowerShell"
    ],
    "pakai": [
      {
        "t": "System Support",
        "d": "Troubleshooting dan maintenance komputer di lingkungan kerja."
      },
      {
        "t": "User Management",
        "d": "Setup akun pengguna, permission, dan kebijakan keamanan dasar."
      },
      {
        "t": "Data Recovery",
        "d": "Pemulihan data dan sistem setelah crash atau infeksi malware."
      },
      {
        "t": "Performance Tuning",
        "d": "Optimasi performa sistem untuk kebutuhan operasional."
      }
    ],
    "proyek": [
      4
    ],
    "grup": "Teknis"
  },
  {
    "id": "ms-office",
    "nama": "Ms. Office",
    "kat": "Productivity Suite",
    "lvl": 82,
    "desc": "Microsoft Office adalah tool sehari-hari untuk dokumentasi, laporan keuangan, presentasi, dan administrasi operasional. Terbiasa menggunakannya di berbagai konteks — dari laporan billing hingga proposal marketing.",
    "poin": [
      "Excel: formula kompleks, pivot table, dan analisis data penjualan",
      "Word: pembuatan dokumen formal, SOP, dan laporan operasional",
      "PowerPoint: presentasi hasil kerja dan proposal bisnis",
      "Manajemen data dengan spreadsheet untuk billing dan inventory",
      "Dokumentasi prosedur operasional standar (SOP)"
    ],
    "tags": [
      "Excel",
      "Word",
      "PowerPoint",
      "Pivot Table",
      "Data Analysis"
    ],
    "pakai": [
      {
        "t": "Sales Report",
        "d": "Membuat laporan penjualan mingguan/bulanan dengan visualisasi data."
      },
      {
        "t": "Billing Records",
        "d": "Pengelolaan data tagihan dan rekonsiliasi keuangan dengan spreadsheet."
      },
      {
        "t": "SOP Docs",
        "d": "Dokumentasi prosedur kerja yang bisa diikuti seluruh anggota tim."
      },
      {
        "t": "Proposal",
        "d": "Presentasi proposal marketing dan laporan performa ke manajemen."
      }
    ],
    "proyek": [
      4
    ],
    "grup": "Operasional"
  },
  {
    "id": "print-ops",
    "nama": "Print Operations",
    "kat": "Production & Printing",
    "lvl": 88,
    "desc": "Sebagai Printing Staff, saya menguasai operasional mesin cetak dari awal hingga akhir — dari persiapan file, calibrasi mesin, produksi massal, quality control, hingga finishing dan pengiriman ke pelanggan.",
    "poin": [
      "Operasional berbagai jenis mesin cetak (inkjet, laser, large format)",
      "Persiapan file desain: color profile, bleed, dan resolusi",
      "Quality control: cek warna, ketajaman, dan konsistensi hasil cetak",
      "Manajemen stok kertas, tinta, dan consumables",
      "Estimasi biaya dan waktu produksi untuk order pelanggan"
    ],
    "tags": [
      "Print Production",
      "Color Management",
      "QC",
      "Machine Ops",
      "Finishing"
    ],
    "pakai": [
      {
        "t": "Mass Production",
        "d": "Cetak massal dokumen, brosur, dan materi promosi dengan konsistensi tinggi."
      },
      {
        "t": "Large Format",
        "d": "Banner, spanduk, dan media outdoor untuk kebutuhan marketing."
      },
      {
        "t": "Quality Control",
        "d": "Inspeksi hasil cetak sebelum diserahkan ke pelanggan."
      },
      {
        "t": "Rush Order",
        "d": "Penanganan order mendesak tanpa mengorbankan kualitas."
      }
    ],
    "proyek": [
      3,
      2
    ],
    "grup": "Operasional"
  },
  {
    "id": "pos-system",
    "nama": "POS System",
    "kat": "Retail Technology",
    "lvl": 90,
    "desc": "Terbiasa mengoperasikan dan mengelola Point of Sale system dalam konteks retail dan toko. Dari transaksi harian, manajemen stok, hingga laporan penjualan yang akurat untuk kebutuhan manajemen.",
    "poin": [
      "Operasional kasir harian dengan akurasi transaksi tinggi",
      "Manajemen stok real-time dan alert reorder point",
      "Laporan penjualan harian, mingguan, dan bulanan",
      "Handling retur barang dan penyesuaian harga",
      "Pelatihan staf baru dalam penggunaan sistem kasir"
    ],
    "tags": [
      "Cashier Ops",
      "Inventory",
      "Sales Report",
      "Stock Management",
      "Training"
    ],
    "pakai": [
      {
        "t": "Daily Transactions",
        "d": "Pengelolaan ratusan transaksi per hari dengan akurasi dan kecepatan."
      },
      {
        "t": "Stock Control",
        "d": "Monitor stok real-time dan koordinasi dengan supplier untuk restock."
      },
      {
        "t": "Sales Analytics",
        "d": "Analisis produk terlaris, jam sibuk, dan tren penjualan mingguan."
      },
      {
        "t": "Staff Training",
        "d": "Onboarding karyawan baru untuk penggunaan sistem kasir yang efisien."
      }
    ],
    "proyek": [
      5
    ],
    "grup": "Operasional"
  },
  {
    "id": "sop-design",
    "nama": "SOP Design",
    "kat": "Operations Management",
    "lvl": 85,
    "desc": "Sebagai Supervisor Operasional, saya terbiasa merancang, mendokumentasikan, dan mengimplementasikan Standard Operating Procedures untuk memastikan konsistensi kerja tim di semua lini operasional.",
    "poin": [
      "Merancang alur kerja yang efisien dan mudah diikuti semua level staf",
      "Dokumentasi prosedur dalam format yang jelas dan terstruktur",
      "Evaluasi dan update SOP berdasarkan feedback operasional lapangan",
      "Pelatihan tim dalam implementasi SOP baru",
      "Monitoring kepatuhan terhadap standar operasional yang ditetapkan"
    ],
    "tags": [
      "Process Design",
      "Documentation",
      "Team Training",
      "Quality Standards",
      "Evaluation"
    ],
    "pakai": [
      {
        "t": "Store Ops",
        "d": "SOP pembukaan/penutupan toko, penanganan pelanggan, dan manajemen kasir."
      },
      {
        "t": "Print Workflow",
        "d": "Alur kerja standar untuk penerimaan order hingga pengiriman hasil cetak."
      },
      {
        "t": "Network Maintenance",
        "d": "Prosedur troubleshooting jaringan yang bisa diikuti teknisi junior."
      },
      {
        "t": "Customer Handling",
        "d": "Standar penanganan komplain dan eskalasi masalah pelanggan."
      }
    ],
    "proyek": [
      4
    ],
    "grup": "Operasional"
  }
];

/* NAVBAR */
const navbar = $("navbar"), toggle = $("toggle"), menu = $("menu"), subs = document.querySelectorAll(".sub-toggle");
function cekScroll() {
  navbar.classList.toggle("scrolled", scrollY > 40);
  const t = document.documentElement.scrollHeight - innerHeight;
  $("progress").style.width = (t > 0 ? scrollY / t * 100 : 0) + "%";
}
addEventListener("scroll", cekScroll, { passive: true }); cekScroll();
function tutupSub() { subs.forEach((b) => { b.setAttribute("aria-expanded", "false"); b.parentElement.classList.remove("open"); }); }
subs.forEach((b) => b.addEventListener("click", (e) => {
  e.stopPropagation();
  const li = b.parentElement, buka = !li.classList.contains("open");
  tutupSub();
  if (buka) { li.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
}));
document.addEventListener("click", tutupSub);
function tutupMenu() { menu.classList.remove("aktif"); toggle.classList.remove("aktif"); navbar.classList.remove("menu-open"); toggle.setAttribute("aria-expanded", "false"); }
toggle.addEventListener("click", () => {
  const buka = menu.classList.toggle("aktif");
  toggle.classList.toggle("aktif", buka); navbar.classList.toggle("menu-open", buka);
  toggle.setAttribute("aria-expanded", String(buka));
  if (!buka) tutupSub();
});
matchMedia("(min-width:1100px)").addEventListener("change", (e) => { if (e.matches) { tutupMenu(); tutupSub(); } });
document.querySelectorAll(".menu a").forEach((a) => a.addEventListener("click", () => {
  tutupMenu(); tutupSub();
  if (a.dataset.filter) setFilter(a.dataset.filter);
}));

/* TEMA: kunjungan pertama mengikuti pengaturan perangkat, lalu pilihan pengunjung diingat */
const btnTema = $("tema"), sistemTerang = matchMedia("(prefers-color-scheme: light)");
function bacaTema() { try { return localStorage.getItem("tema"); } catch (e) { return null; } }
function setTema(t, simpan = true) {
  document.documentElement.dataset.tema = t;
  const label = t === "terang" ? "Ganti ke mode gelap" : "Ganti ke mode terang";
  btnTema.setAttribute("aria-label", label); btnTema.title = label;
  if (simpan) { try { localStorage.setItem("tema", t); } catch (e) { } }
}
const temaSimpan = bacaTema();
setTema(temaSimpan === "terang" || temaSimpan === "gelap" ? temaSimpan : (sistemTerang.matches ? "terang" : "gelap"), false);
btnTema.addEventListener("click", () => setTema(document.documentElement.dataset.tema === "terang" ? "gelap" : "terang"));
/* selama pengunjung belum memilih sendiri, ikuti perubahan pengaturan perangkat */
sistemTerang.addEventListener("change", (e) => { if (!bacaTema()) setTema(e.matches ? "terang" : "gelap", false); });

/* SLIDER PERAN */
const track = $("track"), slider = $("slider"), bubble = $("bubble");
peran.forEach((p) => {
  const f = document.createElement("figure");
  f.className = "slide"; f.dataset.id = p.id;
  f.style.setProperty("--img", "url('Image/" + encodeURI(p.img) + "')");
  f.innerHTML = '<i class="bar"></i><figcaption><strong>' + p.nama + "</strong><span>(" + p.sub + ")</span></figcaption>";
  track.appendChild(f);
});
const slides = Array.from(track.children);
let aktif = 0, barusSwipe = false, kx = 0, ky = 0;
function posisi() {
  const s = slides[aktif], n = slides.length;
  track.style.transform = "translateX(" + (slider.clientWidth / 2 - (s.offsetLeft + s.offsetWidth / 2)) + "px)";
  slides.forEach((el, i) => {
    el.classList.toggle("active", i === aktif);
    el.classList.toggle("before", i === (aktif - 1 + n) % n);
    el.classList.toggle("after", i === (aktif + 1) % n);
  });
}
function pindah(n) { aktif = (n + slides.length) % slides.length; posisi(); setTimeout(segarkan, 750); }
function teks(s) {
  if (!s) return "";
  const i = slides.indexOf(s), n = slides.length;
  return i === aktif ? "Lihat detail" : i === (aktif + 1) % n ? "Berikutnya" : i === (aktif - 1 + n) % n ? "Sebelumnya" : "Pilih";
}
function segarkan() {
  if (!slider.classList.contains("hover")) return;
  const el = document.elementFromPoint(kx, ky), t = teks(el && el.closest(".slide"));
  bubble.textContent = t; slider.classList.toggle("hover", t !== "");
}
slider.addEventListener("pointermove", (e) => {
  if (e.pointerType === "touch") return;
  kx = e.clientX; ky = e.clientY;
  const r = slider.getBoundingClientRect();
  bubble.style.transform = "translate(" + (kx - r.left) + "px," + (ky - r.top) + "px) translate(-50%,-50%)";
  const t = teks(e.target.closest(".slide"));
  bubble.textContent = t; slider.classList.toggle("hover", t !== "");
});
slider.addEventListener("pointerleave", () => slider.classList.remove("hover"));
slides.forEach((s, i) => s.addEventListener("click", () => {
  if (barusSwipe) return;
  i === aktif ? bukaDetail("peran", i) : pindah(i);
}));
track.addEventListener("animationend", (e) => { if (e.target.classList.contains("bar")) pindah(aktif + 1); });
slider.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") pindah(aktif - 1);
  if (e.key === "ArrowRight") pindah(aktif + 1);
  if (e.key === "Enter") bukaDetail("peran", aktif);
});
$("prevPeran").addEventListener("click", () => pindah(aktif - 1));
$("nextPeran").addEventListener("click", () => pindah(aktif + 1));
let awalX = null;
slider.addEventListener("pointerdown", (e) => { awalX = e.clientX; });
slider.addEventListener("pointerup", (e) => {
  if (awalX === null) return;
  const d = e.clientX - awalX; awalX = null;
  if (Math.abs(d) > 50) { barusSwipe = true; setTimeout(() => { barusSwipe = false; }, 60); pindah(aktif + (d < 0 ? 1 : -1)); }
});
let rz; const jadwal = () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(posisi); };
addEventListener("resize", jadwal); addEventListener("orientationchange", () => setTimeout(posisi, 250)); addEventListener("load", posisi);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(posisi);
posisi();
/* hemat baterai: jeda slider otomatis saat hero tidak terlihat atau tab di latar belakang */
new IntersectionObserver((es) => slider.classList.toggle("paused", !es[0].isIntersecting), { threshold: 0.2 }).observe(slider);
document.addEventListener("visibilitychange", () => slider.classList.toggle("paused", document.hidden));

/* PROYEK + FILTER */
const chips = $("chips"), cards = $("cards");
["semua", "Teknologi", "Desain", "Bisnis"].forEach((k) => {
  const b = document.createElement("button");
  b.type = "button"; b.dataset.k = k; b.textContent = k === "semua" ? "Semua" : k;
  b.addEventListener("click", () => setFilter(k));
  chips.appendChild(b);
});
function setFilter(k) {
  chips.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.k === k)));
  cards.innerHTML = "";
  proyek.forEach((p, i) => {
    if (k !== "semua" && p.kat !== k) return;
    const c = document.createElement("article");
    c.className = "card"; c.tabIndex = 0;
    c.innerHTML = '<figure class="slot" role="img" aria-label="' + p.nama + '" style="--img:url(\'Image/' + encodeURI(p.img) + '\')"></figure><h3>' + p.nama +
      "</h3><p>" + p.desk.split(". ")[0].replace(/\.$/, "") + '.</p><button type="button" class="card-more" tabindex="-1">Lihat detail</button>';
    c.addEventListener("click", () => bukaDetail("proyek", i));
    c.addEventListener("keydown", (e) => { if (e.key === "Enter") bukaDetail("proyek", i); });
    cards.appendChild(c);
  });
}
setFilter("semua");

/* POPUP DETAIL (peran & proyek) */
const pd = $("popupDetail");
function bukaDetail(jenis, i) {
  const peranMode = jenis === "peran", d = peranMode ? peran[i] : proyek[i];
  $("dHead").style.setProperty("--img", "url('Image/" + encodeURI(d.img) + "')");
  $("dNama").textContent = d.nama;
  $("dSub").textContent = peranMode ? d.sub : d.kat;
  $("dLabel").textContent = peranMode ? "Yang saya kuasai" : "Tentang proyek";
  $("dTip").textContent = peranMode ? d.tips : d.desk;
  const ul = $("dList"); ul.innerHTML = "";
  (peranMode ? d.item : d.tags).forEach((t, n) => {
    const li = document.createElement("li"); li.textContent = t; li.style.setProperty("--d", n * 55 + "ms"); ul.appendChild(li);
  });
  const aksi = $("dAksi");
  aksi.textContent = peranMode ? "Lihat proyek terkait" : "Diskusikan proyek serupa";
  aksi.onclick = () => {
    tutupDetail();
    if (peranMode) { setFilter(d.cari); $("proyek").scrollIntoView(); } else bukaKontak("kolab");
  };
  const sw = $("dSwitch"); sw.innerHTML = "";
  (peranMode ? peran : proyek).forEach((x, n) => {
    const b = document.createElement("button");
    b.type = "button"; b.textContent = x.nama;
    if (n === i) b.setAttribute("aria-current", "true");
    b.onclick = () => bukaDetail(jenis, n);
    sw.appendChild(b);
  });
  pd.classList.add("active"); pd.setAttribute("aria-hidden", "false");
  document.body.classList.add("popup-terbuka");
  pd.firstElementChild.scrollTop = 0;
}
function tutupDetail() { pd.classList.remove("active"); pd.setAttribute("aria-hidden", "true"); document.body.classList.remove("popup-terbuka"); }
pd.addEventListener("click", (e) => { if (e.target === pd) tutupDetail(); });

/* ESTIMATOR */
const jenis = $("jenis"), hari = $("hari"), hasil = $("hasil");
function hitung() {
  const total = Math.max(0, parseInt(hari.value) || 0) * Number(jenis.value);
  hasil.textContent = "Rp " + total.toLocaleString("id-ID");
}
jenis.addEventListener("change", hitung); hari.addEventListener("input", hitung); hitung();
$("kirimEstimasi").addEventListener("click", () => {
  bukaKontak("kolab");
  $("isi").value = "Halo Awan, saya tertarik dengan: " + jenis.options[jenis.selectedIndex].text + ", sekitar " + (hari.value || 0) + " hari kerja (estimasi " + hasil.textContent + ").";
});

/* POPUP KONTAK */
const pk = $("popupKontak"), kotak = pk.firstElementChild, status = $("formStatus");
function setMode(m) {
  const pesan = m === "pesan";
  kotak.dataset.mode = m;
  $("judulKontak").textContent = pesan ? "Kirim pesan" : "Ajak kolaborasi";
  $("tabPesan").setAttribute("aria-selected", String(pesan));
  $("tabKolab").setAttribute("aria-selected", String(!pesan));
  status.textContent = "";
}
function bukaKontak(m) {
  setMode(m || "pesan");
  pk.classList.add("active"); pk.setAttribute("aria-hidden", "false");
  document.body.classList.add("popup-terbuka");
  setTimeout(() => $("nama").focus(), 50);
}
function tutupKontak() { pk.classList.remove("active"); pk.setAttribute("aria-hidden", "true"); document.body.classList.remove("popup-terbuka"); }
pk.addEventListener("click", (e) => { if (e.target === pk) tutupKontak(); });
$("formKontak").addEventListener("submit", (e) => {
  e.preventDefault();
  const kolab = kotak.dataset.mode === "kolab";
  const pesan = "Halo Awan, saya " + $("nama").value + " (" + $("email").value + ")." +
    (kolab ? " Jenis kerja sama: " + $("tipe").value + "." : "") + "\n\n" + $("isi").value;
  open("https://wa.me/" + NOMOR_WA + "?text=" + encodeURIComponent(pesan), "_blank", "noopener");
  status.textContent = "WhatsApp dibuka dengan pesanmu. Tekan kirim di sana.";
  e.target.reset();
});
$("salin").addEventListener("click", function () {
  const ok = () => { this.textContent = "Email tersalin"; setTimeout(() => { this.textContent = "Salin email"; }, 1800); };
  navigator.clipboard ? navigator.clipboard.writeText(EMAIL).then(ok, () => { location.href = "mailto:" + EMAIL; }) : (location.href = "mailto:" + EMAIL);
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { tutupKontak(); tutupDetail(); tutupSkill(); tutupCV(); tutupSub(); } });

/* STATISTIK HITUNG NAIK */
const io = new IntersectionObserver((es) => es.forEach((en) => {
  if (!en.isIntersecting) return;
  io.unobserve(en.target);
  const n = +en.target.dataset.n, t0 = performance.now();
  (function s(t) { const p = Math.min(1, (t - t0) / 1100); en.target.textContent = Math.round(n * p); if (p < 1) requestAnimationFrame(s); })(t0);
}), { threshold: 0.6 });
document.querySelectorAll("[data-n]").forEach((el) => io.observe(el));

/* SKILL LAB */
const TINGKAT = ["Dasar", "Menengah", "Mahir", "Ahli"];
const tingkat = (v) => (v >= 88 ? 3 : v >= 65 ? 2 : v >= 40 ? 1 : 0);
const sk = $("skills"), ps = $("popupSkill");
let urut = "level", sAktif = 0, daftar = SKILL.slice();
["level", "grup"].forEach((k) => {
  const b = document.createElement("button");
  b.type = "button"; b.dataset.k = k; b.textContent = k === "level" ? "Level tertinggi" : "Kelompokkan: teknis dulu";
  b.addEventListener("click", () => renderSkill(k));
  $("skillSort").appendChild(b);
});
function renderSkill(k) {
  urut = k;
  $("skillSort").querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.k === k)));
  daftar = SKILL.slice().sort((a, b) => k === "level" ? b.lvl - a.lvl : (a.grup === b.grup ? b.lvl - a.lvl : a.grup === "Teknis" ? -1 : 1));
  sk.innerHTML = "";
  daftar.forEach((d, i) => {
    const t = document.createElement("button");
    t.type = "button"; t.className = "skill-tile"; t.style.animationDelay = i * 40 + "ms";
    t.innerHTML = "<strong>" + d.nama + "</strong><small>" + d.grup + " &middot; " + TINGKAT[tingkat(d.lvl)] + '</small><span class="meter"><i></i></span><span class="pct">' + d.lvl + "%</span>";
    t.addEventListener("click", () => bukaSkill(i));
    sk.appendChild(t);
    requestAnimationFrame(() => setTimeout(() => { t.querySelector("i").style.width = d.lvl + "%"; }, 80 + i * 40));
  });
}
renderSkill("level");

function bukaSkill(i) {
  sAktif = (i + daftar.length) % daftar.length;
  const d = daftar[sAktif], lv = tingkat(d.lvl);
  $("sNama").textContent = d.nama; $("sKat").textContent = d.kat;
  $("sDesc").textContent = d.desc;
  $("sLevels").innerHTML = TINGKAT.map((t, n) => '<li class="' + (n <= lv ? "on" : "") + (n === lv ? " now" : "") + '">' + t + "</li>").join("");
  $("sPoin").innerHTML = d.poin.map((p) => "<li>" + p + "</li>").join("");
  $("sTags").innerHTML = d.tags.map((t) => "<li>" + t + "</li>").join("");
  const tabs = $("sTabs"); tabs.innerHTML = "";
  d.pakai.forEach((u, n) => {
    const b = document.createElement("button");
    b.type = "button"; b.setAttribute("role", "tab"); b.textContent = u.t;
    b.addEventListener("click", () => {
      tabs.querySelectorAll("button").forEach((x) => x.setAttribute("aria-selected", String(x === b)));
      $("sUse").textContent = u.d;
    });
    tabs.appendChild(b);
    if (n === 0) b.click();
  });
  const pr = $("sProyek"); pr.innerHTML = "";
  d.proyek.forEach((pi) => {
    const b = document.createElement("button");
    b.type = "button"; b.textContent = "Proyek: " + proyek[pi].nama;
    b.addEventListener("click", () => { tutupSkill(); bukaDetail("proyek", pi); });
    pr.appendChild(b);
  });
  ps.classList.add("active"); ps.setAttribute("aria-hidden", "false");
  document.body.classList.add("popup-terbuka");
  ps.firstElementChild.scrollTop = 0;
  const arc = $("sArc"); arc.style.strokeDasharray = "0 100";
  let n0 = 0; $("sPct").textContent = "0%";
  requestAnimationFrame(() => { arc.style.strokeDasharray = d.lvl + " 100"; });
  const t0 = performance.now();
  (function s(t) { const p = Math.min(1, (t - t0) / 1000); $("sPct").textContent = Math.round(d.lvl * p) + "%"; if (p < 1 && ps.classList.contains("active")) requestAnimationFrame(s); })(t0);
}
function tutupSkill() { ps.classList.remove("active"); ps.setAttribute("aria-hidden", "true"); document.body.classList.remove("popup-terbuka"); }
ps.addEventListener("click", (e) => { if (e.target === ps) tutupSkill(); });
$("sPrev").addEventListener("click", () => bukaSkill(sAktif - 1));
$("sNext").addEventListener("click", () => bukaSkill(sAktif + 1));
document.addEventListener("keydown", (e) => {
  if (!ps.classList.contains("active")) return;
  if (e.key === "ArrowLeft") bukaSkill(sAktif - 1);
  if (e.key === "ArrowRight") bukaSkill(sAktif + 1);
});

/* CV INTERAKTIF (ganti CV_FILE dan data di bawah saat CV diperbarui) */
const CV_FILE = "CV/AwanRestky_CV_2026_update.pdf";
const CV_RINGKAS = "Mahasiswa Teknologi Rekayasa Perangkat Lunak di Politeknik Negeri Batam dengan pengalaman instalasi jaringan Wi-Fi, billing, dan penjualan. Nyaman bekerja di peran teknis, operasional, maupun yang berhadapan dengan pelanggan.";
const CV = [
  {
    t: "kerja", judul: "Network Technician & Billing Staff", org: "Penyedia Wi-Fi lokal", rentang: "Nov 2024 - Jun 2025", a: [2024, 11], b: [2025, 6],
    poin: ["Instalasi dan perawatan jaringan Wi-Fi untuk klien rumah dan bisnis", "Mengelola billing, mencatat transaksi, dan membantu masalah pembayaran", "Troubleshooting dan dukungan pelanggan"]
  },
  {
    t: "kerja", judul: "Sales Marketing & Printing Staff", org: "Proxi Jaringan Nusantara", rentang: "Nov 2024 - Mar 2025", a: [2024, 11], b: [2025, 3],
    poin: ["Mempromosikan produk dan layanan internet", "Membantu mencapai target penjualan bulanan lewat komunikasi langsung", "Mengoperasikan mesin cetak dan menjaga kualitas hasil cetak"]
  },
  {
    t: "kerja", judul: "Shopkeeper", org: "Toko batik, Kepulauan Riau", rentang: "Mar 2023 - Apr 2026", a: [2023, 3], b: [2026, 4],
    poin: ["Melayani pelanggan di toko dan memproses pesanan online", "Mengelola transaksi penjualan dan meningkatkan kepuasan pelanggan"]
  },
  {
    t: "pendidikan", judul: "Ma'had Tahfizhul Quran Al-Mukhtar & Jannatussalam", org: "Program pesantren", rentang: "2019 - 2023", a: [2019, 7], b: [2023, 6],
    poin: ["Spesialisasi hafalan Al-Qur'an dan ilmu syariah"]
  },
  {
    t: "pendidikan", judul: "SMA Negeri 26 Batam", org: "Teknologi Informasi", rentang: "2023 - 2026", a: [2023, 7], b: [2026, 6],
    poin: ["Fokus pada jaringan komputer, sistem informasi, dan dasar-dasar TI"]
  },
  {
    t: "pendidikan", judul: "Politeknik Negeri Batam", org: "D4 Teknologi Rekayasa Perangkat Lunak", rentang: "2026 - sekarang", a: [2026, 7], b: null,
    poin: ["Pengembangan perangkat lunak, desain sistem, manajemen basis data, dan rekayasa aplikasi", "Aktif membangun kemampuan pemrograman, pengembangan web/aplikasi, dan manajemen proyek TI"]
  }
];
const pcv = $("popupCV"), TH0 = 2019, TOTAL = 96;
const bulan = (x) => (x[0] - TH0) * 12 + x[1] - 1;
const persen = (m) => Math.min(100, Math.max(0, m / TOTAL * 100));
$("cvUnduh").href = CV_FILE; $("cvTab").href = CV_FILE; $("cvSumm").textContent = CV_RINGKAS;
for (let y = TH0; y <= 2026; y += 1) { const sp = document.createElement("span"); sp.textContent = y; sp.style.left = persen((y - TH0) * 12 + 6) + "%"; $("cvAxis").appendChild(sp); }
function renderCV(f) {
  $("cvFilter").querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.k === f)));
  const g = $("cvGantt"); g.innerHTML = "";
  const now = new Date(), skr = [now.getFullYear(), now.getMonth() + 1];
  CV.forEach((e) => {
    if (f !== "semua" && e.t !== f) return;
    const a = bulan(e.a), b = bulan(e.b || skr), row = document.createElement("div");
    row.className = "g-row"; row.dataset.t = e.t;
    row.innerHTML = '<button type="button" class="g-btn" aria-expanded="false"><strong>' + e.judul + "</strong><small>" + e.org + " &middot; " + e.rentang +
      '</small><div class="g-track"><i class="g-bar" style="left:' + persen(a) + "%;width:" + (persen(b) - persen(a)) + '%"></i></div></button><ul class="g-det" hidden>' +
      e.poin.map((p) => "<li>" + p + "</li>").join("") + "</ul>";
    const btn = row.firstChild, det = row.lastChild;
    btn.addEventListener("click", () => { const buka = det.hidden; det.hidden = !buka; btn.setAttribute("aria-expanded", String(buka)); });
    g.appendChild(row);
  });
}
[["semua", "Semua"], ["kerja", "Pekerjaan"], ["pendidikan", "Pendidikan"]].forEach(([k, n]) => {
  const b = document.createElement("button");
  b.type = "button"; b.dataset.k = k; b.textContent = n; b.addEventListener("click", () => renderCV(k));
  $("cvFilter").appendChild(b);
});
function tabCV(pdf) {
  $("cvRingkas").hidden = pdf; $("cvPdf").hidden = !pdf;
  $("tabRingkas").setAttribute("aria-selected", String(!pdf)); $("tabPdf").setAttribute("aria-selected", String(pdf));
  if (pdf && !$("cvPdf").firstChild) {
    /* HP/tablet (layar sentuh) tidak menampilkan PDF embed dengan baik, jadi pakai tombol */
    const kotak = '<div class="pdf-fallback"><p>Ketuk tombol untuk membaca CV lengkap dalam format PDF.</p><div class="cv-actions" style="justify-content:center"><a class="btn btn-light" href="' + CV_FILE + '" target="_blank" rel="noopener">Buka PDF</a><a class="btn btn-ghost" href="' + CV_FILE + '" download>Unduh</a></div></div>';
    $("cvPdf").innerHTML = matchMedia("(pointer:coarse)").matches ? kotak
      : '<object data="' + CV_FILE + '#view=FitH" type="application/pdf">' + kotak + "</object>";
  }
}
$("tabRingkas").addEventListener("click", () => tabCV(false));
$("tabPdf").addEventListener("click", () => tabCV(true));
function bukaCV(pdf) {
  tabCV(!!pdf); renderCV("semua");
  pcv.classList.add("active"); pcv.setAttribute("aria-hidden", "false");
  document.body.classList.add("popup-terbuka");
  pcv.firstElementChild.scrollTop = 0;
  if (location.hash !== "#cv") history.replaceState(null, "", "#cv");
}
function tutupCV() {
  if (!pcv.classList.contains("active")) return;
  pcv.classList.remove("active"); pcv.setAttribute("aria-hidden", "true"); document.body.classList.remove("popup-terbuka");
  if (location.hash === "#cv") history.replaceState(null, "", location.pathname + location.search);
}
pcv.addEventListener("click", (e) => { if (e.target === pcv) tutupCV(); });
if (location.hash === "#cv") bukaCV();

/* AKSESIBILITAS POP-UP: fokus masuk, jebak Tab, fokus kembali ke pemicu */
document.querySelectorAll(".popup").forEach((p) => {
  let pemicu = null;
  new MutationObserver(() => {
    if (p.classList.contains("active")) { pemicu = pemicu || document.activeElement; const x = p.querySelector(".close"); if (x && !p.contains(document.activeElement)) x.focus({ preventScroll: true }); }
    else if (pemicu) { try { pemicu.focus({ preventScroll: true }); } catch (e) { } pemicu = null; }
  }).observe(p, { attributes: true, attributeFilter: ["class"] });
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Tab") return;
  const p = document.querySelector(".popup.active"); if (!p) return;
  const f = Array.from(p.querySelectorAll("a[href],button,input,select,textarea,[tabindex='0']")).filter((x) => !x.disabled && x.offsetParent !== null);
  if (!f.length) return;
  const a = f[0], z = f[f.length - 1];
  if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
  else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
});

/* NAVBAR: sorot bagian yang sedang dilihat, Esc menutup menu */
const bagian = ["tentang", "skill", "proses", "proyek", "estimasi", "pendidikan"].map((id) => $(id));
const linkMenu = Array.from(document.querySelectorAll(".menu-list>li>a"));
const spy = new IntersectionObserver((es) => es.forEach((en) => {
  if (en.isIntersecting) linkMenu.forEach((a) => a.classList.toggle("now", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
bagian.forEach((el) => el && spy.observe(el));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") tutupMenu(); });
