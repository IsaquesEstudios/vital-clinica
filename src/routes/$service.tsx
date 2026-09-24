import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import content from "@/data/vital-content.json";
import { SiteLayout, ActionButton } from "@/components/SiteLayout";
import { Button } from "@/design-system/vital-clinica-a4fa5f";
export const Route=createFileRoute('/$service')({
 loader:({params})=>{const service=content.services.find(s=>s.slug===params.service);if(!service)throw notFound();return service},
 head:({loaderData,params})=>{if(!loaderData)return {};const description=loaderData.description||loaderData.sections[0]?.slice(0,160);return {meta:[{title:`${loaderData.seoTitle} — Clínica Vitalcor`},{name:"description",content:description},{property:"og:title",content:loaderData.seoTitle},{property:"og:description",content:description},{property:"og:type",content:"website"},{property:"og:url",content:`/${params.service}`},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:`/${params.service}`}],scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"MedicalProcedure",name:loaderData.title,description,provider:{"@type":"MedicalClinic",name:"Clínica Vitalcor",telephone:"+55 67 98457-3508",address:{"@type":"PostalAddress",addressLocality:"Três Lagoas",addressRegion:"MS",addressCountry:"BR"}}})},{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Início",item:"https://clinicavitalcor.com.br/"},{"@type":"ListItem",position:2,name:loaderData.title,item:`https://clinicavitalcor.com.br/${params.service}/`} ]})}]}} ,component:ServicePage});

const serviceLabels:Record<string,string>={cardiologia:"Cardiologia","doppler-de-carotidas-e-vertebrais":"Doppler de carótidas e vertebrais",ecocardiograma:"Ecocardiograma",eletrocardiograma:"Eletrocardiograma","holter-24h":"Holter 24h","mapa-monitorizacao-ambulatorial-da-pressao-arterial":"Exame MAPA","teste-ergometrico":"Teste ergométrico"};

function ServicePage(){
 const s=Route.useLoaderData();
 const remainingServices=content.services.filter(service=>service.slug!==s.slug);
 const overview=s.sections.slice(0,2);
 const details=s.sections.slice(2,5);
 const guidance=s.sections.slice(5);
 return <SiteLayout><header className="service-hero"><div className="container service-hero-grid">
  {s.images[0]?<div className="service-hero-media"><img src={s.images[0].src} alt={s.images[0].alt||s.title}/></div>:null}
  <div className="service-hero-copy"><p className="eyebrow">Atendimento Vitalcor</p><h1>{s.title}</h1><p className="lead">{s.description}</p><div className="button-row"><ActionButton/><Button variant="secondary" onClick={()=>window.location.href="https://wa.me/5567984573508"}>Falar no WhatsApp</Button></div></div>
 </div></header><section className="section service-body"><div className="container service-layout">
  <article className="service-copy"><section><p className="eyebrow">Sobre o serviço</p><h2>Entenda o atendimento</h2>{overview.map((text,index)=><p key={index}>{text}</p>)}</section>
  {details.length?<section><p className="eyebrow">Cuidado e precisão</p><h2>Indicações e benefícios</h2>{details.map((text,index)=><p key={index}>{text}</p>)}</section>:null}
  {s.images[1]?<figure className="service-inline-image"><img src={s.images[1].src} alt={s.images[1].alt||s.title}/></figure>:null}
  {guidance.length?<section><p className="eyebrow">Antes do atendimento</p><h2>Preparo, realização e orientações</h2>{guidance.map((text,index)=><p key={index}>{text}</p>)}</section>:null}
  <section className="service-final-cta"><p className="eyebrow">Atendimento especializado</p><h2>Cuide da sua saúde cardiovascular com a Vitalcor.</h2><p>Fale com nossa equipe para consultar disponibilidade, preparo e orientações para o atendimento.</p><ActionButton/></section></article>
  <aside className="service-sidebar" aria-label="Outros serviços e agendamento"><div className="service-sidebar-action"><p className="eyebrow">Agende seu atendimento</p><h2>Conte com a nossa equipe.</h2><p>Tire suas dúvidas e consulte a disponibilidade.</p><ActionButton/></div><nav className="service-nav" aria-label="Outros serviços"><h2>Outros serviços</h2>{remainingServices.map(service=><Link key={service.slug} to="/$service" params={{service:service.slug}}>{serviceLabels[service.slug]||service.title}<span aria-hidden="true">→</span></Link>)}</nav></aside>
 </div></section></SiteLayout>
}
