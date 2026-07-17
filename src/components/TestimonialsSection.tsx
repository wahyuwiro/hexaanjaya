import Image from 'next/image';
import { testimonials, clientLogos } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="mx-auto w-[90%] max-w-7xl">
        <h2 className="mb-5 text-3xl font-bold">Dipercaya Oleh</h2>

        <p className="mb-10 max-w-2xl text-slate-400">
          Koperasi dan BPR yang telah menggunakan sistem kami.
        </p>

        <div className="mb-16 flex flex-wrap items-center gap-4">
          {clientLogos.map((client) =>
            client.src ? (
              <span
                key={client.name}
                title={client.name}
                className="flex h-16 w-32 items-center justify-center rounded-2xl bg-white p-3 shadow-sm"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={100}
                  height={50}
                  className="h-full w-full object-contain"
                  unoptimized={client.src.endsWith('.ico')}
                />
              </span>
            ) : (
              <span
                key={client.name}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-slate-300"
              >
                {client.name}
              </span>
            )
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name + testimonial.institution}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <span className="mb-4 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-400">
                {testimonial.category}
              </span>

              <p className="mb-6 italic text-slate-300">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <p className="font-semibold text-white">{testimonial.name}</p>

              <p className="text-sm text-slate-400">
                {testimonial.role}, {testimonial.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
