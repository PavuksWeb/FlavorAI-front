import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-amber-200 dark:bg-blue-700 w-full px-14 py-2 flex items-center justify-between">
      <Link href={'/'} className="text-3xl">
        Flavor
      </Link>
      <Link
        href={'/login'}
        className="text-xl hover:bg-blue-800 px-4 py-2 rounded-4xl transition-colors duration-400"
      >
        Log in
      </Link>
    </header>
  );
}
