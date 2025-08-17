"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Target, TrendingUp, MapPin } from "lucide-react"

export function Statistics() {
  const highlightedTimes = [
    { distance: "800m", time: "3:03", date: "1/06/24", venue: "Competencia Vélez" },
    { distance: "1500m", time: "6:43", date: "16/08/25", venue: "Competencia CENARD" },
    { distance: "5km", time: "25:50", date: "21/04/24", venue: "Maratón" },
    { distance: "10km", time: "58:35", date: "24/03/24", venue: "Maratón" },
  ]

  return (
    <section id="estadisticas" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Mis Mejores Tiempos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Algunos de mis mejores registros en las distancias principales.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-3">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">3:03</div>
              <div className="text-sm text-muted-foreground">800m</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-3">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">6:43</div>
              <div className="text-sm text-muted-foreground">1500m</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-3">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">25:50</div>
              <div className="text-sm text-muted-foreground">5km</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-3">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">3</div>
              <div className="text-sm text-muted-foreground">Años Entrenando</div>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Tiempos Destacados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {highlightedTimes.map((record, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-semibold text-lg">{record.distance}</div>
                    <div className="text-sm text-muted-foreground">{record.venue}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary text-xl">{record.time}</div>
                    <div className="text-sm text-muted-foreground">{record.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Especialidades</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-primary mb-2">Medio Fondo</h4>
                  <p className="text-sm text-muted-foreground">800m - 1500m</p>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">Acuatlón</h4>
                  <p className="text-sm text-muted-foreground">400m natación + 4km carrera</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
