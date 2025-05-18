"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Minecraft() {
  const [state, setState] = useState(false); // Controla si ya se habilitó el botón
  const [timer, setTimer] = useState<number | null>(null); // Controla el tiempo restante

  // Cargar estado guardado
  useEffect(() => {
    const isSubscribed = localStorage.getItem("isSubscribedAfterEffects2025") === "true";
    setState(isSubscribed);
  }, []);

  // Contador en tiempo real
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer !== null && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => (prev !== null ? prev - 1 : null));
      }, 1000);
    } else if (timer === 0) {
      setState(true);
      localStorage.setItem("isSubscribedAfterEffects2025", "true");
      setTimer(null);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSubscribe = () => {
    if (!state) {
      setTimer(20); // Inicia el contador de 20 segundos
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Fondo de estrellas */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/stars.svg')] bg-cover animate-pulse opacity-20" />
      </div>

      {/* Tarjeta */}
      <div className="relative z-10 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 w-[90%] max-w-md text-white space-y-6">
        <h2 className="text-3xl font-extrabold text-center drop-shadow-lg">
          ¡Requisitos para descargar!
        </h2>

        <div className="text-center">
          <p className="text-sm text-gray-300 mb-4">
            Primero debes suscribirte al canal
          </p>
          <Link
            href="https://www.youtube.com/@BootsDev-X"
            onClick={handleSubscribe}
            target="_blank"
            className="inline-block bg-red-600 hover:bg-red-700 transition-colors duration-300 px-6 py-2 rounded-sm font-semibold shadow-md"
          >
            Suscribirse a YouTube
          </Link>
        </div>

        <div className="text-center">
          <button
            disabled={!state}
            onClick={() =>
              (window.location.href =
                "https://www.mediafire.com/file/9xbu7flsn5pynbd")
            }
            className={`w-full py-3 rounded-sm font-semibold transition-all duration-300 ${
              state
                ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
                : "bg-gray-600 text-white cursor-not-allowed"
            }`}
          >
            {state
              ? "Get Link Mediafire"
              : timer !== null
              ? `Wait ${timer}s...`
              : "Get Link Mediafire"}
          </button>
        </div>
      </div>
    </div>
  );
}
