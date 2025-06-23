export default function MainPageSkeleton () {
  return (
    <div className="max-w-[1020px] w-full mx-auto p-[176px]">
      <div className="max-w-[440px] w-full mx-auto mb-25">
        <div className="rounded-full bg-neutral-100 mb-5 mx-auto"/>
        <div className="rounded-lg bg-neutral-100 h-[200px] w-full"/>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid-flow-dense gap-2 mx-auto mb-12.5 md:mb-25 max-w-5xl">
        {[... Array(12)].map((_,idx) => (
          <div key={idx} className="h-[280px] bg-neutral-100 rounded-lg"/>
        ))}
      </div>
    </div>
  )
}