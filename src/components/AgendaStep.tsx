import Link from 'next/link';
import { CiLocationOn } from 'react-icons/ci';

export const AgendaStep = ({
  title,
  description,
  time,
  agendaLink,
  location
}: {
  title: string;
  description: string;
  time: string;
  agendaLink: string;
  location: string;
}) => {
  return (
    <div className="flex gap-2 sm:gap-4 flex-col sm:flex-row">
      <span className="flex min-w-max">{time}</span>
      <div className="flex flex-col space-y-1">
        <h4 className="text-[#c7978f] font-medium">{title}</h4>
        <p>{description}</p>
        <Link
          href={`http://maps.google.com/?q=${location}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 font-light"
        >
          <CiLocationOn /> <span>{location}</span>
        </Link>

        <a className="bg-nude px-2 rounded-xl w-max" href={`${agendaLink}`}>
          + ajouter au calendrier
        </a>
      </div>
    </div>
  );
};
