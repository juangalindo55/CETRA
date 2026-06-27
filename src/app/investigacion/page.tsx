import Link from 'next/link';
import ReadingProgress from '@/components/ReadingProgress';
import { SectionLayout } from '@/components/SectionLayout';
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  FlaskConical,
  Globe,
  GraduationCap,
  Microscope,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { CONTACT_EMAIL_LINK, CONTACT_WHATSAPP } from '@/lib/contact';
import ButtonCTA from '@/components/ui/ButtonCTA';

const researchLines = [
  {
    icon: <FlaskConical className="h-7 w-7 text-[#7C3AED]" strokeWidth={1.5} />,
    title: 'Bioconservación pulmonar',
    status: 'Línea activa',
    desc: 'Estudiamos protocolos de conservación de órganos para optimizar el manejo del injerto, ampliar ventanas de trabajo y mejorar la recuperación clínica posterior al trasplante.',
    bullets: [
      'Preservación del injerto y tiempos de isquemia',
      'Mejor estabilidad para la planificación quirúrgica',
      'Optimización del resultado postoperatorio',
    ],
  },
  {
    icon: <Microscope className="h-7 w-7 text-[#7C3AED]" strokeWidth={1.5} />,
    title: 'Inmunomodulación precisa',
    status: 'En evolución continua',
    desc: 'Analizamos estrategias personalizadas para el manejo de la inmunosupresión, buscando equilibrio entre prevención de rechazo y reducción de toxicidad.',
    bullets: [
      'Seguimiento adaptado al perfil clínico del paciente',
      'Lectura más fina del riesgo inmunológico',
      'Ajustes terapéuticos más informados',
    ],
  },
  {
    icon: <Globe className="h-7 w-7 text-[#7C3AED]" strokeWidth={1.5} />,
    title: 'Colaboración internacional',
    status: 'Trabajo multicéntrico',
    desc: 'Participamos en redes académicas y colaboraciones globales para revisar evidencia, comparar resultados y alinear la práctica local con estándares internacionales.',
    bullets: [
      'Intercambio científico con centros de referencia',
      'Revisión de evidencia en enfermedades complejas',
      'Aplicación de hallazgos al contexto local',
    ],
  },
];

const evidenceBlocks = [
  {
    icon: <GraduationCap className="h-6 w-6 text-[#311B92]" />,
    title: 'Protocolos y formación',
    text: 'La investigación también vive en la práctica diaria: sesiones, revisión de protocolos y actualización clínica continua.',
  },
  {
    icon: <BookOpen className="h-6 w-6 text-[#311B92]" />,
    title: 'Publicaciones y ponencias',
    text: 'Compartimos resultados mediante presentaciones académicas, revisiones, pósters y espacios de difusión científica.',
  },
  {
    icon: <Award className="h-6 w-6 text-[#311B92]" />,
    title: 'Calidad y trazabilidad',
    text: 'Priorizamos la consistencia metodológica para que cada avance pueda ser leído, discutido y aplicado con claridad.',
  },
];

const clinicalImpact = [
  'Decisiones clínicas mejor informadas',
  'Protocolos más consistentes y revisables',
  'Seguimiento más preciso del paciente',
  'Mayor integración entre ciencia y consulta',
];

const collaborationPoints = [
  'Instituciones académicas',
  'Centros médicos de referencia',
  'Sociedades científicas',
  'Proyectos multicéntricos',
];

export default function InvestigacionPage() {
  return (
    <div className="w-full bg-white">
      <ReadingProgress />

      <section className="relative overflow-hidden bg-[#120726] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.22),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-4 py-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c4b5fd]">
              Investigación y vanguardia
            </span>
            <h1 className="mt-6 font-display text-5xl font-light leading-tight sm:text-6xl lg:text-7xl">
              Investigación en trasplante pulmonar y medicina respiratoria
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/75 sm:text-xl">
              Generamos evidencia para mejorar la atención clínica, fortalecer los protocolos y ofrecer mejores resultados a nuestros pacientes.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#lineas"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#120726] transition-transform duration-300 [@media(hover:hover)]:hover:-translate-y-0.5"
              >
                <ArrowRight className="h-4 w-4" />
                Ver líneas de investigación
              </a>
              <a
                href="#evidencia"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/35 hover:bg-white/5"
              >
                <BookOpen className="h-4 w-4" />
                Publicaciones y congresos
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c4b5fd]">
              Nuestra base científica
            </p>
            <div className="mt-7 space-y-4">
              {evidenceBlocks.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-white">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-white/65">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#ece7fb] bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-100 bg-[#faf8ff] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#7C3AED]">
                Líneas activas
              </p>
              <p className="mt-3 text-base leading-7 text-gray-700">
                Tres frentes de trabajo orientados a impactar la seguridad, la precisión y el seguimiento clínico.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-100 bg-[#faf8ff] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#7C3AED]">
                Colaboración
              </p>
              <p className="mt-3 text-base leading-7 text-gray-700">
                Redes académicas, centros de referencia y espacios de intercambio científico.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-100 bg-[#faf8ff] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#7C3AED]">
                Difusión científica
              </p>
              <p className="mt-3 text-base leading-7 text-gray-700">
                Pósters, sesiones, revisiones y presentaciones que convierten trabajo clínico en evidencia compartible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="lineas" className="bg-[#f8f7ff] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#7C3AED]">
              Líneas de investigación
            </span>
            <h2 className="mt-4 font-display text-3xl font-light text-[#120726] sm:text-4xl">
              Trabajo enfocado en áreas que sí cambian la atención
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Cada línea busca traducirse en decisiones clínicas más sólidas, mejores protocolos y una lectura más clara del contexto del paciente.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {researchLines.map((line) => (
              <article
                key={line.title}
                className="group rounded-[2rem] border border-[#e8e4f8] bg-white p-8 shadow-sm transition-all duration-300 [@media(hover:hover)]:hover:-translate-y-1 hover:border-[#d8c9ff] hover:shadow-lg hover:shadow-[#311B92]/10"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#faf8ff]">
                    {line.icon}
                  </div>
                  <span className="rounded-full border border-[#d8c9ff] bg-[#f5f0ff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#311B92]">
                    {line.status}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-[#120726]">{line.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">{line.desc}</p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-gray-700">
                  {line.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C3AED]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="evidencia" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLayout
            imageUrl="https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?w=800&h=600&fit=crop"
            imageAlt="Laboratorio de investigación avanzada"
            imageType="photo"
          >
            <h2 className="text-[#311B92] font-display text-3xl font-bold mb-6">
              Actualización permanente
            </h2>
            <p>
              La investigación se traduce en lectura crítica de la evidencia, asistencia a congresos y revisión de lo que puede adaptarse al contexto local. No se trata solo de asistir: se trata de incorporar lo útil al trabajo clínico.
            </p>
            <p className="font-semibold text-[#7C3AED]">
              La ciencia tiene valor cuando mejora decisiones, ordena protocolos y ayuda a atender mejor.
            </p>
          </SectionLayout>

          <SectionLayout
            imageUrl="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?w=800&h=600&fit=crop"
            imageAlt="Colaboración multidisciplinaria"
            imageType="photo"
            reversed
          >
            <h2 className="text-[#311B92] font-display text-3xl font-bold mb-6">
              Ecosistema de innovación
            </h2>
            <p>
              Colaboramos con instituciones académicas y equipos multidisciplinarios para revisar hipótesis, validar protocolos y compartir hallazgos. Nuestra meta es construir investigación con impacto clínico real y lenguaje útil para la práctica.
            </p>
          </SectionLayout>
        </div>
      </section>

      <section className="bg-[#f8f7ff] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div className="rounded-[2rem] border border-[#e8e4f8] bg-white p-8 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[#311B92]" />
              <h2 className="font-display text-3xl font-light text-[#120726]">
                Cómo se traduce en la atención
              </h2>
            </div>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              El objetivo no es solo producir conocimiento, sino volverlo útil para el paciente y consistente para el equipo clínico.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {clinicalImpact.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#ece7fb] bg-[#faf8ff] px-5 py-5 text-sm font-medium text-[#120726]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e8e4f8] bg-[#120726] p-8 text-white shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-[#c4b5fd]" />
              <h2 className="font-display text-3xl font-light text-white">
                Colaboraciones
              </h2>
            </div>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
              La investigación se fortalece cuando se construye en red. Trabajamos con aliados que comparten el objetivo de mejorar la atención respiratoria.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {collaborationPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-sm font-medium text-white/90">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c4b5fd]">
                Equipo multidisciplinario
              </p>
              <p className="mt-4 text-sm leading-7 text-white/75">
                El trabajo científico se apoya en especialistas clínicos, revisión académica y coordinación entre áreas para que cada hallazgo tenga contexto y aplicación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#7C3AED]">
            Contacto académico
          </span>
          <h2 className="mt-4 font-display text-4xl font-light text-[#120726] sm:text-5xl">
            ¿Quieres colaborar con CETRA?
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Si representas una institución, proyecto académico o comité científico, podemos conversar sobre alianzas, intercambio de conocimiento o participación en iniciativas multicéntricas.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonCTA
              href={CONTACT_WHATSAPP}
              external
              size="md"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Contactar investigación
            </ButtonCTA>
            <ButtonCTA
              href="/contacto"
              variant="secondary"
              size="md"
              icon={<CalendarDays className="h-4 w-4" />}
            >
              Ver contacto
            </ButtonCTA>
            <ButtonCTA
              href={CONTACT_EMAIL_LINK}
              variant="secondary"
              size="md"
              icon={<BookOpen className="h-4 w-4" />}
            >
              Enviar propuesta académica
            </ButtonCTA>
          </div>
        </div>
      </section>
    </div>
  );
}
