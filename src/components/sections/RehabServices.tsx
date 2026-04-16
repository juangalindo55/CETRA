const rehabServices = [
  {
    step: '1. Consulta',
    title: 'Consulta de rehabilitación cardiopulmonar',
    text:
      'Valoración inicial para definir objetivos, limitaciones y si el paciente debe entrar a un programa supervisado.',
  },
  {
    step: '2. Sesión inicial',
    title: 'Sesión de rehabilitación cardiopulmonar',
    text:
      'Trabajo individual supervisado con ejercicio, adaptación de esfuerzo y educación respiratoria.',
  },
  {
    step: '3. Programa',
    title: 'Programa de rehabilitación pulmonar',
    text:
      'Plan estructurado de seguimiento para mejorar capacidad funcional, síntomas y tolerancia al esfuerzo.',
  },
  {
    step: '4. Mantenimiento',
    title: 'Sesión de mantenimiento',
    text:
      'Continuidad terapéutica para sostener los avances cuando el paciente ya completó la fase principal.',
  },
];

export default function RehabServices() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {rehabServices.map((service) => (
        <div
          key={service.title}
          className="rounded-2xl border border-[#e8e4f8] bg-[#faf8ff] p-5"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C3AED]">
            {service.step}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-[#120726]">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">{service.text}</p>
        </div>
      ))}
    </div>
  );
}
