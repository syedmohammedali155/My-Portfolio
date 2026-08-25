import {
  ProfileInfo,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  EducationItem,
  LanguageItem,
  ServiceItem,
  CertificateItem,
} from '../types';

export const profileData: ProfileInfo = {
  name: 'Syed Muhammad Ali',
  titles: [
    'Creative Graphic Designer',
    'Co-Founder @ TECK HEAVEN',
    'Graphic Designer @ Sama Ex & Sama Logistics',
    'Social Media Creative Specialist (Insta & FB)',
  ],
  email: 'syedmohammedali155@gmail.com',
  phone: '+92 3385306005',
  location: 'Rawalpindi / Islamabad, Pakistan & Dubai, UAE (Remote)',
  currentInstitution: 'National University of Modern Languages (NUML)',
  summary:
    'Creative and versatile Graphic Designer & Co-Founder specializing in high-engagement social media creatives for Instagram and Facebook, brand identity systems, marketing collateral, and digital storefront visuals. Proven track record managing creative design pipelines across Pakistan and Dubai (UAE), with recognized appreciation for exceptional visual communication, brand enhancement, and commercial client conversions.',
  availability: 'Open for Freelance Projects, Brand Collaborations & Full-Time Roles',
  stats: [
    {
      label: 'Client Conversions',
      value: '45+',
      subtext: 'High-converting social media creatives & ad campaigns for Instagram & Facebook',
    },
    {
      label: 'Active Ventures',
      value: '3+',
      subtext: 'Co-Founding TECK HEAVEN & Graphic Design at Sama Ex Pakistan and Sama logistics',
    },
    {
      label: 'Global Experience',
      value: '2 Regions',
      subtext: 'Cross-border graphic design in Pakistan & Dubai (UAE)',
    },
    {
      label: 'Core Disciplines',
      value: 'CS & Graphic Design',
      subtext: 'Computer Science (NUML) & High-Impact Creative Visuals',
    },
  ],
};

export const certificatesData: CertificateItem[] = [
  {
    id: 'bayt-al-raha-cert',
    title: 'Certificate of Appreciation',
    organization: 'Bayt Al Raha UAE',
    awardee: 'Syed Muhammad Ali',
    designatedRole: 'Creative Graphic Designer',
    citation:
      'In appreciation of your outstanding creativity, commitment, and contribution to Bayt Al Raha UAE. Your dedication and professional excellence have played a valuable role in strengthening our brand and supporting our continued success.',
    location: 'Dubai, United Arab Emirates',
    verificationBadge: 'Official Verified Corporate Award',
    stampOrSignatureType: 'company_stamp',
    stampText: 'مغسلة بيت الراحة لكي الملابس - ش.م.ح * P.O. Box 33040 DUBAI - U.A.E. * BAYT AL RAHA LAUNDRY - FZCO',
    issueNote: 'Bayt Al Raha Laundry - FZCO (Dubai - U.A.E.)',
    skills: ['Brand Identity', 'Social Media Creatives', 'Promotional Graphics', 'Adobe Photoshop', 'Canva'],
    themeColor: '#38bdf8',
    imagePath: '/Certificate.png',
    alternativeImagePaths: ['/Certificate.png', '/certificate.png', '/Certificate.jpg', '/bayt-al-raha.png', '/bayt-al-raha-cert.png'],
  },
  {
    id: 'sama-logistic-cert',
    title: 'Certificate of Appreciation',
    organization: 'Sama Logistic UAE',
    awardee: 'Syed Muhammad Ali',
    designatedRole: 'GRAPHIC DESIGNER & SOCIAL MEDIA EXECUTIVE',
    citation:
      'In recognition of your exceptional creativity, dedication, and valuable contributions to Sama Logistic UAE. Your excellence in graphic design and social media management has strengthened our brand identity, enhanced our digital presence, and contributed to the company\'s continued growth and success.',
    location: 'Dubai, United Arab Emirates',
    verificationBadge: 'Official UAE Corporate Certification',
    stampOrSignatureType: 'ceo_signature',
    signerTitle: "CEO'S SIGNATURE",
    issueNote: 'Awarded by Executive Leadership at Sama Logistic (Dubai, UAE)',
    skills: ['Social Media Management', 'B2B Logistics Branding', 'Instagram & FB Creatives', 'Adobe Photoshop', 'Adobe Lightroom'],
    themeColor: '#3b82f6',
    imagePath: '/Certificate 1.png',
    alternativeImagePaths: ['/Certificate 1.png', '/Certificate-1.png', '/certificate 1.png', '/certificate-1.png', '/Certificate1.png', '/Certificate 1.jpg', '/sama-logistic.png', '/sama-logistic-cert.png'],
  },
];


export const experiencesData: ExperienceItem[] = [
  {
    id: 'sama-ex',
    company: 'Sama Ex Pakistan',
    role: 'Graphic Designer & Media Specialist',
    period: 'Aug 2026 – Present',
    location: 'Rawalpindi, Pakistan',
    category: 'design',
    badge: 'Current Role',
    description:
      'Spearheading graphic design systems, brand identities, high-converting social media creatives for Instagram & Facebook, and marketing collateral for domestic and international client ecosystems.',
    highlights: [
      'Creating high-impact graphic design systems and visual brand assets for clients',
      'Designing compelling social media posts, banners, and promotional ad campaigns on Instagram & FB',
      'Managing visual content calendars with consistent brand aesthetics',
      'Collaborating directly with stakeholders to turn marketing objectives into engaging visual collateral',
    ],
    skills: ['Graphic Design', 'Social Media Posts (Insta & FB)', 'Adobe Photoshop', 'Canva', 'Brand Strategy'],
  },
  {
    id: 'sama-logistics',
    company: 'Sama Logistics',
    role: 'Graphic Designer & Social Media Executive',
    period: 'Oct 2024 – Present',
    location: 'Dubai, United Arab Emirates (Remote)',
    category: 'design',
    badge: 'Official Certificate Awardee',
    description:
      'Awarded Certificate of Appreciation for managing brand identity, digital marketing materials, and high-converting social media publication strategy across Dubai and the UAE.',
    highlights: [
      'Planned, designed, and published high-engagement corporate social media content on Instagram & Facebook',
      'Developed localized creative collateral suited for Middle East business clients and corporate audiences',
      'Maintained brand consistency across all corporate media channels and marketing campaigns',
    ],
    skills: ['Adobe Photoshop', 'Adobe Lightroom', 'Canva', 'Social Media Content', 'Brand Strategy'],
  },
  {
    id: 'teck-heaven',
    company: 'TECK HEAVEN',
    role: 'Co-Founder & Creative Graphic Designer',
    period: 'Sep 2024 – Present',
    location: 'Rawalpindi, Pakistan',
    category: 'ecommerce',
    badge: 'Co-Founder',
    description:
      'Co-founded and scaled an active e-commerce commercial venture, directing brand design, promotional product graphics, Instagram & Facebook social media campaigns, and customer conversions.',
    highlights: [
      'Designed and executed viral social media marketing posts and ad creatives for Instagram & Facebook',
      'Direct client management and seamless customer lifecycle support driving 45+ conversions',
      'Formulated product catalog curation and digital store positioning strategy',
    ],
    skills: ['Graphic Design', 'Social Media Ad Creatives', 'E-Commerce Management', 'Client Relations', 'Digital Marketing'],
  },
  {
    id: 'bayt-al-raha',
    company: 'Bayt Al Raha',
    role: 'Graphic Designer',
    period: 'Nov 2025 – July 2026',
    location: 'Dubai, United Arab Emirates (Remote)',
    category: 'design',
    badge: 'Official Certificate Awardee',
    description:
      'Awarded Certificate of Appreciation with Official Company Stamp for crafting high-end promotional visual designs, social content, and dynamic marketing assets for Dubai-based clientele.',
    highlights: [
      'Produced engaging promotional social media posts tailored to Dubai market aesthetics',
      'Executed digital marketing content under tight publishing deadlines',
      'Strengthened brand identity through refined typography and visual storytelling',
    ],
    skills: ['Graphic Design', 'Adobe Photoshop', 'Social Media Content (Insta & FB)', 'Marketing Collateral', 'Canva'],
  },
  {
    id: 'winston-networks',
    company: 'Winston Networks',
    role: 'Customer Sales Representative',
    period: 'Feb 2024 – Nov 2024',
    location: 'Rawalpindi, Pakistan',
    category: 'sales',
    description:
      'Remote account management and high-volume consultative sales operations handling US customer inquiries and qualification.',
    highlights: [
      'Generated 61 qualified sales in 10 months successfully transferred to licensed agents',
      'Managed end-to-end client communication with precision and professional demeanor',
      'Maintained high adherence to schedule and detailed client record keeping',
    ],
    skills: ['Client Management', 'Sales Negotiation', 'Interpersonal Liaison', 'Record Maintenance'],
  },
  {
    id: 'sycamore-networks',
    company: 'Sycamore Networks',
    role: 'Customer Sales Representative',
    period: 'Sep 2023 – Dec 2023',
    location: 'Rawalpindi, Pakistan',
    category: 'sales',
    description:
      'Client liaison handling outbound & inbound relationship management and sales conversion under stringent timeframes.',
    highlights: [
      'Delivered 23 verified sales in 4 months transferred to licensed agents',
      'Mastered rapport-building and rapid objection handling in high-pressure team environment',
    ],
    skills: ['Direct Sales', 'Communication', 'Client Outreach', 'Pressure Management'],
  },
  {
    id: 'w4work',
    company: 'W4WORK Outsourcing',
    role: 'Customer Sales Representative',
    period: 'July 2022 – Nov 2022',
    location: 'Islamabad, Pakistan',
    category: 'sales',
    description:
      'Remotely managed United States clients and marketed comprehensive services by articulating direct value propositions and benefits.',
    highlights: [
      'Achieved 20 sales in 5 months transferred smoothly to licensed agents',
      'Represented international business services to US customer bases with clarity',
    ],
    skills: ['US Client Relations', 'Value Proposition Marketing', 'Consultative Sales', 'Time Management'],
  },
];


export const projectsData: ProjectItem[] = [
  {
    id: 'sama-logistics-media',
    title: 'Sama Logistics Dubai Brand Identity & Social Campaigns',
    subtitle: 'Official Certificate of Appreciation Awardee & UAE Logistics Media',
    role: 'Graphic Designer & Social Media Executive',
    category: 'Brand & Media',
    summary:
      'Comprehensive corporate brand communication and high-engagement social media design suite for prominent logistics enterprise in Dubai, UAE.',
    problem:
      'The competitive Middle Eastern logistics sector requires commanding, trustworthy, and visually sophisticated social media posts that convey speed, reliability, and corporate excellence.',
    solution:
      'Formulated an editorial and visual media system consisting of planned Instagram & Facebook social publications, service spotlights, and localized digital marketing assets.',
    contribution:
      'Conceptualized, designed, and published consistent social media campaigns tailored for B2B logistics clients across Dubai and the UAE region.',
    technologies: ['Adobe Photoshop', 'Adobe Lightroom', 'Canva', 'Instagram & FB Creatives', 'B2B Visuals'],
    outcomes: [
      'Earned Official Certificate of Appreciation from Sama Logistic CEO',
      'Sustained continuous brand presence across key corporate digital channels in Dubai',
      'Elevated visual credibility with polished graphic standards',
    ],
    accentColor: '#3b82f6',
    visualTheme: 'emerald-flow',
  },
  {
    id: 'bayt-al-raha-campaigns',
    title: 'Bayt Al Raha Dubai Marketing & Social Media Assets',
    subtitle: 'Official Certificate of Appreciation Awardee & Promotional Design',
    role: 'Graphic Designer',
    category: 'Brand & Media',
    summary:
      'Rich collection of promotional marketing assets, aesthetic social posts, and digital campaigns crafted for Dubai commercial audiences.',
    problem:
      'Capturing customer attention in the vibrant Dubai marketplace requires striking visual contrast, refined typography, and timely promotional execution.',
    solution:
      'Engineered an engaging series of marketing graphics and social media creatives emphasizing lifestyle elegance, promotional clarity, and brand recognition.',
    contribution:
      'Designed all primary marketing collateral and social media visual posts over the tenure, aligning with regional design preferences.',
    technologies: ['Adobe Photoshop', 'Canva', 'Visual Marketing Collateral', 'Instagram & FB Campaigns'],
    outcomes: [
      'Earned Official Certificate of Appreciation with Bayt Al Raha Dubai Stamp',
      'Delivered dozens of high-engagement social media posts across campaigns',
      'Maintained consistent aesthetic quality under high-velocity promotional schedules',
    ],
    accentColor: '#38bdf8',
    visualTheme: 'amber-glow',
  },
  {
    id: 'teck-heaven-ecommerce',
    title: 'TECK HEAVEN E-Commerce Brand & Social Media Posts',
    subtitle: 'Co-Founded Digital Retail Store & 45+ Conversions Marketing',
    role: 'Co-Founder & Creative Graphic Designer',
    category: 'E-Commerce',
    summary:
      'A digital commercial storefront driven by targeted Instagram and Facebook social media marketing, compelling product graphics, and 45+ client conversions.',
    problem:
      'Launching an independent e-commerce brand demands rapid customer acquisition, compelling visual product presentation, and conversion-focused ad creatives.',
    solution:
      'Built a complete e-commerce store operation combining high-conversion social media ad creatives, direct client management workflows, and strategic product placement.',
    contribution:
      'Co-founded store operations, designed all digital promotional posts for Instagram and Facebook, managed customer communication pipelines, and oversaw sales execution.',
    technologies: ['Graphic Design', 'Canva / Photoshop', 'Instagram & FB Posts', 'Social Marketing', 'Brand Identity'],
    outcomes: [
      'Generated 45+ client conversions via high-converting graphic design posts',
      'Successfully launched and actively operating commercial venture in Rawalpindi',
      'High-engagement social media campaigns driving organic inbound inquiries',
    ],
    accentColor: '#818cf8',
    visualTheme: 'indigo-violet',
  },
  {
    id: 'sama-ex-platform',
    title: 'Sama Ex Graphic Design & Visual Brand Suite',
    subtitle: 'Brand System, Social Creatives & Multi-Platform Media Assets',
    role: 'Graphic Designer & Media Specialist',
    category: 'Design & Dev',
    summary:
      'An integrated visual design system and creative media pipeline delivering high-converting graphic collateral for domestic and international client ecosystems.',
    problem:
      'Enterprises need unified visual identities where marketing collateral, Instagram and Facebook posts, and promotional graphics maintain razor-sharp brand coherence.',
    solution:
      'Designed a complete brand suite encompassing marketing graphics, promotional banners, social media design frameworks, and digital asset kits.',
    contribution:
      'Lead graphic design and visual creative asset production from initial concept through publication across Instagram and Facebook channels.',
    technologies: ['Graphic Design', 'Social Media Creatives', 'Adobe Photoshop', 'Canva', 'Brand Strategy'],
    outcomes: [
      'Created cohesive visual brand identity across all media touchpoints',
      'Streamlined digital content publication across multiple social channels',
      'Established high aesthetic benchmarks for corporate clients',
    ],
    accentColor: '#38bdf8',
    visualTheme: 'cyan-matrix',
  },
  {
    id: 'global-sales-engine',
    title: 'High-Impact Client Engagement & Sales Pipeline',
    subtitle: 'Client Communication & Consultative Transfers (Winston, Sycamore & W4WORK)',
    role: 'Client Specialist & Account Representative',
    category: 'Engineering',
    summary:
      'Structured international client engagement engine spanning US customer outreach, value proposition articulation, and seamless licensed agent transfers.',
    problem:
      'Operating in competitive international outbound/inbound sales requires rapid rapport establishment, objection deconstruction, and unwavering adherence to strict compliance.',
    solution:
      'Developed disciplined consultative communication methodologies that matched client needs to service value, driving consistent monthly transfer targets.',
    contribution:
      'Direct remote management of international accounts: 61 sales at Winston Networks, 23 sales at Sycamore, and 20 sales at W4WORK.',
    technologies: ['Client Account Management', 'Consultative Value Pitching', 'CRM Record Keeping', 'Interdepartmental Liaison'],
    outcomes: [
      'Proven client conversion and relationship management mastery',
      'Demonstrated extreme resilience and focus under quota and deadline pressures',
    ],
    accentColor: '#a855f7',
    visualTheme: 'purple-aura',
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'creative-design',
    title: 'Visual Design & Creative Media',
    iconName: 'Palette',
    description:
      'Expertise in visual storytelling, high-fidelity graphics, photo curation, and digital brand collateral.',
    skills: [
      { name: 'Adobe Photoshop', level: 'Advanced / Core Tool', highlight: true, tool: 'Graphic Creation & Retouching' },
      { name: 'Adobe Lightroom', level: 'Advanced', highlight: true, tool: 'Color Grading & Photography' },
      { name: 'Canva', level: 'Expert', highlight: true, tool: 'Rapid High-Impact Social Creatives' },
      { name: 'Instagram & Facebook Posts', level: 'Specialist', highlight: true, tool: '45+ Conversion Creatives' },
      { name: 'Graphic Design', level: 'Specialist / Core Discipline', highlight: true, tool: 'Brand Systems & Marketing Layouts' },
      { name: 'Wondershare Filmora', level: 'Proficient', highlight: false, tool: 'Video & Motion Content Editing' },
    ],
  },
  {
    id: 'ecommerce-marketing',
    title: 'E-Commerce & Brand Growth',
    iconName: 'ShoppingBag',
    description:
      'Founding experience in e-commerce storefronts, digital marketing distribution, and high-conversion campaign planning.',
    skills: [
      { name: 'E-Commerce Store Co-Founding', level: 'Founder Experience', highlight: true, tool: 'TECK HEAVEN Operations' },
      { name: 'Digital Marketing & Content Strategy', level: 'Advanced', highlight: true, tool: 'Dubai & Pakistan Campaigns' },
      { name: 'Social Media Management', level: 'Specialist', highlight: true, tool: 'Planning, Design & Publishing' },
      { name: 'Client Account Management', level: 'Expert', highlight: true, tool: '45+ Client Conversions' },
    ],
  },
  {
    id: 'dev-engineering',
    title: 'Technical & Web Foundations',
    iconName: 'Code',
    description:
      'Technical academic background covering computer science principles, web architecture, and digital interfaces.',
    skills: [
      { name: 'Website Design & Layouts', level: 'Practicing', highlight: true, tool: 'Modern Web Aesthetics' },
      { name: 'Java OOPs', level: 'Academic & Applied', highlight: false, tool: 'Object-Oriented Concepts' },
      { name: 'C++', level: 'Core Programming', highlight: false, tool: 'Algorithmic Logic' },
      { name: 'Software Foundations', level: 'Undergraduate', highlight: false, tool: 'NUML Degree Studies' },
    ],
  },
  {
    id: 'interpersonal-sales',
    title: 'Communication, Sales & Client Liaison',
    iconName: 'TrendingUp',
    description:
      'Proven track record in international sales, consultative value delivery, and interdepartmental coordination under pressure.',
    skills: [
      { name: 'Client Consultation & Sales', level: 'Proven Track Record', highlight: true, tool: 'Global & Remote Outreach' },
      { name: 'Interdepartmental Liaison', level: 'Skilled', highlight: true, tool: 'Cross-functional Collaboration' },
      { name: 'High-Pressure Schedule Execution', level: 'Resilient', highlight: true, tool: 'Strict Deadlines & Records' },
      { name: 'Consultative Value Pitching', level: 'Proven', highlight: false, tool: 'Service Articulation & Trust' },
    ],
  },
];

export const educationData: EducationItem = {
  degree: "Bachelor's Degree in Computer Sciences",
  institution: 'National University of Modern Languages',
  shortName: 'NUML',
  period: 'Feb 2025 – Present',
  location: 'Islamabad / Rawalpindi, Pakistan',
  focus: [
    'Website Design, Visual Interfaces & Digital Media',
    'Object-Oriented Programming & Computational Logic',
    'Software Architecture & System Foundations',
    'Digital Technologies & Problem Solving',
  ],
  description:
    'Pursuing a degree at the National University of Modern Languages, complementing professional graphic design and creative ventures with structured computational and problem-solving foundations.',
};

export const languagesData: LanguageItem[] = [
  { name: 'English', proficiency: 'Professional Working & Business Fluent', nativeScript: 'English' },
  { name: 'Urdu', proficiency: 'Native / Bilingual', nativeScript: 'اردو' },
  { name: 'Punjabi', proficiency: 'Native / Conversational', nativeScript: 'پنجابی' },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'social-media-design',
    title: 'Instagram & Facebook Social Media Creatives',
    icon: 'Palette',
    description:
      'Designing viral, high-converting social media posts, carousel designs, promotional banners, and campaign ads crafted to maximize engagement and client conversions.',
    deliverables: [
      'High-Converting Instagram & FB Post Packs',
      'Promotional Sale Banners & Story Templates',
      'Carousel Slide Decks & Infographic Posts',
      'Cohesive Color Palette & Typography Themes',
    ],
    tools: ['Adobe Photoshop', 'Canva', 'Instagram Ads', 'Facebook Ads', 'Lightroom'],
  },
  {
    id: 'brand-graphic-design',
    title: 'Brand Identity & Marketing Collateral',
    icon: 'Palette',
    description:
      'Delivering premium visual brand identities, corporate stationery, promotional brochures, and marketing collateral recognized by corporate clients in Dubai and Pakistan.',
    deliverables: [
      'Official Brand Guidelines & Logo Systems',
      'Corporate Presentation Decks & Pitch Kits',
      'Photo Retouching & Professional Color Grading',
      'Print-Ready Marketing Materials & Brochures',
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom', 'Canva', 'Graphic Design'],
  },
  {
    id: 'ecommerce-operations',
    title: 'E-Commerce Store Creatives & Growth',
    icon: 'ShoppingBag',
    description:
      'End-to-end e-commerce creative strategy from eye-catching product display visuals to conversion-driven ad campaigns and customer inquiry handling.',
    deliverables: [
      'High-Conversion Product Ad Graphics',
      'Store Visual Branding & Catalog Assets',
      'Client Inquiry & Direct Sales Conversion Flow',
      'Campaign Performance Optimization',
    ],
    tools: ['TECK HEAVEN Framework', 'Digital Marketing', 'Client CRM', 'Content Planning'],
  },
  {
    id: 'video-multimedia',
    title: 'Video Editing & Social Reels',
    icon: 'Video',
    description:
      'Crafting engaging short-form social reels, video ad cuts, and dynamic motion sequences that grab attention in fast-scrolling social feeds.',
    deliverables: [
      'Short-form Instagram Reels & TikTok Visuals',
      'Promotional Video Cuts & Kinetic Text Overlays',
      'Dynamic Transitions & Audio Syncing',
    ],
    tools: ['Wondershare Filmora', 'Video Editing', 'Motion Sequences'],
  },
  {
    id: 'client-liaison-sales',
    title: 'Client Relations & Consultative Sales',
    icon: 'Users',
    description:
      'Consultative sales communication, remote international client liaison, and disciplined record management with proven 45+ conversion results.',
    deliverables: [
      'Direct US & Global Client Management',
      'Value-Based Service Articulation',
      'Interdepartmental Schedule Adherence',
      'Detailed Record Maintenance',
    ],
    tools: ['Client Relations', 'Sales Negotiation', 'Liaison Systems', 'Deadline Management'],
  },
];
