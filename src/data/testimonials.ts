export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  institution: string;
  category: 'Koperasi' | 'BPR';
};

// PLACEHOLDER: ganti dengan testimoni asli dari klien sebelum website tayang.
export const testimonials: Testimonial[] = [
  {
    quote:
      'Tulis testimoni asli dari klien di sini, misalnya manfaat yang dirasakan setelah menggunakan sistem.',
    name: '[Nama Penanggung Jawab]',
    role: 'Ketua Pengurus',
    institution: '[Nama Koperasi Anda]',
    category: 'Koperasi',
  },
  {
    quote:
      'Tulis testimoni asli dari klien di sini, misalnya manfaat yang dirasakan setelah menggunakan sistem.',
    name: '[Nama Penanggung Jawab]',
    role: 'Direktur',
    institution: '[Nama BPR Anda]',
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
