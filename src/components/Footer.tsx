import { siteConfig } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-[90%] max-w-7xl flex-wrap justify-between gap-5 text-slate-400">
        <div>
          <h3 className="font-bold text-white">{siteConfig.companyName}</h3>
          <p>Perusahaan Solusi Teknologi</p>
        </div>

        <p>© 2026 {siteConfig.companyName}</p>
      </div>
    </footer>
  );
}
