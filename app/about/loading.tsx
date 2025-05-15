import { Loader2 } from "lucide-react"

export default function AboutLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="flex flex-col items-center">
        <Loader2 className="h-12 w-12 text-green-500 animate-spin mb-4" />
        <h2 className="text-xl font-medium text-gray-300">Loading about page...</h2>
      </div>
    </div>
  )
}
