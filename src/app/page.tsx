'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticlesBackground from '@/components/ParticlesBackground';

gsap.registerPlugin(ScrollTrigger);

const inter = Inter({
  subsets: ['latin'],
});

const services = [
  {
    icon: '🏦',
    title: 'Core Banking System',
    desc: 'Modern banking system with transaction, reporting and security features.',
  },
  {
    icon: '📱',
    title: 'Mobile & SMS Banking',
    desc: 'Mobile banking solutions for better customer accessibility.',
  },
  {
    icon: '💻',
    title: 'Custom Software Development',
    desc: 'Web and desktop applications tailored to business operations.',
  },
  {
    icon: '📊',
    title: 'Reporting & Compliance',
    desc: 'SID, SLIK, PPATK integration and regulatory reporting.',
  },
  {
    icon: '🌐',
    title: 'Web Design',
    desc: 'Professional modern websites and company profiles.',
  },
  {
    icon: '🛠️',
    title: 'Support & Maintenance',
    desc: 'Continuous technical assistance and implementation support.',
  },
];

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
  if (typeof window === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {

    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    // trigger once immediately
    handleScroll();

    // HERO

    gsap.from('.hero-badge', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1.2,
      delay: 0.2,
      ease: 'power3.out',
    });

    gsap.from('.hero-description', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out',
    });

    gsap.from('.hero-buttons', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.7,
      ease: 'power3.out',
    });

    gsap.from('.hero-card', {
      opacity: 0,
      x: 100,
      duration: 1.2,
      delay: 0.5,
      ease: 'power3.out',
    });

    // ABOUT

    gsap.from('.about-card', {
      scrollTrigger: {
        trigger: '.about-card',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },

      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power3.out',
    });

    // SERVICES

    gsap.utils.toArray('.service-card').forEach((card: any, i) => {

      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },

        opacity: 0,
        y: 60,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power3.out',
      });

    });

    // JOURNEY

    gsap.utils.toArray('.timeline-item').forEach((item: any, i) => {

      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },

        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'power3.out',
      });

    });

    // CTA

    gsap.from('.cta', {
      scrollTrigger: {
        trigger: '.cta',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },

      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power3.out',
    });

  });

  ScrollTrigger.refresh();

  return () => {

    window.removeEventListener('scroll', () => {});

    ctx.revert();

    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.kill();
    });

  };

}, []);

  return (
    <main
      className={`${inter.className} relative min-h-screen bg-slate-950 text-white overflow-hidden`}
    >
      <ParticlesBackground /> 
      <div className="relative z-10">
        {/* Glow */}
      <div className="fixed -top-32 -left-32 h-125 w-125 rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="fixed bottom-0 right-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[100px]" />

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-lg">
        <div className="mx-auto flex w-[90%] max-w-7xl items-center justify-between py-5">
          <div className="flex items-center gap-3">

            {/* <Image
              src="/logo.png"
              alt="HEXA ANJAYA TECH"
              width={42}
              height={42}
              priority
              className="h-10 w-10 object-contain"
            /> */}

            <h1 className="font-extrabold tracking-wide">
              HEXA
              <span className="text-cyan-400">
                {' '}ANJAYA TECH
              </span>
            </h1>

          </div>

          <div className="hidden gap-8 md:flex">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex min-h-screen items-center pt-28"
      >
        {/* <div className="mx-auto grid w-[90%] max-w-7xl gap-16 lg:grid-cols-2"> */}
        <div className="mx-auto grid w-[90%] max-w-7xl grid gap-16 items-start lg:grid-cols-2">
          <div>
            <div className="hero-badge mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-cyan-400">
              Trusted Technology Partner Since 2017
            </div>

            <h1 className="hero-title mb-6 text-5xl font-extrabold leading-tight lg:text-7xl">
              Building
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {' '}
                Digital Solutions
              </span>
              <br />
              for Banking & Business Growth
            </h1>

            <p className="hero-text mb-8 max-w-xl text-slate-300">
              PT. HEXA ANJAYA TECH provides IT solutions for banking,
              cooperatives and institutions with secure and scalable systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-gradient-to-r cursor-pointer from-blue-600 to-cyan-400 px-7 py-4 font-semibold shadow-lg shadow-blue-500/30 transition hover:-translate-y-1">
                Explore Services
              </button>

              <button className="rounded-full cursor-pointer border border-white/20 px-7 py-4 hover:bg-white/5">
                Learn More
              </button>
            </div>
          </div>

          <div
           className="
              hero-card
              self-start
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              p-8
              mt-auto
              mb-auto
              backdrop-blur-lg
            "
          >
            <h3 className="mb-6 text-2xl font-bold">
              Technology Solutions
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                ['8+', 'Years Experience'],
                ['100%', 'Customizable'],
                ['24/7', 'Support'],
                ['Secure', 'Enterprise'],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h2 className="mb-2 text-3xl font-bold text-cyan-400">
                    {title}
                  </h2>

                  <p className="text-slate-300">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-28 about-card"
      >
        <div className="mx-auto grid w-[90%] max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-5xl font-bold">
              About Our Company
            </h2>

            <p className="text-slate-400">
              PT. HEXA ANJAYA TECH supports digital transformation
              across banking, cooperatives and institutions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg">
            <p className="mb-5 text-slate-300">
              Founded in 2017 and continuously evolving
              alongside modern technology demands.
            </p>

            <p className="mb-5 text-slate-300">
              Expanded and transformed into PT. HEXA
              ANJAYA TECH in 2025.
            </p>

            <p className="text-slate-300">
              Specialized in banking applications,
              mobile banking and enterprise software.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-28"
      >
        <div className="mx-auto w-[90%] max-w-7xl">
          <h2 className="mb-5 text-5xl font-bold">
            Our Services
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="service-card rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400/50"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 text-2xl">
                  {service.icon}
                </div>

                <h3 className="mb-4 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="text-slate-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section
        id="journey"
        className="py-28"
      >
        <div className="mx-auto w-[90%] max-w-7xl">

          <h2 className="mb-5 text-5xl font-bold">
            Company Journey
          </h2>

          <p className="mb-16 max-w-2xl text-slate-400">
            Perjalanan kami dalam membangun solusi teknologi terpercaya
            untuk berbagai sektor bisnis di Indonesia.
          </p>

          <div className="relative border-l border-white/10 pl-10">

            {[
              {
                year: '2017',
                title: 'Company Founded',
                desc:
                  'CV. HEXA ANJAYA resmi berdiri dan mulai menyediakan layanan teknologi informasi untuk koperasi dan perbankan.',
              },

              {
                year: '2020',
                title: 'Digital Expansion',
                desc:
                  'Mengembangkan layanan digital seperti mobile banking, web application, dan sistem pelaporan modern.',
              },

              {
                year: '2025',
                title: 'Become PT. HEXA ANJAYA TECH',
                desc:
                  'Transformasi perusahaan menjadi PT. HEXA ANJAYA TECH untuk memperluas jangkauan dan kualitas layanan teknologi.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  timeline-item
                  relative
                  mb-12
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-lg
                  transition
                  hover:border-cyan-400/40
                  hover:bg-white/10
                "
              >
                {/* Dot */}

                <div
                  className="
                    absolute
                    -left-[49px]
                    top-8
                    h-5
                    w-5
                    rounded-full
                    border-4
                    border-slate-950
                    bg-cyan-400
                    shadow-[0_0_20px_rgba(56,189,248,0.7)]
                  "
                />

                <span
                  className="
                    mb-2
                    inline-block
                    rounded-full
                    bg-cyan-500/10
                    px-3
                    py-1
                    text-sm
                    font-semibold
                    text-cyan-400
                  "
                >
                  {item.year}
                </span>

                <h3 className="mb-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-slate-400">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-28"
      >
        <div className="mx-auto w-[90%] max-w-6xl cta">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-r from-blue-600/20 to-cyan-400/10 px-10 py-24 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              Let&apos;s Build Your Digital Future
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-slate-300">
              Secure, scalable and innovative technology
              solutions for your company.
            </p>

            <button className="rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-400 px-8 py-4 font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-wrap justify-between gap-5 text-slate-400">
          <div>
            <h3 className="font-bold text-white">
              PT. HEXA ANJAYA TECH
            </h3>

            <p>Technology Solutions Company</p>
          </div>

          <p>
            © 2026 PT. HEXA ANJAYA TECH
          </p>
        </div>
      </footer>

      {/* Scroll Button */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
        className={`fixed cursor-pointer bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-xl shadow-lg transition-all ${
          showScroll
            ? 'translate-y-0 opacity-100'
            : 'translate-y-5 opacity-0'
        }`}
      >
        ↑
      </button>
      </div>
    </main>
  );
}