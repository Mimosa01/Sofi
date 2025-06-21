export default function QuestionsListSkeleton () {
  return (
    <ul className="flex flex-col gap-2 animate-pulse">
      {[... Array(8)].map((_,idx) => (
        <li key={idx} className="p-4 w-full h-19 bg-neutral-100 rounded-lg">
          <div className="mb-3 w-full h-7 bg-neutral-200 rounded-lg" />
          <div className="w-1/4 h-3 bg-neutral-200 rounded-lg" />
        </li>
      ))}
    </ul>
  )
}