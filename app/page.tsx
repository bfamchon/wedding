import { dancing } from '@/app/fonts';
import { AgendaStep } from '@/src/components/AgendaStep';
import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { Hero } from '@/src/components/Hero';
import { ImageWithShadow } from '@/src/components/ImageWithShadow';
import { SectionBlocText } from '@/src/components/SectionBlocText';
import { SectionOneColumn } from '@/src/components/SectionOneColumn';
import { SectionTwoColumns } from '@/src/components/SectionTwoColumns';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className=" items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="container m-auto flex flex-col gap-16 items-center sm:items-start space-y-20">
          <SectionOneColumn title="Présentation" id="presentation">
            <p className="text-center max-w-4xl text-slate-600">
              lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt
              ut labore lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua et dolore magna aliqua tempor incididunt ut labore
              et dolore magna aliqua
            </p>
          </SectionOneColumn>

          {/* <SectionTwoColumns
            left={
              <SectionBlocText
                title="Agenda"
                description="Pour rien au monde nous ne voudrions que tu rates le mariage. Ici tu pourras consulter l'adresse de la cérémonie et du banquet. Il n'y a pas d'excuses pour arriver en retard !"
                link={{ href: '/agenda', label: 'Consulter le programme' }}
              />
            }
            right={<ImageWithShadow src="/isolde-baptiste.jpg" alt="Agenda" width={800} height={600} />}
          /> */}
          <SectionTwoColumns
            left={<ImageWithShadow src="/hebergements.jpg" alt="Hébergements" width={800} height={600} />}
            right={
              <SectionBlocText
                title="Hébergements"
                description="Retrouvez les hébergements à proximité du lieu de l'événement pour profiter pleinement de votre séjour"
                link={{ href: '/hebergements', label: 'Consulter la sélection' }}
              />
            }
          />
          <SectionTwoColumns
            left={
              <SectionBlocText
                title="Galerie"
                description="Retrouvez les photos de l'événement pour revivre les meilleurs moments de cette journée inoubliable"
                link={{ href: '/photos', label: 'Consulter la galerie' }}
              />
            }
            right={<ImageWithShadow src="/galerie.webp" alt="Photos" width={800} height={600} />}
          />
          <SectionOneColumn title="Agenda" id="agenda">
            <div className="max-w-4xl space-y-8">
              <h3 className="text-lg font-medium">31 mai 2025</h3>
              <AgendaStep
                title="Mariage civil"
                description="Voici le moment tant attendu ! Nous avons le plaisir de tous vous retrouver pour célébrer notre union. Si vous souhaitez participer à la chorale, faites le nous savoir !"
                time="15h00 - 16h00"
                location="1 Pl. de la Mairie, 30330 Saint-Laurent-la-Vernède"
                agendaLink="https://calendar.google.com/calendar/r/eventedit?text=Mariage+Mairie+Isolde+Baptiste&dates=20250531T150000/20250531T160000&details=Pour se garer, le plus simple reste de se mettre à la place des platanes&location=1+Pl.+de+la+Mairie,+30330+Saint-Laurent-la-Vernède"
              />
              <AgendaStep
                title="Mariage religieux"
                description="Cathédrale Saint-Théodorit d'Uzès"
                time="17h00 - 18h00"
                location="3 Pl. de l'Évêché, 30700 Uzès"
                agendaLink="https://calendar.google.com/calendar/r/eventedit?text=Mariage+Cathédrale+Isolde+Baptiste&dates=20250531T170000/20250531T180000&details=Pour se garer, un grand parking devrait pouvoir vous accueillir à côté de la cathédrale&location=3+Pl.+de+l'Évêché,+30700+Uzès"
              />
              <AgendaStep
                title="Vin d'honneur & soirée"
                description="Auberge Gardoise"
                time="18h30 - 05h00"
                location="Auberge Gardoise La Coulorgue Lussan, 30580 Vallérargues"
                agendaLink="https://calendar.google.com/calendar/r/eventedit?text=Auberge+Gardoise+Isolde+Baptiste&dates=20250531T183000/20250601T050000&location=Auberge+Gardoise+La+Coulorgue+Lussan,+30580+Vallérargues"
              />
            </div>
          </SectionOneColumn>
          <div className="w-full bg-nude p-20 text-center">
            <div className="max-w-screen-md m-auto">
              <h2 className={`text-4xl sm:text-7xl mb-8 font-light text-slate-800 ${dancing.className}`}>
                Nous avons hâte
                <br />
                de vous voir !
              </h2>
              <p className="text-2xl text-slate-600">
                Notre célébration ne serait pas la même sans vous à nos côtés. Veuillez nous faire savoir si
                vous prévoyez de participer en suivant le lien ci-dessous.
              </p>
              <p className="text-sm mt-4 italic text-slate-600">
                Veuillez confirmer votre présence avant le 31 janvier 2025.
              </p>
              <Link className="bg-white text-slate-600 px-4 py-2 rounded-xl w-max mt-4" href="/rsvp">
                Confirmer ma présence
              </Link>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
