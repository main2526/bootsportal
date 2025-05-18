"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Download, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function TarjetasDescargas() {
  const tarjetas = [
    {
      id: 1,
      titulo: "Minecraft Optimizado 1.20.4",
      descripcion:
        "¡Descubre el mundo de Minecraft 1.20.4! 🧱🔥¡Prepárate para vivir una aventura sin límites en la versión 1.20.4 de Minecraft! Esta actualización trae una experiencia más estable, fluida y llena de posibilidades. Explora biomas impresionantes, construye todo lo que imagines y enfréntate a nuevos desafíos con tus amigos o en solitario.✨ Novedades destacadas:Mejoras de rendimiento y estabilidad para una experiencia más fluida.Compatibilidad con los mejores mods y shaders de la comunidad.¡Perfecta para jugar en servidores y mundos personalizados!🎮 Ya sea que seas constructor, explorador, guerrero o granjero... Minecraft 1.20.4 te espera para que dejes tu huella en su infinito mundo cúbico.🟢 ¡Descárgala ahora y comienza tu próxima gran aventura!",
      imagen: "/Minecraft.png",
      archivo: "/minecraft",
    },
    {
      id: 2,
      titulo: "After Effects 2025",
      descripcion:
        "🎬 ¡Lleva tu creatividad al siguiente nivel con After Effects 2025! 🚀✨¿Quieres crear animaciones, efectos visuales y motion graphics de nivel profesional? Entonces After Effects 2025 es para ti. La nueva versión llega más potente, rápida e intuitiva que nunca, ideal para editores, diseñadores y creadores de contenido.🔥 Novedades destacadas:✨ Nuevos efectos inteligentes con IA que ahorran horas de trabajo.⚡ Renderizado más rápido gracias a mejoras de rendimiento.🧠 Herramientas automatizadas para tracking, máscaras y expresiones.🎥 Integración perfecta con Premiere Pro y otros programas de Adobe.💡 Desde intros espectaculares hasta efectos de cine... con After Effects 2025, tú pones la idea y el programa hace la magia.🎯 ¡Descárgalo ahora y convierte cada proyecto en una obra de arte!",
      imagen: "/AfterEffects.png",
      archivo: "/aftereffects",
    },
    
  ]

  // State to track which cards have expanded descriptions
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({})

  // Toggle expanded state for a specific card
  const toggleExpanded = (id: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="container mx-auto py-12 px-4 relative overflow-hidden">
      {/* Enhanced background effects - we keep these for additional depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/10 to-purple-900/10 backdrop-blur-xl rounded-3xl"></div>
      <motion.div
        className="absolute -z-10 top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -z-10 bottom-1/4 right-1/4 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -z-10 top-1/2 right-1/3 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Header with animation */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-white tracking-tight mb-3">
          Centro de Recursos
          <Sparkles className="inline-block ml-2 h-6 w-6 text-yellow-300" />
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Descarga documentos, plantillas y recursos profesionales para optimizar tu trabajo y mejorar tu productividad.
        </p>
      </motion.div>

      {/* Cards grid with animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {tarjetas.map((tarjeta, index) => (
          <motion.div
            key={tarjeta.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="flex flex-col h-full overflow-hidden group transition-all duration-300 hover:shadow-xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 rounded-xl">
              <CardHeader className="p-0">
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <motion.div className="w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                    <Image
                      src={tarjeta.imagen || "/placeholder.svg"}
                      alt={tarjeta.titulo}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <h2 className="text-2xl font-bold text-white drop-shadow-md">{tarjeta.titulo}</h2>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6 bg-white/5 backdrop-blur-md">
                <div className="space-y-4">
                  <CardDescription
                    className={`text-sm leading-relaxed text-white ${expandedCards[tarjeta.id] ? "" : "line-clamp-3"}`}
                  >
                    {tarjeta.descripcion}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpanded(tarjeta.id)}
                    className="text-xs text-blue-400 hover:text-blue-300 hover:bg-blue-950/20 px-2 py-1 h-auto"
                  >
                    {expandedCards[tarjeta.id] ? (
                      <>
                        <ChevronUp className="h-3 w-3 mr-1" />
                        Leer menos
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-3 w-3 mr-1" />
                        Leer más
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-2 bg-white/5 backdrop-blur-md rounded-b-lg">
                <Button
                  className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none shadow-lg shadow-blue-700/20 hover:shadow-blue-700/40 transition-all duration-300"
                  asChild
                >
                  <Button  className="flex items-center justify-center">
                    <motion.div
                      className="flex items-center justify-center"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Download className="mr-2 h-4 w-4 transition-all group-hover:animate-bounce" />
                       <Link href={tarjeta.archivo}>Descargar</Link>
                    </motion.div>
                  </Button>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
