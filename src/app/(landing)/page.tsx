"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage(): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    // Simular tiempo de carga (puedes ajustar el tiempo según necesites)
    const timer = setTimeout(() => {
      router.push("/signup") // Cambia "/login" por la ruta correcta de tu página de login
    }, 2000) // 2 segundos de loading

    // Limpiar el timer si el componente se desmonta
    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">QUANTUM STASH</h2>
        <h3 className="text-2xl text-muted-foreground">Inventory Management</h3>
        
        {/* Spinner de loading */}
        <div className="mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Cargando...</p>
        </div>
      </div>
    </main>
  )
}
