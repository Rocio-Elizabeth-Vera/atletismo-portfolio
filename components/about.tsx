"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Trophy, Heart } from "lucide-react"

export function About() {
  const timeline = [
    {
      year: "2019",
      title: "Club del Personal",
      description: "Comenzó en el club del personal del Banco Central",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      year: "2021",
      title: "Después de la Lesión",
      description: "Se unió a la Asociación Atlética de Parque Chacabuco",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      year: "2022",
      title: "Juegos Bonaerenses",
      description: "Final en Mar del Plata representando a La Matanza en Acuatlón",
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      year: "2024",
      title: "Competencia Federativa",
      description: "Comenzó a competir de forma federativa en el CENARD",
      icon: <MapPin className="h-5 w-5" />,
    },
  ]

  return (
    <section id="sobre-mi" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Mi Trayectoria</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde mis inicios en el club del personal hasta competir en el CENARD, cada paso ha sido parte de mi
            crecimiento como atleta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Mi Camino en el Atletismo</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mi historia comenzó en el club del personal del Banco Central, pero una lesión me llevó a un nuevo
                  capítulo en la Asociación Atlética de Parque Chacabuco, donde llevo ya tres años entrenando y
                  creciendo como atleta.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  He competido en maratones fiscalizados por la UNLAM y La Matanza, carreras locales por CADAV, y
                  también en cross. Mi mejor momento fue llegar a la final de los Juegos Bonaerenses en 2022,
                  representando a La Matanza en acuatlón (400m natación + 4km carrera).
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Años Entrenando</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Competencias</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Momentos Clave</h3>
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-primary">{item.year}</span>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
