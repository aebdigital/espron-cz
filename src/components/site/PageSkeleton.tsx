export default function PageSkeleton() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#13265f_0%,#f5f7fb_22%,#ffffff_100%)]">
      <div className="mx-auto w-[95vw] px-6 pt-32 md:px-10 md:pt-40">
        <div className="animate-pulse rounded-[2rem] bg-white/10 p-8 md:p-10">
          <div className="h-3 w-32 rounded-full bg-white/20" />
          <div className="mt-6 h-14 max-w-2xl rounded-[1.2rem] bg-white/20" />
          <div className="mt-4 h-24 max-w-3xl rounded-[1.2rem] bg-white/15" />
        </div>
      </div>

      <div className="mx-auto mt-10 w-[95vw] px-6 pb-20 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-[1.8rem] border border-border bg-light p-6"
            >
              <div className="h-40 rounded-[1.2rem] bg-primary/10" />
              <div className="mt-5 h-5 w-40 rounded-full bg-primary/10" />
              <div className="mt-3 h-20 rounded-[1rem] bg-primary/8" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
