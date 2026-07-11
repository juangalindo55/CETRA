import { ArrowRight } from 'lucide-react';
import ButtonCTA from '@/components/ui/ButtonCTA';

const milestones = [
  {
    year: '2017',
    title: 'El inicio de un programa',
    text: 'Especialistas que hoy forman parte de CETRA participaron en el desarrollo del programa de trasplante pulmonar de CHRISTUS MUGUERZA y en el primer trasplante bipulmonar secuencial documentado en México.',
  },
  {
    year: '2020',
    title: 'Una respuesta ante un desafío nuevo',
    text: 'El programa realizó un trasplante bipulmonar a una persona sobreviviente de COVID-19, reportado entonces como el primero de su tipo en Latinoamérica. Parte de nuestro equipo participó en esa atención multidisciplinaria.',
  },
  {
    year: '2021',
    title: 'Atención para la edad pediátrica',
    text: 'Integrantes del equipo participaron en el primer trasplante pulmonar pediátrico documentado en México, un proceso que exigió coordinación clínica, quirúrgica y familiar especialmente cercana.',
  },
  {
    year: '2024',
    title: 'Evaluar más allá de la edad',
    text: 'La experiencia del programa permitió ampliar sus criterios clínicos y realizar con éxito un trasplante unipulmonar en una persona de 71 años, después de una evaluación individualizada.',
  },
  {
    year: '2025',
    title: 'El trasplante número cincuenta',
    text: 'El programa hospitalario alcanzó 50 trasplantes pulmonares desde su inicio. El hito reconoció la continuidad de un trabajo colectivo y el valor de la donación de órganos.',
  },
];

const disciplines = [
  'Neumología',
  'Cirugía',
  'Terapia intensiva',
  'Rehabilitación',
  'Enfermería',
  'Acompañamiento familiar',
];

export default function NuestraHistoriaPage() {
  return (
    <div className="w-full bg-white">
      <section className="relative overflow-hidden bg-[#120726] text-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-36">
          <div className="flex items-center gap-5 border-b border-white/20 pb-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#c4b5fd]">Nuestra historia</span>
            <span className="h-px flex-1 bg-white/10" />
            <span className="font-display text-sm text-white/40">CETRA</span>
          </div>
          <h1 className="mt-12 max-w-5xl font-display text-5xl font-light leading-[1.04] tracking-[-0.025em] sm:text-6xl lg:text-[5.5rem]">
            Una historia construida para devolver el aliento
          </h1>
          <div className="mt-14 grid gap-6 border-t border-white/20 pt-7 md:grid-cols-[1fr_1.1fr]">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">Experiencia compartida · Medicina respiratoria avanzada</p>
            <p className="max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              CETRA nace de años de trabajo compartido: medicina rigurosa, decisiones difíciles y una forma de acompañar que pone a la persona y a su familia en el centro.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8">
          <div>
            <p className="font-display text-lg text-[#7C3AED]">01 / El origen</p>
            <h2 className="mt-8 font-display text-4xl font-light leading-[1.12] tracking-[-0.02em] text-[#120726] sm:text-5xl">
              La experiencia se construye en equipo
            </h2>
          </div>

          <div className="border-t border-[#120726] pt-7 text-base leading-8 text-gray-600 sm:text-lg">
            <p>
              Parte de la trayectoria de nuestros especialistas se consolidó dentro de programas hospitalarios multidisciplinarios de trasplante pulmonar. Allí, cada decisión requirió conocimiento técnico, coordinación precisa y una escucha atenta de la persona y su familia.
            </p>
            <p className="mt-6">
              Un trasplante nunca es el trabajo de una sola especialidad. Requiere que cada área comparta información, cuestione decisiones y responda como un solo equipo durante un proceso complejo.
            </p>
            <ul className="mt-10 grid grid-cols-2 border-t border-[#ded9eb] text-sm text-[#311B92] sm:grid-cols-3" aria-label="Disciplinas que integran la atención">
              {disciplines.map((discipline, index) => (
                <li key={discipline} className="border-b border-[#ded9eb] py-4 pr-3">
                  <span className="mr-2 font-display text-[#7C3AED]">{String(index + 1).padStart(2, '0')}</span>
                  {discipline}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f0e9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="font-display text-lg text-[#7C3AED]">02 / La trayectoria</p>
              <h2 className="mt-8 font-display text-4xl font-light leading-[1.12] tracking-[-0.02em] text-[#120726] sm:text-5xl">
              Aprendizajes que marcaron el camino
              </h2>
            </div>
            <p className="border-t border-[#120726] pt-7 text-base leading-8 text-gray-600 sm:text-lg">
              Estos son hitos del programa hospitalario en el que nuestros especialistas desarrollaron parte de su trayectoria. Pertenecen a la historia de ese programa y ayudan a explicar la experiencia profesional que hoy converge en CETRA.
            </p>
          </div>

          <ol className="mt-16 border-t border-[#120726]">
            {milestones.map((milestone) => (
              <li key={milestone.year} className="grid gap-4 border-b border-[#c9c3b8] py-8 sm:grid-cols-[8rem_0.8fr_1.2fr] sm:gap-8 sm:py-10">
                <p className="font-display text-4xl font-light tracking-[-0.02em] text-[#7C3AED] sm:text-5xl">{milestone.year}</p>
                <h3 className="text-lg font-semibold leading-7 text-[#120726] sm:text-xl">{milestone.title}</h3>
                <p className="text-sm leading-7 text-gray-600 sm:text-base">{milestone.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#311B92] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8">
          <div>
            <p className="font-display text-lg text-[#c4b5fd]">03 / Lo que permanece</p>
          </div>
          <div className="border-t border-white/35 pt-8">
            <blockquote className="font-display text-4xl font-light leading-[1.15] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              Volver a caminar. Respirar con independencia. Sentarse a la mesa con la familia. Retomar un proyecto que parecía suspendido.
            </blockquote>
            <p className="mt-12 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              No hay una sola historia que resuma lo vivido. Hay una voz colectiva hecha de esfuerzo, incertidumbre, cuidado y esperanza. Cada avance ha sido posible gracias a personas donantes y a familias que, en un momento profundamente difícil, hicieron posible una nueva oportunidad para alguien más.
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/60">
              Cada proceso es distinto y sus resultados dependen de múltiples factores clínicos. Acompañar también significa hablar con claridad, sin promesas ni certezas que la medicina no puede ofrecer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 border-y border-[#120726] py-10 sm:py-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="font-display text-lg text-[#7C3AED]">04 / CETRA hoy</p>
              <h2 className="mt-8 max-w-2xl font-display text-4xl font-light leading-[1.12] tracking-[-0.02em] text-[#120726] sm:text-5xl">
                Experiencia que se convierte en atención cercana
              </h2>
            </div>
            <div>
              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                Hoy, esa trayectoria se traduce en evaluación respiratoria, preparación y seguimiento especializado. CETRA reúne medicina respiratoria avanzada, experiencia clínica y acompañamiento cercano en un mismo espacio.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonCTA href="/especialistas" size="md">
                Conocer al equipo
              </ButtonCTA>
              <ButtonCTA href="/contacto" variant="secondary" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                Solicitar orientación
              </ButtonCTA>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
