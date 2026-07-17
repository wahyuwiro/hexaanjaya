import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import TestimonialsSection from '@/components/TestimonialsSection';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Produk Kami | PT. HEXA ANJAYA TECH',
  description:
    'Solusi core banking system unggulan untuk Koperasi dan BPR dari PT. HEXA ANJAYA TECH.',
};

export default function ProdukPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <ParticlesBackground />

      <div className="relative z-10">
        <div className="pointer-events-none fixed -top-32 -left-32 h-125 w-125 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="pointer-events-none fixed bottom-0 right-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[100px]" />

        <Navbar />

        <section className="pb-28 pt-40">
          <div className="mx-auto w-[90%] max-w-7xl">
            <h1 className="mb-5 text-5xl font-bold">Produk Kami</h1>

            <p className="mb-16 max-w-2xl text-slate-400">
              Solusi core banking system yang kami kembangkan khusus untuk
              kebutuhan Koperasi dan BPR di Indonesia.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/produk/${product.slug}`}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400/50"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 text-2xl">
                    {product.icon}
                  </div>

                  <span className="mb-3 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-400">
                    {product.category}
                  </span>

                  <h2 className="mb-3 text-2xl font-bold">{product.name}</h2>

                  <p className="mb-6 text-slate-400">{product.tagline}</p>

                  <span className="font-semibold text-cyan-400 group-hover:underline">
                    Lihat Detail &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />

        <Footer />
      </div>
    </main>
  );
}
