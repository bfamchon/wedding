'use client';
import { Header } from '@/src/components/Header';
import SimpleMap from '@/src/components/SimpleMap';
import { Icon } from 'leaflet';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { PiMapPin, PiPaperclipLight, PiPhoneCallLight } from 'react-icons/pi';

export type Accommodation = {
  name: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
  };
  website: string;
  image: string;
  coordinates: [number, number];
  icon: Icon;
  phone: string;
};

const housingIcon = new Icon({
  iconUrl: 'https://img.icons8.com/plasticine/100/exterior.png',
  iconSize: [38, 45] // size of the icon
});

const confettiIcon = new Icon({
  iconUrl: 'https://img.icons8.com/color/100/confetti.png',
  iconSize: [38, 45] // size of the icon
});

export const accommodations: Accommodation[] = [
  {
    name: 'Chez Rosette de Lussan',
    address: {
      street: 'Place des Marronniers',
      postalCode: '30580',
      city: 'Lussan'
    },
    website: 'https://chezrosettedelussan.fr/',
    image: 'https://via.placeholder.com/300',
    phone: '0430672946',
    coordinates: [44.1531028, 4.3660324],
    icon: housingIcon
  },
  {
    name: 'Les Buis de Lussan',
    address: {
      street: 'Rue de la Ritournelle',
      postalCode: '30580',
      city: 'Lussan'
    },
    website: 'https://lesbuisdelussan.fr/',
    image: 'https://via.placeholder.com/300',
    coordinates: [44.15163, 4.36498],
    icon: housingIcon,
    phone: '0466728893'
  },
  {
    name: 'La Fontasse de Lussan',
    address: {
      street: '48 Rue Tour des Remparts',
      postalCode: '30580',
      city: 'Lussan'
    },
    website: 'https://lafontassedelussan.fr/',
    image: 'https://via.placeholder.com/300',
    coordinates: [44.1530431, 4.3671773],
    icon: housingIcon,
    phone: '0683363916'
  },
  {
    name: 'Hôtel 2',
    address: {
      street: "2 rue de l'hôtel",
      postalCode: '75000',
      city: 'Paris'
    },
    website: 'https://www.hotel2.com',
    image: 'https://via.placeholder.com/300',
    coordinates: [44.1318689, 4.3643295], // Coordonnées de Paris,
    icon: confettiIcon,
    phone: ''
  }
];

export default function Hebergements() {
  const [hoveredAccommodation, setHoveredAccommodation] = useState<number | null>(null);

  return (
    <>
      <Header />
      <div className=" items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-16 items-center sm:items-start space-y-20">
          <section className=" flex flex-row  m-auto w-full h-[calc(100vh-50px)]">
            <ul className="flex-1 p-8 sm:p-10 space-y-8 overflow-y-auto">
              {accommodations.map((accommodation, index) => (
                <li
                  onMouseEnter={() => setHoveredAccommodation(index)}
                  onMouseLeave={() => setHoveredAccommodation(null)}
                  key={accommodation.name}
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 transition duration-150"
                >
                  <Image
                    src={accommodation.image}
                    alt={accommodation.name}
                    width={300}
                    height={300}
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  />
                  <div className=" leading-normal p-4 flex flex-col justify-between space-y-2">
                    <h3 className="text-xl">{accommodation.name}</h3>
                    <p className="text-gray-500">
                      Description of your post/article, Description of your post/article,
                    </p>
                    <p className="flex space-x-4 text-gray-500 text-sm">
                      <div className="flex items-center space-x-1">
                        <PiMapPin />
                        <Link
                          href={`http://maps.google.com/?q=${accommodation.address.street}, ${accommodation.address.postalCode} ${accommodation.address.city}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {accommodation.address.city}
                        </Link>
                      </div>
                      <div className="flex items-center space-x-1">
                        <PiPaperclipLight />
                        <Link href={accommodation.website} target="_blank" rel="noopener noreferrer">
                          {accommodation.website}
                        </Link>
                      </div>
                      <div className="flex items-center space-x-1">
                        <PiPhoneCallLight />
                        <a href={`tel:${accommodation.phone}`}>{accommodation.phone}</a>
                      </div>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex-1 w-full h-full hidden md:flex">
              <SimpleMap accommodations={accommodations} hoveredAccommodation={hoveredAccommodation} />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
