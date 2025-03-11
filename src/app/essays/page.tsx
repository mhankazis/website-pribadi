import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya',
  },
};

export default function Home(){
  return (
    <div>
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Tentang Saya</h1>
      </header>
    </div>
  );  
}