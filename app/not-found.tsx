import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-4 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 transition-colors">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">404 - Halaman Tidak Ditemukan</h1>
      <p className="text-center text-base sm:text-lg max-w-md mb-6 text-zinc-600 dark:text-zinc-400">Hmm... Sepertinya kamu nyasar. Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.</p>
      <Link
        href="/"
        className="inline-block px-6 py-3 text-sm font-medium rounded-full border border-zinc-300 dark:border-white/20 hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white transition-all duration-300"
      >
        ⬅ Kembali ke Beranda
      </Link>
    </div>
  );
}
