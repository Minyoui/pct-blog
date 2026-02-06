import Image from "next/image";
import Hero from "@/sections/hero";
import SubHero from "@/sections/subhero";

export default function Home() {
  return (
    <main>
      <Hero className="mx-auto max-w-300"/>
      <SubHero className="mx-auto max-w-300"/>
    </main>
  );
}
