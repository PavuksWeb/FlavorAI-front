import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-amber-200 dark:bg-blue-700 w-full px-8 py-4 flex items-center justify-between text-2xl">
      <Link href={'/'}>Flavor</Link>
    </header>
  );
}
