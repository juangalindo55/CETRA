export const CONTACT_PHONE_DISPLAY = '811 778 1017';
export const CONTACT_PHONE_TEL = '+528117781017';
export const CONTACT_EMAIL = 'contacto@cetrapulmonar.com';
export const CONTACT_EMAIL_LINK = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_WHATSAPP =
  'https://wa.me/528117781017?text=Hola,%20quisiera%20agendar%20una%20cita';

export const CETRA_LOCATION = {
  address:
    'Torre José A. Muguerza, Piso 3, Belisario Domínguez 2602, Centro, 64060 Monterrey, N.L.',
  title: 'Torre José A. Muguerza',
  floor: 'Piso 3',
  city: 'Monterrey, Nuevo León, México',
  hours: 'Lun a Vie: 8 am a 17:00',
  saturdayHours: 'Sábados previa cita',
};

export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  CETRA_LOCATION.address,
)}`;

export const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  CETRA_LOCATION.address,
)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

export const INSURANCE_COMPANIES = [
  'AXA Seguros',
  'MetLife',
  'GNP Seguros',
  'Monterrey NY Life',
  'Seguros Atlas',
  'Bupa México',
  'Qualitas',
  'Inbursa',
  'Mapfre',
  'Banorte Seguros',
  'Allianz',
];
