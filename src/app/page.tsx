import type { Metadata } from "next";
import Image from "next/image";
import profilePic from "@/assets/images/project1.jpg"; // Pastikan gambar ada di folder 'public/images'

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman tentang saya",
  openGraph: {
    title: "Tentang Saya",
    description: "Halaman tentang saya",
  },
};

export default function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="font-bold text-4xl text-zinc-800">Tentang Saya</h1>
        <p className="text-zinc-600 mt-2">
          Halo! Saya seorang pengembang web dengan passion di bidang teknologi dan desain UI/UX.
        </p>
      </header>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="w-80 h-40 relative">
          <Image
            src={profilePic}
            alt="Foto Profil"
            layout="fill"
            className="rounded-full shadow-lg object-cover"
          />
        </div>

        {/* About Me Text */}
        <div>
          <p className="text-zinc-700 text-lg leading-relaxed">
            Saya memiliki pengalaman dalam pengembangan web menggunakan 
            <span className="text-teal-500"> React.js, Next.js</span>, dan 
            <span className="text-teal-500"> Tailwind CSS</span>.  
            Saya tertarik untuk membangun aplikasi yang cepat, responsif, dan menarik secara visual.
          </p>
          <p className="text-zinc-600 mt-4">
            Selain pengembangan web, saya juga menyukai dunia open-source dan sering berkontribusi dalam berbagai proyek komunitas.
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold text-zinc-800 mb-4">Hubungi Saya</h2>
        <div className="flex justify-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-teal-500 hover:text-teal-700 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="text-teal-500 hover:text-teal-700 transition"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-teal-500 hover:text-teal-700 transition"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
