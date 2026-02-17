import { AboutPage, Layout } from "@/components";

const PRIMARY_COLOR = "#D71921";

const NAV_LINKS = [
  { label: "Tjenester", href: "/tjenester" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Page() {
  return (
    <Layout
      headerProps={{
        companyName: "Finneid Sveis",
        navLinks: NAV_LINKS,
        ctaText: "Kontakt oss",
        ctaHref: "/kontakt",
        primaryColor: PRIMARY_COLOR,
      }}
      footerProps={{
        companyName: "Finneid Sveiseverksted AS",
        description: "Så det holder",
        contact: {
          phone: "75 62 00 00",
          email: "post@finneidsveis.no",
          address: "Finneid, 8220 Fauske"
        },
        primaryColor: PRIMARY_COLOR,
        columns: [
          { title: "Tjenester", links: [
            { label: "Tjenester", href: "/tjenester" },
            { label: "Om oss", href: "/om-oss" },
            { label: "Kontakt", href: "/kontakt" }
          ]}
        ]
      }}
    >
      <AboutPage 
        title="Om Finneid Sveis"
        subtitle="Ett av Nord-Norges eldste sveiseverksted"
        content={`Finneid Sveiseverksted AS ligger på Finneid i Fauske kommune og er et av nordnorges største og eldste firmaer på sveising, konstruksjoner og bygg.

Vi er ledende på store konstruksjoner som broer, industribygg, haller samt bærende konstruksjoner. I våre lokaler på Finneid har vi kapasitet til å bygge de største konstruksjonene innendørs samt at vi og kan overflatebehandle i egen lakk/malehall.

Vår forretningsfilosofi er til enhver tid å levere produkter:
• AV HØY KVALITET
• TIL FASTSATT TID
• TIL RIKTIG PRIS`}
        values={["Kvalitet","Pålitelighet","Kompetanse","Lokal"]}
        primaryColor={PRIMARY_COLOR}
      />
    </Layout>
  );
}
