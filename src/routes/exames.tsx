import { createFileRoute, Link } from "@tanstack/react-router";
import content from "@/data/vital-content.json";
import { SiteLayout, PageHero, ActionButton } from "@/components/SiteLayout";
import { Card, CardContent, CardFooter, CardHeader, CardMedia, CardTitle } from "@/design-system/vital-clinica-a4fa5f";

export const Route = createFileRoute("/exames")({
 head:()=>({meta:[{title:"Exames Cardiovasculares em Três Lagoas — Clínica Vitalcor"},{name:"description",content:"Conheça os exames cardiovasculares da Clínica Vitalcor em Três Lagoas: ecocardiograma, eletrocardiograma, Holter 24h, MAPA, teste ergométrico, Doppler de carótidas e mais."},{property:"og:title",content:"Exames Cardiovasculares em Três Lagoas — Clínica Vitalcor"},{property:"og:description",content:"Consultas e exames cardiovasculares completos em um só lugar, com agilidade, segurança e confiança."},{property:"og:type",content:"website"},{property:"og:url",content:"/exames"}],links:[{rel:"canonical",href:"/exames"}],scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"WebPage",name:"Exames Cardiovasculares em Três Lagoas — Clínica Vitalcor",breadcrumb:{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Início",item:"https://clinicavitalcor.com.br/"},{"@type":"ListItem",position:2,name:"Exames",item:"https://clinicavitalcor.com.br/exames/"}]}})}]}),
 component:ExamsPage
});

const examLabels: Record<string,string> = {
 cardiologia:"Cardiologia",
 "doppler-de-carotidas-e-vertebrais":"Ultrassonografia com Doppler de Carótidas",
 ecocardiograma:"Ecocardiograma",
 eletrocardiograma:"Eletrocardiograma",
 "holter-24h":"Holter 24h",
 "mapa-monitorizacao-ambulatorial-da-pressao-arterial":"Exame de MAPA",
 mrpa:"MRPA",
 polissonografia:"Polissonografia",
 "teste-ergometrico":"Teste Ergométrico",
 "teste-cardiopulmonar":"Teste Cardiopulmonar (Ergoespirometria)",
};

function ExamsPage(){
 return <SiteLayout>
  <PageHero eyebrow="Nossos exames" title="Exames cardiovasculares" intro="Consultas e exames cardiovasculares completos em um só lugar, com agilidade, segurança e confiança." className="page-hero--compact" />
  <section className="section"><div className="container">
   <div className="home-exam-grid">{content.services.map(s=>{
     const img=(s.images||[])[0];
     const label=examLabels[s.slug]||s.title;
     return <Card key={s.slug} variant="outlined">
      {img?<CardMedia><img src={img.src} alt={img.alt||label}/><span className="media-symbol" aria-hidden="true">♡</span></CardMedia>:null}
      <CardHeader><CardTitle><Link to="/$service" params={{service:s.slug}}>{label}</Link></CardTitle></CardHeader>
      <CardContent><p>{s.description}</p></CardContent>
      <CardFooter><Link className="arrow-link" to="/$service" params={{service:s.slug}} aria-label={label}>→</Link></CardFooter>
     </Card>;
   })}</div>
   <div className="center-action"><ActionButton>Agendar consulta</ActionButton></div>
  </div></section>
 </SiteLayout>;
}
