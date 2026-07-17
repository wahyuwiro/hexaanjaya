import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import ProposalForm from '@/components/ProposalForm';
import PricingSection from '@/components/PricingSection';
import { products } from '@/data/products';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return {};

  return {
    title: `${product.name} | PT. HEXA ANJAYA TECH`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <ParticlesBackground />

      <div className="relative z-10">
        <div className="pointer-events-none fixed -top-32 -left-32 h-125 w-125 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="pointer-events-none fixed bottom-0 right-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[100px]" />

        <Navbar />

        {/* Header */}
        <section className="pb-20 pt-40">
          <div className="mx-auto w-[90%] max-w-7xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 text-2xl">
              {product.icon}
            </div>

            <span className="mb-4 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-400">
              {product.category}
            </span>

            <h1 className="mb-5 text-4xl font-bold lg:text-5xl">
              {product.name}
            </h1>

            <p className="max-w-3xl text-slate-400">{product.description}</p>
          </div>
        </section>

        {/* Modules */}
        <section className="py-16">
          <div className="mx-auto w-[90%] max-w-7xl">
            <h2 className="mb-8 text-3xl font-bold">Modul Utama</h2>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {product.modules.map((module) => (
                <div
                  key={module}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="font-semibold text-white">{module}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-16">
          <div className="mx-auto grid w-[90%] max-w-7xl gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Fitur Unggulan</h2>

              <ul className="space-y-4">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-slate-300">
                    <span className="mt-1 text-cyan-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold">Manfaat</h2>

              <ul className="space-y-4">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-slate-300">
                    <span className="mt-1 text-cyan-400">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <PricingSection
          productName={product.name}
          tiers={product.pricingTiers}
        />

        {/* Proposal Form */}
        <section id="ajukan-proposal" className="py-16">
          <div className="mx-auto w-[90%] max-w-4xl">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-lg lg:p-12">
              <h2 className="mb-3 text-3xl font-bold">Ajukan Proposal</h2>

              <p className="mb-10 text-slate-400">
                Tertarik dengan {product.name}? Isi form berikut dan kami akan
                menghubungi Anda melalui WhatsApp.
              </p>

              <ProposalForm productName={product.name} />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
