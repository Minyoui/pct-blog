
import Hero from "@/sections/hero";
import Blogs from "@/sections/blogs";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main>
      {/* <Socials /> */}
      <Hero className="mx-auto max-w-275 p-3"/>
      <Blogs className="mx-auto max-w-275 px-3"/>
      <Footer className="mx-auto max-w-275 px-3"/>
    </main>
  );
}
