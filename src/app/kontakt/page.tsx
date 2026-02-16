import { ContactPage } from "@/components";

const PRIMARY_COLOR = "#F3D030";

export default function Page() {
  return (
    <ContactPage 
      companyName="Kjeldsberg Eiendomsforvaltning"
      contact={{
        email: "kundeservice@kjeldsberg.no",
        phone: "45 85 90 00",
        address: "Sluppenvegen 19, 7037 Trondheim",
        postalAddress: "Postboks 4284 Torgarden, 7436 Trondheim"
      }}
      openingHours="08:00 - 15:00 mandag til fredag"
      primaryColor={PRIMARY_COLOR}
    />
  );
}
