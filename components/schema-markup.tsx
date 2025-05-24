export default function SchemaMarkup() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: "MarcelCar",
    image: "https://marcelcar.es/images/logo.png",
    "@id": "https://marcelcar.es",
    url: "https://marcelcar.es",
    telephone: "+34600123456",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Siempreviva 742",
      addressLocality: "Springfield",
      postalCode: "28001",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.416947,
      longitude: -3.703102,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: ["https://www.facebook.com/marcelcar", "https://www.instagram.com/marcelcar"],
    priceRange: "$$",
    servesCuisine: "Auto Repair",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
}
