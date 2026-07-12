import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CONTACT_WHATSAPP_ORIENTACION } from '@/lib/contact';
import { getFAQSchema } from '@/lib/site';
import ButtonCTA from '@/components/ui/ButtonCTA';
import Reveal from '@/components/ui/Reveal';
import MotionSequence from '@/components/ui/MotionSequence';

const routes = [
  {
    number: '01',
    title: 'Me falta el aire, tengo tos o necesito medir mi función pulmonar',
    text: 'Espirometría, pletismografía, DLCO, FeNO y otras pruebas para entender cómo están funcionando tus pulmones.',
    href: '/servicios/diagnostico-funcional-respiratorio',
    link: 'Diagnóstico respiratorio',
  },
  {
    number: '02',
    title: 'Ronco, tengo pausas al dormir o despierto sin haber descansado',
    text: 'Evaluación de la respiración durante el sueño para identificar apnea y otras alteraciones nocturnas.',
    href: '/servicios/diagnostico-del-sueno',
    link: 'Diagnóstico del sueño',
  },
  {
    number: '03',
    title: 'Necesito recuperar capacidad física o respirar mejor al moverme',
    text: 'Evaluación del esfuerzo y programas de rehabilitación adaptados a la condición y objetivos de cada persona.',
    href: '/servicios/rehabilitacion-pulmonar',
    link: 'Rehabilitación pulmonar',
  },
  {
    number: '04',
    title: 'Busco una valoración por enfermedad pulmonar avanzada',
    text: 'Orientación especializada, evaluación integral y seguimiento para personas que requieren una ruta de alta complejidad.',
    href: '/servicios/evaluacion-pretrasplante',
    link: 'Evaluación especializada',
  },
];

const serviceAreas = [
  {
    index: 'A',
    title: 'Función respiratoria',
    text: 'Pruebas que miden flujo de aire, volúmenes pulmonares, intercambio de gases, inflamación y fuerza muscular respiratoria.',
    items: 'Espirometría · Pletismografía · DLCO · FeNO · MIP–MEP',
    href: '/servicios/diagnostico-funcional-respiratorio',
  },
  {
    index: 'B',
    title: 'Sueño y capacidad funcional',
    text: 'Estudios para observar la respiración nocturna y evaluar la respuesta integrada del organismo durante el esfuerzo.',
    items: 'Polisomnografía · Poligrafía · CPET · Caminata de 6 minutos',
    href: '/servicios',
  },
  {
    index: 'C',
    title: 'Rehabilitación y alta especialidad',
    text: 'Atención para recuperar capacidad, preparar decisiones complejas y dar seguimiento a enfermedades respiratorias avanzadas.',
    items: 'Rehabilitación pulmonar · Pretrasplante · Trasplante pulmonar',
    href: '/servicios/trasplante-pulmonar',
  },
];

const process = [
  {
    number: '1',
    title: 'Cuéntanos qué necesitas',
    text: 'Si ya tienes una indicación médica, compártela. Si aún no sabes por dónde empezar, nuestro equipo puede orientarte.',
  },
  {
    number: '2',
    title: 'Definimos la ruta adecuada',
    text: 'Revisamos el motivo de atención y te explicamos qué consulta, estudio o programa corresponde antes de agendar.',
  },
  {
    number: '3',
    title: 'Realizamos y explicamos',
    text: 'Te acompañamos durante la evaluación y damos contexto clínico a los resultados para que el siguiente paso sea claro.',
  },
];

const stats = [
  {
    value: '98%',
    label: 'Supervivencia a 5 años en nuestro programa de trasplante pulmonar.',
  },
  {
    value: '8',
    label: 'Especialistas y técnicos en neumología, cirugía, rehabilitación y estudios respiratorios.',
  },
  {
    value: '6',
    label: 'Líneas de servicio que cubren del diagnóstico funcional al trasplante pulmonar.',
  },
];

const questions = [
  {
    question: '¿Necesito saber qué estudio requiero antes de contactar?',
    answer: 'No. Puedes escribirnos con tu indicación médica o contarnos brevemente qué necesitas. El equipo te ayudará a identificar el punto de entrada adecuado; la decisión clínica final depende de la valoración correspondiente.',
  },
  {
    question: '¿Puedo acudir si otro médico solicitó el estudio?',
    answer: 'Sí. Si cuentas con una solicitud, resultados previos o información clínica relevante, tráelos contigo. Esto ayuda a realizar el estudio indicado y a mantener continuidad con tu médico tratante.',
  },
  {
    question: '¿Cómo debo prepararme?',
    answer: 'La preparación cambia según el estudio. Al confirmar tu cita recibirás indicaciones específicas sobre alimentos, actividad física, ropa y medicamentos. No suspendas tratamientos sin indicación médica.',
  },
  {
    question: '¿Dónde se encuentra CETRA?',
    answer: 'Estamos en Monterrey, Nuevo León. En la página de contacto puedes consultar la dirección, el mapa y los medios para solicitar orientación.',
  },
];

export default function Home() {
  return (
    <main className="w-full bg-white text-ink">
      <section className="bg-lavender text-ink">
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col justify-between px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20 lg:pt-32">
            <div>
              <div className="motion-hero-item flex items-center gap-4 border-b border-ink/25 pb-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-electric">
                  Medicina respiratoria avanzada
                </p>
              </div>

              <h1 className="motion-hero-item motion-delay-1 mt-10 max-w-3xl font-display text-5xl font-light leading-[1.03] tracking-[-0.03em] sm:text-6xl lg:text-[5rem]">
                Entender tu respiración es el primer paso para cuidarla
              </h1>
              <p className="motion-hero-item motion-delay-2 mt-8 max-w-xl text-lg leading-8 text-gray-600 sm:text-xl">
                Evaluación, estudios y atención especializada para problemas respiratorios, alteraciones del sueño y enfermedad pulmonar compleja en Monterrey.
              </p>

              <div className="motion-hero-item motion-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonCTA href={CONTACT_WHATSAPP_ORIENTACION} external>
                  Solicitar orientación
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonCTA>
                <ButtonCTA href="#por-donde-empezar" variant="secondary">
                  Encontrar mi ruta
                </ButtonCTA>
              </div>

              <div className="motion-hero-media motion-delay-4 relative mt-12 aspect-[16/9] overflow-hidden lg:hidden">
                <Image
                  src="/images/Hero.webp"
                  alt="Especialista de CETRA durante una evaluación respiratoria"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 1px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 border-l border-white/50 pl-3 text-xs leading-5 text-white/75">
                  Atención respiratoria<br />centrada en la persona
                </p>
              </div>
            </div>

            <div className="motion-hero-item motion-delay-5 mt-16 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-ink/25 pt-6 text-sm text-gray-600 sm:grid-cols-4 lg:mt-20">
              <span>Función pulmonar</span>
              <span>Medicina del sueño</span>
              <span>Rehabilitación</span>
              <span>Alta especialidad</span>
            </div>
          </div>

          <div className="motion-hero-media motion-delay-2 relative hidden min-h-[44rem] border-l border-white/15 lg:block">
            <Image
              src="/images/Hero.webp"
              alt="Especialista de CETRA durante una evaluación respiratoria"
              fill
              priority
              sizes="42vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 border-l border-white/50 pl-3 text-xs leading-5 text-white/75">
              Atención respiratoria<br />centrada en la persona
            </p>
          </div>
        </div>
      </section>

      <section id="por-donde-empezar" className="scroll-mt-20 bg-lavender py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <Reveal>
              <p className="font-display text-lg text-violet-electric">01 / Por dónde empezar</p>
              <h2 className="mt-8 font-display text-4xl font-light leading-[1.1] tracking-[-0.025em] sm:text-5xl">
                Empieza por lo que estás viviendo
              </h2>
            </Reveal>
            <p className="border-t border-ink pt-7 text-lg leading-8 text-gray-600">
              No necesitas conocer el nombre de una prueba para pedir ayuda. Identifica la situación más cercana a la tuya y conoce una ruta posible.
            </p>
          </div>

          <ol className="mt-16 border-t border-ink">
            {routes.map((route) => (
              <li key={route.number} className="grid gap-4 border-b border-lavender-line py-8 sm:grid-cols-[5rem_1fr] lg:grid-cols-[5rem_0.95fr_1.05fr] lg:gap-10 lg:py-10">
                <p className="font-display text-2xl text-violet-electric">{route.number}</p>
                <h3 className="max-w-md text-xl font-semibold leading-7">{route.title}</h3>
                <div>
                  <p className="max-w-xl text-sm leading-7 text-gray-600 sm:text-base">{route.text}</p>
                  <Link href={route.href} className="motion-link mt-5 inline-flex items-center gap-2 border-b border-violet-electric/35 pb-1 text-sm font-semibold text-violet-heritage transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:border-violet-heritage">
                    {route.link}
                    <ArrowRight className="motion-link-arrow h-4 w-4" />
                  </Link>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 max-w-2xl text-xs leading-6 text-gray-500">
            Esta guía es orientativa y no sustituye una valoración médica. Si presentas dificultad respiratoria intensa o de aparición súbita, busca atención de urgencia.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <Reveal>
              <p className="font-display text-lg text-violet-electric">02 / Qué hacemos</p>
              <h2 className="mt-8 font-display text-4xl font-light leading-[1.1] tracking-[-0.025em] sm:text-5xl">
                Una ruta completa para evaluar, tratar y dar seguimiento
              </h2>
            </Reveal>
            <div className="border-t border-ink">
              {serviceAreas.map((area) => (
                <article key={area.index} className="grid gap-4 border-b border-lavender-line py-8 sm:grid-cols-[3rem_1fr] sm:py-10">
                  <p className="font-display text-xl text-violet-electric">{area.index}</p>
                  <div>
                    <h3 className="text-2xl font-semibold">{area.title}</h3>
                    <p className="mt-3 max-w-2xl leading-7 text-gray-600">{area.text}</p>
                    <p className="mt-4 text-sm leading-6 text-violet-heritage">{area.items}</p>
                    <Link href={area.href} className="motion-link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                      Explorar servicios
                      <ArrowRight className="motion-link-arrow h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
              <Link href="/servicios" className="motion-link mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold">
                Ver todos los servicios
                <ArrowRight className="motion-link-arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <Reveal>
              <p className="font-display text-lg text-violet-soft">03 / Cómo te acompañamos</p>
              <h2 className="mt-8 font-display text-4xl font-light leading-[1.1] tracking-[-0.025em] sm:text-5xl">
                Claridad antes, durante y después de cada estudio
              </h2>
            </Reveal>
            <MotionSequence>
              {process.map((step) => (
                <li key={step.number} data-motion-item="true" className="grid gap-4 border-b border-white/20 py-8 sm:grid-cols-[3rem_1fr] sm:py-10">
                  <p className="font-display text-2xl text-violet-soft">{step.number}</p>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 max-w-xl leading-7 text-white/65">{step.text}</p>
                  </div>
                </li>
              ))}
            </MotionSequence>
          </div>

          <figure className="mt-16 grid border-t border-white/25 pt-6 lg:grid-cols-[1fr_0.5fr] lg:gap-8">
            <Reveal variant="media" className="relative aspect-[16/8] overflow-hidden bg-white/5">
              <Image src="/images/pletis.webp" alt="Equipo para evaluación de la función pulmonar en CETRA" fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" />
            </Reveal>
            <figcaption className="mt-5 text-sm leading-7 text-white/60 lg:mt-0">
              La tecnología aporta datos. La atención especializada les da contexto para convertirlos en decisiones clínicas útiles.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-8">
          <Reveal variant="media" className="relative aspect-[874/422] overflow-hidden bg-lavender">
            <Image src="/images/specialists/trasequipo.webp" alt="Equipo multidisciplinario con experiencia en trasplante pulmonar" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </Reveal>
          <Reveal>
            <p className="font-display text-lg text-violet-electric">04 / Alta especialidad</p>
            <h2 className="mt-8 font-display text-4xl font-light leading-[1.1] tracking-[-0.025em] sm:text-5xl">
              Experiencia construida en casos respiratorios complejos
            </h2>
            <p className="mt-7 text-lg leading-8 text-gray-600">
              Nuestro equipo reúne experiencia en neumología, cirugía, terapia intensiva, rehabilitación y seguimiento respiratorio. Esa trayectoria permite evaluar cada caso con una visión amplia y coordinar la atención cuando se requiere alta complejidad.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/especialistas" className="motion-link inline-flex items-center gap-2 font-semibold text-violet-heritage">
                Conocer al equipo
                <ArrowRight className="motion-link-arrow h-4 w-4" />
              </Link>
              <Link href="/nuestra-historia" className="motion-link inline-flex items-center gap-2 font-semibold text-violet-heritage">
                Conocer nuestra historia
                <ArrowRight className="motion-link-arrow h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-display text-lg text-violet-soft">05 / Respaldo</p>
            <h2 className="mt-8 max-w-2xl font-display text-4xl font-light leading-[1.1] tracking-[-0.025em] sm:text-5xl">
              Resultados que sostienen la confianza
            </h2>
          </Reveal>
          <dl className="mt-14 grid gap-10 border-t border-white/25 pt-10 sm:grid-cols-3 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.value}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-6xl font-light tracking-[-0.02em] text-white sm:text-7xl">
                  {stat.value}
                </dd>
                <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-lavender py-20 sm:py-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <Reveal>
              <p className="font-display text-lg text-violet-electric">06 / Preguntas comunes</p>
              <h2 className="mt-8 font-display text-4xl font-light leading-[1.1] tracking-[-0.025em] sm:text-5xl">
                Lo necesario para dar el primer paso
              </h2>
            </Reveal>
            <div className="border-t border-ink">
              {questions.map((item) => (
                <details key={item.question} className="motion-details group border-b border-lavender-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold marker:content-none">
                    {item.question}
                    <span className="motion-details-icon font-display text-2xl font-light text-violet-electric transition-transform duration-[160ms] ease-[var(--ease-in-out-ui)]" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-2xl pb-7 pr-10 leading-7 text-gray-600">{item.answer}</p>
                </details>
              ))}
              <Link href="/contacto" className="motion-link mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                Ver ubicación y contacto
                <ArrowRight className="motion-link-arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 border-y border-ink py-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:py-16">
            <p className="font-display text-lg text-violet-electric">07 / Tu siguiente paso</p>
            <Reveal>
              <h2 className="max-w-3xl font-display text-4xl font-light leading-[1.1] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
                No tienes que saber exactamente qué estudio necesitas
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
                Cuéntanos qué estás buscando o comparte la indicación de tu médico. Te ayudaremos a identificar la atención adecuada antes de agendar.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonCTA href={CONTACT_WHATSAPP_ORIENTACION} external>
                  Solicitar orientación
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonCTA>
                <ButtonCTA href="/servicios" variant="secondary">
                  Revisar servicios
                </ButtonCTA>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
