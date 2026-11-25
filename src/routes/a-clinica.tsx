import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/SiteLayout";
import { Card, CardContent, CardHeader, CardMedia, CardTitle } from "@/design-system/vital-clinica-a4fa5f";

const professionals = [
  { name: "Dra. Nádia", role: "Cardiologista e Ergometrista", register: "CRM/MS 9969 · RQE 5750 / RQE 7490", photo: "/media/equipe/nadia.webp" },
  { name: "Dr. Ulisses Calandrin", role: "Cardiologista", register: "CRM-MS 6601 · RQE 5089 / RQE 5620", photo: "/media/equipe/ulisses.webp" },
  { name: "Dra. Vanessa C. Calandrin", role: "Cardiologista", register: "CRM-MS 6602 · RQE 5224 / RQE 6708", photo: "/media/equipe/vanessa.webp" },
  { name: "Dr. Guilherme Pizzo Pagnani", role: "Cardiologista", register: "CRM 8006/MS", photo: "/media/equipe/guilherme.webp" },
  { name: "Dra. Francielle Garcia Vangan", role: "Infectologista", register: "CRM 8011/MS · RQE 4484", photo: "/media/equipe/francielle.webp" },
  { name: "Dr. Erick Vinícius Milanez Bertin", role: "Cardiologista e Ecocardiografista", register: "CRM 11737 · Cardiologia RQE 6957 · Ecocardiografia RQE 7216", photo: "/media/equipe/erick.webp" },
  { name: "Dr. Gustavo Floriano de Queiroz", role: "Cirurgia do Aparelho Digestivo", register: "CRM 7477 · RQE 4288", photo: "/media/equipe/gustavo.webp" },
  { name: "Dra. Larissa Alves da Silveira", role: "Endocrinologia e Metabologia", register: "CRM 12138 · RQE 7242", photo: "/media/equipe/larissa.webp" },
  { name: "Dr. Luiz Angeloni Neto", role: "Cardiologista", register: "CRM 15637 · RQE 4376", photo: "/media/equipe/luiz.webp" },
  { name: "Josiane Maria Carlos Nunes", role: "Nutricionista", register: "CRN 3 52927", photo: "/media/equipe/josiane.webp" },
];

const pageUrl = "https://vital-clinica-reboot.lovable.app/a-clinica";
const pageImage = "https://vital-clinica-reboot.lovable.app/media/clinica-vitalcor.webp";
const description =
  "A Clínica Vitalcor conta com o trabalho de um competente grupo de profissionais que tem como objetivo a prevenção de doenças cardiovasculares, assim como a detecção precoce e o tratamento adequado das doenças do coração, para proporcionar uma melhor qualidade de vida aos seus pacientes.";

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
            <h2>Mais do que uma clínica, um lugar para cuidar da sua saúde com confiança.</h2>
            <p>
              Sabemos que procurar um cardiologista pode gerar dúvidas e preocupações. Por isso, cada detalhe da
              Clínica Vitalcor foi pensado para oferecer um atendimento acolhedor, seguro e eficiente.
            </p>
            <p>
              Com mais de 13 anos de experiência, reunimos especialistas em cardiologia, exames modernos e uma
              estrutura completa para acompanhar você desde a prevenção até o tratamento, sempre com respeito,
              atenção e compromisso com a sua saúde.
            </p>
          </div>
          <img
            className="clinic-feature-image"
            src="/media/clinica-vitalcor-1.webp"
            alt="Fachada da Clínica Vitalcor"
          />
        </div>
      </section>

      

      <section className="section clinic-legacy">
        <div className="container clinic-legacy-grid">
          <img
            className="clinic-legacy-image"
            src="/media/doutores-vitalcor.webp"
            alt="Dr. Ulisses Calandrin e Dra. Vanessa C. Calandrin, da Clínica Vitalcor"
          />
          <div>
            <p className="eyebrow">Nossa trajetória</p>
            <h2>A mais de 13 anos oferecendo nosso melhor</h2>
            <ul className="clinic-legacy-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M21 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                <div>
                  <h3>Missão</h3>
                  <p>
                    promover o bem estar das pessoas cuidando da saúde cardiovascular, de forma humanizada, onde a
                    vida é valorizada acima de tudo.
                  </p>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                <div>
                  <h3>Nosso compromisso</h3>
                  <p>
                    prestar a assistência com excelência de qualidade em todas as fases do atendimento. Buscando
                    atualização constante quanto aos recursos intelectuais e tecnológicos que possam fazer a diferença
                    no atendimento ao nosso paciente.
                  </p>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21c4.97-4.97 8-8.53 8-12a8 8 0 1 0-16 0c0 3.47 3.03 7.03 8 12z" /><path d="M12 8v5" /><path d="M9.5 10.5 12 13l2.5-2.5" /></svg>
                <div>
                  <h3>Nossos valores</h3>
                  <p>Dedicamos a cuidar da sua saúde com ética, responsabilidade e comprometimento.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    <section className="section clinic-professionals"><div className="container"><div className="center-heading"><p className="eyebrow">Equipe médica</p><h2>Nossos profissionais</h2></div><div className="team-grid">{professionals.map((professional) => (<Card key={professional.name}><CardMedia><img src={professional.photo} alt={`Foto de ${professional.name}`}/></CardMedia><CardHeader><CardTitle>{professional.name}</CardTitle></CardHeader><CardContent><p>{professional.role}</p><p className="team-register">{professional.register}</p></CardContent></Card>))}</div></div></section>
      </SiteLayout>
  );
}