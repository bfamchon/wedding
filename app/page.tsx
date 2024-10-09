import { dancing } from '@/app/fonts';
import { AgendaStep } from '@/src/components/AgendaStep';
import { Hero } from '@/src/components/Hero';
import { ImageWithShadow } from '@/src/components/ImageWithShadow';
import { RSVPForm } from '@/src/components/RSVPForm';
import { SectionBlocText } from '@/src/components/SectionBlocText';
import { SectionOneColumn } from '@/src/components/SectionOneColumn';
import { SectionTwoColumns } from '@/src/components/SectionTwoColumns';

export default function Home() {
  return (
    <>
      <Hero />
      <div className=" items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="container m-auto flex flex-col gap-16 items-center sm:items-start space-y-20">
          <SectionOneColumn title="Présentation" id="presentation">
            <p className="text-center max-w-4xl text-slate-600">
              Nous avons le plaisir de vous accueillir à notre mariage !
              <br />
              <br />
              Entre oliviers et vignes, le Gard sera l'endroit parfait pour célébrer notre union et profiter
              de la journée tous ensemble, comme il se doit.
              <br />
              <br />
              Cette journée commercera à la mairie de Saint-Laurent-la-Vernède, un village pittoresque avec
              son fort du XVe siècle, situé à 12 km d'Uzès.
              <br />
              <br />
              Nous passerons ensuite à la cathédrale d’Uzès pour une cérémonie religieuse. Commencée au XIe
              siècle et plusieurs fois détruite, cette cathédrale chargée d'histoire est un joyau de la
              région.
              <br />
              <br />
              Après ces passages historiques, direction l'Auberge Gardoise pour la réception ! La soirée
              promet d’être festive.
              <br />
              <br />
              Nous avons hâte de vous retrouver pour construire ensemble ces moments inoubliables.
            </p>
          </SectionOneColumn>
          <SectionTwoColumns
            left={
              <SectionBlocText
                title="Notre histoire d'amour"
                description="Tout à commencer dans un bar lors d'une soirée à la Faluche pour se concrétiser par une demande en mariage en haut des pistes de Tignes."
                link={{ href: '/histoire', label: 'Notre histoire' }}
              />
            }
            right={<ImageWithShadow src="/us.jpeg" alt="Les mariés" width={800} height={600} />}
          />
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
                description="Mairie de Saint-Laurent-la-Vernède"
                time="15h30 - 16h00"
                location="1 Pl. de la Mairie, 30330 Saint-Laurent-la-Vernède"
                agendaLink="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NzR2dGxmdGdnaGk2amcyOGZzdjA1dXF1bG4gYmZhbWNob25AbQ&tmsrc=bfamchon%40gmail.com"
              />
              <AgendaStep
                title="Mariage religieux"
                description="Cathédrale Saint-Théodorit d'Uzès"
                time="17h00 - 18h00"
                location="3 Pl. de l'Évêché, 30700 Uzès"
                agendaLink="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MnUybDR1ZGZobzc3N2YxaGpxamJhZG9rdXMgYmZhbWNob25AbQ&tmsrc=bfamchon%40gmail.com"
              />
              <AgendaStep
                title="Vin d'honneur & soirée"
                description="Auberge Gardoise"
                time="18h30 - 05h00"
                location="Auberge Gardoise La Coulorgue Lussan, 30580 Vallérargues"
                agendaLink="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M3JkZTM2Nm1tZmlxdGc0MXF1MnIxOWJwZTQgYmZhbWNob25AbQ&tmsrc=bfamchon%40gmail.com"
              />
            </div>
          </SectionOneColumn>
          <div className="w-full bg-nude p-5 md:p-20 text-center">
            <div className="max-w-screen-md m-auto">
              <h2 className={`text-4xl sm:text-7xl mb-8 font-light text-slate-800 ${dancing.className}`}>
                Nous avons hâte
                <br />
                de vous voir !
              </h2>
              <p className="text-lg sm:text-2xl text-slate-600">
                Notre célébration ne serait pas la même sans vous à nos côtés. Veuillez nous faire savoir si
                vous prévoyez de participer en répondant au questionnaire ci-dessous.
              </p>
              <p className="text-sm mt-4 italic text-slate-600">
                Veuillez confirmer votre présence avant le 31 janvier 2025.
              </p>

              <div className="text-left my-8">
                <RSVPForm />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
