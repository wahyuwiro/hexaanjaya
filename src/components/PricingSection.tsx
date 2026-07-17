import type { PricingTier } from '@/data/products';
import { buildWhatsAppLink } from '@/data/site';

export default function PricingSection({
  productName,
  tiers,
}: {
  productName: string;
  tiers: PricingTier[];
}) {
  return (
    <section className="py-16">
      <div className="mx-auto w-[90%] max-w-7xl">
        <h2 className="mb-3 text-3xl font-bold">Pilihan Paket</h2>

        <p className="mb-10 max-w-2xl text-slate-400">
          Pilih paket yang sesuai dengan skala institusi Anda. Hubungi kami
          untuk konsultasi dan penawaran harga.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-3xl border p-8 ${
                tier.highlighted
                  ? 'border-cyan-400/60 bg-white/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <h3 className="mb-2 text-2xl font-bold">{tier.name}</h3>

              <p className="mb-6 text-slate-400">{tier.tagline}</p>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-slate-300">
                    <span className="mt-1 text-cyan-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={buildWhatsAppLink(
                  `Halo, saya ingin bertanya mengenai paket ${tier.name} untuk produk ${productName}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block rounded-full px-6 py-3 text-center font-semibold transition hover:-translate-y-1 ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-400'
                    : 'border border-white/20 hover:bg-white/5'
                }`}
              >
                Hubungi Kami
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
