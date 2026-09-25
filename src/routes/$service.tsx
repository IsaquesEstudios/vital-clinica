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
   <div className="service-hero-copy"><p className="eyebrow">Atendimento Vitalcor</p><h1>{s.title}</h1><p className="lead">{s.slug==="doppler-de-carotidas-e-vertebrais"?"Realizando uma análise com ultrassom de alta tecnologia é possível analisar as artérias do pescoço que levam sangue ao cérebro.":s.description}</p><div className="button-row"><ActionButton/><Button variant="secondary" onClick={()=>window.location.href="https://wa.me/5567984573508"}>Falar no WhatsApp</Button></div></div>
 </div></header><section className="section service-body"><div className="container service-layout">
   {s.slug==="doppler-de-carotidas-e-vertebrais"?<DopplerContent/>:<article className="service-copy"><section><p className="eyebrow">Sobre o serviço</p><h2>Entenda o atendimento</h2>{overview.map((text,index)=><p key={index}>{text}</p>)}</section>
  {details.length?<section><p className="eyebrow">Cuidado e precisão</p><h2>Indicações e benefícios</h2>{details.map((text,index)=><p key={index}>{text}</p>)}</section>:null}
  {s.images[1]?<figure className="service-inline-image"><img src={s.images[1].src} alt={s.images[1].alt||s.title}/></figure>:null}
  {guidance.length?<section><p className="eyebrow">Antes do atendimento</p><h2>Preparo, realização e orientações</h2>{guidance.map((text,index)=><p key={index}>{text}</p>)}</section>:null}
   <section className="service-final-cta"><p className="eyebrow">Atendimento especializado</p><h2>Cuide da sua saúde cardiovascular com a Vitalcor.</h2><p>Fale com nossa equipe para consultar disponibilidade, preparo e orientações para o atendimento.</p><ActionButton/></section></article>}
  <aside className="service-sidebar" aria-label="Outros serviços e agendamento"><div className="service-sidebar-action"><p className="eyebrow">Agende seu atendimento</p><h2>Conte com a nossa equipe.</h2><p>Tire suas dúvidas e consulte a disponibilidade.</p><ActionButton/></div><nav className="service-nav" aria-label="Outros serviços"><h2>Outros serviços</h2>{remainingServices.map(service=><Link key={service.slug} to="/$service" params={{service:service.slug}}>{serviceLabels[service.slug]||service.title}<span aria-hidden="true">→</span></Link>)}</nav></aside>
 </div></section></SiteLayout>
}

const dopplerBenefits = [
 {title:"Detecção de estenoses",text:"Identifica estreitamentos nas artérias causados por placas de ateroma (gordura), que podem levar ao AVC."},
 {title:"Avaliação do risco de AVC",text:"Permite estimar o risco de um Acidente Vascular Cerebral, possibilitando intervenções preventivas."},
 {title:"Monitoramento pós-cirúrgico",text:"Acompanha a eficácia de cirurgias ou angioplastias realizadas nas artérias carótidas e vertebrais."},
 {title:"Investigação de sintomas",text:"Ajuda a diagnosticar a causa de sintomas como tonturas, desmaios, problemas de visão e outros sinais de insuficiência vascular cerebral."},
 {title:"Rastreamento em pacientes de risco",text:"Recomendado para pacientes com fatores de risco para doenças cardiovasculares, como hipertensão, diabetes, colesterol alto e tabagismo."},
 {title:"Mais resultados",text:"Você terá mais resultados detalhados ao consultar seu médico."},
];

const dopplerSymptoms = ["Tonturas frequentes","Desmaios","Problemas de visão","Dormência ou fraqueza em um lado do corpo","Dificuldade para falar","Histórico familiar de AVC ou doenças cardiovasculares","Hipertensão arterial","Diabetes","Colesterol alto","Tabagismo"];

const dopplerQuestions = [
 {title:"O que é o Doppler de Carótidas e Vertebrais?",text:"É um exame de ultrassom vascular que avalia o fluxo sanguíneo nas artérias carótidas (pescoço, levam sangue ao cérebro) e vertebrais (também para o cérebro). Usa ondas sonoras para criar imagens e medir a velocidade e direção do fluxo, detectando possíveis obstruções ou estreitamentos."},
 {title:"Quando o exame é indicado?",text:"Recomendamos que seja feito um exame de Doppler de carótidas quando você sentir alguns dos seguintes sintomas:"},
 {title:"Precisa de preparo?",text:"Geralmente não. Pode se alimentar e tomar seus remédios normalmente. Informe sobre alergias ou condições médicas relevantes. Evite usar cremes ou óleos no pescoço no dia do exame."},
 {title:"O que acontece após o exame?",text:"O cardiologista analisa os resultados e discute o tratamento. Inclui mudanças no estilo de vida (dieta, exercícios, parar de fumar), medicamentos (pressão, colesterol, diabetes) ou cirurgia (remover a placa ou desobstruir a artéria)."},
 {title:"Por que um cardiologista solicita este exame?",text:"Embora avalie vasos do pescoço, está ligado à saúde cardiovascular. A aterosclerose (placas de gordura) afeta tanto o coração quanto as carótidas. O cardiologista interpreta os resultados, avaliando o risco cardiovascular global do paciente."},
 {title:"Como o exame é feito?",text:"É não invasivo e indolor. O paciente deita-se, um gel é aplicado no pescoço e um transdutor (aparelho de ultrassom) desliza sobre a pele, captando imagens e dados do fluxo sanguíneo. Dura 20-30 minutos, sem radiação."},
 {title:"O que significam «placas» nas carótidas?",text:"Indicam aterosclerose, com depósitos de gordura, colesterol e outras substâncias. Estreitam as artérias, dificultando o fluxo e aumentando o risco de AVC. O Doppler quantifica o tamanho das placas e o grau de estreitamento."},
 {title:"Qual a diferença entre Doppler e Ultrassom?",text:"O ultrassom mostra a estrutura das artérias e a presença de placas. O Doppler avalia o fluxo sanguíneo (velocidade e direção), identificando estreitamentos e obstruções não visíveis no ultrassom convencional. O Doppler é mais completo e preciso."},
];

function DopplerContent(){
 return <article className="service-copy doppler-copy">
  <section><p className="eyebrow">Sobre o exame</p><h2>Porque realizar o exame de doppler de carótidas?</h2><p>O Doppler de Carótidas e Vertebrais é um exame de ultrassom essencial para avaliar a saúde das artérias que irrigam o cérebro. Detecte precocemente problemas como estenoses e reduza o risco de AVC.</p><div className="doppler-benefits">{dopplerBenefits.map(item=><div key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></section>
  <section className="service-final-cta"><p className="eyebrow">Atendimento Vitalcor</p><h2>Faça seu exame conosco</h2><p>Entre em contato com nosso atendente e marque sua consulta conosco.</p><ActionButton/></section>
  <section><p className="eyebrow">Orientações</p><h2>Quando procurar um especialista?</h2><p>Recomendamos que seja feito um exame de Doppler de carótidas quando você sentir alguns dos seguintes sintomas:</p><ul className="doppler-symptoms">{dopplerSymptoms.map(symptom=><li key={symptom}>{symptom}</li>)}</ul></section>
  <section><p className="eyebrow">Dúvidas sobre o exame</p><h2>Doppler de Carótidas e Vertebrais</h2><div className="doppler-questions">{dopplerQuestions.map((item,index)=><details key={item.title} open={index===0}><summary>{item.title}</summary><p>{item.text}</p></details>)}</div></section>
  <section className="service-final-cta"><p className="eyebrow">Clínica Vitalcor</p><h2>Nossa clínica em Três Lagoas</h2><p>Marque sua consulta pelo whatsapp com nossa clínica em três lagoas e passe com nossos especialistas.</p><ActionButton/></section>
 </article>
}
