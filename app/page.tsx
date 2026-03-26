import Image from "next/image";
import { SectionMaterialSymbols } from "./ui/sections/section-material-symbols";
import { SectionRemixIcons } from "./ui/sections/section-remix-icons";

export default function Home() {
  return (
    <>
      <h1 className="text-xl">
        Next.js Integration with Font Icons (Material Symbols, and Remix Icons)
      </h1>
      <SectionMaterialSymbols />
      <SectionRemixIcons />
    </>
  );
}
