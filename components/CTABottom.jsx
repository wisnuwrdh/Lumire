import FadeIn from "@/components/FadeIn";

export default function CTABottom() {
  return (
    <section className="w-full bg-background px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
            Yuk, Mulai Perjalanan Kulitmu Hari Ini
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Nggak perlu nunggu kulitmu makin parah buat mulai peduli. Lumière siap nemenin langkah pertama kamu.
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/6286798102801"
              target="_blank"
              rel="noopener noreferrer"
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
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Chat via WhatsApp
            </a>
            <a
              href="https://www.instagram.com/Lumièreofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-full max-w-xs items-center justify-center gap-2.5 rounded-full border border-text-secondary/20 px-8 text-base font-semibold text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-blush/40 sm:w-auto"
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
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              DM Instagram
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-6 text-xs text-text-secondary/60">
            Bisa tanya-tanya dulu kok — nggak ada yang dipaksa beli 😊
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
