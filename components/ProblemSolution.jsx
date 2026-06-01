import FadeIn from "@/components/FadeIn";

const problems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </svg>
    ),
    title: "Kulit Kusam & Lelah",
    desc: "Habis begadang nugas, kulit jadi terlihat nggak fresh — padahal baru umur 20-an.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>
    ),
    title: "Jerawat Bandel",
    desc: "Stres kulit muncul tanpa undangan, bikin nggak pede pas foto bareng teman.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
      </svg>
    ),
    title: "Tekstur Nggak Rata",
    desc: "Setelah beruntusan hilang, bekasnya bikin kulit terasa kasar dan nggak mulus.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
              Pernah Ngerasain Ini?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-text-secondary sm:text-lg">
              Nggak perlu malu — banyak perempuan di usia 18–25 ngalamin hal yang sama.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 120}>
              <div className="group rounded-2xl border border-accent-blush bg-card-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-gold/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blush text-accent-gold transition-colors duration-300 group-hover:bg-accent-gold group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-accent-gold/10 via-accent-blush/30 to-accent-gold/10 p-8 text-center sm:p-10">
            <p className="font-serif text-2xl font-medium text-foreground sm:text-3xl">
              &ldquo;Kami bikin Lumière bukan cuma skincare — tapi teman setia perjalanan kulitmu.&rdquo;
            </p>
            <p className="mt-4 text-sm text-text-secondary">
              Formula ringan yang bekerja perlahan tapi pasti, tanpa membuat kulitmu stres.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
