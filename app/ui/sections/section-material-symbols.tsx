"use client";

export function SectionMaterialSymbols() {
  return (
    <section className="p-5 flex flex-col gap-2">
      <h2 className="text-3xl font-bold">Material Symbols & Icons</h2>
      <div className="flex gap-2">
        <span className="font-bold">Home:</span>
        <span className="material-symbols-outlined">home</span>
      </div>
      <div className="flex gap-2">
        <span className="font-bold">Star:</span>
        <span className="material-symbols-outlined">star</span>
      </div>
      <div className="flex gap-2">
        <span className="font-bold">Stacks:</span>
        <span className="material-symbols-outlined text-red-500">stacks</span>
      </div>
    </section>
  );
}
