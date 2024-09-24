import { dancing } from '@/app/fonts';
import Link from 'next/link';
import React from 'react';

export const SectionBlocText = ({
  title,
  description,
  link,
  cta
}: {
  title: string;
  description: React.ReactNode;
  link?: { href: string; label: string };
  cta?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col self-center text-slate-600">
      <h2 id="agenda" className={`text-5xl text-left text-slate-800 ${dancing.className}`}>
        <span className="text-8xl">{title[0]}</span>
        {title.slice(1)}
      </h2>
      <p className="my-8">{description}</p>
      {link && (
        <Link href={link.href} className={`text-xl italic tracking-wider  ${dancing.className}`}>
          {link.label}
        </Link>
      )}
      {cta}
    </div>
  );
};
