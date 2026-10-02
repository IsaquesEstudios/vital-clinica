import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState, type RefObject } from "react";
import content from "@/data/vital-content.json";
import { SiteLayout, ActionButton } from "@/components/SiteLayout";
import { Button, Card, CardContent, CardFooter, CardHeader, CardMedia, CardTitle } from "@/design-system/vital-clinica-a4fa5f";
export const Route = createFileRoute("/")({
 head:()=>({meta:[{title:"Cardiologista em Três Lagoas — Clínica Vitalcor"},{name:"description",content:"Cardiologia e exames cardiológicos em Três Lagoas, com atendimento humano, tecnologia e uma equipe experiente."},{property:"og:title",content:"Clínica Vitalcor — Cardiologia em Três Lagoas"},{property:"og:description",content:"Consultas e exames cardiológicos com cuidado, precisão e acolhimento."},{property:"og:type",content:"website"},{property:"og:url",content:"/"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/"}],scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"MedicalClinic",name:"Clínica Vitalcor",url:"https://clinicavitalcor.com.br",telephone:"+55 67 98457-3508",email:"contato@clinicavitalcor.com.br",address:{"@type":"PostalAddress",streetAddress:"Rua Dr. Munir Thomé, 2170",addressLocality:"Três Lagoas",addressRegion:"MS",postalCode:"79603-050",addressCountry:"BR"}})}]}),
 component:Home
});
const examNames: Record<string, string> = {
  ecocardiograma: "Ecocardiograma",
  eletrocardiograma: "Eletrocardiograma",
  "holter-24h": "Holter 24h",
  "mapa-monitorizacao-ambulatorial-da-pressao-arterial": "Exame de MAPA",
  "teste-ergometrico": "Teste Ergométrico",
  "doppler-de-carotidas-e-vertebrais": "Doppler de Carótidas e Vertebrais",
};
const partners = [
 {name:"Brasil Benefícios",src:"/media/partners/logo-brasil-beneficios.png"},{name:"Labormed",src:"/media/partners/labormed.png"},
 {name:"Fidelidade El Kadri",src:"/media/partners/el-kadri.png"},{name:"ABRAPS",src:"/media/partners/abraps.png"},
 {name:"Bradesco Saúde",src:"/media/partners/bradesco-saude.png"},{name:"ArcelorMittal",src:"/media/partners/arcelormittal.png"},
 {name:"Vivest",src:"/media/partners/vivest.png"},{name:"GEAP Saúde",src:"/media/partners/geap-saude.png"},
 {name:"Unimed",src:"/media/partners/unimed.png"},{name:"SulAmérica",src:"/media/partners/sul-america.png"},
 {name:"Postal Saúde",src:"/media/partners/postal-saude.png"},
];

function Home(){
 const navigate=useNavigate();
 const testimonialTrack=useRef<HTMLDivElement>(null);
 const partnerTrack=useRef<HTMLDivElement>(null);
 const moveCarousel=(track:RefObject<HTMLDivElement|null>,direction:number)=>{
  const element=track.current;
  if(!element)return;
  element.scrollBy({left:element.clientWidth*direction,behavior:"smooth"});
 };
 const [partnersPaused,setPartnersPaused]=useState(false);
 const movePartner=(direction:number)=>{
  const element=partnerTrack.current;
  const item=element?.firstElementChild as HTMLElement|null;
  if(!element||!item)return;
  const step=item.offsetWidth+parseFloat(getComputedStyle(element).columnGap||"0");
  const max=element.scrollWidth-element.clientWidth;
  if(direction>0&&element.scrollLeft>=max-2){element.scrollTo({left:0,behavior:"smooth"});return;}
  if(direction<0&&element.scrollLeft<=2){element.scrollTo({left:max,behavior:"smooth"});return;}
  element.scrollBy({left:step*direction,behavior:"smooth"});
 };
 useEffect(()=>{
  if(partnersPaused||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const id=window.setInterval(()=>movePartner(1),3000);
  return ()=>window.clearInterval(id);
 },[partnersPaused]);
 const exams=content.services.filter(s=>s.slug!=="cardiologia").slice(0,6);
 const recent=content.articles.slice(-3).reverse();
 return <SiteLayout>
  <section className="home-intro">
    <img className="home-intro-background" src="/media/Card-fundo.webp" alt="" aria-hidden="true" />
    <div className="container home-intro-grid">
     <div className="home-intro-copy"><h1>Cuidado que<br/>protege o seu<br/><em>maior bem.</em></h1><p>Cardiologia completa, tecnologia avançada e uma equipe dedicada à sua saúde e bem-estar.</p><div className="button-row"><ActionButton><span className="button-icon" aria-hidden="true">▣</span> Agendar consulta</ActionButton><Button variant="secondary" onClick={()=>window.location.href="https://wa.me/5567984573508"}><span className="button-icon" aria-hidden="true">◉</span> Falar no WhatsApp</Button></div></div>
     <div className="home-intro-photo"><img src="/media/doutores-vital-clinica.webp" alt="Médicos da Clínica Vitalcor"/></div>
   </div>
  </section>
  <div className="container"><section className="proof-strip" aria-label="Diferenciais da Vitalcor">
    <div className="years"><span aria-hidden="true">♡</span><strong>+13</strong><p><b>Mudando vidas há mais de 13 anos</b>Excelência e compromisso com a saúde do seu coração.</p></div>
    <div className="proof-item"><span aria-hidden="true">♙</span><p><b>Atendimento</b>Humanizado</p></div><div className="proof-item"><span aria-hidden="true">♧</span><p><b>Tecnologia</b>Avançada</p></div><div className="proof-item"><span aria-hidden="true">♡</span><p><b>Diagnósticos</b>Confiáveis</p></div>
  </section></div>
  <section className="section home-exams"><div className="container"><div className="center-heading"><p className="eyebrow">Exames realizados</p><h2>Tecnologia para cuidar do seu coração</h2></div><div className="home-exam-grid">{exams.map(s=><Card key={s.slug} variant="elevated">{s.images[0]?<CardMedia><img src={s.images[0].src} alt={s.images[0].alt||examNames[s.slug]}/><span className="media-symbol" aria-hidden="true">♡</span></CardMedia>:null}<CardHeader><CardTitle>{examNames[s.slug]||s.title}</CardTitle></CardHeader><CardContent><p>{s.sections[0]}</p></CardContent><CardFooter><Link className="arrow-link" aria-label={`Saiba mais sobre ${examNames[s.slug]||s.title}`} to="/$service" params={{service:s.slug}}>→</Link></CardFooter></Card>)}</div><div className="center-action"><Button variant="secondary" onClick={()=>navigate({to:"/$service",params:{service:"cardiologia"}})}>Ver todos os exames</Button></div></div></section>
  <section className="section appointment-feature"><div className="container appointment-panel"><div><p className="eyebrow">Atendimento especializado</p><h2>Marque sua consulta com um cardiologista</h2><p>Nossa equipe oferece atendimento completo e individualizado para cuidar da sua saúde com segurança e excelência.</p><ActionButton/></div><div className="appointment-image"><img src="/media/cardiologista-profissional.jpg" alt="Cardiologista da Clínica Vitalcor em atendimento"/></div></div></section>
   <section className="section testimonials"><div className="container"><div className="center-heading"><p className="eyebrow">Depoimentos</p><h2>A confiança de quem já cuida do coração conosco</h2></div><div className="testimonial-grid" ref={testimonialTrack}><Card variant="outlined"><CardHeader><CardTitle>Francisco Simoes</CardTitle></CardHeader><CardContent><p>Avaliação: 5 de 5 estrelas</p><p>Em minha primeira consulta (14/01/25) fui bem acolhido. Clínica bem estruturada, atendimento excelente. A primeira consulta foi da forma ✨ “a primeira impressão é que fica” Já executei alguns exames... Hj 28/01 estou no meu retorno para ver se o relógio está bom 😁. Está é minha indicação 💫</p></CardContent></Card><Card variant="outlined"><CardHeader><CardTitle>Ewerton Rodrigues</CardTitle></CardHeader><CardContent><p>Avaliação: 5 de 5 estrelas</p><p>Ótimo atendimento da clínica. Ambiente aconchegante, colaboradores prestativos e preocupados com bem estar dos pacientes. Inclusive na confirmação da consulta perguntaram se estava com sintomas de covid. Excelentes médicos.</p></CardContent></Card><Card variant="outlined"><CardHeader><CardTitle>Felipe Falcão</CardTitle></CardHeader><CardContent><p>Avaliação: 5 de 5 estrelas</p><p>Ambiente climatizado, bem higiênico e cadeiras confortáveis. Funcionários atenciosos e prestativos, sempre ligam lembrando da consulta o que é muito bom pra quem tem uma rotina cheia e não lembra de tudo. Mesmo que meu convênio não cobrisse eu voltaria sem dúvidas. Outro ponto bom é que eles deixam a senha do wi-fi bem a mostra então não tem aquela sensação de vergonha ao pedir a senha do wi-fi e como lá o sinal da operadora Tim/vivo é ruim isso acaba ajudando muito. Parabéns a gestão do lugar.</p></CardContent></Card><Card variant="outlined"><CardHeader><CardTitle>Telma.Brum</CardTitle></CardHeader><CardContent><p>Avaliação: 5 de 5 estrelas</p><p>Excelente Profissional..... Transmite segurança, obrigada por sua dedicação e carinho com seus pacientes 😍😍😍</p></CardContent></Card></div><div className="carousel-controls"><Button variant="quiet" size="sm" aria-label="Depoimentos anteriores" onClick={()=>moveCarousel(testimonialTrack,-1)}>←</Button><Button variant="quiet" size="sm" aria-label="Próximos depoimentos" onClick={()=>moveCarousel(testimonialTrack,1)}>→</Button></div></div></section>
  <section className="partners"><div className="container" onMouseEnter={()=>setPartnersPaused(true)} onMouseLeave={()=>setPartnersPaused(false)} onFocus={()=>setPartnersPaused(true)} onBlur={()=>setPartnersPaused(false)}><p className="eyebrow">Aceitamos os principais convênios</p><div className="partner-carousel" ref={partnerTrack}>{partners.map(partner=><div className="partner-logo" key={partner.name}><img src={partner.src} alt={partner.name}/></div>)}</div><div className="carousel-controls"><Button variant="quiet" size="sm" aria-label="Convênios anteriores" onClick={()=>movePartner(-1)}>←</Button><Button variant="quiet" size="sm" aria-label="Próximos convênios" onClick={()=>movePartner(1)}>→</Button></div></div></section>
  <section className="section about-feature"><div className="container about-panel"><img src="/media/clinica-vitalcor.webp" alt="Fachada da Clínica Vitalcor"/><div><p className="eyebrow">Sobre nós</p><h2>Referência em cardiologia em Três Lagoas</h2><p>Há mais de 13 anos, a Clínica Vitalcor oferece atendimento especializado, exames de alta precisão e tecnologia de ponta para cuidar do que mais importa: a sua saúde.</p><p>Aqui, você encontra experiência, estrutura moderna e um time comprometido com resultados e bem-estar.</p><ActionButton to="/a-clinica" variant="secondary">Conhecer a clínica</ActionButton></div></div></section>
  <section className="section home-blog"><div className="container"><div className="center-heading"><p className="eyebrow">Acompanhe nosso blog</p><h2>Informação para cuidar melhor do coração</h2></div><div className="article-grid">{recent.map(a=><Card key={a.slug} variant="outlined">{a.hero?<CardMedia><img src={a.hero.src} alt={a.hero.alt||a.title}/></CardMedia>:null}<CardHeader><p className="article-date">Prevenção</p><CardTitle><Link to="/noticias/$slug" params={{slug:a.slug}}>{a.title}</Link></CardTitle></CardHeader><CardFooter><Link className="text-link" to="/noticias/$slug" params={{slug:a.slug}}>Leia mais <span>→</span></Link></CardFooter></Card>)}</div><div className="center-action"><Button variant="secondary" onClick={()=>navigate({to:"/noticias"})}>Ver todos os artigos</Button></div></div></section>
 </SiteLayout>
}
