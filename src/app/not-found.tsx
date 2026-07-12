import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ButtonCTA from '@/components/ui/ButtonCTA';
import { CONTACT_WHATSAPP } from '@/lib/contact';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center bg-lavender px-4 text-center">
      <p className="font-display text-[10rem] font-light leading-none tracking-[-0.04em] text-violet-electric/15 select-none">
        404
      </p>

      <div className="-mt-8 max-w-lg">
        <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-violet-electric">
          Página no encontrada
        </p>
        <h1 className="mt-4 font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
          Esta página no existe
        </h1>
        <p className="mt-5 text-lg leading-7 text-gray-600">
          La dirección que buscas no está disponible. Puede que haya cambiado o que el enlace sea incorrecto.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <ButtonCTA href="/" size="md">
            <ArrowLeft className="h-4 w-4" />
            Ir al inicio
          </ButtonCTA>
          <ButtonCTA href={CONTACT_WHATSAPP} external variant="secondary" size="md">
            Solicitar orientación
          </ButtonCTA>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-violet-heritage">
          <Link href="/servicios" className="hover:underline">Servicios</Link>
          <Link href="/especialistas" className="hover:underline">Especialistas</Link>
          <Link href="/instalaciones" className="hover:underline">Instalaciones</Link>
          <Link href="/contacto" className="hover:underline">Contacto</Link>
        </div>
      </div>
    </div>
  );
}
