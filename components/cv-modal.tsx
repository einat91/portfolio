"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function CVModal() {
  return (
    <div className="flex justify-center">
      <Button className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-3 text-base" asChild>
        <a href="../public/Einat_Ehrlich_CV.pdf" target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-5 h-5 mr-2" />
          View CV
        </a>
      </Button>
    </div>
  )
}
