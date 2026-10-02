import { createFileRoute } from "@tanstack/react-router";import {SiteLayout,PageHero,ActionButton} from "@/components/SiteLayout";import {Card,CardContent,CardHeader,CardMedia,CardTitle} from "@/design-system/vital-clinica-a4fa5f";
export const Route=createFileRoute('/equipe')({head:()=>({meta:[{title:"Equipe Médica — Clínica Vitalcor"},{name:"description",content:"Conheça os cardiologistas da Clínica Vitalcor em Três Lagoas."},{property:"og:title",content:"Equipe Médica — Clínica Vitalcor"},{property:"og:description",content:"Profissionais dedicados ao cuidado cardiovascular em Três Lagoas."},{property:"og:type",content:"website"},{property:"og:url",content:"/equipe"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/equipe"}]}),component:Page});
const professionals=[
  {name:'Dra. Larissa Alves da Silveira',role:'Cardiologista',image:'/media/medico-marina.webp'},
  {name:'Dra. Francielle Garcia Vangan',role:'Infectologista',image:'/media/medico-juliana.webp'},
  {name:'Dra. Nadia',role:'Cardiologista e Ergometrista',image:'/media/medico-camila.webp'},
  {name:'Josiane Maria Carlos Nunes',role:'Cardiologista',image:'/media/medico-beatriz.webp'},
  {name:'Dr. Luiz Angeloni Neto',role:'Cardiologista',image:'/media/medico-rafael.webp'},
  {name:'Dr. Gustavo Floriano de Queiroz',role:'Cardiologista',image:'/media/medico-andre.webp'},
  {name:'Dr. Guilherme Pizzo Pagnani',role:'Cardiologista',image:'/media/medico-ricardo.webp'},
  {name:'Dr. Erick Vinícius Milanez Bertin',role:'Cardiologista',image:'/media/medico-fernando.webp'},
  {name:'Dr. Ulisses Calandrin',role:'Calandrin Cardiologista',image:'/media/medico-paulo.webp'},
  {name:'Dra. Vanessa C. Calandrin',role:'Cardiologista',image:'/media/medico-larissa.webp'},
  {name:'Dr. Tiago Tiago Hiroshi Koyanagui',role:'Cardiologista',image:'/media/medico-marcelo.webp'}];
function Page(){return <SiteLayout><PageHero eyebrow="Nossa equipe" title="Experiência que acolhe." intro="Conheça os profissionais que formam a Vitalcor." image="/media/fachada-vitalcor.webp" imageAlt="Fachada da Clínica Vitalcor"/><section className="section clinic-professionals"><div className="container"><div className="center-heading"><p className="eyebrow">Equipe médica</p><h2>Nossos profissionais</h2></div><div className="team-grid">{professionals.map((professional)=><Card key={professional.name}><CardMedia><img src={professional.image} alt={professional.name}/></CardMedia><CardHeader><CardTitle>{professional.name}</CardTitle></CardHeader><CardContent><p>{professional.role}</p></CardContent></Card>)}</div></div></section><section className="cta-band"><div className="container split"><div><p className="eyebrow">Atendimento humano</p><h2>Nossa equipe está pronta para atender você.</h2></div><ActionButton/></div></section></SiteLayout>}
