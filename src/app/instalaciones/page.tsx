import { ArrowRight } from 'lucide-react';
import { CONTACT_WHATSAPP, CETRA_LOCATION } from '@/lib/contact';
import ButtonCTA from '@/components/ui/ButtonCTA';
import PhotoFrame from '@/components/ui/PhotoFrame';
import Reveal from '@/components/ui/Reveal';

type FacilityPhoto = {
  src: string;
  alt: string;
  caption: string;
  ratio: '4/3' | '16/9';
  className?: string;
};

const facilityPhotos: FacilityPhoto[] = [
  {
    src: '/images/cetralobby.webp',
    alt: 'Recepción de CETRA en Torre José A. Muguerza, Monterrey',
    caption: 'Recepción — Torre José A. Muguerza, Piso 3',
    ratio: '16/9',
    className: 'md:col-span-2',
  },
  {
    src: '/images/pletissolo.webp',
    alt: 'Cabina de pletismografía en CETRA',
    caption: 'Cabina de pletismografía y espirometría',
    ratio: '4/3',
  },
  {
    src: '/images/CETRASAOS.webp',
    alt: 'Laboratorio del sueño de CETRA',
    caption: 'Laboratorio del sueño',
    ratio: '4/3',
  },
  {
    src: '/images/bandas.webp',
    alt: 'Banda y cicloergómetro para pruebas de esfuerzo cardiopulmonar (CPET) en CETRA',
    caption: 'Banda y cicloergómetro para pruebas de esfuerzo (CPET)',
    ratio: '16/9',
    className: 'md:col-span-2',
  },
];

export default function InstalacionesPage() {
  return (
    <div className="w-full bg-white">
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.22),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-soft">
            Instalaciones
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-light leading-tight sm:text-6xl">
            Espacios diseñados para la atención de alta especialidad
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            CETRA opera en {CETRA_LOCATION.address}, con instalaciones equipadas para evaluación, diagnóstico y seguimiento del paciente respiratorio.
          </p>
        </div>
      </section>

      <section className="bg-lavender py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <Reveal>
              <p className="font-display text-lg text-violet-electric">01 / Recorrido</p>
              <h2 className="mt-8 font-display text-4xl font-light leading-[1.1] tracking-[-0.025em] sm:text-5xl">
                Un entorno clínico pensado para tu comodidad
              </h2>
            </Reveal>
            <p className="border-t border-ink pt-7 text-lg leading-8 text-gray-600">
              Tecnología diagnóstica avanzada en el corazón de Monterrey, en espacios diseñados para que cada estudio se realice con precisión y calma.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {facilityPhotos.map((photo) => (
              <figure key={photo.src} className={photo.className}>
                <PhotoFrame
                  src={photo.src}
                  alt={photo.alt}
                  label={photo.caption}
                  ratio={photo.ratio}
                  className="w-full"
                />
                <figcaption className="mt-3 border-l border-violet-electric/40 pl-3 text-sm leading-6 text-gray-600">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-light text-ink sm:text-4xl">
            ¿Quieres conocer las instalaciones en persona?
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-600">
            Escríbenos y te orientamos sobre la visita, el estudio o la consulta que necesitas.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonCTA
              href={CONTACT_WHATSAPP}
              external
              size="md"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Contactar a CETRA
            </ButtonCTA>
          </div>
        </div>
      </section>
    </div>
  );
}
