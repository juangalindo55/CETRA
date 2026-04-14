'use client';

// Coordenadas de ejemplo (Madrid, España)
const CETRA_LOCATION = {
  lat: 25.673836,
  lng: -100.348892,
  address: 'Torre José A. Muguerza, Belisario Domínguez 2602, Centro, 64060 Monterrey, N.L.',
  phone: '+52 81 1778 1017',
  hours: 'Lunes - Viernes: 8:00 - 17:00',
};

export default function Map() {
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${CETRA_LOCATION.lng - 0.05},${CETRA_LOCATION.lat - 0.05},${CETRA_LOCATION.lng + 0.05},${CETRA_LOCATION.lat + 0.05}&layer=mapnik&marker=${CETRA_LOCATION.lat},${CETRA_LOCATION.lng}`;

  return (
    <div className="rounded-lg overflow-hidden border border-[#e8e4f8] shadow-sm">
      <iframe
        width="100%"
        height="256"
        frameBorder="0"
        scrolling="no"
        src={mapUrl}
        style={{ border: 0 }}
        title="CETRA Location Map"
      />
      <div className="bg-white p-3 border-t border-[#e8e4f8] text-xs">
        <p className="font-semibold text-[#1a0a3d] text-sm mb-1">CETRA</p>
        <p className="text-gray-600 text-xs">{CETRA_LOCATION.address}</p>
        <p className="text-gray-500 text-xs mt-1">{CETRA_LOCATION.phone}</p>
      </div>
    </div>
  );
}
