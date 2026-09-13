export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#091428] via-[#081733] to-[#050d1d]" />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_95%_75%_at_50%_0%,black_20%,transparent_92%)]" />
      <div className="bg-grid-dots absolute inset-0 [mask-image:radial-gradient(ellipse_60%_45%_at_50%_10%,black,transparent)]" />
      <div className="absolute -top-44 left-1/2 h-[460px] w-[860px] -translate-x-1/2 rounded-full bg-electric/20 blur-[150px]" />
      <div className="absolute right-[-12%] top-1/4 h-80 w-80 rounded-full bg-electric/12 blur-[120px]" />
      <div className="animate-pulse-soft absolute bottom-[-16%] left-[-10%] h-96 w-96 rounded-full bg-[#1d3f8f]/40 blur-[130px]" />
      <div className="absolute bottom-[14%] right-[6%] h-52 w-52 rounded-full bg-[#38bdf8]/10 blur-[100px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,7,18,0.55)_100%)]" />
    </div>
  );
}