import { lora } from '@/app/fonts';
import { Accommodation } from '@/src/types';
import Image from 'next/image';
import Link from 'next/link';
import { PiMapPin, PiPaperclipLight, PiPhoneCallLight } from 'react-icons/pi';

export const HousingCard = ({ accommodation }: { accommodation: Accommodation }) => {
  return (
    <li className="w-full h-fit sm:max-w-xl bg-white rounded-lg shadow md:flex-row hover:shadow-lg hover:bg-nude/40 transition ease-linear duration-150">
      <Link href={accommodation.website} target="_blank" rel="noopener noreferrer">
        <Image
          src={accommodation.image}
          alt={accommodation.name}
          width={500}
          height={300}
          className="w-full h-full object-cover max-h-64 rounded-t-lg"
        />
      </Link>

      <div className=" leading-normal p-4 sm:p-8 space-y-4">
        <h3 className={`text-xl italic tracking-wider  ${lora.className}`}>{accommodation.name}</h3>
        {/* <p className="text-gray-500 ">
          Description of your post/article, Description of your post/article,Description of your post/article,
          Description of your post/article,Description of your post/article, Description of your post/article,
        </p> */}
        <p className="flex flex-wrap justify-evenly gap-2 text-gray-500 ">
          <span className="flex items-center space-x-1">
            <PiMapPin className="" />
            <Link
              href={`http://maps.google.com/?q=${accommodation.address.street}, ${accommodation.address.postalCode} ${accommodation.address.city}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {accommodation.address.city}
            </Link>
          </span>
          <span className="flex items-center space-x-1">
            <PiPaperclipLight />
            <Link href={accommodation.website} target="_blank" rel="noopener noreferrer">
              {accommodation.name}
            </Link>
          </span>
          <span className="flex items-center space-x-1">
            <PiPhoneCallLight />
            <a href={`tel:${accommodation.phone}`}>{accommodation.phone}</a>
          </span>
        </p>
      </div>
    </li>
  );
};
