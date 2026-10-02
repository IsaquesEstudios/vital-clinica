import { Link, useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "@/design-system/vital-clinica-a4fa5f";
import logo from "@/assets/logo-vitalcor-clean.png";

const services = [
  ["Cardiologia", "cardiologia"],
  ["Ultrassonografia com Doppler de Carótidas", "doppler-de-carotidas-e-vertebrais"],
  ["Ecocardiograma", "ecocardiograma"],
  ["Eletrocardiograma", "eletrocardiograma"],
  ["Holter 24h", "holter-24h"],
  ["Exame MAPA", "mapa-monitorizacao-ambulatorial-da-pressao-arterial"],
  ["MRPA", "mrpa"],
  ["Polissonografia", "polissonografia"],
  ["Teste Ergométrico", "teste-ergometrico"],
  ["Teste Cardiopulmonar (Ergoespirometria)", "teste-cardiopulmonar"],
] as const;

export function ActionButton({ to = "/contato", children = "Agendar consulta", variant = "primary" }: { to?: string; children?: ReactNode; variant?: "primary" | "secondary" | "quiet" }) {
  const navigate = useNavigate();
  return <Button variant={variant} onClick={() => navigate({ to })}>{children}</Button>;
}

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/vitalcor3l/", icon: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.75"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.75"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none"/></svg> },
  { name: "Facebook", href: "https://www.facebook.com/clinicavitalcor3l/?locale=pt_BR", icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" stroke="none" d="M13.6 21v-7.4h2.5l.4-2.9h-2.9V8.9c0-.84.23-1.41 1.44-1.41h1.54V4.9c-.27-.03-1.18-.11-2.24-.11-2.22 0-3.74 1.35-3.74 3.84v2.14H8.05v2.9h2.48V21h3.07z"/></svg> },
];

export function SocialLinks() {
  return <div className="social-links">{socials.map(s => <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>{s.icon}</a>)}</div>;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="site-shell">
    <header className="site-header">
      <div className="container nav-row">
        <Link to="/" className="brand" aria-label="Vitalcor — início"><img src={logo} alt="Vitalcor" /></Link>
        <nav className="main-nav" aria-label="Navegação principal">
          <Link to="/">Início</Link>
          <details className="nav-services"><summary>Exames</summary><div className="service-menu"><Link to="/exames">Todos os exames</Link>{services.map(([label,service])=><Link key={service} to="/$service" params={{ service }}>{label}</Link>)}</div></details>
          <Link to="/a-clinica">Sobre nós</Link><Link to="/contato">Contato</Link><Link to="/noticias">Notícias</Link><SocialLinks />
        </nav>
        <ActionButton />
      </div>
    </header>
    <main>{children}</main>
    <footer className="site-footer"><div className="container footer-grid">
      <div className="footer-about"><img className="footer-logo" src={logo} alt="Vitalcor"/><p>A Clínica Vitalcor conta com o trabalho de um competente grupo de profissionais que tem como objetivo a prevenção de doenças cardiovasculares, assim como a detecção precoce e o tratamento adequado das doenças do coração, para proporcionar uma melhor qualidade de vida aos seus pacientes.</p></div>
      <div><h2>Navegação</h2><Link to="/">Início</Link><Link to="/a-clinica">Sobre nós</Link><Link to="/contato">Contato</Link><Link to="/noticias">Notícias</Link></div>
      <div><h2>Exames</h2>{services.slice(1,6).map(([label,service])=><Link key={service} to="/$service" params={{ service }}>{label}</Link>)}</div>
      <div className="footer-contact"><h2>Contato</h2><a href="tel:+5567984573508">(67) 98457-3508</a><a href="mailto:contato@clinicavitalcor.com.br">contato@clinicavitalcor.com.br</a><p>Rua Dr. Munir Thomé, 2170<br/>Centro — Três Lagoas, MS<br/>CEP 79603-050</p><p className="footer-social-label">Redes sociais</p><SocialLinks /><Button variant="primary" onClick={()=>window.location.href="https://wa.me/5567984573508"}>Fale pelo WhatsApp</Button></div>
    </div><div className="container footer-bottom"><p><strong>Aviso:</strong> As informações disponíveis neste site têm finalidade exclusivamente informativa e não substituem a consulta, diagnóstico ou tratamento médico. Sempre procure o seu médico ou profissional de saúde para quaisquer dúvidas que possa ter em relação a uma condição médica.</p><div><Link to="/politica-de-privacidade">Política de Privacidade</Link><Link to="/termos-de-uso">Termos de Uso</Link></div></div></footer>
  </div>;
}

export function PageHero({ eyebrow, title, intro, image, imageAlt = "", className = "" }: { eyebrow: string; title: string; intro?: string; image?: string; imageAlt?: string; className?: string }) {
 return <section className={`page-hero ${image ? "with-image" : ""} ${className}`.trim()}>
  {image ? <img className="page-hero-image" src={image} alt={imageAlt}/> : null}<div className="page-hero-shade" />
  <div className="container page-hero-content"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{intro?<p className="lead">{intro}</p>:null}</div>
 </section>
}
