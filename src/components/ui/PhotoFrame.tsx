import Image from 'next/image';
import { ImageIcon } from 'lucide-react';

type PhotoFrameRatio = '4/3' | '3/4' | '16/9' | '1/1' | '3/2' | '2/1';
type PhotoFrameFit = 'cover' | 'contain';

interface PhotoFrameProps {
  /** Ruta de la foto. Sin valor → muestra el marco placeholder. */
  src?: string;
  /** Texto alternativo de la foto. Si falta, usa `label`. */
  alt?: string;
  /** Qué foto va aquí (ej. "Fachada de la clínica"). Visible en el placeholder. */
  label: string;
  /** Proporción del marco. */
  ratio?: PhotoFrameRatio;
  /** Ajuste de la imagen: `cover` (def., llena y recorta) o `contain` (muestra completa, sin recortar). */
  fit?: PhotoFrameFit;
  /** Pasa a next/image para imágenes above-the-fold. */
  priority?: boolean;
  /** `sizes` para next/image (optimización responsive). */
  sizes?: string;
  /** Ancho/margen/columna (ej. `md:col-span-2`). */
  className?: string;
}

const ratioClasses: Record<PhotoFrameRatio, string> = {
  '4/3': 'aspect-[4/3]',
  '3/4': 'aspect-[3/4]',
  '16/9': 'aspect-[16/9]',
  '1/1': 'aspect-square',
  '3/2': 'aspect-[3/2]',
  '2/1': 'aspect-[2/1]',
};

const fitClasses: Record<PhotoFrameFit, string> = {
  cover: 'object-cover',
  contain: 'object-contain',
};

/**
 * Marco de imagen con fallback. Mientras no haya `src`, muestra un placeholder
 * punteado y etiquetado (sirve de brief para el fotógrafo). Al pasar `src`,
 * renderiza la foto con next/image. Las fotos van en `public/images/`.
 */
export default function PhotoFrame({
  src,
  alt,
  label,
  ratio = '4/3',
  fit = 'cover',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = '',
}: PhotoFrameProps) {
  const ratioClass = ratioClasses[ratio];
  const fitClass = fitClasses[fit];

  if (src) {
    return (
      <div className={`relative ${ratioClass} overflow-hidden rounded-2xl bg-[#f4f4f5] ${className}`.trim()}>
        <Image
          src={src}
          alt={alt ?? label}
          fill
          priority={priority}
          sizes={sizes}
          className={fitClass}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative ${ratioClass} overflow-hidden rounded-2xl border-2 border-dashed border-[#d8c9ff] bg-[#f5f3ff] ${className}`.trim()}
      role="img"
      aria-label={`Espacio para foto: ${label}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <ImageIcon className="h-8 w-8 text-[#7C3AED]" strokeWidth={1.5} />
        <span className="text-sm font-medium text-[#311B92]">{label}</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7C3AED]">
          Foto {ratio}
        </span>
      </div>
    </div>
  );
}
