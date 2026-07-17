'use client';

import { useState } from 'react';
import { buildWhatsAppLink } from '@/data/site';

export default function ProposalForm({ productName }: { productName: string }) {
  const [form, setForm] = useState({
    institusi: '',
    pic: '',
    email: '',
    telepon: '',
    catatan: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const message = [
      `Halo, saya ingin mengajukan proposal untuk produk *${productName}*.`,
      '',
      `Nama Institusi: ${form.institusi}`,
      `Penanggung Jawab: ${form.pic}`,
      `Email: ${form.email}`,
      `No. Telepon: ${form.telepon}`,
      `Catatan: ${form.catatan || '-'}`,
    ].join('\n');

    window.open(buildWhatsAppLink(message), '_blank');
    setSubmitted(true);
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/60';

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
      <div className="md:col-span-1">
        <label className="mb-2 block text-sm text-slate-300">
          Nama Institusi
        </label>
        <input
          required
          name="institusi"
          value={form.institusi}
          onChange={handleChange}
          placeholder="Koperasi / BPR ..."
          className={inputClass}
        />
      </div>

      <div className="md:col-span-1">
        <label className="mb-2 block text-sm text-slate-300">
          Penanggung Jawab
        </label>
        <input
          required
          name="pic"
          value={form.pic}
          onChange={handleChange}
          placeholder="Nama lengkap"
          className={inputClass}
        />
      </div>

      <div className="md:col-span-1">
        <label className="mb-2 block text-sm text-slate-300">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="nama@instansi.com"
          className={inputClass}
        />
      </div>

      <div className="md:col-span-1">
        <label className="mb-2 block text-sm text-slate-300">
          No. Telepon
        </label>
        <input
          required
          name="telepon"
          value={form.telepon}
          onChange={handleChange}
          placeholder="08xxxxxxxxxx"
          className={inputClass}
        />
      </div>

      <div className="md:col-span-2">
        <label className="mb-2 block text-sm text-slate-300">
          Catatan Tambahan (opsional)
        </label>
        <textarea
          name="catatan"
          value={form.catatan}
          onChange={handleChange}
          rows={4}
          placeholder="Ceritakan kebutuhan institusi Anda..."
          className={inputClass}
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full cursor-pointer rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-7 py-4 font-semibold shadow-lg shadow-blue-500/30 transition hover:-translate-y-1 md:w-auto"
        >
          Kirim via WhatsApp
        </button>

        {submitted && (
          <p className="mt-3 text-sm text-cyan-400">
            Membuka WhatsApp di tab baru. Jika tidak terbuka otomatis,
            pastikan pop-up tidak diblokir browser Anda.
          </p>
        )}
      </div>
    </form>
  );
}
