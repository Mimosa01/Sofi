export default function MainSectionSkeleton () {
  return (
    <div className="flex flex-col gap-5 p-4 max-w-[660px] w-full h-screen bg-neutral-100 rounded-lg animate-pulse">
      <div className="h-5 w-1/3 bg-neutral-200 rounded-lg"/>
      <div className="h-[90px] w-full bg-neutral-200 rounded-lg"/>
      <div className="h-full bg-neutral-200 rounded-lg"/>
    </div>
  )
}