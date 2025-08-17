"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, MapPin } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      id: 1,
      title: "Finalista Juegos Bonaerenses",
      year: "2022",
      description: "Final en acuatlón (400m natación + 4km carrera) representando a La Matanza en Mar del Plata",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Competencias CENARD",
      year: "2024-2025",
      description: "Participación en competencias federativas en el Centro Nacional de Alto Rendimiento Deportivo",
      icon: <Medal className="h-6 w-6" />,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Maratones UNLAM",
      year: "2023-2024",
      description: "Participación en maratones fiscalizados por la Universidad Nacional de La Matanza",
      icon: <Award className="h-6 w-6" />,
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Competencias CADAV",
      year: "2024-2025",
      description: "Participación en competencias locales organizadas por CADAV",
      icon: <MapPin className="h-6 w-6" />,
      color: "bg-orange-500",
    },
  ]

  return (
    <section id="logros" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trayectoria Deportiva</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mi camino en el atletismo, desde los inicios hasta las competencias actuales.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${achievement.color} text-white flex-shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {achievement.year}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Años Entrenando</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Especialidades</div>
              <div className="text-xs text-muted-foreground mt-1">Medio Fondo y Acuatlón</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">2022</div>
              <div className="text-sm text-muted-foreground">Mejor Logro</div>
              <div className="text-xs text-muted-foreground mt-1">Juegos Bonaerenses</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
