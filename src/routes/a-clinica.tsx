import { createFileRoute, Link } from "@tanstack/react-router";
import { ActionButton, SiteLayout } from "@/components/SiteLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardTitle,
} from "@/design-system/vital-clinica-a4fa5f";

const pageUrl = "https://vital-clinica-reboot.lovable.app/a-clinica";
const pageImage = "https://vital-clinica-reboot.lovable.app/media/clinica-vitalcor.webp";
const description =
  "A Clínica Vitalcor conta com o trabalho de um competente grupo de profissionais dedicado à prevenção, detecção precoce e tratamento adequado das doenças do coração.";

const services = [
  { label: "Ecocardiograma", slug: "ecocardiograma" },
  { label: "Eletrocardiograma", slug: "eletrocardiograma" },
  { label: "Holter 24H", slug: "holter-24h" },
  { label: "Exame MAPA", slug: "mapa-monitorizacao-ambulatorial-da-pressao-arterial" },
  { label: "Teste Ergométrico", slug: "teste-ergometrico" },
  { label: "Doppler de Carótidas e Vertebrais", slug: "doppler-de-carotidas-e-vertebrais" },
] as const;

const professionals = [
  {
    name: "Dr. Ulisses Calandrin",
    role: "Cardiologista",
    registration: "CRM.MS: 6601",
    image: "/media/Dr.-Ulisses-Calandrin-1.webp",
  },
  {
    name: "Dra. Vanessa C. Calandrin",
    role: "Cardiologista",
    registration: "CRM.MS: 6602",
    image: "/media/Dra.-Vanessa-C.-Calandrin-1.webp",
  },
  {
    name: "Dra. Nídia Arenas Versoli",
    role: "Cardiologista e ergometrista",
    registration: "CRM.MS: 9969",
    image: "/media/Nadia-Arenas-Versali.jpg",
  },
] as const;

export const Route = createFileRoute("/a-clinica")({
  head: () => ({
    meta: [
      { title: "A Clínica — Vitalcor" },
      { name: "description", content: description },
      { property: "og:title", content: "A Clínica — Vitalcor" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: pageImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "A Clínica — Vitalcor" },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: pageImage },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${pageUrl}/#webpage`,
              url: pageUrl,
              name: "A Clínica",
              description,
              inLanguage: "pt-BR",
              primaryImageOfPage: { "@id": `${pageUrl}/#primaryimage` },
              breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
            },
            {
              "@type": "ImageObject",
              "@id": `${pageUrl}/#primaryimage`,
              url: pageImage,
              contentUrl: pageImage,
              caption: "Clínica Vitalcor",
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${pageUrl}/#breadcrumb`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Início",
                  item: "https://vital-clinica-reboot.lovable.app/",
                },
                { "@type": "ListItem", position: 2, name: "A Clínica", item: pageUrl },
              ],
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://vital-clinica-reboot.lovable.app/#organization",
              name: "Clínica Vitalcor",
              url: "https://vital-clinica-reboot.lovable.app/",
              telephone: "+55 67 98457-3508",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Dr. Munir Thomé, 2170",
                addressLocality: "Três Lagoas",
                addressRegion: "MS",
                postalCode: "79603-050",
                addressCountry: "BR",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: ClinicPage,
});

function ClinicPage() {
  return (
    <SiteLayout>
      <section className="clinic-opening">
        <div className="container clinic-opening-grid">
          <div className="clinic-opening-copy">
            <p className="eyebrow">Sobre nós</p>
            <h1>Clínica VitalCor</h1>
            <p className="clinic-opening-lead">
              Cuidado cardiovascular com experiência, atualização e atenção às pessoas.
            </p>
            <ActionButton />
          </div>
          <figure className="clinic-opening-media">
            <img src="/media/clinica-vitalcor.webp" alt="Fachada da Clínica Vitalcor" />
          </figure>
        </div>
      </section>

      <section className="section clinic-story">
        <div className="container clinic-story-grid">
          <div className="clinic-story-copy">
            <p className="eyebrow">Clínica VitalCor</p>
            <h2>Cuidando bem para Cuidar sempre.</h2>
            <p>
              A Clínica <strong>Vitalcor</strong> conta com o trabalho de um competente grupo de profissionais que
              tem como objetivo a prevenção de doenças cardiovasculares, assim como a detecção precoce e o
              tratamento adequado das doenças do coração, para proporcionar uma melhor qualidade de vida aos seus
              pacientes.
            </p>
            <p>
              Por este objetivo a Vitalcor dispõe de consultas médicas com cardiologistas que buscam estar sempre
              atualizados, além de exames cardiológicos modernos para alcançar os variados diagnósticos e auxiliar
              na tomada de decisão.
            </p>
            <p>
              Estamos a mais de 13 anos fazendo o que amamos, dedicando nosso conhecimento e esforço para cuidar de
              pessoas.
            </p>
          </div>
          <figure className="clinic-reception-media">
            <img src="/media/clinica-vital-recepcao.webp" alt="Recepção da Clínica Vitalcor" />
            <figcaption>Estrutura preparada para receber você com conforto e atenção.</figcaption>
          </figure>
        </div>
      </section>

      <section className="clinic-care-band">
        <div className="container clinic-care-layout">
          <div className="clinic-care-heading">
            <p className="eyebrow">Atendimento</p>
            <h2>Nossa equipe está pronta para atender você.</h2>
            <ActionButton children="Fale conosco" />
          </div>
          <nav className="clinic-service-list" aria-label="Serviços da clínica">
            {services.map((service) => (
              <Link key={service.slug} to="/$service" params={{ service: service.slug }}>
                <span>{service.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="section clinic-professionals">
        <div className="container">
          <div className="clinic-section-heading">
            <p className="eyebrow">Equipe médica</p>
            <h2>Nossos profissionais</h2>
          </div>
          <div className="team-grid">
            {professionals.map((professional) => (
              <Card key={professional.name} variant="outlined">
                <CardMedia>
                  <img src={professional.image} alt={professional.name} />
                </CardMedia>
                <CardHeader>
                  <CardTitle>{professional.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{professional.role}</p>
                  <p>{professional.registration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section clinic-legacy">
        <div className="container">
          <div className="clinic-legacy-heading">
            <p className="eyebrow">Nossa trajetória</p>
            <h2>A mais de 13 anos oferecendo nosso melhor</h2>
          </div>
          <img
            className="clinic-team-photo"
            src="/media/clinica-vital-cor-profissionais-original.webp"
            alt="Equipe da Clínica Vitalcor"
          />
        </div>
      </section>

      <section className="section clinic-principles">
        <div className="container clinic-principles-grid">
          <article>
            <p className="eyebrow">01</p>
            <h3>Missão</h3>
            <p>
              promover o bem estar das pessoas cuidando da saúde cardiovascular, de forma humanizada, onde a vida
              é valorizada acima de tudo.
            </p>
          </article>
          <article>
            <p className="eyebrow">02</p>
            <h3>Nosso compromisso</h3>
            <p>
              prestar a assistência com excelência de qualidade em todas as fases do atendimento. Buscando
              atualização constante quanto aos recursos intelectuais e tecnológicos que possam fazer a diferença
              no atendimento ao nosso paciente.
            </p>
          </article>
          <article>
            <p className="eyebrow">03</p>
            <h3>Nossos valores</h3>
            <p>Dedicamos a cuidar da sua saúde com ética, responsabilidade e comprometimento.</p>
          </article>
        </div>
        <div className="container clinic-address">
          <p className="eyebrow">Onde estamos</p>
          <p>Rua Dr. Munir Thomé, 2170 — Centro, Três Lagoas — MS</p>
        </div>
      </section>
    </SiteLayout>
  );
}