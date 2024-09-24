import { dancing } from '@/app/fonts';
import { ButtonCopyText } from '@/src/components/ButtonCopyText';
import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { ImageWithShadow } from '@/src/components/ImageWithShadow';
import { SectionBlocText } from '@/src/components/SectionBlocText';
import { SectionTwoColumns } from '@/src/components/SectionTwoColumns';
import Image from 'next/image';
import Link from 'next/link';

export default function Photos() {
  return (
    <>
      <Header />
      <main className="container m-auto flex flex-col gap-20 items-center sm:items-start space-y-20 py-20">
        <SectionTwoColumns
          left={
            <SectionBlocText
              title="Photographe"
              description="Nous avons confié le soin à @Pauline Collus (faire en sorte qu’en cliquant sur son nom ça redirige vers son site internet) d’immortaliser cette merveilleuse journée. Nous vous partagerons les photos qu’elle aura prise sur ce site."
              cta={
                <Link
                  href={'https://www.paulinecollusphotography.com/'}
                  className={`text-xl italic tracking-wider  ${dancing.className}`}
                >
                  Visiter son site web
                </Link>
              }
            />
          }
          right={
            <ImageWithShadow
              src="/pauline-collus.webp"
              alt="Agenda"
              width={800}
              height={600}
              className="h-[400px] w-auto"
            />
          }
        />
        <SectionTwoColumns
          left={<ImageWithShadow src="/wedshot.png" alt="Hébergements" width={800} height={600} />}
          right={
            <SectionBlocText
              title="Wedshot"
              description={
                <>
                  WedShoots est une application gratuite qui permet de télécharger et d’enregistrer toutes nos
                  photos sur un seul et même endroit, afin de conserver un souvenir de ce week-end festif.
                  <br />
                  Vous pouvez scanner le QR code ci-dessous dans l'application pour rejoindre l'album, ou
                  utiliser le code{' '}
                  <ButtonCopyText copyText="FR8812f64a">
                    <strong>FR8812f64a</strong>
                  </ButtonCopyText>
                  .
                </>
              }
              cta={
                <div className="flex space-x-2">
                  <a
                    className="flex"
                    rel="nofollow"
                    href="https://apps.apple.com/fr/app/wedshoots/id660256196"
                  >
                    <Image
                      width={150}
                      height={60}
                      alt="App Store"
                      src="https://cdn1.mariages.net/assets/img/apps/apple-store-badge.svg"
                    />
                  </a>
                  <a
                    className="flex"
                    rel="nofollow"
                    href="https://app.appsflyer.com/net.bodas.android.wedshoots"
                  >
                    <Image
                      width={150}
                      height={60}
                      alt="Play Store"
                      src="https://cdn1.mariages.net/assets/img/apps/google-play-badge.svg"
                    />
                  </a>
                  <Image width={60} height={60} alt="Play Store" src="/qrcode.jpg" />
                </div>
              }
            />
          }
        />
      </main>
      <Footer />
    </>
  );
}
