export const CodeSnippet = () => {
  return (
    <div className="bg-card border tech-border rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-2 text-sm text-muted-foreground">portfolio.tsx</span>
      </div>
      <div className="space-y-2 font-mono text-sm">
        <div className="text-blue-500">
          const <span className="text-yellow-500">developer</span> = {`{`}
        </div>
        <div className="ml-4 text-green-500">
          name: <span className="text-orange-500">'Fâță Alexandru-Mihail'</span>,
        </div>
        <div className="ml-4 text-green-500">
          passion: <span className="text-orange-500">'Fullstack Developer'</span>,
        </div>
        <div className="ml-4 text-green-500">
          
        </div>
        <div className="ml-4 text-green-500">
          isOpenToWork: <span className="text-blue-400">true</span>
        </div>
        <div className="text-blue-500">{`}`}</div>
      </div>
    </div>
  )
}
