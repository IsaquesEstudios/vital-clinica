import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import content from "@/data/vital-content.json";
import { SiteLayout, ActionButton } from "@/components/SiteLayout";
import { Button } from "@/design-system/vital-clinica-a4fa5f";
export const Route=createFileRoute('/$service')({
 loader:({params})=>{const service=content.services.find(s=>s.slug===params.service);if(!service)throw notFound();return service},
 head:({loaderData,params})=>{if(!loaderData)return {};const description=loaderData.description||loaderData.sections[0]?.slice(0,160);return {meta:[{title:`${loaderData.seoTitle} — Clínica Vitalcor`},{name:"description",content:description},{property:"og:title",content:loaderData.seoTitle},{property:"og:description",content:description},{property:"og:type",content:"website"},{property:"og:url",content:`/${params.service}`},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:`/${params.service}`}],scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"MedicalProcedure",name:loaderData.title,description,provider:{"@type":"MedicalClinic",name:"Clínica Vitalcor",telephone:"+55 67 98457-3508",address:{"@type":"PostalAddress",addressLocality:"Três Lagoas",addressRegion:"MS",addressCountry:"BR"}}})},{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Início",item:"https://clinicavitalcor.com.br/"},{"@type":"ListItem",position:2,name:loaderData.title,item:`https://clinicavitalcor.com.br/${params.service}/`} ]})}]}} ,component:ServicePage});

const serviceLabels:Record<string,string>={cardiologia:"Cardiologia","doppler-de-carotidas-e-vertebrais":"Doppler de carótidas e vertebrais",ecocardiograma:"Ecocardiograma",eletrocardiograma:"Eletrocardiograma","holter-24h":"Holter 24h","mapa-monitorizacao-ambulatorial-da-pressao-arterial":"Exame MAPA","teste-ergometrico":"Teste ergométrico"};

const serviceHeroCopy:Record<string,string>={
 "doppler-de-carotidas-e-vertebrais":"Realizando uma análise com ultrassom de alta tecnologia é possível analisar as artérias do pescoço que levam sangue ao cérebro.",
 ecocardiograma:"Com um avançado aparelho de ultrassom, conseguimos imagens do coração para realizar uma série de exames.",
 "holter-24h":"Nossa clínica se destaca por oferecer aos pacientes um conforto superior através de equipamentos de alta tecnologia. Implementamos um sistema de monitoramento cardíaco contínuo, disponível 24 horas por dia. Essa análise detalhada nos permite obter diversas informações cruciais sobre a saúde do coração do paciente.",
 "mapa-monitorizacao-ambulatorial-da-pressao-arterial":"Este exame permite a medição contínua da pressão arterial ao longo de 24 horas. Com ele, podemos obter um conhecimento detalhado das variações da sua pressão arterial de acordo com os horários do dia e as atividades que você pratica.",
 "teste-ergometrico":"Realize o exame ergométrico utilizando equipamentos de alta qualidade para monitorar o seu coração quando exposto a atividades físicas.",
};

function ServicePage(){
 const s=Route.useLoaderData();
 const remainingServices=content.services.filter(service=>service.slug!==s.slug);
 const overview=s.sections.slice(0,2);
 const details=s.sections.slice(2,5);
 const guidance=s.sections.slice(5);
 return <SiteLayout><header className="service-hero"><div className="container service-hero-grid">
  {s.images[0]?<div className="service-hero-media"><img src={s.images[0].src} alt={s.images[0].alt||s.title}/></div>:null}
   <div className="service-hero-copy"><p className="eyebrow">Atendimento Vitalcor</p><h1>{s.title}</h1><p className="lead">{serviceHeroCopy[s.slug]||s.description}</p><div className="button-row"><ActionButton/><Button variant="secondary" onClick={()=>window.location.href="https://wa.me/5567984573508"}>Falar no WhatsApp</Button></div></div>
 </div></header><section className="section service-body"><div className="container service-layout">
   {renderServiceContent(s.slug)||<article className="service-copy"><section><p className="eyebrow">Sobre o serviço</p><h2>Entenda o atendimento</h2>{overview.map((text,index)=><p key={index}>{text}</p>)}</section>
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


const ecocardiogramIndications=["Doenças das válvulas cardíacas","Insuficiência cardíaca","Doenças do músculo cardíaco","Doenças congênitas","Trombos e tumores no coração","Avaliação após infarto","Acompanhamento de doenças cardíacas crônicas"];
const ergometricIndications=[
 {title:"Dor no Peito",text:"Avaliar se a dor é causada por angina (dor no peito) ou outros problemas cardíacos."},
 {title:"Falta de Ar",text:"Determinar se a falta de ar está relacionada a problemas cardíacos ou pulmonares."},
 {title:"Risco Cardiovascular",text:"Avaliar o risco de eventos cardíacos em pacientes com fatores de risco."},
 {title:"Pré-operatória",text:"Verificar a condição cardiovascular antes de cirurgias não cardíacas."},
 {title:"Atletas",text:"Avaliar a capacidade física e detectar possíveis problemas cardíacos em atletas de alto rendimento."},
 {title:"Arritmias",text:"Detectar e identificar o tipo de arritmia que surge durante o esforço."},
];

function ContactSection({title="Entre em contato"}:{title?:string}){
 return <section className="service-final-cta"><p className="eyebrow">Atendimento Vitalcor</p><h2>{title}</h2><p>Nossa equipe está pronta para retirar todas as dúvidas sobre os exames.</p><ActionButton/></section>;
}

function EcocardiogramContent(){
 return <article className="service-copy exam-copy">
  <section><p className="eyebrow">Sobre o exame</p><h2>O que é Ecocardiograma</h2><p>O Ecocardiograma é um exame de ultrassom do coração que permite visualizar em tempo real a estrutura e o funcionamento do músculo cardíaco, válvulas e vasos sanguíneos. É um método diagnóstico não invasivo, indolor e seguro, fundamental para identificar diversas condições cardíacas.</p></section>
  <section><div className="exam-info-grid"><div><h3>Importância do Exame</h3><p>Mencione que o ecocardiograma é essencial para diagnosticar e monitorar diversas condições cardíacas, permitindo um tratamento mais eficaz.</p></div><div><h3>Prepare-se com Confiança</h3><p>Receba instruções claras sobre preparo, incluindo jejum e vestimenta, para um exame preciso.</p></div><div><h3>Conforto e Informação</h3><p>Sinta-se à vontade durante o exame, com explicações detalhadas e espaço para suas perguntas.</p></div><div><h3>Resultados e Próximos Passos</h3><p>Entenda os resultados do seu exame e receba orientações claras sobre o que fazer a seguir.</p></div></div></section>
  <section><p className="eyebrow">Indicações</p><h2>Para que Serve o Ecocardiograma?</h2><p>O exame de ecocardiograma é indicado para monitorar diversas condições cardíacas.</p><ul className="exam-list">{ecocardiogramIndications.map(item=><li key={item}>{item}</li>)}</ul></section>
  <section className="service-final-cta"><p className="eyebrow">Clínica Vitalcor</p><h2>Nossa Clínica</h2><p>Estamos a mais de 13 anos oferecendo os melhores e mais precisos exames cardiológicos.</p><p><strong>Localização</strong><br/>Rua Dr. Munir Thomé, 2170 - Centro - Três Lagoas - MS.<br/>CEP: 79603-050</p><p><strong>Email</strong><br/>contato@clinicavitalcor.com.br</p><p><strong>Contato</strong><br/>(67) 98457-3508</p><ActionButton/></section>
 </article>;
}

function HolterContent(){
 return <article className="service-copy exam-copy">
  <section><p className="eyebrow">Sobre o exame</p><h2>O que é e para que serve o holter 24H?</h2><p>O Holter 24 horas é um exame cardiológico de monitoramento contínuo que registra a atividade elétrica do coração ao longo de um dia completo. Este dispositivo é portátil e permite que o paciente continue suas atividades diárias normais enquanto o aparelho coleta dados sobre o funcionamento cardíaco.</p><p>Ao registrar continuamente o ritmo cardíaco, o Holter oferece uma visão detalhada de como o coração funciona ao longo do tempo, permitindo a detecção de anomalias pontuais que um exame convencional poderia não capturar.</p></section>
  <section><p className="eyebrow">Procedimento</p><h2>Como é feito o exame?</h2><p>O exame de Holter é um procedimento simples que monitora continuamente a atividade elétrica do coração por 24 horas. Pequenos eletrodos são fixados no peito e conectados a um dispositivo portátil que o paciente carrega consigo. O paciente deve manter suas atividades normais e registrar sintomas ou eventos significativos em um diário.</p><p>Após o período de monitoração, o dispositivo é removido e os dados são analisados por um cardiologista para identificar qualquer anomalia no ritmo cardíaco. Esse exame ajuda a diagnosticar condições como arritmias e avaliar a eficácia de tratamentos cardíacos.</p></section>
  <section><div className="exam-steps"><div><h3>Preparação e Instalação</h3><p>O paciente chega à clínica, onde recebe instruções sobre o procedimento. Eletrodos adesivos são colocados no tórax e conectados a um dispositivo portátil que registrará a atividade cardíaca ao longo do dia.</p></div><div><h3>Monitoramento</h3><p>Durante 24 horas, o paciente realiza suas atividades normais enquanto o dispositivo monitora o coração. É importante anotar em um diário quaisquer sintomas, como palpitações ou tonturas, junto com as atividades realizadas.</p></div><div><h3>Encerramento e Análise</h3><p>Após o monitoramento, o paciente retorna à clínica para a remoção do dispositivo. Os dados gravados são analisados por um cardiologista, que identificará anomalias e ajustará o tratamento, se necessário.</p></div></div></section>
  <ContactSection/>
  <section className="service-final-cta"><p className="eyebrow">Clínica Vitalcor</p><h2>Nossa clínica em Três Lagoas</h2><p>Marque sua consulta pelo whatsapp com nossa clínica em três lagoas e passe com nossos especialistas.</p><ul className="exam-list"><li><strong>Reconhecimento:</strong> Mais de 13 anos cuidando de pessoas em Três Lagoas.</li><li><strong>Suporte:</strong> Marque consultas ou retire dúvidas pelo nosso whatsapp</li><li><strong>Endereço:</strong> Bem localizada, próximo ao centro de Três Lagoas.</li></ul><ActionButton/></section>
 </article>;
}

function MapaContent(){
 return <article className="service-copy exam-copy">
  <section><p className="eyebrow">Monitoração Ambulatorial da Pressão Arterial</p><h2>Para que serve o exame MAPA?</h2><p>O exame de Monitorização Ambulatorial da Pressão Arterial (MAPA) é utilizado para medir a pressão arterial de forma contínua ao longo de 24 horas.</p><p>Este exame ajuda a obter uma leitura precisa das variações da pressão arterial durante atividades normais e o sono.</p></section>
  <section><div className="exam-steps"><div><h3>Diagnóstico de hipertensão</h3><p>O MAPA é fundamental para diagnosticar a hipertensão arterial, especialmente em casos de &quot;hipertensão do jaleco branco&quot;, onde a pressão arterial do paciente se eleva em ambientes clínicos. Ele também identifica a hipertensão mascarada, que pode não ser detectada em consultas tradicionais.</p></div><div><h3>Avaliação de tratamentos</h3><p>Este exame é importante para avaliar a eficácia de tratamentos antihipertensivos. Ele permite ajustar medicamentos com base em dados reais de pressão arterial durante um ciclo normal de atividades diárias.</p></div><div><h3>Identificação de padrões</h3><p>O MAPA detecta variações nos padrões de pressão arterial, como a ausência da queda noturna normal (non-dipper), que está associada a riscos cardiovasculares aumentados. Isso permite ao médico adaptar o tratamento para maximizar a saúde cardiovascular do paciente.</p></div></div></section>
  <ContactSection/>
  <section><p className="eyebrow">Procedimento</p><h2>Como funciona o exame?</h2><p>O exame MAPA, ou Monitorização Ambulatorial da Pressão Arterial, é realizado por meio de um dispositivo portátil que o paciente usa por 24 horas. Este aparelho mede automaticamente a pressão arterial em intervalos regulares, durante atividades diárias e o sono.</p><div className="exam-steps"><div><h3>Instalação do Dispositivo</h3><p>O paciente vai à clínica para a instalação do aparelho. Uma braçadeira é colocada no braço, conectada a um monitor pequeno e portátil que é fixado na cintura ou no ombro.</p></div><div><h3>Monitoramento Contínuo</h3><p>Durante o dia, o dispositivo infla e defla a braçadeira em intervalos programados, registrando as leituras da pressão arterial. O paciente pode continuar suas atividades normais, devendo anotar quaisquer atividades incomuns ou sintomas.</p></div><div><h3>Análise dos Dados</h3><p>Após 24 horas, o paciente retorna à clínica para a remoção do aparelho. As informações coletadas são analisadas por um cardiologista que avalia as variações da pressão arterial para fornecer diagnósticos precisos e ajustar tratamentos, se necessário.</p></div></div></section>
 </article>;
}

function ErgometricContent(){
 return <article className="service-copy exam-copy">
  <section><p className="eyebrow">Sobre o exame</p><h2>O que é o teste ergométrico?</h2><p>O teste ergométrico é um exame cardiológico não invasivo que avalia o funcionamento do coração quando submetido a esforço físico progressivo.</p><p>Ele é realizado em uma esteira rolante ou bicicleta ergométrica, com o objetivo de monitorar a resposta do sistema cardiovascular ao exercício.</p></section>
  <section><p className="eyebrow">Indicações</p><h2>Indicado Principalmente Para</h2><div className="exam-info-grid">{ergometricIndications.map(item=><div key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></section>
  <section><p className="eyebrow">Procedimento</p><h2>Como funciona o exame</h2><p>Durante o teste, o paciente é conectado a um eletrocardiógrafo (ECG), que registra a atividade elétrica do coração. A pressão arterial é medida regularmente, e o paciente é instruído a caminhar ou pedalar em um ritmo que aumenta gradualmente.</p><p>O objetivo é atingir um nível de esforço que permita avaliar a capacidade funcional do coração e identificar possíveis alterações.</p></section>
  <section className="service-final-cta"><p className="eyebrow">Atendimento Vitalcor</p><h2>Fale conosco</h2><p>Marque sua consulta ou retire suas dúvidas sobre o procedimento.</p><ActionButton/></section>
  <section className="service-final-cta"><p className="eyebrow">Clínica Vitalcor</p><h2>Nossa clínica em Três Lagoas</h2><p>Marque sua consulta pelo whatsapp com nossa clínica em três lagoas e passe com nossos especialistas.</p><ul className="exam-list"><li><strong>Reconhecimento:</strong> Mais de 13 anos cuidando de pessoas em Três Lagoas.</li><li><strong>Suporte:</strong> Marque consultas ou retire dúvidas pelo nosso whatsapp</li><li><strong>Endereço:</strong> Bem localizada, próximo ao centro de Três Lagoas.</li></ul><ActionButton/></section>
 </article>;
}

function renderServiceContent(slug:string){
 if(slug==="doppler-de-carotidas-e-vertebrais")return <DopplerContent/>;
 if(slug==="ecocardiograma")return <EcocardiogramContent/>;
 if(slug==="holter-24h")return <HolterContent/>;
 if(slug==="mapa-monitorizacao-ambulatorial-da-pressao-arterial")return <MapaContent/>;
 if(slug==="teste-ergometrico")return <ErgometricContent/>;
 return null;
}
