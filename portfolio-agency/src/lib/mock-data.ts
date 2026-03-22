export type ProjectCategory = "Branding" | "Web" | "Motion" | "Print";

export type Project = {
  id: number;
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  type: string;
  featured: boolean;
  coverImage: string;
  intro: string;
  challenge: string;
  solution: string;
  outcome: string;
  stats: Array<{ label: string; value: string }>;
  tags: string[];
  gallery: Array<{
    title: string;
    caption: string;
    tone: string;
    height: "short" | "medium" | "tall";
  }>;
};

export type Enquiry = {
  id: number;
  clientName: string;
  company: string;
  budget: string;
  projectType: string;
  summary: string;
  receivedAt: string;
  unread: boolean;
};

export const siteStats = [
  { label: "Projects launched", value: "48" },
  { label: "Avg. growth lift", value: "+212%" },
  { label: "Countries served", value: "14" },
  { label: "Awards this year", value: "09" },
];

export const clients = [
  "AETHER",
  "MONO",
  "KIN",
  "SABLE",
  "INDEX",
  "VANTA",
  "LUMA",
  "ORBIT",
];

export const awards = [
  { title: "Awwwards Honorable Mention", meta: "K2 Digital Media, 2026" },
  { title: "CSSDA Special Kudos", meta: "Signal Haus launch system" },
  { title: "FWA Site of the Day", meta: "Northstar rebrand experience" },
];

export const values = [
  {
    title: "Impact over noise",
    description: "Every frame, word, and click earns its position by moving perception or revenue.",
  },
  {
    title: "Systems with swagger",
    description: "We build identities and websites that scale without losing their edge.",
  },
  {
    title: "Fast, then sharper",
    description: "Momentum matters. We prototype early, then pressure-test until it feels inevitable.",
  },
];

export const team = [
  { name: "Kara Vaughn", role: "Founder / Creative Director" },
  { name: "Miles Chen", role: "Experience Design Lead" },
  { name: "Noor Haddad", role: "Motion Director" },
  { name: "Theo Alvarez", role: "Brand Strategist" },
];

export const cultureShots = [
  { title: "War room", tone: "from-[#C8FF00]/40 via-white/5 to-transparent" },
  { title: "Prototype wall", tone: "from-white/20 via-transparent to-[#C8FF00]/10" },
  { title: "Night shift", tone: "from-[#C8FF00]/15 via-transparent to-white/15" },
];

export const projects: Project[] = [
  {
    id: 1,
    slug: "northstar-systems",
    title: "Northstar Systems",
    client: "Northstar",
    category: "Web",
    year: "2026",
    type: "Brand platform",
    featured: true,
    coverImage: "https://images.example.com/northstar-cover",
    intro: "A raw, cinematic launch platform for a logistics AI brand that needed to feel trusted and dangerous at once.",
    challenge: "Northstar looked like every other B2B SaaS company in the category. The team needed a site that could explain complex automation while still projecting authority.",
    solution: "We built a modular narrative experience with oversized type, brutalist paneling, and motion-led product storytelling that kept the brand sharp under scale.",
    outcome: "The launch repositioned Northstar as the aggressive alternative in the space and gave sales a clearer story across enterprise accounts.",
    stats: [
      { label: "Pipeline lift", value: "+38%" },
      { label: "Demo requests", value: "+64%" },
      { label: "Launch window", value: "5 weeks" },
    ],
    tags: ["Strategy", "UI", "Motion", "Development"],
    gallery: [
      { title: "Command hero", caption: "Full-bleed typography and motion to establish category dominance.", tone: "from-[#C8FF00]/35 via-transparent to-white/10", height: "tall" },
      { title: "Ops dashboard", caption: "System diagrams translated into a sharper visual language.", tone: "from-white/15 via-transparent to-[#C8FF00]/20", height: "medium" },
      { title: "Proof stack", caption: "Case modules built to shorten the buyer confidence gap.", tone: "from-[#C8FF00]/20 via-white/5 to-transparent", height: "short" },
    ],
  },
  {
    id: 2,
    slug: "signal-haus",
    title: "Signal Haus",
    client: "Signal Haus",
    category: "Branding",
    year: "2026",
    type: "Identity system",
    featured: true,
    coverImage: "https://images.example.com/signal-cover",
    intro: "A razor-clean identity for a performance architecture studio moving from consultancy to category leader.",
    challenge: "Signal Haus had strong work but no memorable identity. Their visual language felt provisional and fragmented across touchpoints.",
    solution: "We created a compressed wordmark, directional art system, and launch toolkit designed to work from decks to environmental graphics.",
    outcome: "The brand rollout gave the studio sharper recognition and a system that let their small team ship consistently.",
    stats: [
      { label: "Brand recall", value: "+47%" },
      { label: "Referral growth", value: "+29%" },
      { label: "Assets delivered", value: "112" },
    ],
    tags: ["Naming", "Identity", "Guidelines", "Launch kit"],
    gallery: [
      { title: "Mark system", caption: "Compressed geometry with an aggressive editorial cadence.", tone: "from-white/10 via-transparent to-[#C8FF00]/25", height: "medium" },
      { title: "Brand matter", caption: "Collateral designed to feel physical, heavy, and deliberate.", tone: "from-[#C8FF00]/25 via-transparent to-white/10", height: "tall" },
      { title: "Spatial rollout", caption: "Wayfinding and signage adapted from the core grid.", tone: "from-white/20 via-transparent to-transparent", height: "short" },
    ],
  },
  {
    id: 3,
    slug: "vanta-motion-lab",
    title: "Vanta Motion Lab",
    client: "Vanta",
    category: "Motion",
    year: "2025",
    type: "Launch film suite",
    featured: true,
    coverImage: "https://images.example.com/vanta-cover",
    intro: "A kinetic film package that translated technical product stories into something magnetic and human.",
    challenge: "The product was difficult to explain in static materials. Vanta needed motion assets that worked across launch, paid, and investor storytelling.",
    solution: "We built a motion toolkit that combined brutal typography, live-action overlays, and modular cuts for every campaign surface.",
    outcome: "The motion system gave the internal team reusable assets that looked premium even under rapid iteration.",
    stats: [
      { label: "View-through rate", value: "+52%" },
      { label: "Social saves", value: "+81%" },
      { label: "Cutdowns shipped", value: "24" },
    ],
    tags: ["Direction", "3D", "Editing", "Campaigns"],
    gallery: [
      { title: "Launch opener", caption: "Editorial pacing with harsh transitions and mechanical sound cues.", tone: "from-[#C8FF00]/30 via-transparent to-white/15", height: "tall" },
      { title: "Cutdown series", caption: "A modular system of sequences for paid media deployment.", tone: "from-white/15 via-transparent to-[#C8FF00]/10", height: "short" },
      { title: "Stage visuals", caption: "Motion built for events, social, and the hero web experience.", tone: "from-[#C8FF00]/15 via-transparent to-white/15", height: "medium" },
    ],
  },
  {
    id: 4,
    slug: "mono-press",
    title: "Mono Press",
    client: "Mono",
    category: "Print",
    year: "2025",
    type: "Editorial collateral",
    featured: false,
    coverImage: "https://images.example.com/mono-cover",
    intro: "An oversized print system for a fashion-tech hybrid launch with equal parts utility and attitude.",
    challenge: "Mono needed printed materials that could stand beside a polished digital launch without becoming decorative fluff.",
    solution: "We developed poster systems, folded lookbooks, and press mailers using severe grids, lime accents, and tactile paper choices.",
    outcome: "The print pieces turned the launch into an object people kept, posted, and referenced long after the event.",
    stats: [
      { label: "Press pickups", value: "31" },
      { label: "Mailers sent", value: "250" },
      { label: "Event RSVPs", value: "+44%" },
    ],
    tags: ["Editorial", "Packaging", "Production"],
    gallery: [
      { title: "Poster wall", caption: "Graphic repetition built to overwhelm in the right way.", tone: "from-white/15 via-transparent to-[#C8FF00]/20", height: "medium" },
      { title: "Launch book", caption: "Large-scale typography carrying product and story in equal measure.", tone: "from-[#C8FF00]/25 via-transparent to-white/8", height: "tall" },
      { title: "Mailer kit", caption: "A tactile sequence that made the brand feel expensive before the first click.", tone: "from-white/10 via-transparent to-transparent", height: "short" },
    ],
  },
  {
    id: 5,
    slug: "luma-grid",
    title: "Luma Grid",
    client: "Luma",
    category: "Web",
    year: "2025",
    type: "Commerce experience",
    featured: false,
    coverImage: "https://images.example.com/luma-cover",
    intro: "A commerce site that merged editorial bravado with ruthless conversion discipline.",
    challenge: "Luma wanted a site that felt premium and experimental without hurting clarity or conversion performance.",
    solution: "We paired directional art direction with a hardened component system, fast product discovery, and confident interaction design.",
    outcome: "The new storefront delivered a clearer premium position while raising conversion metrics across launch collections.",
    stats: [
      { label: "Conversion lift", value: "+23%" },
      { label: "AOV", value: "+18%" },
      { label: "Bounce rate", value: "-31%" },
    ],
    tags: ["Commerce", "UX", "Build"],
    gallery: [
      { title: "Collection grid", caption: "Broken-grid browsing built to feel alive without losing structure.", tone: "from-[#C8FF00]/20 via-transparent to-white/10", height: "short" },
      { title: "Product stories", caption: "Editorial modules layered through the path to purchase.", tone: "from-white/15 via-transparent to-[#C8FF00]/20", height: "medium" },
      { title: "Checkout tone", caption: "High-trust utility wrapped in the same visual confidence.", tone: "from-[#C8FF00]/28 via-transparent to-transparent", height: "tall" },
    ],
  },
  {
    id: 6,
    slug: "orbit-paperworks",
    title: "Orbit Paperworks",
    client: "Orbit",
    category: "Print",
    year: "2024",
    type: "Campaign collateral",
    featured: false,
    coverImage: "https://images.example.com/orbit-cover",
    intro: "A bold campaign pack for a fintech brand that wanted print to feel like a statement, not a leftover.",
    challenge: "Orbit’s launch collateral was inconsistent and overly safe, especially when translated for events and partnerships.",
    solution: "We built a print-first campaign language with hard rules, loud type, and scalable templates for the internal team.",
    outcome: "The campaign materials created stronger consistency across activations and gave the brand a distinctive physical presence.",
    stats: [
      { label: "Partner kits", value: "90" },
      { label: "Market launches", value: "6" },
      { label: "Template adoption", value: "100%" },
    ],
    tags: ["Campaigns", "Templates", "Production"],
    gallery: [
      { title: "Campaign spread", caption: "Angular rhythm and acid-lime punctuation across print layouts.", tone: "from-white/10 via-transparent to-[#C8FF00]/18", height: "medium" },
      { title: "Event kit", caption: "Deployable assets for booths, handouts, and partner drops.", tone: "from-[#C8FF00]/20 via-transparent to-white/10", height: "short" },
      { title: "Template stack", caption: "A system the internal team could extend without diluting the edge.", tone: "from-white/18 via-transparent to-transparent", height: "tall" },
    ],
  },
];

export const enquiries: Enquiry[] = [
  {
    id: 1,
    clientName: "Jules Mercer",
    company: "Aether Bio",
    budget: "$40k-$60k",
    projectType: "Rebrand + Site",
    summary: "Pre-seed healthtech team looking for a premium launch identity and Webflow-to-Next migration.",
    receivedAt: "2h ago",
    unread: true,
  },
  {
    id: 2,
    clientName: "Hana Singh",
    company: "Lattice Works",
    budget: "$20k-$40k",
    projectType: "Motion Campaign",
    summary: "Need an aggressive product teaser package for a new hardware release in late Q2.",
    receivedAt: "Today",
    unread: true,
  },
  {
    id: 3,
    clientName: "Elliot Cruz",
    company: "Kineform",
    budget: "$60k+",
    projectType: "Brand System",
    summary: "Enterprise AI team replacing a fragmented visual identity before Series B press cycle.",
    receivedAt: "Yesterday",
    unread: false,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
