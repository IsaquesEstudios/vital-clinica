import { Link, useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "@/design-system/vital-clinica-a4fa5f";
import logo from "@/design-system/vital-clinica-a4fa5f/assets/logos/vitalcor-logo.jpg";

const services = [
  ["Cardiologia", "/cardiologia"],
  ["Doppler", "/doppler-de-carotidas-e-vertebrais"],
  ["Ecocardiograma", "/ecocardiograma"],
  ["Eletrocardiograma", "/eletrocardiograma"],
  ["Holter 24h", "/holter-24h"],
  ["Exame MAPA", "/mapa-monitorizacao-ambulatorial-da-pressao-arterial"],
  ["Teste Ergométrico", "/teste-ergometrico"],
] as const;

export function ActionButton({ to = "/contato", children = "Agendar consulta", variant = "primary" }: { to?: string; children?: ReactNode; variant?: "primary" | "secondary" | "quiet" }) {
  const navigate = useNavigate();
  return <Button variant={variant} onClick={() => navigate({ to })}>{children}</Button>;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="site-shell">
    <header className="site-header">
      <div className="topline"><div className="container topline-inner"><span>Cardiologia com cuidado e precisão</span><a href="tel:+5567984573508">(67) 98457-3508</a></div></div>
      <div className="container nav-row">
        <Link to="/" className="brand" aria-label="Vitalcor — início"><img src={logo} alt="Vitalcor" /></Link>
        <nav className="main-nav" aria-label="Navegação principal">
          <Link to="/">Início</Link><Link to="/a-clinica">A Clínica</Link>
          <details className="nav-services"><summary>Serviços</summary><div className="service-menu">{services.map(([label,to])=><Link key={to} to={to}>{label}</Link>)}</div></details>
          <Link to="/equipe">Equipe</Link><Link to="/noticias">Notícias</Link><Link to="/contato">Contato</Link>
        </nav>
        <ActionButton />
      </div>
    </header>
    <main>{children}</main>
    <footer className="site-footer"><div className="container footer-grid">
      <div><img className="footer-logo" src={logo} alt="Vitalcor"/><p>A prevenção, a detecção precoce e o cuidado cardiovascular guiados por atendimento humano.</p></div>
      <div><h2>Atendimento</h2><p>Rua Dr. Munir Thomé, 2170<br/>Centro — Três Lagoas, MS<br/>CEP 79603-050</p><a href="mailto:contato@clinicavitalcor.com.br">contato@clinicavitalcor.com.br</a></div>
      <div><h2>Encontre</h2><Link to="/a-clinica">A Clínica</Link><Link to="/equipe">Equipe</Link><Link to="/noticias">Notícias</Link><Link to="/contato">Contato</Link></div>
      <div><h2>Serviços</h2>{services.slice(0,5).map(([label,to])=><Link key={to} to={to}>{label}</Link>)}</div>
    </div><div className="container footer-bottom"><p>As informações deste site são informativas e não substituem consulta, diagnóstico ou tratamento médico.</p><div><Link to="/politica-de-privacidade">Política de Privacidade</Link><Link to="/termos-de-uso">Termos de Uso</Link></div></div></footer>
  </div>;
}

export function PageHero({ eyebrow, title, intro, image, imageAlt = "" }: { eyebrow: string; title: string; intro?: string; image?: string; imageAlt?: string }) {
 return <section className={`page-hero ${image ? "with-image" : ""}`}>
  {image ? <img className="page-hero-image" src={image} alt={imageAlt}/> : null}<div className="page-hero-shade" />
  <div className="container page-hero-content"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{intro?<p className="lead">{intro}</p>:null}</div>
 </section>
}
