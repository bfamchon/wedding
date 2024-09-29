import { lora } from '@/app/fonts';
import { HeartFilledIcon } from '@radix-ui/react-icons';
import { PiPhoneCall } from 'react-icons/pi';

export const Footer = () => {
  return (
    <div className="mt-10">
      <hr className="max-w-sm w-full m-auto border-0 rounded-md bg-[#ffe9e9] h-[2px]" />

      <footer className="text-center w-full py-16">
        <p className={`${lora.className} text-2xl uppercase`}>isolde & baptiste</p>
        <p className={`uppercase`}>31 - 05 - 2025</p>
        <p className="text-sm space-x-1 flex justify-center items-center">
          <PiPhoneCall className="text-slate-800" />{' '}
          <span>
            <a href={`tel:0618846829`}>0618846829</a> - <a href={`tel:0633367770`}>0633367770</a>
          </span>
        </p>

        <p className={`flex justify-center items-center space-x-1 text-sm pt-6`}>
          <span>Fait avec</span> <HeartFilledIcon className="text-red-500" />
        </p>
      </footer>
    </div>
  );
};
