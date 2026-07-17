'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    particlesJS: (tagId: string, params: Record<string, unknown>) => void;
  }
}

export default function ParticlesBackground() {

  useEffect(() => {

    const initParticles = () => {

      if (!window.particlesJS) return;

      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              value_area: 900,
            },
          },

          color: {
            value: ['#38bdf8', '#2563eb', '#ffffff'],
          },

          shape: {
            type: 'circle',
          },

          opacity: {
            value: 0.5,
            random: true,
          },

          size: {
            value: 3,
            random: true,
          },

          line_linked: {
            enable: true,
            distance: 140,
            color: '#38bdf8',
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
          },
        },

        interactivity: {
          detect_on: 'window',

          events: {
            onhover: {
              enable: true,
              mode: 'grab',
            },

            onclick: {
              enable: true,
              mode: 'push',
            },

            resize: true,
          },

          modes: {
            grab: {
              distance: 220,

              line_linked: {
                opacity: 0.8,
              },
            },

            push: {
              particles_nb: 6,
            },
          },
        },

        retina_detect: true,
      });

    };

    const timeout = setTimeout(initParticles, 200);

    return () => clearTimeout(timeout);

  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
        strategy="afterInteractive"
      />

      <div
        id="particles-js"
        className="
          fixed
          inset-0
          z-0
          pointer-events-none
        "
      />
    </>
  );
}