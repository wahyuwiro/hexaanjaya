export type PricingTier = {
  name: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
};

export type Product = {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  modules: string[];
  features: string[];
  benefits: string[];
  pricingTiers: PricingTier[];
};

// PLACEHOLDER: isi setiap tier dengan cakupan fitur & harga asli sebelum website tayang.
// Nama tier (Starter/Professional/Enterprise) dan isinya masih generik dan perlu disesuaikan
// dengan paket yang benar-benar dijual.
const defaultPricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    tagline: '[Cocok untuk skala kecil, jumlah anggota/nasabah terbatas]',
    features: [
      '[Modul inti transaksi]',
      '[Jumlah cabang/pengguna terbatas]',
      '[Dukungan jam kerja]',
    ],
  },
  {
    name: 'Professional',
    tagline: '[Cocok untuk skala menengah dengan kebutuhan pelaporan lebih lengkap]',
    features: [
      '[Semua fitur Starter]',
      '[Modul pelaporan regulasi tambahan]',
      '[Multi-cabang]',
      '[Dukungan prioritas]',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    tagline: '[Cocok untuk skala besar dengan kebutuhan kustomisasi penuh]',
    features: [
      '[Semua fitur Professional]',
      '[Kustomisasi modul sesuai kebutuhan]',
      '[Integrasi sistem pihak ketiga]',
      '[Dukungan 24/7 & SLA khusus]',
    ],
  },
];

export const products: Product[] = [
  {
    slug: 'koperasi',
    category: 'Koperasi',
    name: 'Core Banking System Koperasi',
    tagline: 'Sistem inti simpan pinjam untuk koperasi modern',
    description:
      'Solusi core banking yang dirancang khusus untuk koperasi, mengelola seluruh siklus keuangan anggota mulai dari simpanan, pinjaman, hingga pelaporan Rapat Anggota Tahunan (RAT) dalam satu sistem terintegrasi.',
    icon: '🤝',
    modules: [
      'Simpan Pinjam Anggota',
      'Tabungan & Simpanan Berjangka',
      'Angsuran & Perhitungan Bunga Otomatis',
      'Akuntansi & Jurnal Otomatis',
      'Laporan RAT (Rapat Anggota Tahunan)',
      'Manajemen Data Anggota & Keanggotaan',
    ],
    features: [
      'Perhitungan bunga & bagi hasil otomatis sesuai kebijakan koperasi',
      'Dukungan multi-cabang dengan sinkronisasi data real-time',
      'Cetak buku anggota, kartu simpanan, dan slip transaksi',
      'Dashboard kesehatan keuangan koperasi',
      'Dapat diintegrasikan dengan mobile banking anggota (opsional)',
    ],
    benefits: [
      'Mempercepat proses transaksi simpan pinjam harian',
      'Meminimalkan kesalahan pencatatan manual',
      'Laporan keuangan siap saji untuk RAT dan pengawas koperasi',
      'Skalabel untuk koperasi kecil hingga besar',
    ],
    pricingTiers: defaultPricingTiers,
  },
  {
    slug: 'bpr',
    category: 'BPR',
    name: 'Core Banking System BPR',
    tagline: 'Sistem inti perbankan untuk Bank Perekonomian Rakyat',
    description:
      'Solusi core banking yang dirancang untuk memenuhi kebutuhan operasional dan regulasi BPR, lengkap dengan pelaporan SID, SLIK, dan PPATK sesuai ketentuan OJK.',
    icon: '🏦',
    modules: [
      'Tabungan & Deposito',
      'Kredit & Pembiayaan',
      'Giro (opsional)',
      'Pelaporan SID & SLIK OJK',
      'Pelaporan PPATK',
      'Akuntansi & General Ledger',
    ],
    features: [
      'Terintegrasi dengan pelaporan SID, SLIK, dan PPATK sesuai regulasi OJK',
      'Manajemen kredit lengkap: pengajuan, analisa, pencairan, hingga pelunasan',
      'Mobile & SMS banking untuk kemudahan akses nasabah',
      'Keamanan berlapis dengan audit trail transaksi',
      'Laporan bulanan & tahunan otomatis untuk kebutuhan pengawasan OJK',
    ],
    benefits: [
      'Mempermudah kepatuhan terhadap regulasi OJK',
      'Mempercepat proses kredit dari pengajuan hingga pencairan',
      'Mengurangi risiko operasional dengan sistem yang teraudit',
      'Mendukung pertumbuhan portofolio BPR secara aman dan terukur',
    ],
    pricingTiers: defaultPricingTiers,
  },
];
