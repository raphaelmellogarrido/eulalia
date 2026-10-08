export type WorkText = {
  type: string;
  hook: string;
  title: string;
  length: string;
  details: string;
  deliverables: string[];
};

export type Dict = typeof en;

export const en = {
  langSwitch: { label: "Language", names: { en: "English", pt: "Português", fr: "Français" } },

  nav: {
    about: "About",
    services: "Services",
    work: "Work",
    audience: "Audience",
    contact: "Contact",
    collab: "Let's collab 🧋",
    menu: "menu",
  },

  hero: {
    greeting: "Hey u, bobas & matchas",
    title1: "Real products,",
    title2: "real life,",
    title3: "really",
    title4: "me.",
    introBefore: "I'm",
    introMiddle: " — a UGC & lifestyle creator who buys, opens, tests and",
    introEm: " actually uses",
    introAfter: " the things I talk about. Beauty, fashion, cozy tech, unboxings & mom life, shown the way your customers live them.",
    based: "Based in Luxembourg 🇱🇺",
    creating: "Creating for international brands",
    languages: "💬 English · Português",
    seeContent: "See my content",
    workWithMe: "Work with me",
    imgAlt: "Eulália with an iced matcha",
    caption: "my everyday, my honest opinion ♡",
    tested: "Tested by me",
    testedSub: "no scripts, just real use",
    reach: "monthly reach",
  },

  marquee: ["Product UGC", "Unboxings", "Decor", "Reviews", "Beauty & Skincare", "Fashion", "Cozy Tech", "Mom Life", "Voiceovers", "Product Photography"],

  about: {
    imgAlt1: "Unboxing",
    imgAlt2: "Mom life",
    badge: "mom · creator · matcha addict 🍵",
    label: "Nice to meet u",
    title: "The friend who always knows ",
    titleEm: "what's worth buying.",
    p1Before: "I'm Eulália, a Portuguese content creator living in Luxembourg. On my YouTube I greet my community with",
    p1Quote: "\"Hey u, bobas & matchas\" 🧋",
    p1After: " — and that's exactly the vibe I bring to every brand: close, natural and a little bit fun.",
    p2Before: "I don't do over-rehearsed ads. I show products the way people really discover them — by using them in everyday life, between a skincare routine, a coffee run and a toddler's snack time. That's why my videos feel like a ",
    p2Strong: "genuine recommendation",
    p2After: ", not a commercial.",
    steps: [
      { title: "Buy / receive", text: "Your product arrives into my real life — not a set." },
      { title: "Open", text: "The genuine first reaction, every little detail." },
      { title: "Test", text: "I actually use it — for days, in real routines." },
      { title: "Share", text: "My honest opinion, like telling a friend." },
    ],
  },

  niches: {
    label: "My little world",
    title: "What you'll find on my feed",
    desc: "Eight niches, one cozy aesthetic — so your product always feels at home in my content.",
    items: [
      { name: "Beauty", note: "skincare · makeup · GRWM" },
      { name: "Fashion", note: "try-ons · styling · accessories" },
      { name: "Lifestyle", note: "home · routines · self-care" },
      { name: "Tech", note: "cases · gadgets · setups" },
      { name: "Unboxings", note: "PR · hauls · first impressions" },
      { name: "Mom life", note: "family · baby · everyday" },
      { name: "Foodie Life", note: "tastings · reviews · experiences" },
      { name: "Travel & Stays", note: "resorts · hotels · getaways" },
    ],
  },

  services: {
    label: "The menu",
    title: "What I can create ",
    titleEm: "for your brand",
    desc: "Pick one, mix & match, or let me suggest the perfect combo — like ordering your favourite boba. 🧋",
    items: [
      { title: "Product UGC", desc: "Short, scroll-stopping videos made to feel like a friend's recommendation — ready for ads & organic." },
      { title: "Unboxings", desc: "The real first reaction: tissue paper, tiny details, packaging moments and that 'ooh' feeling." },
      { title: "Product Demos", desc: "How it works, step by step, in a real home — not a studio. Clear, calm and easy to follow." },
      { title: "Reviews & Testimonials", desc: "Honest, tested-for-days opinions that build trust and answer your customers' questions." },
      { title: "Beauty & Skincare", desc: "Textures, swatches, GRWM, routines and before/afters with soft, flattering light." },
      { title: "Fashion & Lifestyle", desc: "Try-ons, OOTDs, styling ideas and cozy everyday moments that feel aspirational but real." },
      { title: "Tech & Gadgets", desc: "Lifestyle tech: cases, screen protectors, accessories, setups, personalisation & organisation." },
      { title: "Mom & Family Life", desc: "Products woven into real family routines — practical, warm and relatable for parents." },
      { title: "Voiceovers & Talking-Head", desc: "Friendly on-camera delivery or warm voiceovers in natural, fluent English (and Portuguese)." },
      { title: "Aesthetic Photography", desc: "Styled product photos & flatlays in a clean, cozy, nude-pastel aesthetic for web & socials." },
    ],
  },

  tech: {
    badge: "COZY & AESTHETIC LIFESTYLE",
    title: "Bringing aesthetics & fun into everyday essentials.",
    desc: "From cute tech setups and skincare essentials to home decor, outfits & handmade crochet pieces. I create calming, high-quality, and authentic content showcasing products that bring comfort, beauty, and joy to everyday life.",
    items: [
      "Aesthetic Home & Decor",
      "Cute & Kawaii Tech Setups",
      "Skincare & Self-Care Routines",
      "Handmade Crochet & Fashion",
      "Unboxings & Honest Reviews",
      "Mom Life & Calming Vlogs",
    ],
    imgAlt: "Lifestyle tech flatlay",
    caption: "Self-care isn't selfish, it's essential 💖",
  },

  signature: {
    before: "\"If I wouldn't use it in my real life, ",
    em: "I won't recommend it",
    after: " to mine.\"",
    sign: "— Eulália, to all the bobas & matchas 🧋",
  },

  work: {
    label: "Portfolio",
    title: "A little taste of ",
    titleEm: "my content",
    desc: "Tap any card to see the concept, format and deliverables.",
    cats: { All: "All", Beauty: "Beauty", Tech: "Tech", Unboxing: "Unboxing", Fashion: "Fashion", "Mom life": "Mom life", Food: "Food" },
    deliverables: "Deliverables",
    cta: "I want something like this →",
    close: "close",
    prevPhoto: "previous photo",
    nextPhoto: "next photo",
    items: {
      1: {
        type: "SKINCARE · UNBOXING & HAUL",
        hook: "Stylevana K-Beauty Favorites cozy desk setup featuring my top",
        title: "Stylevana picks ✨🕯️",
        length: "0:32",
        details: "Filmed on my Sony A7 in a cozy desk setup with warm background lighting and candles. Showing my favorite Stylevana skincare products with high-quality visual aesthetics, crisp camera detail, and a relaxed YouTube vibe.",
        deliverables: ["1x 55s video (Sony A7)", "Cozy desk setup with ambient lighting", "Stylevana product showcase & close-ups"],
      },
      2: {
        type: "Product photography",
        hook: "the bag that completes every outfit 💖",
        title: "Handmade product & lifestyle shots",
        length: "Photo set",
        details: "A fully edited and color-graded photo set highlighting crochet textures, rich details, and soft natural lighting — perfectly retouched for web and social media.",
        deliverables: ["8 fully edited & retouched photos", "High-resolution detail & lifestyle shots", "Color-graded & ready-to-publish files"],
      },
      3: {
        type: "Tech · Deco",
        hook: "Insta 360 go ultra",
        title: "Case & acessories setup",
        length: "0:45",
        details: "Swapping my case, applying a screen protector bubble-free and organising my everyday tech — satisfying, practical and aesthetic.",
        deliverables: ["1× 45s demo video", "ASMR close-ups", "Voiceover version"],
      },
      4: {
        type: "Decorating my Nintendo Switch ✨",
        hook: "Customization project, Nintendo switch setup",
        title: "Nintendo Switch Decor Showcase",
        length: "0:40",
        details: "Talking to camera like I'm FaceTiming a friend: what I liked, what surprised me and who it's for. Built on trust, not scripts.",
        deliverables: ["1x 60s Switch Decor & Chat", "Portuguese subtitled version", "ASMR Cut-down"],
      },
      5: {
        type: "Mom life · Lifestyle",
        hook: "the mom hack that saves my mornings",
        title: "A day with us",
        length: "0:38",
        details: "Your product naturally woven into our family routine — warm, relatable and genuinely useful for other parents.",
        deliverables: ["1x 22s lifestyle video (Problem-Solving Angle)", "Includes Mom Community", "Feedback & Proof", "Raw Footage / B-roll Pack Included"],
      },
      6: {
        type: "Lifestyle · Everyday",
        hook: "what's inside my everyday bag 👜",
        title: "my bag essentials 🎀",
        length: "0:28",
        details: "A raw, unfiltered ASMR style video showing everything inside my bag with satisfying sounds, natural humor, and zero script.",
        deliverables: ["1x 2m 13s ASMR video", "Satisfying sound & voiceover edit", "Raw footage / extra clips"],
      },
      7: {
        type: "Foodie life",
        hook: "PR Invite",
        title: "I'm a matcha addicted 🤭",
        length: "1:22",
        details: "A PR invite turned into a cozy foodie moment — tasting, reacting and sharing my honest matcha love, filmed with a warm and natural vibe.",
        deliverables: ["1x 1m 22s foodie video", "Tasting & honest reactions", "Raw footage / extra clips"],
      },
    } as Record<number, WorkText>,
  },

  stats: {
    label: "Audience & metrics",
    title: "A community that ",
    titleEm: "trusts my taste",
    desc: "Data from Instagram Insights & YouTube Studio. An engaged audience of young women and moms with real purchasing power.",
    reach: "Monthly reach",
    reachSub: "Instagram & YouTube",
    core: "Core audience",
    coreSub: "aged 18–44",
    igGrowth: "IG growth",
    igGrowthSub: "steady monthly average",
    ytWatch: "YouTube watch time",
    ytWatchSub: "last 28 days",
    hours: "hrs",
    ageTitle: "Audience age",
    top: "Top",
    igReach: "Instagram reach",
    ytViews: "YouTube views",
    location: "📍 Luxembourg · Portugal",
    locationSub: "Based in Europe · Authentic content tailored to Portuguese and Brazilian audiences.",
  },

  collab: {
    label: "Working together",
    title: "Easy as ",
    titleEm: "ordering a matcha",
    process: [
      { t: "Brief & chat", d: "Tell me about your product, goals and audience. I'll suggest concepts & hooks." },
      { t: "Real-life testing", d: "I receive and genuinely use your product so my opinion is real." },
      { t: "Film & create", d: "Shot at home, in natural light, in my cozy aesthetic — with multiple hooks." },
      { t: "Deliver", d: "Edited videos, raw footage & photos, ready for organic or paid ads." },
    ],
    why: [
      "Authentic, not over-rehearsed",
      "Fluent English, EU-based",
      "Clean nude-pastel aesthetic",
      "Multiple hooks per video",
      "Fast, friendly communication",
      "Ads-ready & usage rights options",
    ],
  },

  contact: {
    hey: "Hey u, brand bobas 🧋",
    title: "Let's make content your customers ",
    titleEm: "actually trust.",
    desc: "Based in Luxembourg, creating for brands across Europe and worldwide — in English or Portuguese. Tell me about your product and I'll get back to you within 48h.",
    thanks: "Thank you, boba!",
    thanksSub: "Your message is brewing. I'll reply very soon ♡",
    name: "Your name",
    brand: "Brand",
    email: "Email",
    servicePlaceholder: "What are you looking for?",
    // `value` is what lands in the inbox (kept in English); `label` is what the visitor sees.
    options: [
      { value: "Product UGC", label: "Product UGC" },
      { value: "Unboxing", label: "Unboxing" },
      { value: "Product demo", label: "Product demo" },
      { value: "Review / testimonial", label: "Review / testimonial" },
      { value: "Product photography", label: "Product photography" },
      { value: "Voiceover / talking-head", label: "Voiceover / talking-head" },
      { value: "A mix of everything", label: "A mix of everything ✨" },
    ],
    message: "Tell me about your product...",
    error: "Oops, the form couldn't be sent right now. You can send it by email instead — your message is already filled in:",
    sendViaEmail: "Send via email",
    orWrite: "Or write directly to",
    sending: "Sending...",
    send: "Send message",
  },

  footer: {
    tagline: "UGC & Lifestyle Creator · Luxembourg",
    bye: "stay cozy, bobas & matchas 🧋🍵",
  },

  whatsapp: {
    aria: "Need help? Chat on WhatsApp (+352 691 393 745)",
    title: "Chat on WhatsApp",
    label: "Need help?",
  },
};
