'use client';

import { useState, useSyncExternalStore } from 'react';
import { Copy, Check, Share2 } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
  variant?: 'inline' | 'compact';
}

function subscribe() {
  return () => {};
}

function getCanShareSnapshot() {
  return typeof navigator !== 'undefined' && typeof navigator.share === 'function';
}

function getServerSnapshot() {
  return false;
}

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.777.978-.952 1.178-.175.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.49-1.048-.934-1.756-2.088-1.962-2.44-.206-.352-.022-.542.128-.692.136-.135.301-.351.452-.527.15-.175.201-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.508-.677-.518-.175-.009-.376-.01-.577-.01-.2 0-.527.075-.802.376-.276.3-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.2 2.123 3.242 5.143 4.547.718.311 1.279.497 1.716.636.721.23 1.378.197 1.897.12.578-.087 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.075-.125-.276-.201-.577-.351zM12.042 2C6.502 2 2.01 6.492 2.01 12.032c0 1.97.572 3.805 1.56 5.357L2 22l4.773-1.527c1.497.886 3.242 1.394 5.109 1.394 5.54 0 10.032-4.492 10.032-10.032S17.582 2 12.042 2zm0 18.064c-1.722 0-3.32-.51-4.66-1.385l-.334-.218-3.053.977.994-2.975-.238-.344a8.033 8.033 0 0 1-1.353-4.457c0-4.437 3.61-8.047 8.047-8.047 4.437 0 8.047 3.61 8.047 8.047 0 4.437-3.61 8.047-8.047 8.047z" />
    </svg>
  );
}

export default function ShareButtons({ url, title, variant = 'inline' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const canShareNative = useSyncExternalStore(subscribe, getCanShareSnapshot, getServerSnapshot);

  const shareText = `Te comparto este artículo de CETRA: "${title}"`;
  const whatsappHref = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n\n${url}`)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback silencioso si el portapapeles no está disponible
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: shareText,
          url,
        });
      } catch {
        // Cancelado por el usuario
      }
    }
  };

  if (variant === 'compact') {
    return (
      <div className="mt-8 border-t border-lavender-line pt-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-electric mb-3">
          Compartir artículo
        </p>
        <div className="flex items-center gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            title="Compartir por WhatsApp"
            aria-label="Compartir por WhatsApp"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-lavender-line bg-white text-[#25D366] transition-colors hover:border-[#25D366] hover:bg-emerald-50/40 focus:outline-none focus:ring-2 focus:ring-violet-electric"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={handleCopy}
            title={copied ? 'Enlace copiado' : 'Copiar enlace'}
            aria-label={copied ? 'Enlace copiado' : 'Copiar enlace'}
            className="inline-flex h-9 items-center gap-1.5 px-3 rounded-lg border border-lavender-line bg-white text-xs font-medium text-gray-700 transition-colors hover:border-violet-soft hover:text-ink focus:outline-none focus:ring-2 focus:ring-violet-electric"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-gray-400" />
                <span>Copiar</span>
              </>
            )}
          </button>

          {canShareNative && (
            <button
              type="button"
              onClick={handleNativeShare}
              title="Compartir"
              aria-label="Compartir vía sistema"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-lavender-line bg-white text-gray-600 transition-colors hover:border-violet-soft hover:text-ink focus:outline-none focus:ring-2 focus:ring-violet-electric"
            >
              <Share2 className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="my-12 rounded-2xl border border-lavender-line bg-lavender/50 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-electric">
            Difundir conocimiento
          </span>
          <h3 className="mt-1 text-base sm:text-lg font-semibold text-ink">
            ¿Esta información puede orientar a tu familia o a alguien cercano?
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-gray-600">
            Comparte este recurso directamente con quien esté pasando por una situación similar.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#1EBE5D] hover:shadow focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Compartir por WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-lg border border-lavender-line bg-white px-4 py-2.5 text-xs font-semibold text-gray-700 shadow-sm transition-all hover:border-violet-soft hover:bg-white hover:text-ink focus:outline-none focus:ring-2 focus:ring-violet-electric"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-emerald-700">¡Enlace copiado!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-gray-400" />
                <span>Copiar enlace</span>
              </>
            )}
          </button>

          {canShareNative && (
            <button
              type="button"
              onClick={handleNativeShare}
              className="inline-flex sm:hidden items-center gap-2 rounded-lg border border-lavender-line bg-white px-3 py-2.5 text-xs font-semibold text-gray-700 shadow-sm hover:border-violet-soft"
              aria-label="Más opciones de compartir"
            >
              <Share2 className="h-3.5 w-3.5 text-gray-500" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
