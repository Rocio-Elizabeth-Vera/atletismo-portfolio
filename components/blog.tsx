"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, ChevronUp } from "lucide-react"

export function Blog() {
  const [expandedPosts, setExpandedPosts] = useState<number[]>([])

  const posts = [
    {
      id: 1,
      title: "Mi Experiencia en los Juegos Bonaerenses 2022",
      excerpt:
        "Representar a La Matanza en acuatlón fue una experiencia increíble. Te cuento cómo fue llegar a la final en Mar del Plata.",
      fullContent:
        "Llegar a la final de los Juegos Bonaerenses en Mar del Plata fue uno de los momentos más emocionantes de mi carrera deportiva. La disciplina de acuatlón combina 400 metros de natación seguidos de 4 kilómetros de carrera, lo que requiere una preparación muy específica. Durante meses me preparé tanto en la pileta como en la pista, trabajando las transiciones y la resistencia necesaria para ambas disciplinas. El día de la competencia, los nervios estaban a flor de piel, pero logré mantener la concentración y dar lo mejor de mí representando a La Matanza.",
      date: "2024-03-15",
      readTime: "5 min",
      category: "Competencia",
      image: "/acuatlon-atleta.png",
    },
    {
      id: 2,
      title: "Mi Transición del Banco Central a Parque Chacabuco",
      excerpt:
        "Después de una lesión, cambié de club y encontré una nueva familia deportiva. Te cuento sobre esta etapa de mi carrera.",
      fullContent:
        "La lesión que tuve mientras entrenaba en el club del personal del Banco Central fue un momento difícil, pero también una oportunidad de crecimiento. Cuando llegué a la Asociación Atlética de Parque Chacabuco hace tres años, no sabía qué esperar. Sin embargo, encontré no solo un lugar para entrenar, sino una verdadera familia deportiva. Los entrenamientos son exigentes pero el ambiente es increíble. Mis compañeros de entrenamiento se han convertido en grandes amigos y el apoyo mutuo es constante.",
      date: "2024-03-08",
      readTime: "4 min",
      category: "Personal",
      image: "/atletas-entrenando.png",
    },
    {
      id: 3,
      title: "Competir en el CENARD: Un Nuevo Desafío",
      excerpt:
        "Empezar a competir de forma federativa ha sido un gran paso. Las diferencias con las competencias locales y mis aprendizajes.",
      fullContent:
        "Pasar de las competencias locales de CADAV y los maratones fiscalizados por UNLAM a competir de forma federativa en el CENARD ha sido todo un desafío. El nivel de competencia es mucho más alto y la preparación debe ser más específica. Mi mejor tiempo en 1500m lo logré justamente en una competencia del CENARD, marcando 6:43. Cada competencia es una oportunidad de aprender y mejorar, y aunque el camino es exigente, cada pequeño progreso vale la pena.",
      date: "2024-02-28",
      readTime: "6 min",
      category: "Entrenamiento",
      image: "/female-athlete-running.png",
    },
  ]

  const togglePost = (postId: number) => {
    setExpandedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const quotes = [
    {
      text: "Cada entrenamiento es una oportunidad de ser mejor que ayer.",
      author: "Rocío Elizabeth Vera",
    },
    {
      text: "Las lesiones nos enseñan a valorar cada paso que damos en la pista.",
      author: "Rocío Elizabeth Vera",
    },
    {
      text: "El atletismo no es solo correr, es encontrar tu límite y superarlo.",
      author: "Rocío Elizabeth Vera",
    },
  ]

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Blog y Reflexiones</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comparto mi experiencia, aprendizajes y reflexiones sobre mi camino en el atletismo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-8">
            {posts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString("es-ES", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {expandedPosts.includes(post.id) ? post.fullContent : post.excerpt}
                      </p>
                      <Button
                        variant="outline"
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                        onClick={() => togglePost(post.id)}
                      >
                        {expandedPosts.includes(post.id) ? "Leer menos" : "Leer más"}
                        {expandedPosts.includes(post.id) ? (
                          <ChevronUp className="ml-2 h-4 w-4" />
                        ) : (
                          <ArrowRight className="ml-2 h-4 w-4" />
                        )}
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Inspirational Quotes */}
            <Card>
              <CardHeader>
                <CardTitle>Frases que me Inspiran</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {quotes.map((quote, index) => (
                  <blockquote key={index} className="border-l-4 border-primary pl-4">
                    <p className="text-muted-foreground italic mb-2">"{quote.text}"</p>
                    <cite className="text-sm font-semibold text-primary">— {quote.author}</cite>
                  </blockquote>
                ))}
              </CardContent>
            </Card>

            {/* Training Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Mi Semana de Entrenamiento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { day: "Lunes", activity: "Velocidad - Series cortas" },
                    { day: "Martes", activity: "Fondo - Carrera continua" },
                    { day: "Miércoles", activity: "Técnica y fuerza" },
                    { day: "Jueves", activity: "Intervalos - 800m" },
                    { day: "Viernes", activity: "Recuperación activa" },
                    { day: "Sábado", activity: "Competencia o test" },
                    { day: "Domingo", activity: "Descanso completo" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <span className="font-medium text-sm">{item.day}</span>
                      <span className="text-sm text-muted-foreground">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
