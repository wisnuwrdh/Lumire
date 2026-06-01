"use client";

import { useState } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-background px-5 pt-14 pb-16 sm:px-6 lg:px-8 lg:pt-20 lg:pb-24">
      {/* Decorative gradient blob */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-blush/60 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent-gold/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center lg:flex-row lg:items-center lg:gap-12 lg:text-left">
        {/* Text Content */}
        <div className="flex-1">
          <span className="mb-3 inline-block rounded-full bg-accent-blush px-4 py-1.5 text-xs font-medium tracking-wide text-text-secondary uppercase sm:text-sm">
            Skincare untuk Generasi Kamu
          </span>
          <h1 className="mt-4 font-serif text-4xl leading-tight font-semibold text-foreground sm:text-5xl lg:text-6xl">
            Kulit Cerah yang Bukan
            <span className="text-accent-gold"> Cuma Mimpi</span>
          </h1>
          <p className="mt-5 max-w-md mx-auto text-base leading-relaxed text-text-secondary sm:text-lg lg:mx-0">
            Lumière Glow Serum membantu kulitmu terlihat lebih sehat, lembap, dan glowing secara natural — tanpa ribet, tanpa drama.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="https://wa.me/6286798102801"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex h-14 w-full max-w-xs items-center justify-center gap-2.5 rounded-full bg-accent-gold px-8 text-base font-semibold text-white shadow-lg shadow-accent-gold/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-gold/30 sm:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${isHovered ? "rotate-12" : ""}`}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Chat WhatsApp Sekarang
            </a>
            <a
              href="#manfaat"
              className="flex h-14 w-full max-w-xs items-center justify-center rounded-full border border-text-secondary/20 px-8 text-base font-medium text-text-secondary transition-colors duration-200 hover:bg-accent-blush/40 sm:w-auto"
            >
              Lihat Manfaat
            </a>
          </div>

          <p className="mt-4 text-xs text-text-secondary/70">
            Ribuan perempuan sudah coba — giliran kamu ✨
          </p>
        </div>

        {/* Product Visual Placeholder */}
        <div className="mt-12 flex flex-col items-center lg:mt-0 lg:w-[420px]">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-accent-blush via-card-bg to-white shadow-2xl shadow-accent-gold/10 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            {/* Subtle rings */}
            <div className="absolute inset-4 rounded-full border border-accent-gold/10" />
            <div className="absolute inset-8 rounded-full border border-accent-gold/5" />

            {/* Bottle shape placeholder */}
            <div className="relative flex flex-col items-center">
              <div className="h-20 w-24 rounded-t-xl bg-gradient-to-b from-accent-gold to-[#b8944d] shadow-lg sm:h-24 sm:w-28">
                <div className="flex h-full items-center justify-center">
                  <span className="font-serif text-xl font-semibold text-white tracking-widest sm:text-2xl">
                    L
                  </span>
                </div>
              </div>
              <div className="h-40 w-32 rounded-b-3xl bg-gradient-to-b from-white to-accent-blush/40 shadow-xl backdrop-blur-sm sm:h-48 sm:w-36">
                <div className="flex h-full flex-col items-center justify-center px-4 text-center">
                  <span className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                    Lumière
                  </span>
                  <span className="mt-1 text-[10px] font-medium tracking-widest text-text-secondary uppercase sm:text-xs">
                    Glow Serum
                  </span>
                  <div className="mt-3 h-px w-12 bg-accent-gold/30" />
                  <span className="mt-2 text-[10px] text-text-secondary/60">
                    30 ml / 1.0 fl.oz
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
