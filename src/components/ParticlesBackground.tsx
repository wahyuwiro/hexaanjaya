'use client';

import { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      const engine = await import('tsparticles-engine');

      await loadSlim(engine.tsParticles);

      setInit(true);
    };

    initialize();
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="particles"
      className="fixed inset-0 -z-0"
      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: '#020617',
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              area: 900,
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

          links: {
            enable: true,
            distance: 140,
            color: '#38bdf8',
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1.5,
          },
        },

        interactivity: {
          detectsOn: 'window',

          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },

            onClick: {
              enable: true,
              mode: 'push',
            },

            resize: true,
          },

          modes: {
            grab: {
              distance: 220,

              links: {
                opacity: 0.8,
              },
            },

            push: {
              quantity: 6,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}