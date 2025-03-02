import PageHeader from "@/components/modules/pageHeader/PageHeader";
import ServicesDetail from "@/components/templates/services/servicesDetail";
import React from "react";

const Services = ({ services }) => {
  console.log(services);
  return (
    <div>
      <PageHeader route="Services" />
      <ServicesDetail services={services} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:9000/services");
  const services = await res.json();

  return {
    props: {
      services,
    },
  };
}

export default Services;
