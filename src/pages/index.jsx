import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Slider from "@/components/templates/index/Slider";
import About from "@/components/templates/index/About";
import Services from "@/components/templates/index/Services";
import Offer from "@/components/templates/index/Offer";



export default function Home({services}) {
  console.log(services)
  return (
    <div
      className=''
    >
      <Slider/>
      <About />
      <Services data= {services} />
      <Offer />
    </div>
  );
}


export async function getStaticProps (){
  const res = await fetch ('http://localhost:9000/services')
  const services = await res.json()

  return{
    props :{
      services
    },
    revalidate : 60*60*12  //second
  }
}
