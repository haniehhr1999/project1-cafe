import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Slider from "@/components/templates/index/Slider";
import About from "@/components/templates/index/About";



export default function Home() {
  return (
    <div
      className=''
    >
      <Slider/>
      <About />
    </div>
  );
}
