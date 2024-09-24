'use client';

import { useIsVisible } from '@/src/hooks/useIsVisible';
import { ReactNode, useRef } from 'react';

export const SectionTwoColumns = ({ left, right }: { left: ReactNode; right: ReactNode }) => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIsVisible(ref);
  return (
    <section
      ref={ref}
      className={`grid grid-cols-1 gap-16 m-auto lg:grid-cols-2 max-w-screen-lg transition-opacity ease-in duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {left}
      {right}
    </section>
  );
};
