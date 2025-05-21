
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { motion } from "framer-motion";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // Posición relativa del motion.div
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleDragEnd = (_: any, info: { offset: { x: number; y: number } }) => {
    // Actualiza la posición según lo movido
    setX((current) => current + info.offset.x);
    setY((current) => current + info.offset.y);

    // Al soltar, espera 3s y vuelve a (0,0)
    setTimeout(() => {
      setX(0);
      setY(0);
    }, 3000);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <section className="flex justify-center items-center h-full py-10">
        <motion.div
          drag
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          animate={{ x, y }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          whileTap={{ scale: 0.97 }}
          className="absolute grid w-96 gap-8 p-12 rounded-lg bg-zinc-700 cursor-move h-fit items-center"
        >
          <div className="flex justify-center">
            <Image
              src="/narublox.png"
              alt="Logo NaruBlox"
              width={200}
              height={200}
              className="rounded-xl shadow-white shadow-2xl animate-pulse cursor-pointer"
              priority
              onClick={() => setIsOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsOpen(true);
                }
              }}
            />
          </div>

          <p className="text-white text-center">
            El mejor sitio para descargar cracks, mods y parches que desbloquean
            el verdadero poder de tus juegos & programas favoritos. 🎮 ¿Quieres
            jugar sin límites? Aquí encuentras los mods más populares, hacks y
            cracks 100% funcionales para PC.
          </p>

          <Button>
            <Link href="/resources">ir a recursos?</Link>
          </Button>
        </motion.div>
      </section>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¡Hola!, Soy TurtleBloxFruits</AlertDialogTitle>
            <AlertDialogDescription>
              🔥 El mejor sitio para descargar cracks, mods y parches que
              desbloquean el verdadero poder de tus juegos & programas
              favoritos. 🎮 ¿Quieres jugar sin límites? Aquí encuentras los mods
              más populares, hacks y cracks 100% funcionales para PC. 🔓
              Olvídate de las restricciones, disfruta de contenido exclusivo y
              personaliza tu experiencia de juego al máximo. ⚡ Descargas
              rápidas, seguras y sin complicaciones. 🚀 Actualizaciones
              constantes para que siempre estés al día con las últimas
              versiones. ¡Transforma tus juegos & programas y dominemos el mundo!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={() => setIsOpen(false)}>
              <Link href="/resources">Ir a recursos?</Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
