import { ContactPage, Layout } from "@/components";

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
      <ContactPage 
        companyName="Finneid Sveis"
        contact={{
          phone: "75 62 00 00",
          email: "post@finneidsveis.no",
          address: "Finneid, 8220 Fauske"
        }}
        primaryColor={PRIMARY_COLOR}
      />
    </Layout>
  );
}
