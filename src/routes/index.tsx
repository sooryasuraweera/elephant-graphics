import { createFileRoute } from "@tanstack/react-router";
import { PenTool, Monitor, Share2, TrendingUp, Video, Printer } from "lucide-react";
import portfolioIronGold from "@/assets/portfolio-iron-gold.jpg";
import portfolioSynthetix from "@/assets/portfolio-synthetix.jpg";
import portfolioPoster from "@/assets/portfolio-poster.jpg";
import portfolioVideo from "@/assets/portfolio-video.jpg";
import owner from "@/assets/namitha.jpg";
import graphicdesigner from "@/assets/Thineth.jpg";
import leaddesigner from "@/assets/thevinu.jpg";
import writer from "@/assets/anjana.jpeg";
import senarathna from "@/assets/logo2.jpeg";
import post1 from "@/assets/post1.png";
import post2 from "@/assets/post2.png";
import post3 from "@/assets/post3.jpeg";
import post4 from "@/assets/post4.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elephant Graphics — Digital Services Studio" },
      { name: "description", content: "Elephant Graphics builds brands with weight. Graphic design, web development, social media, SEO, and video creation for brands that refuse to be forgotten." },
      { property: "og:title", content: "Elephant Graphics — Digital Services Studio" },
      { property: "og:description", content: "Brand identity, web, social, SEO, and video — built to be unforgettable." },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-background">
      <Nav />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
      <a href="#top" className="font-display text-2xl tracking-tighter uppercase">
        Elephant <span className="text-primary">Graphics</span>
      </a>
      <div className="hidden md:flex gap-8 font-mono text-[10px] uppercase tracking-widest">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
        ))}
      </div>
      <a href="#contact" className="px-4 py-2 bg-foreground text-background font-mono text-[10px] uppercase tracking-widest hover:bg-primary hover:text-foreground transition-colors">
        Inquiry
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex flex-col justify-end px-6 pb-20 overflow-hidden">
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[22vw] leading-none uppercase pointer-events-none select-none" style={{ color: "rgba(18,18,18,0.04)" }}>
        Unforgettable
      </div>
      <div className="relative z-10 max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4 text-primary">Est. 2024 // Digital Studio</p>
        <h1 className="text-6xl md:text-9xl font-display uppercase leading-[0.85] tracking-tighter text-balance animate-stomp">
          We build brands with <span className="text-primary">weight</span> and memory.
        </h1>
        <div className="mt-12 flex flex-wrap gap-4 animate-stomp" style={{ animationDelay: "200ms" }}>
          <div className="p-1 border border-foreground">
            <a href="#contact" className="inline-block px-8 py-4 bg-foreground text-background font-display uppercase tracking-widest hover:bg-primary hover:text-foreground transition-colors">
              Start a project
            </a>
          </div>
          <a href="#work" className="inline-block px-8 py-4 font-mono text-[10px] uppercase tracking-widest self-center hover:text-primary transition-colors">
            See selected work →
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  const team = [
    { name: "Namitha Jayathilake", role: "Owner/CEO", img: owner },
    { name: "Thevinu Gunawardena", role: "Lead Designer", img: leaddesigner },
    { name: "Anjana Fonseka", role: "writer and Technical Writer", img: writer },
    { name: "Thineth frenado", role: "graphic designer", img: graphicdesigner },
  ];
  return (
    <section id="about" className="py-32 px-6 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-6">01 / About</p>
          <h3 className="font-display text-5xl uppercase leading-none mb-8">Who<br />We Are</h3>
          <p className="text-sm text-foreground/60 leading-relaxed text-pretty mb-6">
            Elephant Graphics is a small, deliberate studio of designers, developers, and strategists building visual systems that last longer than the trend cycle.
          </p>
          <p className="text-sm text-foreground/60 leading-relaxed text-pretty">
            Founded in 2024, we've shipped identity, web, and motion work for ambitious brands across the region — and we're proud to be the team they call when it has to matter.
          </p>
        </div>
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border">
          {team.map((m, i) => (
            <div key={m.name} className="relative overflow-hidden aspect-square bg-background">
              <img src={m.img} alt={m.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="relative z-10 h-full p-6 flex flex-col justify-end gap-4 text-white">
                <span className="font-mono text-[10px] uppercase tracking-widest">0{i + 1}/</span>
                <div>
                  <h4 className="font-display text-xl uppercase leading-tight">{m.name}</h4>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/80 mt-2">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border pt-16">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">Mission</p>
          <p className="font-display text-3xl uppercase leading-tight">Make work that refuses to be forgotten.</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">Vision</p>
          <p className="font-display text-3xl uppercase leading-tight">A studio brands trust with their weight.</p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      n: "01",
      title: "Graphic Design",
      desc: "Logo systems, branding guidelines, and print direction with rigorous craft.",
      icon: PenTool,
      tools: [
        { name: "Figma", logo: "https://cdn.simpleicons.org/figma/000000" },
        { name: "Illustrator", logo: "https://img.icons8.com/?size=100&id=6nVfKqkrGRxh&format=png&color=000000" },
        { name: "Photoshop", logo: "https://img.icons8.com/?size=100&id=3570&format=png&color=000000" },
      ],
    },
    {
      n: "02",
      title: "Web Development",
      desc: "High-performance websites built for clarity, speed, and conversion.",
      icon: Monitor,
      tools: [
        { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Vite", logo: "https://cdn.simpleicons.org/vite/646CFF" },
        { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      ],
    },
    {
      n: "03",
      title: "Social Media",
      desc: "Content strategy and management for premium digital presence.",
      icon: Share2,
      tools: [
        { name: "Instagram", logo: "https://cdn.simpleicons.org/instagram/E4405F" },
        { name: "Facebook", logo: "https://cdn.simpleicons.org/facebook/1877F2" },
        { name: "Canva", logo: "https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000" },
      ],
    },
    {
      n: "04",
      title: "SEO",
      desc: "Technical and editorial SEO that compounds traffic month over month.",
      icon: TrendingUp,
      tools: [
        { name: "Google", logo: "https://cdn.simpleicons.org/google/4285F4" },
        { name: "Analytics", logo: "https://img.icons8.com/?size=100&id=6nVfKqkrGRxh&format=png&color=000000" },
        { name: "Ahrefs", logo: "https://img.icons8.com/?size=100&id=SwVpnxAYgbxv&format=png&color=000000" },
      ],
    },
    {
      n: "05",
      title: "Video Creation",
      desc: "Cinematic shorts, ads, and motion that demand attention.",
      icon: Video,
      tools: [
        { name: "Premiere", logo: "https://img.icons8.com/?size=100&id=e57Y1CnsOasB&format=png&color=000000" },
        { name: "After Effects", logo: "https://img.icons8.com/?size=100&id=108781&format=png&color=000000" },
        { name: "Final Cut", logo: "https://cdn.simpleicons.org/apple/000000" },
      ],
    },
    {
      n: "06",
      title: "Print Design",
      desc: "Editorial, packaging, and tangible artifacts with weight.",
      icon: Printer,
      tools: [
        { name: "InDesign", logo: "https://img.icons8.com/?size=100&id=13675&format=png&color=000000" },
        { name: "Illustrator", logo: "https://img.icons8.com/?size=100&id=6nVfKqkrGRxh&format=png&color=000000" },
        { name: "Photoshop", logo: "https://img.icons8.com/?size=100&id=10416&format=png&color=000000" },
      ],
    },
  ];
  return (
    <section id="services" className="py-32 px-6 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-6">02 / Services</p>
          <h3 className="font-display text-5xl uppercase sticky top-32 leading-none">Our Core<br />Capabilities</h3>
        </div>
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="bg-background p-8 aspect-square flex flex-col justify-between hover:bg-primary/5 transition-colors group">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs">{s.n}/</span>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-display uppercase group-hover:translate-x-2 transition-transform">{s.title}</h4>
                  <p className="text-sm text-foreground/60 text-pretty">{s.desc}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-6">
                  {s.tools.map((tool) => (
                    <div key={tool.name} className="flex items-center gap-3 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-2">
                      <img src={tool.logo} alt={`${tool.name} logo`} className="h-5 w-5 rounded-full object-cover" />
                      <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/80">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    { n: "A", title: "Creative Designs", desc: "Original work, never templated." },
    { n: "B", title: "Affordable Pricing", desc: "Transparent tiers, no surprise invoices." },
    { n: "C", title: "Fast Delivery", desc: "Disciplined sprints. Most projects ship in 2–4 weeks." },
    { n: "D", title: "Customer Satisfaction", desc: "9 of 10 clients return for the next project." },
    { n: "E", title: "Professional Service", desc: "One dedicated lead. Direct lines. No middlemen." },
  ];
  return (
    <section className="py-32 px-6 border-t border-border bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-6">03 / Why Us</p>
            <h3 className="font-display text-5xl md:text-7xl uppercase leading-none">Five reasons<br />it sticks.</h3>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-50 max-w-xs">A short list, because that's all it takes when the work speaks.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
          {reasons.map((r) => (
            <div key={r.n} className="bg-foreground p-8 flex flex-col justify-between min-h-[280px] hover:bg-primary/10 transition-colors">
              <span className="font-display text-6xl text-primary">{r.n}</span>
              <div className="space-y-2">
                <h4 className="font-display text-2xl uppercase">{r.title}</h4>
                <p className="text-xs opacity-60">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    { img: senarathna, title: "Senarathna transport", tag: "Visual Identity // 2024", offset: false },
    { img: post1, title: "unikey global", tag: "Web Engine // 2023", offset: true },
    { img: post2, title: "unikey global", tag: "Editorial Poster // 2024", offset: false },
    { img: post3, title: "Tourism Campaign", tag: "Film & Motion // 2023", offset: true },
    { img: post4, title: "WYATTS PLACE", tag: "Design // 2024", offset: false },
  ];
  return (
    <section id="work" className="px-6 py-32 bg-foreground text-background border-t border-white/5">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-6">04 / Portfolio</p>
          <h3 className="font-display text-5xl md:text-7xl uppercase leading-none">Selected<br />Artifacts</h3>
        </div>
        <span className="font-mono text-[10px] uppercase opacity-50 mb-2 hidden sm:block">[ Scroll to explore ]</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className={`space-y-4 group ${p.offset ? "md:mt-20" : ""}`}>
            <div className="w-full aspect-[4/5] overflow-hidden border border-white/5">
              <img
                src={p.img}
                alt={p.title}
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="flex justify-between items-start">
              <h4 className="font-display text-2xl uppercase">{p.title}</h4>
              <p className="text-xs font-mono opacity-60 uppercase">{p.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { q: "We needed a complete brand refresh for Senarathna Transport, and the design team absolutely delivered. They understood exactly what we needed to stand out, both online and on the road with our logo branding. The updated look is professional, bold, and perfectly captures what our business is about. Fantastic service and seamless communication from start to finish.", n: "G.Senarathne", r: "Director, Senarathna Transport" },
    { q: "The team at Elephant Graphics completely transformed our online presence. They took our vague ideas and turned them into a sleek, modern website that our customers absolutely love. The communication was brilliant from day one. Highly recommend their design expertise to any business looking to level up.", n: "Chloe Harrison", r: "CMO, Synthetix Lab" },
    { q: "Absolutely stellar service. Their attention to detail and understanding of user experience really set them apart. Our conversion rates have skyrocketed since we launched the new interface for our Product. Fantastic work, and a great crew to collaborate with.", n: "Liam Davies", r: "Director, QLD" },
  ];
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-6">05 / Testimonials</p>
          <h3 className="font-display text-5xl md:text-7xl uppercase leading-none max-w-3xl">What the<br />clients say.</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {quotes.map((t) => (
            <figure key={t.n} className="bg-background p-10 flex flex-col justify-between min-h-[360px]">
              <span className="font-display text-6xl text-primary leading-none">"</span>
              <blockquote className="text-lg leading-snug text-pretty">{t.q}</blockquote>
              <figcaption className="mt-8">
                <p className="font-display text-xl uppercase">{t.n}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">{t.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Basic Package",
      price: "$149",
      desc: "Perfect for startups and personal brands.",
      features: [
        "Basic Logo Design (2 Concepts)",
        "Business Card Design",
        "3 Revisions",
        "High-Resolution PNG & JPG Files",
      ],
      featured: false,
    },
    {
      name: "Standard Package",
      price: "$349",
      desc: "Ideal for small businesses looking to establish a professional brand.",
      features: [
        "Standard Logo Design (3 Concepts)",
        "Business Card Design",
        "Brand Colours & Fonts Guide",
        "Facebook Cover Design",
        "5 Social Media Posts",
        "5 Revisions",
        "Source Files (AI, PDF, PNG, JPG)",
      ],
      featured: true,
    },
    {
      name: "Premium Package",
      price: "$699",
      desc: "Full branding kit and assets for established brands.",
      features: [
        "Premium Logo Design (4 Concepts)",
        "Complete Branding Kit",
        "Business Card Design",
        "Brand Style Guide",
        "Facebook Cover Design",
        "10 Social Media Posts",
        "Flyer Design",
        "Unlimited Revisions",
        "All Source Files",
      ],
      featured: false,
    },
  ];
  return (
    <section id="pricing" className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-6">06 / Packages</p>
          <h3 className="font-display text-5xl md:text-7xl uppercase leading-none">The Packages</h3>
          <p className="font-mono text-xs uppercase text-foreground/60 mt-4">Choose your weight</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-foreground">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`p-12 flex flex-col h-full relative overflow-hidden ${
                i < 2 ? "border-b md:border-b-0 md:border-r border-foreground" : ""
              } ${t.featured ? "bg-foreground text-background" : ""}`}
            >
              {t.featured && (
                <div className="absolute top-4 right-4 px-2 py-1 bg-primary text-foreground font-mono text-[8px] uppercase tracking-tighter">Most Vital</div>
              )}
              <h4 className="text-4xl font-display uppercase mb-4">{t.name}</h4>
              <div className={`text-sm mb-12 flex-grow ${t.featured ? "opacity-60" : "text-foreground/60"}`}>
                <p className="mb-4">{t.desc}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="text-sm">{f}</li>
                  ))}
                </ul>
              </div>
              <div className="text-4xl font-display mb-8">{t.price}</div>
              <a
                href="#contact"
                className={`w-full py-4 text-center font-mono text-[10px] uppercase tracking-widest transition-colors ${
                  t.featured
                    ? "bg-primary text-foreground border border-primary hover:bg-background"
                    : "border border-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                Select Tier
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "How does your process work?", a: "Discovery call, written proposal, then a structured sprint: research, concepts, refinement, delivery. You meet with one dedicated lead end to end." },
    { q: "How fast can you deliver?", a: "Most projects ship in 2–4 weeks. Larger identity or web builds run 6–8 weeks. We commit to a date in writing before kickoff." },
    { q: "What payment methods do you accept?", a: "Bank transfer, card, and most local methods. 50% to start, 50% on delivery. Retainers are billed monthly." },
    { q: "Do you offer revisions?", a: "Two full rounds of revisions are included in every package. Additional rounds are billed at our hourly rate." },
    { q: "Can you work with my existing brand?", a: "Yes. We regularly extend, refresh, or rebuild on top of existing identities — whatever's right for the project." },
  ];
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-6">07 / FAQ</p>
          <h3 className="font-display text-5xl md:text-6xl uppercase leading-none">Common<br />Questions</h3>
        </div>
        <div className="md:col-span-8 border-t border-foreground">
          {items.map((it) => (
            <details key={it.q} className="group border-b border-foreground py-6">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h4 className="font-display text-xl md:text-2xl uppercase pr-8">{it.q}</h4>
                <span className="font-display text-2xl text-primary group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-sm text-foreground/60 leading-relaxed text-pretty max-w-2xl">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-primary py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-widest text-foreground mb-6">08 / Contact</p>
        <h3 className="font-display text-6xl md:text-8xl uppercase leading-none tracking-tighter mb-12 text-foreground">
          Ready to leave <br />a mark?
        </h3>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://wa.me/+61424584111"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:scale-105 transition-transform"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/elephantgraphics4/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-background text-foreground font-mono text-xs uppercase tracking-widest border border-foreground/10 hover:scale-105 transition-transform"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-border bg-background">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div>
          <div className="font-display text-4xl uppercase mb-4">Elephant</div>
          <p className="text-xs text-foreground/60 max-w-[220px] font-mono leading-relaxed">
            Digital services for those who refuse to be forgotten.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 font-mono text-[10px] uppercase tracking-widest">
          <div className="space-y-4">
            <p className="text-primary">Services</p>
            <a href="#services" className="block opacity-60 hover:opacity-100">Identity</a>
            <a href="#services" className="block opacity-60 hover:opacity-100">Web</a>
            <a href="#services" className="block opacity-60 hover:opacity-100">Video</a>
          </div>
          <div className="space-y-4">
            <p className="text-primary">Studio</p>
            <a href="#work" className="block opacity-60 hover:opacity-100">Work</a>
            <a href="#about" className="block opacity-60 hover:opacity-100">About</a>
            <a href="#pricing" className="block opacity-60 hover:opacity-100">Pricing</a>
          </div>
          <div className="space-y-4">
            <p className="text-primary">Connect</p>
            <a href="https://instagram.com" className="block opacity-60 hover:opacity-100">Instagram</a>
            <a href="https://wa.me/+61424584111" className="block opacity-60 hover:opacity-100">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-2 font-mono text-[10px] uppercase tracking-tighter opacity-50">
        <span>© {new Date().getFullYear()} Elephant Graphics</span>
        <span>Est. 2024 / Global Service</span>
      </div>
    </footer>
  );
}
