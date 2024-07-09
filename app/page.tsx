import Image from "next/image";
import {Header} from "@/app/_components/Header";
import {Section} from "@/app/_components/Section";
import {Hero} from "@/app/_components/Hero";
import {Spacing} from "@/app/_components/Spacing";
import {Status} from "@/app/_components/Status";
import {Skill} from "@/app/_components/Skill";
import {Contact} from "@/app/_components/Contact";

export default function Home() {
  return (
   <main>
       <Header></Header>

       <Hero></Hero>
       <Spacing size={"sm"}></Spacing>
        <Status></Status>
       <Skill></Skill>
       <Contact></Contact>
   </main>
  );
}
