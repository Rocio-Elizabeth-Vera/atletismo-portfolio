"use client"

import { Button } from "@/components/ui/button"
import { Play, TrendingUp } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const scrollToStats = () => {
    const element = document.getElementById("estadisticas")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToGallery = () => {
    const element = document.getElementById("galeria")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/atleta-amanecer.png" alt="Rocío corriendo en pista" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Rocío Elizabeth
              <span className="block text-primary">Vera</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Atleta de Medio Fondo y Fondo • Especialista en Acuatlón
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" onClick={scrollToStats} className="text-lg px-8 py-3">
                <TrendingUp className="mr-2 h-5 w-5" />
                Ver Estadísticas
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 bg-transparent"
                onClick={scrollToGallery}
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Fotos y Videos
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3:03</div>
                <div className="text-sm text-muted-foreground">800m PB</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6:43</div>
                <div className="text-sm text-muted-foreground">1500m PB</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Años</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
