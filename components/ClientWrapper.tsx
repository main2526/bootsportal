// app/components/ClientWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Particles from '@/components/StarBackground'
export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  return (
    <div
      className={
        isRoot ? "overflow-hidden h-screen " : "overflow-auto h-screen"
      }
    ><Particles/>
      {children}
    </div>
  );
}
