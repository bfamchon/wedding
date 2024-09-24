import Link from 'next/link';

const links = [
  { href: '/', label: 'Accueil' },
  { href: 'hebergements', label: 'Hébergements' },
  { href: 'photos', label: 'Photos' },
  { href: 'contact', label: 'Contact' }
];

export const Header = () => {
  return (
    <header className="flex items-center justify-center gap-4 z-20 w-full bg-white text-black h-[50px] overflow-hidden">
      <ol className="flex space-x-4 py-2 px-4">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`} className="uppercase text-sm tracking-wider">
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ol>
    </header>
  );
};
