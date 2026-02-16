import { AboutPage } from "@/components";

const PRIMARY_COLOR = "#F3D030";

export default function Page() {
  return (
    <AboutPage 
      companyName="Kjeldsberg Eiendomsforvaltning"
      content="Vi skaper trygghet for eierne og trivsel for leietakerne. Med lang erfaring og bred kompetanse leverer vi skreddersydde løsninger tilpasset den enkelte kundes behov."
      mission="Å være en pålitelig partner som skaper verdi for eiere og leietakere gjennom profesjonell eiendomsforvaltning."
      vision="Å være den ledende totalleverandøren av drift og forvaltning i Midt-Norge."
      values={[
        "Trygghet - Vi tar ansvar og leverer pålitelige løsninger",
        "Kompetanse - Vi har bred erfaring og faglig kunnskap",
        "Bærekraft - Vi fokuserer på miljø og langsiktig verdi",
        "Service - Vi setter kunden i fokus"
      ]}
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      primaryColor={PRIMARY_COLOR}
    />
  );
}
