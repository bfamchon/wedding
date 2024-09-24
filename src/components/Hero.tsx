import { dancing } from '@/app/fonts';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 relative w-full h-screen flex-1 text-white">
      <Image
        src="/isolde-baptiste.jpg"
        objectFit="cover"
        fill
        alt="Photo des mariés"
        className="z-[-1] brightness-[0.65]"
      />
      <p className="mt-[18%] text-lg drop-shadow-[0_0_2px_#000]">Nous allons nous marier !</p>
      <h1 className={`text-6xl font-bold ${dancing.className} text-center drop-shadow-[0_0_4px_#000]`}>
        Isolde & Baptiste
      </h1>
      <p className="drop-shadow-[0_0_2px_#000]">31 - 05 - 2025</p>
    </section>
  );
};
