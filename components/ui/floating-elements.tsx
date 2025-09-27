import { Code2, Terminal } from "lucide-react"

export const FloatingElements = () => {
  return (
    <>
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-float">
        <Code2 className="h-8 w-8 text-white" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-float-delayed">
        <Terminal className="h-6 w-6 text-white" />
      </div>
    </>
  )
}
