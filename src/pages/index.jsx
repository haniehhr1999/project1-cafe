import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Slider from "@/components/templates/index/Slider";
import About from "@/components/templates/index/About";
import Services from "@/components/templates/index/Services";
import Offer from "@/components/templates/index/Offer";
import Menu from "@/components/templates/index/Menu";
import Reservation from "@/components/templates/index/Reservation";
import Testimonial from "@/components/templates/index/Testimonial";



export default function Home({services , menu , comments}) {

  return (
    <div>
      <Slider/>
      <About />
      <Services data= {services} />
      <Offer />
      <Menu data ={menu} />
      <Reservation />
      <Testimonial data ={comments} />
    </div>
  );
}


export async function getStaticProps (){
  const res = await fetch ('http://localhost:9000/services')
  const services = await res.json()


  const resMenu = await fetch ('http://localhost:9000/menu')
  const menu = await resMenu.json()


  const resComment = await fetch ('http://localhost:9000/comments')
  const comments = await resComment.json()

  return{
    props : {
      services , 
      menu ,
      comments
    } ,
    revalidate : 60 * 60 * 12  // second
  }
}
