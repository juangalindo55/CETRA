'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';
import { CONTACT_WHATSAPP_ORIENTACION } from '@/lib/contact';

/**
 * Registra en Vercel Analytics los clics de conversión de todo el sitio con un
 * solo listener delegado — no hace falta tocar cada CTA, y cubre también los
 * enlaces escritos dentro de MDX.
 *
 * Eventos:
 * - "Contacto WhatsApp"   → enlaces a wa.me (intent: agendar | orientacion)
 * - "Contacto Teléfono"   → enlaces tel:
 * - "Compartir WhatsApp"  → botón de compartir artículo
 *
 * `placement` sale del ancestro más cercano con `data-cta-placement`; si no
 * hay, del landmark (nav, footer…) o "contenido". No se envían datos personales.
 */

const ORIENTACION_TEXT = new URL(CONTACT_WHATSAPP_ORIENTACION).searchParams.get('text');

function getPlacement(anchor: HTMLAnchorElement): string {
  const tagged = anchor.closest<HTMLElement>('[data-cta-placement]');
  if (tagged?.dataset.ctaPlacement) {
    return tagged.dataset.ctaPlacement;
  }

  const landmark = anchor.closest('header, nav, footer, aside');
  return landmark ? landmark.tagName.toLowerCase() : 'contenido';
}

function getEvent(anchor: HTMLAnchorElement): { name: string; intent?: string } | null {
  const href = anchor.href;

  if (href.startsWith('https://wa.me/')) {
    const text = new URL(href).searchParams.get('text');
    return {
      name: 'Contacto WhatsApp',
      intent: text === ORIENTACION_TEXT ? 'orientacion' : 'agendar',
    };
  }

  if (href.startsWith('tel:')) {
    return { name: 'Contacto Teléfono' };
  }

  if (href.startsWith('https://api.whatsapp.com/send')) {
    return { name: 'Compartir WhatsApp' };
  }

  return null;
}

export default function ConversionTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) {
        return;
      }

      const anchor = event.target.closest('a');
      if (!anchor) {
        return;
      }

      const conversion = getEvent(anchor);
      if (!conversion) {
        return;
      }

      track(conversion.name, {
        path: window.location.pathname,
        placement: getPlacement(anchor),
        intent: conversion.intent,
      });
    }

    // Fase de captura: se registra aunque algún componente detenga la propagación.
    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, []);

  return null;
}
