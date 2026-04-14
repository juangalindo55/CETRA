'use client';

import { motion } from 'framer-motion';
import TableOfContents from '@/components/TableOfContents';
import ReadingProgress from '@/components/ReadingProgress';

export default function PrivacyPage() {
  return (
    <div className="bg-base-white min-h-screen pt-32 pb-24">
      <ReadingProgress />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar - TOC */}
          <aside className="lg:w-1/4 hidden lg:block">
            <TableOfContents />
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:text-base-black prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600"
            >
              <h1 className="text-4xl md:text-5xl mb-8">Aviso de Privacidad</h1>
              <p className="text-sm text-violet-electric font-medium uppercase tracking-widest mb-12">
                Última actualización: 13 de abril de 2026
              </p>

              <h2 id="identidad">1. Identidad y Domicilio del Responsable</h2>
              <p>
                CETRA (en adelante, "El responsable"), con domicilio en Torre José A. Muguerza, Piso 3, Belisario Domínguez 2602, Centro, 64060 Monterrey, N.L., es responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
              </p>

              <h2 id="datos-personales">2. Datos Personales que recabaremos</h2>
              <p>
                Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos las siguientes categorías de datos personales:
              </p>
              <ul>
                <li><strong>Datos de identificación:</strong> Nombre completo, CURP, fecha de nacimiento.</li>
                <li><strong>Datos de contacto:</strong> Domicilio, teléfono, correo electrónico.</li>
                <li><strong>Datos Personales Sensibles:</strong> Estado de salud presente y futuro, historial clínico, información genética, antecedentes familiares, estudios de laboratorio y gabinete, y cualquier dato necesario para protocolos de trasplante pulmonar.</li>
              </ul>
              <p>
                De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), los datos de salud se consideran <strong>sensibles</strong> y requieren de una protección especial.
              </p>

              <h2 id="finalidades">3. Finalidades del tratamiento de los datos</h2>
              <p>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son <strong>necesarias</strong> para el servicio que solicita:</p>
              <ul>
                <li>Prestación de servicios médicos de alta especialidad en neumología y cirugía de tórax.</li>
                <li>Integración y actualización de su Expediente Clínico conforme a la NOM-004-SSA3-2012.</li>
                <li>Evaluación de protocolos de trasplante pulmonar.</li>
                <li>Coordinación con instituciones hospitalarias y laboratorios.</li>
                <li>Seguimiento post-operatorio y rehabilitación.</li>
              </ul>

              <h2 id="transferencia">4. Transferencia de datos</h2>
              <p>
                Le informamos que sus datos personales pueden ser compartidos con las siguientes personas, empresas, organizaciones o autoridades distintas a nosotros, para los siguientes fines:
              </p>
              <ul>
                <li><strong>Compañías de Seguros:</strong> Para el pago de servicios médicos cubiertos por pólizas.</li>
                <li><strong>Autoridades de Salud (CENATRA):</strong> Para el registro y cumplimiento de protocolos legales en materia de donación y trasplante de órganos.</li>
                <li><strong>Laboratorios de referencia:</strong> Para el análisis de muestras y diagnóstico avanzado.</li>
              </ul>

              <h2 id="arco">5. Medios para ejercer los Derechos ARCO</h2>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos de usted (<strong>Acceso</strong>), solicitar su corrección en caso de que esté desactualizada o sea inexacta (<strong>Rectificación</strong>); que la eliminemos de nuestros registros (<strong>Cancelación</strong>); así como oponerse al uso de sus datos para fines específicos (<strong>Oposición</strong>).
              </p>
              <p>
                Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del correo electrónico: <strong>contacto@cetra.com.mx</strong> o acudiendo directamente a nuestro domicilio.
              </p>

              <h2 id="seguridad">6. Seguridad de la Información</h2>
              <p>
                CETRA ha implementado medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado. El acceso a su información está limitado al personal médico y administrativo estrictamente necesario.
              </p>

              <h2 id="cookies">7. Uso de tecnologías de rastreo en nuestro portal de internet</h2>
              <p>
                Le informamos que en nuestra página de internet utilizamos cookies y otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet para brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que recabamos no incluyen información clínica ni sensible a través de este medio.
              </p>

              <h2 id="cambios">8. Cambios al Aviso de Privacidad</h2>
              <p>
                El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los servicios que ofrecemos; de nuestras prácticas de privacidad o por cambios en nuestro modelo de negocio.
              </p>
              <p>
                Cualquier cambio será notificado a través de nuestro sitio web <strong>www.cetra.com.mx</strong>.
              </p>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
