import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Slider from "@/components/templates/index/Slider";
import About from "@/components/templates/index/About";
import Services from "@/components/templates/index/Services";



export default function Home() {
  return (
    <div
      className=''
    >
      <Slider/>
      <About />
      <Services />
    </div>
  );
}
