
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black overflow-hidden ">
        <div className="golf-wrapper">
          {/* Background Golf Shape */}
          <div className="golf-blob" />
          {/* Hole + flag */}
          <div className="golf-hole" />
          <div className="flag-stick" />
          <div className="flag" />
        </div>
        <section className="relative">
          <div className="">
            <h1 className="text-center">Find Your Next Golf Course!</h1>
            <p className="text-xs text-center pt-1">From driving ranges to courses, get all your information here.</p>
          </div>
          <div className="pt-1 text-center">
            <button className="">Click here to start exploring!</button>
          </div>
        </section>
      </main>
    </div>
  );
}
