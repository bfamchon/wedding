import { HousingCard } from '@/src/components/HousingCard';
import { Accommodation } from '@/src/types';

const accommodations: Accommodation[] = [
  {
    name: 'Chez Rosette de Lussan',
    address: {
      street: 'Place des Marronniers',
      postalCode: '30580',
      city: 'Lussan'
    },
    website: 'https://chezrosettedelussan.fr/',
    image: '/chez-rosette.jpg',
    phone: '0430672946',
    coordinates: [44.1531028, 4.3660324],
    icon: 'housing'
  },
  {
    name: 'Les Buis de Lussan',
    address: {
      street: 'Rue de la Ritournelle',
      postalCode: '30580',
      city: 'Lussan'
    },
    website: 'https://lesbuisdelussan.fr/',
    image: '/buis-lussan.jpg',
    coordinates: [44.15163, 4.36498],
    icon: 'housing',
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
    image: '/fontasse-lussan.webp',
    coordinates: [44.1530431, 4.3671773],
    icon: 'housing',
    phone: '0683363916'
  },
  {
    name: 'Domaine Aubadiac',
    address: {
      street: "Domaine d'Audabiac, Ham. d'Audabiac",
      postalCode: '30580',
      city: 'Lussan'
    },
    website: 'https://www.audabiac.fr/',
    image: '/domaine-aubadiac.jpg',
    coordinates: [44.1530431, 4.3671773],
    icon: 'housing',
    phone: '0781250695'
  },
  {
    name: "L'Occitane",
    address: {
      street: "L'Occitane, Lussan",
      postalCode: '30580',
      city: 'Lussan'
    },
    website: 'https://www.mairie-lussan.fr/',
    image: '/hebergements.jpg',
    coordinates: [44.1530431, 4.3671773],
    icon: 'housing',
    phone: '0466729439'
  },
  {
    name: 'Le grand Vallen',
    address: {
      street: 'Mas du Grand Vallen, Chemin de La Méjeanne',
      postalCode: '30580',
      city: 'Vallérargues'
    },
    website: 'http://masdugrandvallen.com/',
    image: '/grand-vallen.jpg',
    coordinates: [44.1530431, 4.3671773],
    icon: 'housing',
    phone: '0686625289'
  },
  {
    name: 'Florissum',
    address: {
      street: "FLORISSUM Chambres d'hôtes",
      postalCode: '30580',
      city: 'Belvezet'
    },
    website: 'https://florissum.com/',
    image: '/florissum.jpg',
    coordinates: [44.1530431, 4.3671773],
    icon: 'housing',
    phone: '0656836643'
  },
  {
    name: 'Aux Parfums des Garrigues',
    address: {
      street: 'Aux Parfums des Garrigues',
      postalCode: '30580',
      city: 'Bouquet'
    },
    website: 'https://www.auxparfumsdesgarrigues.com/',
    image: '/aux-parfums-des-garrigues.jpg',
    coordinates: [44.1530431, 4.3671773],
    icon: 'housing',
    phone: '0607249020'
  },
  {
    name: 'Le Clos de Pradines',
    address: {
      street: 'Le Clos de Pradines, Rue du Pigeonnier',
      postalCode: '30700',
      city: 'Saint-Quentin-la-Poterie'
    },
    website: 'https://clos-de-pradines.com/fr/',
    image: '/clos-de-pradines.jpg',
    coordinates: [44.1530431, 4.3671773],
    icon: 'housing',
    phone: '0466200489'
  }
  // {
  //   name: 'Hôtel 2',
  //   address: {
  //     street: "2 rue de l'hôtel",
  //     postalCode: '75000',
  //     city: 'Paris'
  //   },
  //   website: 'https://www.hotel2.com',
  //   image: 'https://via.placeholder.com/300',
  //   coordinates: [44.1318689, 4.3643295], // Coordonnées de Paris,
  //   icon: 'confetti',
  //   phone: ''
  // }
];

export default function Hebergements() {
  return (
    <main className="">
      <ul className="flex flex-wrap justify-center p-8 sm:p-10 gap-4 sm:gap-8 ">
        {accommodations.map((accommodation, index) => (
          <HousingCard key={accommodation.name} accommodation={accommodation} />
        ))}
      </ul>
    </main>
  );
}
