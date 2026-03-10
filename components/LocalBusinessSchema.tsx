export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TelecommunicationsService",
    name: "Network South, Inc.",
    url: "https://network-south.com",
    logo: "https://network-south.com/logo.png",
    description:
      "Raleigh-Durham's foremost telecommunications partner. VoIP, managed IT, network infrastructure, video surveillance, and cybersecurity for businesses since 1994.",
    telephone: "+18009489914",
    email: "info@network-south.com",
    foundingDate: "1994",
    address: {
      "@type": "PostalAddress",
      streetAddress: "457 Park Ave",
      addressLocality: "Youngsville",
      addressRegion: "NC",
      postalCode: "27596",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.0335,
      longitude: -78.4822,
    },
    areaServed: [
      "Raleigh, NC",
      "Durham, NC",
      "Chapel Hill, NC",
      "Youngsville, NC",
      "Wake County, NC",
      "Durham County, NC",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Business Technology Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "VoIP Phone Systems" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cybersecurity" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Network Infrastructure" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Surveillance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Managed IT Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Access Control" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
