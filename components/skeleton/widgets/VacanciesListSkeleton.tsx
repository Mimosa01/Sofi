export default function VacanciesListSkeleton () {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 auto-rows-[204px] gap-4 mb-12 animate-pulse">
      {[...Array(8)].map((_, idx) => (
        <li key={idx} className="p-4 bg-neutral-100 rounded-lg">
          <div className="mb-3 bg-neutral-200 rounded-lg w-full h-10"></div>
          <div className="flex gap-4 mb-12">
            <div className="w-1/4 h-5 bg-neutral-200 rounded-lg" />
            <div className="w-1/4 h-5 bg-neutral-200 rounded-lg" />
            <div className="w-1/4 h-5 bg-neutral-200 rounded-lg" />
          </div>
          <div className="flex justify-between items-end">
            <div className="w-1/2 h-13 bg-neutral-200 rounded-lg"/>
            <div className="w-1/5 h-6 bg-neutral-200 rounded-lg" />
          </div>
        </li>
      ))}
    </ul>
  )
}