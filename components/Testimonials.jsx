import FadeIn from "@/components/FadeIn";

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "#C9A96E" : "none"}
          stroke="#C9A96E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

const testimonials = [
  {
    name: "Alya Maharani",
    age: 22,
    issue: "Kulit kusam akibat kurang tidur",
    result: "Setelah 3 minggu, kulitku terlihat lebih fresh dan glowing — bahkan temanku nanya aku pakai apa.",
    stars: 5,
  },
  {
    name: "Sinta Putri",
    age: 20,
    issue: "Jerawat hormonal di dagu",
    result: "Jerawat nggak langsung hilang, tapi perlahan makin reda dan bekasnya jadi lebih cepat pudar.",
    stars: 5,
  },
  {
    name: "Mira Wulandari",
    age: 24,
    issue: "Kulit kering dan sensitif",
    result: "Teksturnya ringan banget, nggak perih sama sekali. Sekarang kulitku jadi lebih lembap dan halus.",
    stars: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block rounded-full bg-accent-blush px-4 py-1.5 text-xs font-medium tracking-wide text-text-secondary uppercase sm:text-sm">
              Testimoni
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
              Cerita dari Teman-Temanmu
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-text-secondary sm:text-lg">
              Kata mereka yang udah nyobain Lumière — real story, nggak dibuat-buat.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <FadeIn key={item.name} delay={idx * 120}>
              <div className="flex h-full flex-col rounded-2xl border border-accent-blush/60 bg-card-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-gold/5">
                <Stars count={item.stars} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  &ldquo;{item.result}&rdquo;
                </p>
                <div className="mt-6 border-t border-accent-gold/10 pt-4">
                  <p className="font-serif text-base font-semibold text-foreground">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-xs text-text-secondary">
                    {item.age} thn · {item.issue}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
