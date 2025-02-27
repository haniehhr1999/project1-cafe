import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Slider from "@/components/templates/index/Slider";
import About from "@/components/templates/index/About";
import Services from "@/components/templates/index/Services";
import Offer from "@/components/templates/index/Offer";
import Menu from "@/components/templates/index/Menu";
import Reservation from "@/components/templates/index/Reservation";



export default function Home({services , menu}) {
  console.log(services)
  return (
    <div
      className=''
    >
      <Slider/>
      <About />
      <Services data= {services} />
      <Offer />
      <Menu data ={menu} />
      <Reservation />
    </div>
  );
}


export async function getStaticProps (){
  const res = await fetch ('http://localhost:9000/services')
  const services = await res.json()


  const resMenu = await fetch ('http://localhost:9000/menu')
  const menu = await resMenu.json()

  return{
    props :{
      services , 
      menu
    },
    revalidate : 60*60*12  //second
  }
}
