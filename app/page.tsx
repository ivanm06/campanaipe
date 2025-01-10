/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-sync-scripts */
import "@/styles/globals.css"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Briefcase, HeartHandshake, MailIcon } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function CampanaRiesgosLaborales() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-primary-foreground py-6 px-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Campaña de Riesgos Laborales</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#acoso" className="hover:underline">Acoso Laboral</Link></li>
              <li><Link href="#carga" className="hover:underline">Carga de Trabajo</Link></li>
              <li><Link href="#recursos" className="hover:underline">Recursos</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-secondary text-secondary-foreground py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Tu bienestar es nuestra prioridad</h2>
            <p className="text-xl mb-8">Juntos contra el acoso laboral y la sobrecarga de trabajo</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#recursos">Obtén ayuda ahora</Link>
            </Button>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Carteles Informativos</h2>
            <div className="grid md:grid-cols-2 gap-10 justify-items-center">
              <div className="relative aspect-[3/4] bg-muted rounded-lg overflow-hidden h-[80vh]">
                <Image
                  src="/cartel1.jpg"
                  alt="Cartel informativo sobre acoso laboral"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-green-800 text-white p-4">
                  <h3 className="text-xl font-semibold">Acoso Laboral</h3>
                  <p>No al acoso, sí a la dignidad</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] bg-muted rounded-lg overflow-hidden h-[80vh]">
                <Image
                  src="/cartel2.jpg"
                  alt="Cartel informativo sobre carga excesiva de trabajo"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-green-800 text-white p-4">
                  <h3 className="text-xl font-semibold">Carga Excesiva de Trabajo</h3>
                  <p>Desconecta para reconectar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="acoso" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Acoso Laboral</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>¿Qué es el acoso laboral?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>El acoso laboral, también conocido como mobbing, es cualquier conducta abusiva o de violencia psicológica que se realice de forma sistemática sobre una persona en el ámbito laboral, manifestada especialmente a través de reiterados comportamientos, palabras o actitudes que lesionen la dignidad o integridad psíquica del trabajador y que pongan en peligro o degraden sus condiciones de trabajo.</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Señales de alerta</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Aislamiento social en el trabajo</li>
                    <li>Asignación de tareas humillantes o sin sentido</li>
                    <li>Críticas constantes e injustificadas</li>
                    <li>Amenazas verbales o escritas</li>
                    <li>Ridiculización pública</li>
                    <li>Sobrecarga de trabajo intencionada</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="carga" className="py-20 px-6 bg-muted text-muted-foreground">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Carga Excesiva de Trabajo</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Impacto en la salud</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>La carga excesiva de trabajo puede tener graves consecuencias en la salud física y mental de los trabajadores, incluyendo:</p>
                  <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Estrés crónico</li>
                    <li>Burnout o síndrome de desgaste profesional</li>
                    <li>Problemas de sueño</li>
                    <li>Ansiedad y depresión</li>
                    <li>Problemas cardiovasculares</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Cómo identificar la sobrecarga</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Jornadas laborales extensas de forma regular</li>
                    <li>Dificultad para completar tareas en el tiempo asignado</li>
                    <li>Sacrificio frecuente de pausas y tiempo personal</li>
                    <li>Sensación constante de estar abrumado</li>
                    <li>Dificultad para desconectar del trabajo</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Cuestionario de Evaluación</h2>
            <div className="bg-white rounded-lg overflow-auto max-h-[80vh]">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <iframe
                  id="JotFormIFrame-250082490759361"
                  title="Carga Mental en el Trabajo"
                  allowTransparency={true}
                  allow="geolocation; microphone; camera; fullscreen"
                  src="https://form.jotform.com/250082490759361"
                  style={{minWidth: "100%", maxWidth: "100%", height:"auto", border: "none", overflow: "auto"}}
                >
                </iframe>
                <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
                <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-250082490759361']", "https://form.jotform.com/")</script>
              </div>
            </div>
          </div>
        </section>

        <section id="recursos" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Recursos y Ayuda</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <Card className="p-6">
                <CardHeader>
                  <AlertTriangle className="w-10 h-10 text-yellow-500 mb-2" />
                  <CardTitle>Línea de Denuncia</CardTitle>
                  <CardDescription>Reporta casos de acoso laboral de forma confidencial</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="https://www.mites.gob.es/itss/web/Atencion_al_Ciudadano/COMO_DENUNCIAR_ITSS.html">
                    <Button className="w-full">
                      <MailIcon className="mr-2 h-4 w-4" /> Denunciar ahora
                    </Button>
                  </a>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardHeader>
                  <Briefcase className="w-10 h-10 text-blue-500 mb-2" />
                  <CardTitle>Asesoría Legal</CardTitle>
                  <CardDescription>Obtén orientación sobre tus derechos laborales</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Solicitar asesoría</Button>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardHeader>
                  <HeartHandshake className="w-10 h-10 text-red-500 mb-2" />
                  <CardTitle>Apoyo Psicológico</CardTitle>
                  <CardDescription>Accede a servicios de salud mental</CardDescription>
                </CardHeader>
                <CardContent> 
                  <a href="https://openheartsayuda.org/mobbing/">
                    <Button variant="outline" className="w-full">Agendar cita</Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-10 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p>Email: info@1dam3.es</p>
              <p>Teléfono: 658 893 402</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces útiles</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Legislación laboral</Link></li>
                <li><Link href="#" className="hover:underline">Guía de prevención</Link></li>
                <li><Link href="#" className="hover:underline">Formulario de denuncia</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-accent-foreground">Facebook</Link>
                <Link href="#" className="hover:text-accent-foreground">Twitter</Link>
                <Link href="#" className="hover:text-accent-foreground">LinkedIn</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 Campaña de Riesgos Laborales. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

