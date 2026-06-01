import FadeIn from "@/components/FadeIn";

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.74 5.88-5.74 5.88-5.74-5.88z" />
        <path d="M12 21.31l-5.74-5.88 5.74-5.88 5.74 5.88z" />
      </svg>
    ),
    title: "Niacinamide 5%",
    desc: "Bantu meratakan warna kulit dan mengurangi tampilan pori-pori besar secara lembut.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Hyaluronic Acid",
    desc: "Hidrasi maksimal tanpa rasa lengket — kulit terasa kenyal seharian.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Uji Dermatologi",
    desc: "Diuji secara klinis dan aman untuk kulit sensitif — nggak bikin iritasi.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Tekstur Ringan",
    desc: "Serum yang cepat meresap — nggak ganggu layer makeup atau skincare lainnya.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.74 5.88-5.74 5.88-5.74-5.88z" />
        <path d="M12 21.31l-5.74-5.88 5.74-5.88 5.74 5.88z" />
      </svg>
    ),
    title: "Vitamin C Natural",
    desc: "Antioksidan kuat yang membantu kulit terlihat lebih cerah dan sehat secara alami.",
  },
];

export default function Benefits() {
  return (
    <section id="manfaat" className="w-full bg-background px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block rounded-full bg-accent-blush px-4 py-1.5 text-xs font-medium tracking-wide text-text-secondary uppercase sm:text-sm">
              Mengapa Lumière?
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
              Diformulasikan dengan Hati-hati
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-text-secondary sm:text-lg">
              Setiap tetes punya alasan — ini dia bahan premium yang kami pilih khusus untukmu.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 100}>
              <div className="flex flex-col rounded-2xl border border-accent-blush/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-accent-gold/5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-gold/10 text-accent-gold">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
