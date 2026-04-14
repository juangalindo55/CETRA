'use client';

// Coordenadas de ejemplo
const CETRA_LOCATION = {
  lat: 25.673836,
  lng: -100.348892,
  address: 'Torre José A. Muguerza, Piso 3, Belisario Domínguez 2602, Centro, 64060 Monterrey, N.L.',
  phone: '+52 81 1778 1017',
  hours: 'Lunes - Viernes: 8:00 - 17:00',
};

export default function Map() {
  const encodedAddress = encodeURIComponent(CETRA_LOCATION.address);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full h-full flex flex-col">
      {/* Map Iframe */}
      <div className="w-full flex-grow relative min-h-[350px]">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1) brightness(0.95)' }}
          src={mapUrl}
          allowFullScreen
          loading="lazy"
          title="CETRA Location Map"
        />
      </div>

      {/* Info Bar - Below Map */}
      <div className="w-full bg-white py-8 border-t border-[#e8e4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#7C3AED] font-semibold mb-2">Centro</p>
              <h3 className="font-display font-semibold text-[#1a0a3d] text-xl leading-tight mb-2">CETRA</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{CETRA_LOCATION.address}</p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#311B92]/5 flex items-center justify-center border border-[#311B92]/10">
                   <svg className="w-5 h-4 text-[#311B92]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Teléfono directo</p>
                  <p className="text-sm text-[#1a0a3d] font-medium">{CETRA_LOCATION.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#311B92]/5 flex items-center justify-center border border-[#311B92]/10">
                   <svg className="w-5 h-4 text-[#311B92]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Horario de atención</p>
                  <p className="text-sm text-gray-500">{CETRA_LOCATION.hours}</p>
                </div>
              </div>
            </div>

            <div className="flex md:justify-end">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-10 py-4 bg-[#311B92] text-white text-center rounded-full text-sm font-light tracking-wide hover:bg-[#1a0a5e] transition-all shadow-lg shadow-[#311B92]/20 hover:-translate-y-0.5"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
