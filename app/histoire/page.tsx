import Image from 'next/image';

const steps = [
  {
    date: 'Septembre 2017',
    description: 'Notre rencontre à la Faluche, un bar étudiant',
    positionClass: 'top-0',
    imagePath: '/beers.png'
  },
  {
    date: 'Avril 2019',
    description: 'Acquisition de notre nid douillet',
    positionClass: 'top-[18%] right-0',
    imagePath: '/house.jpg'
  },
  {
    date: 'Juillet 2020',
    description: 'Adoption de Roméo',
    positionClass: 'top-[50%]',
    imagePath: '/romeo.jpeg'
  },
  {
    date: 'Mai 2021',
    description: 'Signature de notre PACS',
    positionClass: 'top-[70%] right-0',
    imagePath: '/us.jpeg'
  },
  {
    date: 'Février 2024',
    description: 'Demande en mariage à Tignes',
    positionClass: 'bottom-0',
    imagePath: '/ski.jpeg'
  }
];

export default function Histoire() {
  return (
    <main className="p-20">
      <div className="relative max-w-[500px] w-full m-auto">
        <svg
          className="max-h-[1500px] w-full"
          id="e1Dpo2QwgXk1"
          viewBox="0 0 87.032 301.317"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <path
            d="M 2.462 3.513 C 14.416 3.513 29.787 6.778 43.138 11.32 C 56.49 15.863 75.71 32.03 80.198 47.429 C 94.775 97.442 25.232 99.161 17.064 145.023 C 10.451 182.149 54.213 195.671 60.869 229.929 C 68.184 267.569 31.618 274.88 12.892 298.244"
            fill="none"
            stroke="#ffe9e9"
            strokeWidth="1"
            strokeDashoffset="100"
            strokeDasharray="10"
          ></path>
        </svg>

        {steps.map((step, index) => (
          <div key={index} className={`absolute w-[230px] bg-white ${step.positionClass} flex items-center`}>
            <Image
              src={step.imagePath}
              alt=""
              className="bg-white cursor-pointer rounded-full mr-4 w-[60px] h-[60px] object-cover border-4 border-[#c7978f] transition duration-500 transform-gpu hover:scale-[3] hover:rotate-12"
              width={500}
              height={300}
            />
            <div>
              <h4 className="text-[#c7978f] font-medium">{step.date}</h4>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
