import Image from "next/image";

export default function Home() {
  return (
    <main className="p-5 flex flex-col gap-2">
      <h1 className="text-3xl font-bold">Material Symbols & Icons</h1>
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
    </main>
  );
}
