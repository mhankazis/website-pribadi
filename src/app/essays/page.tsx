import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esai",
  description: "Kumpulan esai yang telah ditulis",
  openGraph: {
    title: "Esai",
    description: "Kumpulan esai yang telah ditulis",
  },
};

const essays = [
  {
    title: "Perkembangan Teknologi AI",
    description: "Analisis tentang perkembangan kecerdasan buatan di era modern.",
    link: "/essays/ai",
  },
  {
    title: "Dampak Sosial Media",
    description: "Bagaimana sosial media mempengaruhi kehidupan sosial kita?",
    link: "/essays/social-media",
  },
  {
    title: "Masa Depan Energi Terbarukan",
    description: "Potensi dan tantangan dalam penggunaan energi terbarukan.",
    link: "/essays/renewable-energy",
  },
];

export default function Essays() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="mb-8">
        <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
        <p className="text-zinc-600 mt-2">
          Berikut adalah kumpulan esai yang telah saya tulis.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {essays.map((essay, index) => (
          <a
            key={index}
            href={essay.link}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-xl text-zinc-800">
              {essay.title}
            </h2>
            <p className="text-zinc-600 mt-2">{essay.description}</p>
            <span className="text-teal-500 mt-4 inline-block">Baca Selengkapnya →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
