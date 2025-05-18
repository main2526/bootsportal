import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";
import StarBackground from "@/components/StarBackground";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`$ antialiased  bg-black h-full overflow-hidden`}>
        <Link href={"/"}>
          <div className="fixed top-0 left-0 w-full z-50 bg-opacity-80  flex items-center p-4">
            <h1 className="text-white text-2xl shadow-white font-bold">Turtle</h1>
            <h1 className="text-red-400 text-2xl ml-1 font-bold">BloxFruits</h1>
          </div>
        </Link>

        <StarBackground />
        {/* Contenedor que tendrá scroll */}
          <ClientWrapper>{children}

          </ClientWrapper>
          <Toaster />
      </body>
    </html>
  );
}
