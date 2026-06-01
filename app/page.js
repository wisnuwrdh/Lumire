import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTABottom from "@/components/CTABottom";
import FloatingWA from "@/components/FloatingWA";

export default function Home() {
  return (
    <main className="min-h-full">
      <Hero />
      <ProblemSolution />
      <Benefits />
      <Testimonials />
      <CTABottom />

      {/* Footer */}
      <footer className="w-full border-t border-accent-blush/40 bg-white px-5 py-8 text-center sm:px-6 lg:px-8">
        <p className="font-serif text-lg font-semibold text-foreground">
          Lumière
        </p>
        <p className="mt-1 text-xs text-text-secondary/60">
          Glow Serum untuk Kulit Sehat & Cerah
        </p>
        <div className="mx-auto mt-4 flex items-center justify-center gap-4">
          <a
            href="https://wa.me/6286798102801"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-secondary transition-colors hover:text-accent-gold"
          >
            WhatsApp
          </a>
          <span className="text-accent-blush">·</span>
          <a
            href="https://www.instagram.com/Lumièreofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-secondary transition-colors hover:text-accent-gold"
          >
            Instagram
          </a>
        </div>
        <p className="mt-6 text-[11px] text-text-secondary/40">
          © 2025 Lumière. Semua konten bersifat fiksi — halaman ini adalah demo klien.
        </p>
      </footer>

      <FloatingWA />
    </main>
  );
}
