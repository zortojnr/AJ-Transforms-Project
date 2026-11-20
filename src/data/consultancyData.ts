export type RouteKey =
  | 'home'
  | 'about'
  | 'capabilities'
  | 'solutions'
  | 'industries'
  | 'insights'
  | 'contact';

export interface ArchitecturalStage {
  id: string;
  index: string;
  label: string;
  headline: string;
  summary: string;
  structuralPrinciple: string;
}

export interface OperationalChallenge {
  index: string;
  title: string;
  symptom: string;
  structuralCause: string;
}

export interface CapabilityItem {
  id: string;
  index: string;
  title: string;
  shortThesis: string;
  description: string;
  businessProblem: string;
  intervention: string;
  technologyRule: string;
  deliverables: string[];
}

export interface MethodologyStage {
  index: string;
  code: 'DISCOVER' | 'ANALYSE' | 'IMPROVE' | 'AUTOMATE' | 'OPTIMISE';
  title: string;
  focus: string;
  description: string;
  keyQuestion: string;
  outputs: string[];
}

export interface IndustryProfile {
  id: string;
  name: string;
  operationalReality: string;
  commonBottlenecks: string[];
  transformationFocus: string;
  isIllustrative?: boolean;
  illustrativeScenario?: {
    label: string;
    title: string;
    context: string;
    structuralIntervention: string;
    outcomeDirection: string;
  };
}

export interface OutcomePillar {
  index: string;
  title: string;
  description: string;
  structuralShift: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  editorialTag: string;
  excerpt: string;
  paragraphs: string[];
  keyTakeaway: string;
}

export interface SolutionTrack {
  index: string;
  title: string;
  trigger: string;
  architecture: string;
  sequence: string[];
}

export const BRAND = {
  name: 'AJ Transforms',
  shortName: 'AJ Transforms',
  principal: 'Afolayan Jegede',
  principalRole: 'Principal & Lead Consultant',
  positioning: 'Operational Excellence. Practical Innovation. Sustainable Growth.',
  concept: 'The Architecture of Better Business',
  coreStatement: "Better businesses don't happen by accident. They're designed.",
  philosophy:
    "We don't begin with technology. We begin with understanding your business.",
  marketFocus:
    'Mid-market organisations, leadership teams, and operational decision-makers worldwide.',
};

export const PLACEHOLDER_DIRECTORY = {
  email: '[Business Email Pending — From Capability Statement]',
  telephone: '[Business Telephone Pending — From Capability Statement]',
  officeRegion: '[Jurisdiction / Office Details Pending — From Capability Statement]',
  portraitStatus: '[Approved Executive Portrait Pending — Afolayan Jegede]',
  credentialsNotice:
    'Additional biographical details and approved credentials will be incorporated directly from the finalised capability statement.',
};

export const MEDIA_ASSETS = {
  atriumLight: '/src/assets/images/arch_atrium_light_1795006637773.jpg',
  joineryDetail: '/src/assets/images/arch_joinery_detail_1795006662862.jpg',
  consultancyStudio: '/src/assets/images/arch_consultancy_studio_1795006635192.jpg',
};

export const ARCHITECTURAL_STAGES: ArchitecturalStage[] = [
  {
    id: 'fragmentation',
    index: '01',
    label: 'Fragmentation',
    headline: 'Disconnected teams, manual workarounds, and operational drag.',
    summary:
      'As organisations grow, departments build local spreadsheets, duplicate approvals, and parallel records. Effort rises while visibility diminishes.',
    structuralPrinciple:
      'Symptoms appear as software limitations, yet the root cause is usually uncoordinated process design.',
  },
  {
    id: 'understanding',
    index: '02',
    label: 'Understanding',
    headline: 'Exposing how work actually moves across the organisation.',
    summary:
      'Before recommending any tool or restructuring, we trace end-to-end workflows, handoff friction, decision bottlenecks, and true cost of delay.',
    structuralPrinciple:
      'Operational clarity comes from observing real execution rather than reading static org charts.',
  },
  {
    id: 'alignment',
    index: '03',
    label: 'Alignment',
    headline: 'Redesigning workflows into one coherent operating structure.',
    summary:
      'Roles, handoffs, accountability, and information flows are simplified and aligned around commercial priorities before automation is introduced.',
    structuralPrinciple:
      'Automating a broken process only accelerates inefficiency; alignment must precede tooling.',
  },
  {
    id: 'optimisation',
    index: '04',
    label: 'Optimisation',
    headline: 'Integrated systems, practical automation, and sustained discipline.',
    summary:
      'With structure secured, targeted workflow automation and practical AI remove repetitive friction—freeing leadership and teams for higher-value execution.',
    structuralPrinciple:
      'Sustainable growth depends on continuous refinement as market conditions evolve.',
  },
];

export const OPERATIONAL_CHALLENGES: OperationalChallenge[] = [
  {
    index: '01',
    title: 'Growth Outpacing Structure',
    symptom:
      'Revenue and headcount expand, yet coordination still relies on informal conversations, heroics from senior staff, and institutional memory.',
    structuralCause:
      'Core operational workflows were never redesigned to support multi-team scale.',
  },
  {
    index: '02',
    title: 'Fragmented Systems & Re-Keyed Data',
    symptom:
      'Finance, operations, sales, and field teams maintain separate trackers, causing reconciliation delays and conflicting management reporting.',
    structuralCause:
      'Point software was purchased reactively to solve isolated symptoms rather than connected architecture.',
  },
  {
    index: '03',
    title: 'Decision Bottlenecks at Leadership Level',
    symptom:
      'Directors and managers are pulled into routine approvals, exception handling, and status chasing instead of commercial strategy.',
    structuralCause:
      'Unclear escalation thresholds and inconsistent handoff standards force upward delegation.',
  },
  {
    index: '04',
    title: 'Premature Technology & AI Initiatives',
    symptom:
      'Organisations invest in automation tools or AI pilots that sit unused because underlying data and processes remain inconsistent.',
    structuralCause:
      'Technology selection began before operational diagnosis and workflow standardisation.',
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'business-process-analysis',
    index: '01',
    title: 'Business Process Analysis',
    shortThesis: 'Evidence-based mapping of how work, data, and decisions flow today.',
    description:
      'We examine end-to-end operations across departments to surface hidden bottlenecks, duplicated effort, handoff failures, and undocumented workarounds.',
    businessProblem:
      'Leadership senses operational drag and rising overhead but lacks an objective structural view of where time and margin are leaking.',
    intervention:
      'Conduct structured stakeholder interviews, observe live execution, map current-state workflows, and isolate root-cause structural friction.',
    technologyRule:
      'Zero software prescribed during diagnosis; truth of the process comes first.',
    deliverables: [
      'End-to-end current-state process architecture',
      'Bottleneck, rework, and handoff friction register',
      'Prioritised structural improvement roadmap',
    ],
  },
  {
    id: 'operational-efficiency',
    index: '02',
    title: 'Operational Efficiency',
    shortThesis: 'Removing structural waste so existing capacity delivers greater output.',
    description:
      'We realign resources, approval chains, reporting rhythms, and cross-functional responsibilities so teams spend time on productive execution rather than administrative friction.',
    businessProblem:
      'Teams feel perpetually overstretched despite growing headcount, while turnaround times and delivery consistency slip.',
    intervention:
      'Eliminate redundant steps, clarify ownership boundaries, standardise recurring tasks, and establish lean operational cadences.',
    technologyRule:
      'Efficiency is achieved through structural simplification before adding system complexity.',
    deliverables: [
      'Streamlined operating cadence and role clarity matrix',
      'Approval and escalation threshold redesign',
      'Capacity release plan across core functions',
    ],
  },
  {
    id: 'process-improvement',
    index: '03',
    title: 'Process Improvement',
    shortThesis: 'Designing repeatable, resilient workflows built for scale.',
    description:
      'We reconstruct fragile or informal processes into clear, documented, standard operating structures that perform reliably across teams and sites.',
    businessProblem:
      'Quality and delivery outcomes vary sharply depending on which individual handles a job or client engagement.',
    intervention:
      'Co-design future-state workflows with operational leads, define clear inputs and outputs at every stage, and embed practical governance.',
    technologyRule:
      'Standardised human and commercial rules precede digital configuration.',
    deliverables: [
      'Future-state standard operating blueprints',
      'Cross-department handoff contracts and checklists',
      'Operational governance and exception protocols',
    ],
  },
  {
    id: 'workflow-automation',
    index: '04',
    title: 'Workflow Automation',
    shortThesis: 'Connecting systems and eliminating repetitive manual administration.',
    description:
      'Once workflows are simplified and standardised, we design and implement dependable automations that move data cleanly between core business platforms.',
    businessProblem:
      'Skilled staff lose hours each week copying data between email, spreadsheets, quoting tools, CRMs, and accounting platforms.',
    intervention:
      'Architect clean system integrations, automate predictable routing and document generation, and build resilient error-handling safeguards.',
    technologyRule:
      'Automate only proven, stable workflows—never institutionalised chaos.',
    deliverables: [
      'Connected workflow architecture across existing tools',
      'Automated intake, routing, notification, and reporting flows',
      'Operational runbooks and team handover documentation',
    ],
  },
  {
    id: 'ai-strategy-implementation',
    index: '05',
    title: 'AI Strategy & Implementation',
    shortThesis: 'Commercially grounded AI applied strictly where value is measurable.',
    description:
      'We help leadership separate genuine operational utility from industry noise—identifying practical, governed AI use cases and deploying them safely into real workflows.',
    businessProblem:
      'Decision-makers face pressure to adopt AI without a clear framework for governance, data readiness, or commercial return.',
    intervention:
      'Assess operational readiness, prioritise high-leverage assistive workflows (triage, document synthesis, knowledge retrieval), and implement controlled solutions.',
    technologyRule:
      'AI serves a defined operational objective with human accountability intact.',
    deliverables: [
      'Pragmatic AI readiness and use-case evaluation',
      'Governance, privacy, and human-in-the-loop guardrails',
      'Targeted AI workflow deployment and team adoption support',
    ],
  },
  {
    id: 'continuous-improvement',
    index: '06',
    title: 'Continuous Improvement',
    shortThesis: 'Building internal capability so transformation endures.',
    description:
      'Transformation is not a one-off event. We embed practical review rhythms, operational feedback loops, and internal ownership so improvements hold over time.',
    businessProblem:
      'Organisations slip back into manual workarounds months after external projects conclude because ownership was never institutionalised.',
    intervention:
      'Establish lightweight operational review cadences, equip internal champions, and refine workflows as business volume and priorities shift.',
    technologyRule:
      'Systems evolve alongside the business rather than locking teams into rigid tooling.',
    deliverables: [
      'Structured operational review cadence',
      'Internal process ownership framework',
      'Ongoing optimisation and adaptation playbook',
    ],
  },
];

export const METHODOLOGY_STAGES: MethodologyStage[] = [
  {
    index: '01',
    code: 'DISCOVER',
    title: 'Discover',
    focus: 'Commercial Context & Operational Reality',
    description:
      'We begin by listening to leadership and observing how the business actually operates—understanding commercial pressures, customer commitments, and where friction is felt daily.',
    keyQuestion: 'What is the business trying to achieve, and where is execution breaking down?',
    outputs: [
      'Executive alignment on scope and priorities',
      'Operational stakeholder interviews',
      'Current system and workflow inventory',
    ],
  },
  {
    index: '02',
    code: 'ANALYSE',
    title: 'Analyse',
    focus: 'Structural Diagnosis & Bottleneck Isolation',
    description:
      'We trace workflows end-to-end to distinguish surface symptoms from underlying structural causes—identifying rework loops, missing data, and decision delays.',
    keyQuestion: 'Where are time, margin, and accountability lost between teams and tools?',
    outputs: [
      'Verified current-state process maps',
      'Root-cause friction and dependency audit',
      'Prioritised opportunity assessment',
    ],
  },
  {
    index: '03',
    code: 'IMPROVE',
    title: 'Improve',
    focus: 'Process Redesign & Structural Alignment',
    description:
      'Before introducing new software, we simplify and redesign the underlying workflows—clarifying roles, handoffs, approvals, and information standards.',
    keyQuestion: 'How should the work flow if we design it deliberately from first principles?',
    outputs: [
      'Streamlined future-state workflows',
      'Clear ownership and escalation rules',
      'Standardised operational documentation',
    ],
  },
  {
    index: '04',
    code: 'AUTOMATE',
    title: 'Automate',
    focus: 'Practical Systems, Integration & AI',
    description:
      'With clean workflows established, we implement targeted automation and practical AI solutions that connect existing tools and remove repetitive manual administration.',
    keyQuestion: 'Which repetitive steps can technology execute reliably without losing control?',
    outputs: [
      'Integrated system-to-system workflows',
      'Governed AI and document-handling assistants',
      'Team enablement and operational testing',
    ],
  },
  {
    index: '05',
    code: 'OPTIMISE',
    title: 'Optimise',
    focus: 'Adoption, Governance & Sustained Growth',
    description:
      'We embed review cadences and internal ownership so improvements stick, teams adopt new ways of working confidently, and the operating model continues to mature.',
    keyQuestion: 'How do we ensure the business stays disciplined and adaptable as it grows?',
    outputs: [
      'Post-implementation adoption review',
      'Continuous improvement governance rhythm',
      'Scalable operating foundation for growth',
    ],
  },
];

export const INDUSTRIES: IndustryProfile[] = [
  {
    id: 'construction',
    name: 'Construction',
    operationalReality:
      'Project-driven environments balancing site coordination, subcontractor handoffs, estimating, variations, and compliance across dispersed teams.',
    commonBottlenecks: [
      'Disconnection between estimating, procurement, site supervision, and finance',
      'Variation approvals and site progress updates trapped in informal messages',
      'Manual collation of compliance records and subcontractor documentation',
    ],
    transformationFocus:
      'Aligning pre-construction, site delivery, and commercial control into a single transparent workflow before introducing field automation.',
    isIllustrative: true,
    illustrativeScenario: {
      label: 'Illustrative Operational Scenario — Not a completed client engagement',
      title: 'How a growing construction firm resolves site-to-office fragmentation',
      context:
        'In a typical mid-market construction business, project managers, estimators, and finance teams often operate across disconnected spreadsheets, email threads, and site notes—creating slow invoicing cycles and late visibility of margin drift.',
      structuralIntervention:
        'Applying a business-first sequence begins by standardising job setup, variation sign-off rules, and cost-tracking handoffs between site and commercial teams before automating document routing and progress reporting.',
      outcomeDirection:
        'Clearer commercial visibility across active projects, fewer administrative bottlenecks for site leads, and reliable alignment between field progress and financial control.',
    },
  },
  {
    id: 'engineering',
    name: 'Engineering',
    operationalReality:
      'High-precision technical delivery where project governance, design revisions, resource scheduling, and quality assurance must remain tightly synchronised.',
    commonBottlenecks: [
      'Engineering talent spending excessive hours on administrative status reporting',
      'Version control gaps between technical specification, procurement, and delivery',
      'Inconsistent project handover and capacity forecasting',
    ],
    transformationFocus:
      'Protecting technical billable capacity by structuring revision control, resource visibility, and automated project administration.',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    operationalReality:
      'Multi-stage production environments reliant on accurate demand planning, inventory coordination, scheduling discipline, and shop-floor visibility.',
    commonBottlenecks: [
      'Manual production scheduling and reactive expediting between sales and floor teams',
      'Inventory and supplier lead-time blind spots across legacy systems',
      'Paper or spreadsheet-based quality and maintenance tracking',
    ],
    transformationFocus:
      'Connecting order intake, production planning, procurement, and quality workflows to reduce operational friction and improve throughput predictability.',
  },
  {
    id: 'logistics',
    name: 'Logistics',
    operationalReality:
      'Time-critical dispatch, fleet coordination, warehousing, and customer communication operating under tight margin and service-level pressures.',
    commonBottlenecks: [
      'Fragmented booking intake and manual dispatch re-entry',
      'Exception handling and proof-of-delivery chasing across disconnected channels',
      'Delayed billing due to unverified job completion records',
    ],
    transformationFocus:
      'Streamlining order-to-dispatch-to-invoice flows and automating routine exception notifications without adding dispatcher complexity.',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    operationalReality:
      'Knowledge-intensive firms where client onboarding, matter or engagement delivery, utilisation, and billing depend on consistent internal execution.',
    commonBottlenecks: [
      'Inconsistent client onboarding and fragmented document collection',
      'Senior practitioners bogged down in repetitive drafting and status coordination',
      'Disconnected time capture, scope tracking, and invoicing workflows',
    ],
    transformationFocus:
      'Standardising engagement delivery lifecycles and applying governed AI synthesis and workflow automation where confidentiality and accuracy are paramount.',
  },
  {
    id: 'trades',
    name: 'Trades',
    operationalReality:
      'High-volume field service and specialist trade businesses managing quoting, scheduling, field execution, parts tracking, and rapid invoicing.',
    commonBottlenecks: [
      'Quoting backlogs and missed follow-ups between site visits and office admin',
      'Field technicians chasing job details or returning incomplete paperwork',
      'Founder or operations manager acting as the sole coordination hub',
    ],
    transformationFocus:
      'Designing simple, dependable job-to-cash structures that let field teams execute cleanly while reducing back-office bottlenecks.',
  },
  {
    id: 'property',
    name: 'Property',
    operationalReality:
      'Asset, development, and property management portfolios coordinating tenant workflows, maintenance contractors, compliance schedules, and reporting.',
    commonBottlenecks: [
      'Maintenance requests and contractor coordination scattered across email and phone calls',
      'Manual compliance tracking across disparate assets and portfolios',
      'Time-consuming owner and stakeholder reporting cycles',
    ],
    transformationFocus:
      'Structuring portfolio operations, automated maintenance triage, and consistent compliance governance across every asset.',
  },
  {
    id: 'retail',
    name: 'Retail',
    operationalReality:
      'Omnichannel and multi-site operations balancing purchasing, stock accuracy, supplier coordination, fulfilment, and customer service consistency.',
    commonBottlenecks: [
      'Disconnected inventory records between storefront, warehouse, and online channels',
      'Manual supplier replenishment and margin reconciliation',
      'Repetitive customer enquiry handling lacking structured routing',
    ],
    transformationFocus:
      'Synchronising inventory, procurement, and fulfilment workflows so growth does not multiply back-office overhead.',
  },
  {
    id: 'smes',
    name: 'SMEs',
    operationalReality:
      'Ambitious small and medium enterprises transitioning from founder-led agility to structured, scalable operational management.',
    commonBottlenecks: [
      'Critical processes existing only in key individuals’ heads',
      'A patchwork of disconnected cloud tools accumulated over years of growth',
      'Desire to modernise and adopt AI without disrupting day-to-day trading',
    ],
    transformationFocus:
      'Establishing practical operational foundations, clarifying accountability, and introducing high-return automation at a pace the team can sustain.',
  },
];

export const OUTCOME_PILLARS: OutcomePillar[] = [
  {
    index: '01',
    title: 'Operational Clarity Before Capital Spend',
    description:
      'Leadership gains an objective architectural view of how work moves through the organisation—preventing costly software purchases that fail to address root causes.',
    structuralShift: 'From fragmented assumptions to verified workflow visibility',
  },
  {
    index: '02',
    title: 'Reduced Manual Friction & Rework',
    description:
      'Streamlined handoffs and connected workflows eliminate repetitive data re-entry, chasing, and avoidable operational errors across departments.',
    structuralShift: 'From informal workarounds to repeatable execution',
  },
  {
    index: '03',
    title: 'Practical, Governed Technology Adoption',
    description:
      'Automation and AI are deployed selectively around proven processes with clear human accountability, ensuring teams actually use what is built.',
    structuralShift: 'From isolated pilots to embedded operational capability',
  },
  {
    index: '04',
    title: 'Leadership Capacity for Sustainable Growth',
    description:
      'With routine coordination structured and reliable, directors and operational leaders reclaim attention for commercial strategy, client relationships, and expansion.',
    structuralShift: 'From constant firefighting to designed scalability',
  },
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'why-technology-first-fails',
    title: 'Why Technology-First Transformation Fails Mid-Market Organisations',
    category: 'Philosophy',
    readTime: '5 min read',
    editorialTag: 'Operational Architecture',
    excerpt:
      'Purchasing software before understanding operational structure rarely solves inefficiency. It simply digitises existing friction at higher cost.',
    paragraphs: [
      'Across mid-market organisations, transformation initiatives frequently begin with a tool selection meeting. Leadership recognises rising administrative load, fragmented reporting, or delayed delivery, and concludes that a new ERP, CRM, or AI platform will resolve the strain.',
      'In practice, technology amplifies whatever operational design already exists. When approval pathways are ambiguous, data definitions vary across departments, or handoffs rely on informal heroics, software deployment simply hard-codes those inconsistencies into a more expensive interface.',
      'A business-first architecture reverses the sequence. Before evaluating tools, leadership must map how work actually travels from commercial commitment to cash collection—identifying where decisions stall, where information is re-keyed, and which exceptions create recurring noise.',
      'Only after processes are simplified and ownership is clear should automation or AI be introduced. When technology follows structural clarity, implementation becomes smaller, faster to adopt, and genuinely aligned with commercial outcomes.',
    ],
    keyTakeaway:
      'Never automate or digitise an unexamined process. Simplify the operating design first, then apply technology where it compounds clarity.',
  },
  {
    id: 'architecture-of-operational-handoffs',
    title: 'The Hidden Cost of Poor Operational Handoffs',
    category: 'Process Design',
    readTime: '4 min read',
    editorialTag: 'Structural Analysis',
    excerpt:
      'Most operational inefficiency does not happen inside individual departments—it accumulates in the unowned spaces between them.',
    paragraphs: [
      'Departments rarely underperform in isolation. Sales teams close work, technical or site teams deliver it, and finance teams invoice it. Yet when leaders examine why delivery slows or margins erode, the root cause almost always sits at the boundary between functions.',
      'Every unclear handoff creates a cascade of defensive workarounds: confirmation emails, duplicate spreadsheets, status meetings, and manual checking. Over time, capable staff spend a growing share of their week compensating for missing structure.',
      'Designing better business means treating handoffs as explicit architectural joints. Each transition requires clear entry criteria, agreed data standards, defined ownership, and visible exception handling.',
      'Once those joints hold cleanly, cross-functional teams move faster with less management intervention—and leadership regains accurate, timely visibility without demanding constant manual updates.',
    ],
    keyTakeaway:
      'Treat cross-functional handoffs as precision structural joints with clear inputs, ownership, and exception rules.',
  },
  {
    id: 'practical-ai-without-the-hype',
    title: 'Practical AI Strategy for Established Operations',
    category: 'AI & Automation',
    readTime: '6 min read',
    editorialTag: 'Practical Innovation',
    excerpt:
      'Commercial value from AI comes from disciplined integration into high-friction workflows—not from speculative experiments detached from daily operations.',
    paragraphs: [
      'Executive teams are surrounded by pressure to adopt artificial intelligence, yet most established businesses do not need experimental research projects. They need dependable operational improvements that respect governance, accuracy, and staff adoption.',
      'The most effective entry points are rarely flashy. They sit in structured information triage, document synthesis, consistent drafting against company standards, and intelligent routing of routine operational inputs—always paired with human review where commercial judgement matters.',
      'Equally important is knowing where traditional deterministic workflow automation is superior to AI. Moving verified figures between core systems should be predictable and rule-based, not probabilistic.',
      'By pairing process discipline with selective AI and dependable automation, organisations capture tangible operational leverage while maintaining full confidence in their controls.',
    ],
    keyTakeaway:
      'Use deterministic automation for structured rules and governed AI for unstructured synthesis—always anchored to a clear operational bottleneck.',
  },
];

export const SOLUTION_TRACKS: SolutionTrack[] = [
  {
    index: '01',
    title: 'Operational Diagnostic & Structural Blueprint',
    trigger: 'When growth has created complexity, rising overhead, or inconsistent execution.',
    architecture:
      'A focused discovery and analysis engagement establishing end-to-end process clarity, bottleneck isolation, and a sequenced transformation blueprint.',
    sequence: ['Discover', 'Analyse', 'Future-State Blueprint'],
  },
  {
    index: '02',
    title: 'End-to-End Process Redesign & Alignment',
    trigger: 'When cross-functional handoffs, approvals, or delivery standards are breaking down.',
    architecture:
      'Redesigning core commercial and operational workflows with department leads to establish clear ownership, cadence, and repeatable execution.',
    sequence: ['Workflow Simplification', 'Ownership Matrix', 'Operating Cadence'],
  },
  {
    index: '03',
    title: 'Connected Workflow Automation',
    trigger: 'When teams lose hours re-keying data or chasing status across disconnected tools.',
    architecture:
      'Designing and implementing resilient integrations and automated routing on top of stabilised, clean operational rules.',
    sequence: ['Process Validation', 'System Integration', 'Controlled Automation'],
  },
  {
    index: '04',
    title: 'Pragmatic AI Strategy & Deployment',
    trigger: 'When leadership wants practical, governed AI adoption anchored to real business value.',
    architecture:
      'Evaluating operational readiness, defining governance guardrails, and deploying targeted assistive AI workflows with human oversight.',
    sequence: ['Readiness Assessment', 'Governance & Guardrails', 'Targeted Deployment'],
  },
];
