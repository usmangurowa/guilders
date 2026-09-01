export const site = {
  name: "Guilders Limited",
  shortName: "Guilders",
  url: "https://guilders.ltd",
  email: "hello@guilders.ltd",
  phone: "+234 813 922 3164",
  rcNumber: "RC 9819868",
  address: "15 Ntonko Close, New Garage, Makurdi, Benue State, Nigeria",
  description:
    "Guilders Limited is a diversified Nigerian company building and operating businesses across technology, logistics, commerce, assets and ventures.",
  incorporated: "1 September 2026",
};

export type Division = {
  slug: string;
  line: string;
  clause: string;
  name: string;
  tagline: string;
  summary: string;
  details: string[];
  offerings: { title: string; text: string }[];
};

export const divisions: Division[] = [
  {
    slug: "technology",
    line: "01",
    clause: "3(a)",
    name: "Technology & Digital Solutions",
    tagline: "Software, infrastructure and digital services built for scale.",
    summary:
      "We design, build and operate digital products and ICT infrastructure — from custom software and consultancy to internet access services and connected business centres.",
    details: [
      "Custom software development and computer programming for businesses of every size.",
      "ICT consultancy — strategy, systems architecture and digital transformation.",
      "Internet access services, cyber cafés and modern computer business centres.",
      "End-to-end digital solutions: web platforms, mobile applications and automation.",
    ],
    offerings: [
      {
        title: "Software engineering",
        text: "Product design, web and mobile development, APIs and integrations delivered by a dedicated engineering practice.",
      },
      {
        title: "ICT consultancy",
        text: "Technology strategy, infrastructure planning and digital transformation for organisations modernising how they work.",
      },
      {
        title: "Connectivity & access",
        text: "Internet access services and connected business centres that bring reliable digital infrastructure closer to the people who need it.",
      },
    ],
  },
  {
    slug: "logistics",
    line: "02",
    clause: "3(b)",
    name: "Transport & Logistics",
    tagline: "Fleet, haulage and last-mile delivery that keeps commerce moving.",
    summary:
      "We own, operate and lease a fleet of commercial vehicles and motorcycles — powering haulage, dispatch and delivery services across our markets.",
    details: [
      "Ownership and operation of a growing fleet of commercial vehicles and motorcycles.",
      "Vehicle and motorcycle leasing for businesses and operators.",
      "Haulage and freight movement for goods of every category.",
      "Dispatch and last-mile delivery services built on reliability.",
    ],
    offerings: [
      {
        title: "Fleet & leasing",
        text: "Well-maintained commercial vehicles and motorcycles, available for lease with flexible terms that work for operators.",
      },
      {
        title: "Haulage",
        text: "Dependable freight and goods movement, from single consignments to recurring contract haulage.",
      },
      {
        title: "Dispatch & delivery",
        text: "Fast, trackable dispatch and last-mile delivery for merchants, platforms and everyday senders.",
      },
    ],
  },
  {
    slug: "commerce",
    line: "03",
    clause: "3(c)",
    name: "Trade & Commerce",
    tagline: "General merchandise, supplies and contract execution done properly.",
    summary:
      "As general merchants, traders, contractors and suppliers, we engage in wholesale and retail trade and execute general contracts with integrity.",
    details: [
      "General merchandise and commodity trading, wholesale and retail.",
      "Procurement and supply of goods and materials at contract scale.",
      "Execution of general contracts for private and public organisations.",
      "Sourcing partnerships that connect producers to markets.",
    ],
    offerings: [
      {
        title: "Trading",
        text: "Wholesale and retail trade across general merchandise, run on disciplined sourcing and honest pricing.",
      },
      {
        title: "Supplies & procurement",
        text: "Reliable procurement and supply of goods and materials for organisations that need certainty.",
      },
      {
        title: "Contracts",
        text: "General contract execution delivered on specification, on budget and on time.",
      },
    ],
  },
  {
    slug: "assets",
    line: "04",
    clause: "3(d)",
    name: "Assets & Leasing",
    tagline: "Productive assets, professionally held and put to work.",
    summary:
      "We acquire, hold and manage movable and immovable property — vehicles, equipment and real estate — for our own operations or on lease to others.",
    details: [
      "Acquisition and management of vehicles, equipment and real estate.",
      "Asset leasing that turns idle capacity into productive use.",
      "Property holding and management across our operating markets.",
      "Long-term asset stewardship with disciplined maintenance.",
    ],
    offerings: [
      {
        title: "Equipment & vehicle leasing",
        text: "Quality equipment and vehicles on lease, maintained to standard and backed by responsive support.",
      },
      {
        title: "Real estate",
        text: "Acquisition, holding and management of property assets for operational use and long-term value.",
      },
      {
        title: "Asset management",
        text: "Professional stewardship of movable and immovable assets across their full life cycle.",
      },
    ],
  },
  {
    slug: "ventures",
    line: "05",
    clause: "3(e)",
    name: "Ventures & Investments",
    tagline: "Backing and building the businesses of tomorrow.",
    summary:
      "We invest in, promote, incubate and acquire interests in companies and ventures — and establish subsidiaries and business divisions under the Guilders umbrella.",
    details: [
      "Equity investment in promising companies and ventures.",
      "Incubation of new businesses from idea to operation.",
      "Acquisition of shares, stock and interests in going concerns.",
      "Establishment and operation of subsidiaries and business divisions.",
    ],
    offerings: [
      {
        title: "Venture building",
        text: "We incubate new businesses in-house — providing capital, operations and technology until they stand on their own.",
      },
      {
        title: "Strategic investment",
        text: "Patient equity investment in founders and companies solving real problems in our markets.",
      },
      {
        title: "Subsidiaries",
        text: "Operating divisions and subsidiaries structured, governed and grown under the Guilders umbrella.",
      },
    ],
  },
];
