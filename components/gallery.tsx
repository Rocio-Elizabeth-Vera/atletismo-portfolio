"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Users, Trophy } from "lucide-react"

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const mediaItems = [
    {
      id: 1,
      type: "image",
      category: "tiempos",
      title: "Tiempo 800m - 3:03",
      description: "Competencia en Vélez",
      thumbnail: "/athletics-stopwatch.png",
    },
    {
      id: 2,
      type: "image",
      category: "tiempos",
      title: "Tiempo 1500m - 6:43",
      description: "Competencia CENARD",
      thumbnail: "/atletismo-resultado-oficial.png",
    },
    {
      id: 3,
      type: "image",
      category: "corriendo",
      title: "En Acción",
      description: "Durante entrenamiento",
      thumbnail: "/female-athlete-running.png",
    },
    {
      id: 4,
      type: "video",
      category: "corriendo",
      title: "Video Entrenamiento",
      description: "Sesión en Parque Chacabuco",
      thumbnail: "/placeholder-veqc3.png",
    },
    {
      id: 5,
      type: "image",
      category: "equipo",
      title: "Con Compañeros",
      description: "Equipo de entrenamiento",
      thumbnail: "/atletas-entrenando.png",
    },
    {
      id: 6,
      type: "image",
      category: "competencia",
      title: "Juegos Bonaerenses 2022",
      description: "Final de Acuatlón en Mar del Plata",
      thumbnail: "/acuatlon-atleta.png",
    },
  ]

  const categories = [
    { id: "all", label: "Todo", icon: Trophy },
    { id: "tiempos", label: "Tiempos", icon: Clock },
    { id: "corriendo", label: "En Acción", icon: Play },
    { id: "equipo", label: "Equipo", icon: Users },
    { id: "competencia", label: "Competencias", icon: Trophy },
  ]

  const filteredItems =
    selectedCategory === "all" ? mediaItems : mediaItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Galería</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Fotos y videos de entrenamientos, competencias y logros
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            )
          })}
        </div>

        {/* Grid de medios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-blue-600 ml-1" />
                      </div>
                    </div>
                  )}
                  <Badge variant="secondary" className="absolute top-3 right-3 bg-white/90 text-slate-700">
                    {item.type === "video" ? "Video" : "Foto"}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600">
            ¿Tienes fotos o videos para compartir?
            <a href="#contacto" className="text-blue-600 hover:underline ml-1">
              Contáctame
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
