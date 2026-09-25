import { createFileRoute } from "@tanstack/react-router";
import { ActionButton, PageHero, SiteLayout } from "@/components/SiteLayout";
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
  "A Clínica Vitalcor conta com o trabalho de um competente grupo de profissionais que tem como objetivo a prevenção de doenças cardiovasculares, assim como a detecção precoce e o tratamento adequado das doenças do coração, para proporcionar uma melhor qualidade de vida aos seus pacientes.";

const professionals = [
  {
    name: "Dr. Ulisses Calandrin",
    role: "Cardiologista",
    registration: "CRM-MS: 6601",
    image: "/media/Dr.-Ulisses-Calandrin-1.webp",
  },
  {
    name: "Dra. Vanessa C. Calandrin",
    role: "Cardiologista",
    registration: "CRM-MS: 6602",
    image: "/media/Dra.-Vanessa-C.-Calandrin-1.webp",
  },
  {
    name: "Dra. Nádia Arenas Versali",
    role: "Cardiologista e ergometrista",
    registration: "CRM/MS: 9969",
    image: "/media/Nadia-Arenas-Versali.jpg",
  },
] as const;

const newProfessionals = [
  { name: "Dra. Marina Vasconcelos", role: "Cardiologista", image: "/media/medico-marina.webp" },
  { name: "Dra. Juliana Prado", role: "Cardiologista", image: "/media/medico-juliana.webp" },
  { name: "Dra. Camila Fontes", role: "Cardiologista", image: "/media/medico-camila.webp" },
  { name: "Dra. Beatriz Ramos", role: "Cardiologista", image: "/media/medico-beatriz.webp" },
  { name: "Dr. Rafael Monteiro", role: "Cardiologista", image: "/media/medico-rafael.webp" },
  { name: "Dr. André Siqueira", role: "Cardiologista", image: "/media/medico-andre.webp" },
];

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
      <PageHero
        eyebrow="Vitalcor"
        title="Sobre nós"
        className="page-hero--compact"
      />

      <section className="section clinic-intro">
        <div className="container clinic-intro-grid">
          <div className="clinic-copy">
            <h2>Clinica VitalCor</h2>
            <p>
              A Clínica Vitalcor conta com o trabalho de um competente grupo de profissionais que tem como
              objetivo a prevenção de doenças cardiovasculares, assim como a detecção precoce e o tratamento
              adequado das doenças do coração, para proporcionar uma melhor qualidade de vida aos seus pacientes.
            </p>
            <p>
              Por este objetivo a Vitalcor dispõe de consultas médicas com cardiologistas que buscam estar sempre
              atualizados, além de exames cardiológicos modernos para alcançar os variados diagnósticos e auxiliar
              na tomada de decisão.
            </p>
          </div>
          <img
            className="clinic-feature-image"
            src="/media/clinica-vitalcor-1.webp"
            alt="Fachada da Clínica Vitalcor"
          />
        </div>
      </section>

      <section className="section clinic-care">
        <div className="container clinic-care-grid">
          <img
            className="clinic-care-image"
            src="/media/clinica-vital-recepcao.webp"
            alt="Recepção da Clínica Vitalcor"
          />
          <div>
            <h2>Cuidando bem para Cuidar sempre.</h2>
            <p>
              Estamos a mais de 13 anos fazendo o que amamos, dedicando nosso conhecimento e esforço para cuidar
              de pessoas.
            </p>
          </div>
        </div>
      </section>

      <section className="section clinic-professionals">
        <div className="container">
          <div className="center-heading">
            <p className="eyebrow">Equipe médica</p>
            <h2>Nossos profissionais</h2>
          </div>
          <div className="team-grid">
            {[...professionals, ...newProfessionals].map((professional) => (
              <Card key={professional.name}>
                <CardMedia>
                  <img src={professional.image} alt={professional.name} />
                </CardMedia>
                <CardHeader>
                  <CardTitle>{professional.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{professional.role}</p>
                  {"registration" in professional ? (
                    <Badge variant="champagne">{professional.registration}</Badge>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section clinic-history">
        <div className="container clinic-history-grid">
          <img
            className="clinic-team-image"
            src="/media/clinica-vital-cor-profissionais-original.webp"
            alt="Profissionais da Clínica Vitalcor"
          />
          <div>
            <p className="eyebrow">Nossa trajetória</p>
            <h2>A mais de 13 anos oferecendo nosso melhor</h2>
            <ActionButton />
          </div>
        </div>
      </section>

      <section className="section values clinic-values">
        <div className="container three-cols">
          <div>
            <p className="eyebrow">01</p>
            <h3>Missão</h3>
            <p>
              promover o bem estar das pessoas cuidando da saúde cardiovascular, de forma humanizada, onde a vida
              é valorizada acima de tudo.
            </p>
          </div>
          <div>
            <p className="eyebrow">02</p>
            <h3>Nosso compromisso</h3>
            <p>
              prestar a assistência com excelência de qualidade em todas as fases do atendimento. Buscando
              atualização constante quanto aos recursos intelectuais e tecnológicos que possam fazer a diferença
              no atendimento ao nosso paciente.
            </p>
          </div>
          <div>
            <p className="eyebrow">03</p>
            <h3>Nossos valores</h3>
            <p>Dedicamos a cuidar da sua saúde com ética, responsabilidade e comprometimento.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}