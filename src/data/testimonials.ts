export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  institution: string;
  category: 'Koperasi' | 'BPR';
};

// CONTOH/DEMO: testimoni di bawah ini fiktif, dibuat untuk keperluan tampilan.
// Nama, institusi, dan kutipan tidak merepresentasikan klien sungguhan.
// WAJIB diganti dengan testimoni asli dari klien sebelum website tayang ke publik,
// terutama karena ini menyasar institusi keuangan yang diatur OJK.
export const testimonials: Testimonial[] = [
  {
    quote:
      'Sejak menggunakan sistem ini, proses simpan pinjam anggota jadi jauh lebih cepat dan rapi. Laporan untuk RAT juga tinggal cetak, tidak perlu rekap manual lagi.',
    name: 'Budi Santoso',
    role: 'Ketua Pengurus',
    institution: 'Koperasi Sejahtera Mandiri',
    category: 'Koperasi',
  },
  {
    quote:
      'Perhitungan bunga dan bagi hasil otomatis sangat membantu. Kesalahan pencatatan yang dulu sering terjadi sekarang praktis tidak ada lagi.',
    name: 'Siti Rahayu',
    role: 'Manajer Keuangan',
    institution: 'Koperasi Mitra Usaha',
    category: 'Koperasi',
  },
  {
    quote:
      'Integrasi pelaporan SID dan SLIK benar-benar memudahkan kepatuhan kami terhadap regulasi OJK. Tim audit juga lebih mudah menelusuri data transaksi.',
    name: 'Ahmad Wijaya',
    role: 'Direktur Utama',
    institution: 'BPR Bina Sejahtera',
    category: 'BPR',
  },
  {
    quote:
      'Proses kredit dari pengajuan sampai pencairan jadi lebih terstruktur. Nasabah juga senang karena sekarang bisa pantau tabungan lewat mobile banking.',
    name: 'Dewi Kusuma',
    role: 'Kepala Operasional',
    institution: 'BPR Karya Utama',
    category: 'BPR',
  },
];

export type ClientLogo = {
  name: string;
  // Path di /public. Kosongkan (tanpa src) untuk tampil sebagai chip placeholder teks.
  src?: string;
};

export const clientLogos: ClientLogo[] = [
  { name: 'BPR ACA', src: '/bpr-aca.png' },
  { name: 'BPR Jwalita', src: '/bpr-jwalita.png' },
  { name: 'BPR Tanjung Tani', src: '/bpr-tanjung-tani.ico' },
  // PLACEHOLDER: tambahkan logo klien Koperasi di sini.
  { name: '[Nama Koperasi Klien]' },
];
