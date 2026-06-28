import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/startup-branding-guide")({
  head: () => ({
    meta: [
      { title: "Startup Branding Guide — Elephant Graphics" },
      { name: "description", content: "A practical guide to building a brand identity for startups. Strategy, visual design, and positioning that attracts investors and customers from day one." },
      { property: "og:title", content: "Startup Branding Guide — Elephant Graphics" },
      { property: "og:description", content: "How to build a brand identity that fuels growth, attracts investors, and wins customers from day one." },
      { property: "og:type", content: "article" },
    ],
    links: [
      { rel: "canonical", href: "/blog/startup-branding-guide" },
    ],
  }),
  component: StartupBrandingGuide,
});

function StartupBrandingGuide() {
  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-background min-h-screen">
      <Nav />
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-32">
        <header className="mb-20">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-6">Guide / Brand Strategy</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter text-balance mb-8">
            The Startup Branding Playbook
          </h1>
          <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl">
            Most startups fail not because the product is weak, but because the brand is invisible.
            This guide shows you how to build a brand identity that becomes the foundation for growth —
            attracting investors, recruiting talent, and winning customers before your product is perfect.
          </p>
          <div className="mt-8 flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            <span>Elephant Graphics</span>
            <span className="w-1 h-1 rounded-full bg-foreground/20" />
            <span>12 min read</span>
          </div>
        </header>

        <section className="mb-20">
          <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-6">
            Why Startup Branding Is Not a Logo
          </h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              Founders often treat branding as a cosmetic exercise — something you do after the product works.
              The truth is that branding is the strategic architecture of how your company is perceived.
              It shapes investor pitch decks, hiring conversations, pricing power, and customer trust.
            </p>
            <p>
              A strong startup brand does three things simultaneously:
              it <strong>signals credibility</strong> to people who have never heard of you,
              it <strong>creates emotional preference</strong> in a crowded market,
              and it <strong>reduces friction</strong> in every commercial conversation you have.
            </p>
            <p>
              When Stripe launched, its brand was not just a wordmark.
              It was a promise of developer elegance and financial infrastructure made simple.
              That brand let them charge premium rates and attract the best engineers before they had feature parity with competitors.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-6">
            The Foundation: Positioning Before Visuals
          </h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              Before any designer opens Figma, you need a positioning statement that is sharp enough to cut.
              Positioning answers one question: <em>Why should a specific person choose you over every alternative?</em>
            </p>
            <p>
              The most effective startup positioning follows a simple formula:
            </p>
            <div className="border border-border p-6 my-6 bg-secondary/30">
              <p className="font-mono text-sm leading-relaxed">
                For [target customer] who [specific need or pain point],<br />
                [your company] is the [category] that [key benefit or unique value].<br />
                Unlike [primary competitor], we [primary differentiator].
              </p>
            </div>
            <p>
              This is not marketing fluff. It is a decision filter.
              Every visual choice, every color, every word on your website should reinforce this position.
              If it does not, it is decoration — and decoration does not convert.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-6">
            Building the Visual Identity System
          </h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              Once positioning is locked, the visual identity becomes a translation layer —
              turning strategy into signals that the human brain processes in milliseconds.
              A startup visual identity has five core components:
            </p>
            <ul className="space-y-3 ml-4 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Logo and wordmark.</strong>{" "}
                It must work at 16px in a browser tab and 10 feet on a conference banner.
                Simplicity wins because memory wins.
              </li>
              <li>
                <strong className="text-foreground">Color system.</strong>{" "}
                Two primary colors, one accent, and a neutral scale.
                Every color must mean something — not just look good.
              </li>
              <li>
                <strong className="text-foreground">Typography.</strong>{" "}
                One display typeface for headlines, one body typeface for reading.
                The combination should feel inevitable, not trendy.
              </li>
              <li>
                <strong className="text-foreground">Imagery rules.</strong>{" "}
                Photography style, illustration approach, or 3D direction.
                Consistency across every touchpoint builds recognition.
              </li>
              <li>
                <strong className="text-foreground">Voice and tone.</strong>{" "}
                How you speak is as visual as how you look.
                Confident, technical, playful, or rebellious — choose one and commit.
              </li>
            </ul>
            <p>
              The best startup identities are systems, not artifacts.
              They come with rules that let any designer, marketer, or founder create on-brand work without asking permission.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-6">
            Brand as a Foundation for Growth
          </h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              Startups that treat branding as a growth lever outperform those that treat it as a cost center.
              Here is what happens when branding is built correctly from day one:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border my-8">
              <div className="bg-background p-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary block mb-4">Fundraising</span>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  A polished brand signals operational maturity.
                  Investors pattern-match, and strong branding is a shortcut to "this team knows what they are doing."
                </p>
              </div>
              <div className="bg-background p-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary block mb-4">Talent</span>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Top candidates join companies they are proud to associate with.
                  Brand is the first recruiter they meet.
                </p>
              </div>
              <div className="bg-background p-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary block mb-4">Pricing</span>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Perceived value is real value.
                  A premium brand lets you charge premium prices without premium features.
                </p>
              </div>
              <div className="bg-background p-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary block mb-4">Retention</span>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Customers stay with brands they identify with.
                  Identity-based loyalty outlasts feature-based switching.
                </p>
              </div>
            </div>
            <p>
              The companies that scale fastest — Notion, Figma, Linear — all invested in brand early.
              Not because they had budget to spare, but because they understood that trust is the scarcest resource in a startup's first 24 months.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-6">
            Common Mistakes to Avoid
          </h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              After working with dozens of early-stage companies, we see the same errors repeat.
              Avoiding them will save you months and thousands of dollars:
            </p>
            <ul className="space-y-3 ml-4 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">Designing for yourself, not your customer.</strong>{" "}
                Your personal taste is irrelevant if your customer is a 45-year-old procurement officer.
              </li>
              <li>
                <strong className="text-foreground">Copying the market leader.</strong>{" "}
                If you look like the incumbent, you signal that you are a worse version of them.
              </li>
              <li>
                <strong className="text-foreground">Over-designing the MVP.</strong>{" "}
                Perfect is the enemy of shipped.
                Build a 90% identity, launch, and refine with real feedback.
              </li>
              <li>
                <strong className="text-foreground">Ignoring internal branding.</strong>{" "}
                Your team lives the brand before your customers do.
                Make sure they believe in it.
              </li>
              <li>
                <strong className="text-foreground">Inconsistency across channels.</strong>{" "}
                A different logo on LinkedIn and your website kills trust in seconds.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-6">
            When to Bring in a Branding Agency
          </h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              Some founders build brands internally and succeed.
              Most do not, because they are stretched across product, sales, fundraising, and hiring.
              A branding agency for startups exists to compress six months of trial and error into a six-week sprint.
            </p>
            <p>
              You should consider an agency when:
            </p>
            <ul className="space-y-3 ml-4 list-disc marker:text-primary">
              <li>You are preparing for a funding round and need to look the part.</li>
              <li>You are launching a new product category and need to define the visual language.</li>
              <li>Your current brand is holding back pricing or partnership conversations.</li>
              <li>You have product-market fit and need to scale perception to match traction.</li>
            </ul>
            <p>
              The right agency will challenge your assumptions, not just execute your brief.
              They will push you toward sharper positioning, braver creative, and a system that grows with you.
            </p>
          </div>
        </section>

        <section className="mb-20 border-t border-border pt-16">
          <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-6">
            What Good Startup Branding Costs
          </h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              Budgets vary, but here is a realistic framework for what to expect when working with a professional studio:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border my-8">
              <div className="bg-background p-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary block mb-2">Essential</span>
                <p className="font-display text-2xl uppercase mb-2">$2,500 – $5,000</p>
                <p className="text-xs text-foreground/60 leading-relaxed">Logo, basic guidelines, color and type system. Best for pre-seed startups testing the market.</p>
              </div>
              <div className="bg-background p-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary block mb-2">Growth</span>
                <p className="font-display text-2xl uppercase mb-2">$5,000 – $15,000</p>
                <p className="text-xs text-foreground/60 leading-relaxed">Full identity system, website design, social templates. Best for seed-stage companies with traction.</p>
              </div>
              <div className="bg-background p-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary block mb-2">Scale</span>
                <p className="font-display text-2xl uppercase mb-2">$15,000+</p>
                <p className="text-xs text-foreground/60 leading-relaxed">Strategic repositioning, full brand architecture, motion, web build. Best for Series A and beyond.</p>
              </div>
            </div>
            <p>
              The cost of bad branding is not just the money you spend redoing it.
              It is the deals you lose, the talent that never applies, and the investors who pass because you do not look ready.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-6">
            Next Steps: Start Building Today
          </h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              You do not need a fifty-page brand strategy document to begin.
              You need three things: a clear positioning sentence, a single visual direction, and the discipline to apply both consistently.
            </p>
            <p>
              Start by interviewing five of your ideal customers.
              Ask them what they value, what they distrust, and what would make them switch.
              Use their language in your copy and their aspirations in your visuals.
            </p>
            <p>
              Then, make one brave choice.
              One color, one typeface, or one headline that your competitors would never dare.
              That single point of difference is the seed of a brand that refuses to be forgotten.
            </p>
          </div>
        </section>

        <aside className="bg-primary/10 border border-primary/20 p-8 md:p-12">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">Work With Elephant</p>
          <h3 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-4">
            Ready to Build a Brand That Scales?
          </h3>
          <p className="text-sm text-foreground/70 leading-relaxed mb-8 max-w-xl">
            We help startups build brand identities that attract investors, win customers, and grow with the company.
            From positioning to visual systems to launch-ready assets — we are the branding agency for startups that refuse to blend in.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-block px-8 py-4 bg-foreground text-background font-display uppercase tracking-widest hover:bg-primary hover:text-foreground transition-colors"
            >
              Start a Project
            </Link>
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 font-mono text-[10px] uppercase tracking-widest self-center hover:text-primary transition-colors"
            >
              WhatsApp →
            </a>
          </div>
        </aside>
      </article>
      <GuideFooter />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
      <Link to="/" className="font-display text-2xl tracking-tighter uppercase">
        Elephant
      </Link>
      <div className="hidden md:flex gap-8 font-mono text-[10px] uppercase tracking-widest">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <Link to="/" search={{}} className="hover:text-primary transition-colors">Services</Link>
        <Link to="/" search={{}} className="hover:text-primary transition-colors">Work</Link>
        <Link to="/blog/startup-branding-guide" className="text-primary">Blog</Link>
      </div>
      <a
        href="https://wa.me/0000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-foreground text-background font-mono text-[10px] uppercase tracking-widest hover:bg-primary hover:text-foreground transition-colors"
      >
        Inquiry
      </a>
    </nav>
  );
}

function GuideFooter() {
  return (
    <footer className="px-6 py-12 border-t border-border bg-background">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div>
          <div className="font-display text-4xl uppercase mb-4">Elephant</div>
          <p className="text-xs text-foreground/60 max-w-[220px] font-mono leading-relaxed">
            Digital services for those who refuse to be forgotten.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 font-mono text-[10px] uppercase tracking-widest">
          <div className="space-y-4">
            <p className="text-primary">Navigate</p>
            <Link to="/" className="block opacity-60 hover:opacity-100">Home</Link>
            <Link to="/blog/startup-branding-guide" className="block opacity-60 hover:opacity-100">Blog</Link>
            <a href="mailto:hello@elephant.graphics" className="block opacity-60 hover:opacity-100">Contact</a>
          </div>
          <div className="space-y-4">
            <p className="text-primary">Social</p>
            <a href="https://instagram.com" className="block opacity-60 hover:opacity-100">Instagram</a>
            <a href="https://wa.me/0000000000" className="block opacity-60 hover:opacity-100">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-20 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-2 font-mono text-[10px] uppercase tracking-tighter opacity-50">
        <span>© {new Date().getFullYear()} Elephant Graphics</span>
        <span>Est. 2018 / Global Service</span>
      </div>
    </footer>
  );
}
