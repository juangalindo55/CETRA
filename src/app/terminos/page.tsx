'use client';

import { motion } from 'framer-motion';
import TableOfContents from '@/components/TableOfContents';
import ReadingProgress from '@/components/ReadingProgress';

export default function TermsPage() {
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
              <h1 className="text-4xl md:text-5xl mb-8">Términos y Condiciones</h1>
              <p className="text-sm text-violet-electric font-medium uppercase tracking-widest mb-12">
                Última actualización: 13 de abril de 2026
              </p>

              <h2 id="aceptacion">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar este sitio web (cetrapulmonar.com), usted acepta quedar vinculado por los presentes Términos y Condiciones. Si usted no está de acuerdo con alguno de estos términos, le solicitamos se abstenga de utilizar el sitio.
              </p>

              <h2 id="uso-medico">2. No Sustituye la Consulta Médica</h2>
              <p>
                <strong>IMPORTANTE:</strong> El contenido de este sitio web es exclusivamente para fines informativos y educativos. La información aquí presentada:
              </p>
              <ul>
                <li>No constituye una recomendación médica, diagnóstico o tratamiento.</li>
                <li>No establece una relación médico-paciente por el simple hecho de navegar o interactuar con el sitio.</li>
                <li>No debe ser utilizada para autodiagnóstico o automedicación.</li>
              </ul>
              <p>
                En caso de una emergencia médica, usted debe llamar inmediatamente a los servicios de emergencia (911) o acudir al hospital más cercano.
              </p>

              <h2 id="quiz">3. Quiz de Elegibilidad y Calculadoras</h2>
              <p>
                Las herramientas interactivas, como el "Quiz de Elegibilidad para Trasplante", están diseñadas para proporcionar orientación general basada en criterios estadísticos y médicos preestablecidos. Los resultados de estas herramientas son <strong>meramente informativos</strong> y no garantizan la elegibilidad real de un paciente, la cual solo puede ser determinada tras una evaluación clínica exhaustiva por parte de nuestros especialistas.
              </p>

              <h2 id="propiedad">4. Propiedad Intelectual</h2>
              <p>
                Todo el contenido de este sitio, incluyendo pero no limitado a textos, logotipos, diseños, iconos, imágenes, clips de audio y software, es propiedad exclusiva de CETRA o sus proveedores de contenido y está protegido por las leyes de propiedad intelectual internacionales y de México.
              </p>

              <h2 id="conducta">5. Conducta del Usuario</h2>
              <p>
                Usted se compromete a utilizar el sitio de manera responsable y legal. Queda estrictamente prohibido:
              </p>
              <ul>
                <li>Intentar vulnerar la seguridad del sitio.</li>
                <li>Utilizar el contenido para fines comerciales no autorizados.</li>
                <li>Proporcionar información falsa o engañosa en nuestros formularios de contacto o WhatsApp.</li>
              </ul>

              <h2 id="limitacion">6. Limitación de Responsabilidad</h2>
              <p>
                CETRA no será responsable de ningún daño directo, indirecto, incidental o consecuente que resulte del uso o la imposibilidad de uso del sitio web o de la información contenida en él. Aunque nos esforzamos por mantener la información actualizada, no garantizamos la exactitud total del contenido en todo momento.
              </p>

              <h2 id="modificaciones">7. Modificaciones a los Términos</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento sin previo aviso. Es responsabilidad del usuario revisar periódicamente esta sección para estar al tanto de cualquier cambio.
              </p>

              <h2 id="ley">8. Ley Aplicable y Jurisdicción</h2>
              <p>
                Para la interpretación y cumplimiento de estos términos y condiciones, las partes se someten a la legislación aplicable en los Estados Unidos Mexicanos y a la jurisdicción de los tribunales competentes en la ciudad de Monterrey, Nuevo León, renunciando a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros.
              </p>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
