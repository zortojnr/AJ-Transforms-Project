import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import {
  BRAND,
  CAPABILITIES,
  INDUSTRIES,
  INSIGHTS,
  MEDIA_ASSETS,
  METHODOLOGY_STAGES,
  SOLUTION_TRACKS,
  type RouteKey,
} from '../data/consultancyData';
import { ConsultationForm } from './ConsultationForm';
import { ResilientImage } from './ResilientImage';

const EASE_ARCH: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface SubPageHeaderProps {
  kicker: string;
  title: string;
  subtitle: string;
  onBackHome: () => void;
}

function SubPageHeader({
  kicker,
  title,
  subtitle,
  onBackHome,
}: SubPageHeaderProps) {
  return (
    <section className="bg-[#101B2D] text-[#F5F3EE] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-[#24344D]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-6">
        <button
          type="button"
          onClick={onBackHome}
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#B69A70] hover:text-[#F5F3EE] transition-colors min-h-[40px]"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-x-1" />
          <span>Return to Home</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_ARCH }}
          className="max-w-3xl space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B69A70]">
            {kicker}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[4rem] leading-[1.04] text-[#F5F3EE]">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-[#C6CED9] leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutPage({
  onNavigate,
  onStartConsultation,
}: {
  onNavigate: (route: RouteKey) => void;
  onStartConsultation: (focus?: string) => void;
}) {
  return (
    <div>
      <SubPageHeader
        kicker="About Us"
        title="Transforming how businesses work, from the inside out."
        subtitle="We help businesses identify operational challenges, understand their causes and improve how work gets done."
        onBackHome={() => onNavigate('home')}
      />

      <section className="bg-[#F5F3EE] py-12 sm:py-16 lg:py-24 border-b border-[#E0DBD0]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C7046]">
                Section 01 – Introduction
              </p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[#101B2D]">
                About AJ Transforms
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-[15px] sm:text-[16px] text-[#303640] leading-relaxed">
              <p>
                Every business has opportunities to improve. But identifying where those opportunities exist is not always straightforward.
              </p>
              <p>
                Inefficient processes, disconnected systems, repetitive administrative tasks and unclear workflows can quietly drain time, money and productivity while affecting the quality of customer service.
              </p>
              <p>
                AJ Transforms helps businesses identify these operational challenges, understand their underlying causes and develop practical ways to improve how work gets done.
              </p>
              <p>
                We focus on making business operations more efficient, connected and scalable through better processes, smarter systems, workflow automation and the appropriate use of artificial intelligence.
              </p>
              <p>
                Our objective is simple: help businesses spend less time dealing with operational inefficiencies and more time focusing on their customers, people and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-24 border-b border-[#E0DBD0]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C7046]">
              Section 02 – Our Standpoint
            </p>
          </div>
          <div className="lg:col-span-8 space-y-5 text-[15px] sm:text-[16px] text-[#303640] leading-relaxed">
            <h2 className="font-display text-3xl sm:text-4xl text-[#101B2D]">
              We don&apos;t begin with technology. We begin with understanding your business.
            </h2>
            <p>
              Technology alone does not transform a business. Introducing new software, automation or artificial intelligence into an inefficient process can simply make an existing problem happen faster.
            </p>
            <p>
              Before recommending a solution, we believe it is essential to understand how a business actually operates.
            </p>
            <p>
              How does work move from one stage to another? Where do delays occur? Which activities depend too heavily on manual input? Where are information gaps, duplicated tasks or unnecessary steps affecting performance?
            </p>
            <p>
              These questions help uncover the operational issues that are not always immediately visible. At AJ Transforms, we believe meaningful transformation starts with understanding the problem, not choosing the technology.
            </p>
            <p>
              By establishing a clear picture of the current situation, we can identify improvements that are relevant, practical and commercially worthwhile.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F3EE] py-12 sm:py-16 lg:py-24 border-b border-[#E0DBD0]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C7046]">
              Section 03 – Who We Are
            </p>
          </div>
          <div className="lg:col-span-8 space-y-5 text-[15px] sm:text-[16px] text-[#303640] leading-relaxed">
            <h2 className="font-display text-3xl sm:text-4xl text-[#101B2D]">
              A business transformation consultancy focused on better ways of working.
            </h2>
            <p>
              AJ Transforms is a business transformation consultancy that helps organisations examine, improve and strengthen the way they operate.
            </p>
            <p>
              We work with growing small and medium-sized businesses, as well as established organisations, that want to improve operational efficiency, reduce unnecessary costs and create better ways of working.
            </p>
            <p>
              Our focus is on the relationship between people, processes, systems and technology.
            </p>
            <p>
              We recognise that operational challenges rarely exist in isolation. A delay in one department can affect another. A manual process can create unnecessary administration. Disconnected systems can make it difficult for teams to access the information they need. Over time, these issues can affect productivity, costs and customer experience.
            </p>
            <p>
              Our role is to help businesses see the bigger picture, identify where improvements are needed and determine the most appropriate way forward.
            </p>
            <p>
              We take a practical, business-first approach. Rather than recommending technology for its own sake, we focus on solutions that address genuine operational needs and support measurable business improvement.
            </p>
            <p>We believe that better businesses are built through better ways of working.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-24 border-b border-[#E0DBD0]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C7046]">
            Section 04 – Our Approach
          </p>
          <h2 className="mt-4 mb-10 font-display text-3xl sm:text-4xl text-[#101B2D]">
            Understand first. Improve with purpose. Transform with confidence.
          </h2>
          <p className="max-w-3xl mb-10 text-[15px] sm:text-[16px] text-[#303640] leading-relaxed">
            Every business is different. That is why we do not believe in applying the same solution to every organisation. Our approach is structured around understanding the business, identifying opportunities and developing improvements that address the real issues.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#D8D3C8] border border-[#D8D3C8]">
            {[
              ['1', 'Understand the Business', 'We begin by learning how the organisation operates. This involves understanding existing processes, workflows, responsibilities, systems and the way information moves across the business. We look at how everyday activities are carried out, where challenges arise and what matters most to the organisation.'],
              ['2', 'Identify the Opportunities', 'Once we understand the current operation, we examine where time, money and resources may be lost. This could include repetitive manual tasks, unnecessary administration, duplicated work, process delays, disconnected systems or inefficient communication. We distinguish between symptoms and underlying causes so improvements address the right issues.'],
              ['3', 'Redesign and Simplify Processes', 'Before introducing new technology, we consider how existing processes can be improved. This may involve removing unnecessary steps, clarifying responsibilities, improving handovers, simplifying workflows and creating more consistent ways of working.'],
              ['4', 'Apply Automation and AI Where Appropriate', 'Once processes have been properly understood and improved, we identify opportunities where technology can add value. This may include workflow automation, reducing repetitive administration, improving information management, connecting systems and applying artificial intelligence to suitable business activities.'],
              ['5', 'Support Sustainable Improvement', 'Transformation should deliver lasting value, not just a short-term change. We help businesses establish better operating practices, improve consistency and create systems that support future growth. Improvements can be assessed against objectives such as time saved, reduced manual effort, fewer errors and improved customer experience.'],
            ].map(([index, title, copy]) => (
              <article key={index} className="bg-[#F9F8F5] p-6 space-y-4">
                <span className="text-xs font-semibold tracking-[0.16em] text-[#8C7046]">{index.padStart(2, '0')}</span>
                <h3 className="font-display text-xl text-[#101B2D]">{title}</h3>
                <p className="text-sm text-[#4A5260] leading-relaxed">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C7046]">
            Section 05 – Call to Action
          </p>
          <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-8 border border-[#D8D3C8] p-8 sm:p-12 bg-[#F9F8F5]">
            <div className="space-y-4 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl text-[#101B2D]">
              Let&apos;s start with your business.
            </h2>
            <p className="text-sm text-[#4A5260] leading-relaxed">
              Every business has its own challenges, priorities and opportunities for improvement. Perhaps your team spends too much time on repetitive administration. Maybe processes have become complicated as the business has grown, or different systems and departments are not working together effectively.
            </p>
            <p className="text-sm text-[#4A5260] leading-relaxed">
              Whatever the challenge, the first step is understanding what is happening and where improvements can make a difference. Start a conversation with AJ Transforms. Tell us about your business, your operational priorities and the challenges you want to address.
            </p>
            <p className="text-sm font-semibold text-[#101B2D]">
              Better processes. Smarter operations. Sustainable growth.
            </p>
            </div>
            <button
              type="button"
              onClick={() => onStartConsultation('About Us Consultation')}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#101B2D] text-[#F5F3EE] hover:bg-[#1C2D47] text-sm font-semibold whitespace-nowrap shrink-0 min-h-[44px]"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function CapabilitiesPage({
  onNavigate,
  onStartConsultation,
}: {
  onNavigate: (route: RouteKey) => void;
  onStartConsultation: (focus?: string) => void;
}) {
  return (
    <div>
      <SubPageHeader
        kicker="Capabilities"
        title="Six interconnected disciplines for structural clarity."
        subtitle="From end-to-end process diagnosis through workflow automation and governed AI implementation, every capability follows a strict business-first sequence."
        onBackHome={() => onNavigate('home')}
      />

      <section className="bg-[#F5F3EE] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-6">
          {CAPABILITIES.map((cap, idx) => (
            <motion.article
              key={cap.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: EASE_ARCH }}
              className="bg-white border border-[#D8D3C8] p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-semibold tabular-nums tracking-[0.14em] text-[#8C7046]">
                  Capability {cap.index}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#101B2D]">
                  {cap.title}
                </h2>
                <p className="text-sm text-[#4A5260] leading-relaxed">
                  {cap.description}
                </p>
                <button
                  type="button"
                  onClick={() => onStartConsultation(cap.title)}
                  className="group mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#101B2D] hover:text-[#8C7046] min-h-[40px]"
                >
                  <span>Enquire about {cap.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </button>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:border-l lg:border-[#EAE6DC] lg:pl-8">
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8994A3]">
                    Business Problem
                  </h3>
                  <p className="text-sm text-[#303640] leading-relaxed">
                    {cap.businessProblem}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8C7046]">
                    Our Intervention
                  </h3>
                  <p className="text-sm text-[#303640] leading-relaxed">
                    {cap.intervention}
                  </p>
                </div>
                <div className="sm:col-span-2 pt-4 border-t border-[#EAE6DC]">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#101B2D] mb-2">
                    Core Deliverables
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#4A5260]">
                    {cap.deliverables.map((d, i) => (
                      <span key={d}>
                        0{i + 1}. {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function SolutionsPage({
  onNavigate,
  onStartConsultation,
}: {
  onNavigate: (route: RouteKey) => void;
  onStartConsultation: (focus?: string) => void;
}) {
  return (
    <div>
      <SubPageHeader
        kicker="Solutions & Engagement Models"
        title="Practical transformation pathways tailored to operational need."
        subtitle="Structured engagements designed around where your organisation currently stands—from initial diagnostic clarity to connected automation and AI governance."
        onBackHome={() => onNavigate('home')}
      />

      <section className="bg-[#F5F3EE] py-12 sm:py-16 lg:py-24 border-b border-[#E0DBD0]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTION_TRACKS.map((track, idx) => (
            <motion.article
              key={track.index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: EASE_ARCH }}
              className="bg-white border border-[#D8D3C8] p-8 sm:p-10 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="text-xs font-semibold tabular-nums tracking-[0.14em] text-[#8C7046]">
                  Track {track.index}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#101B2D]">
                  {track.title}
                </h2>
                <p className="text-xs font-semibold text-[#101B2D]">
                  When to engage:{' '}
                  <span className="font-normal text-[#4A5260]">
                    {track.trigger}
                  </span>
                </p>
                <p className="text-sm text-[#303640] leading-relaxed">
                  {track.architecture}
                </p>
              </div>

              <div className="pt-5 border-t border-[#EAE6DC] flex items-center justify-between gap-4">
                <div className="text-xs text-[#6A7381]">
                  {track.sequence.join(' · ')}
                </div>
                <button
                  type="button"
                  onClick={() => onStartConsultation(track.title)}
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#101B2D] hover:text-[#8C7046] shrink-0 min-h-[40px]"
                >
                  <span>Select</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-[#101B2D] text-[#F5F3EE] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B69A70] mb-6">
            Five-Stage Delivery Spine
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {METHODOLOGY_STAGES.map((m) => (
              <div
                key={m.code}
                className="p-5 border border-[#24344D] bg-[#142238] space-y-2"
              >
                <span className="text-xs tabular-nums text-[#B69A70] font-semibold">
                  {m.index}
                </span>
                <h3 className="text-sm font-semibold tracking-[0.12em]">
                  {m.code}
                </h3>
                <p className="text-xs text-[#C6CED9] leading-relaxed">
                  {m.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function IndustriesPage({
  onNavigate,
  onStartConsultation,
}: {
  onNavigate: (route: RouteKey) => void;
  onStartConsultation: (focus?: string) => void;
}) {
  return (
    <div>
      <SubPageHeader
        kicker="Industries Served"
        title="Nine sectors where operational discipline drives margin."
        subtitle="While commercial contexts differ, disconnected workflows, manual re-entry, and coordination friction appear across every growing mid-market sector."
        onBackHome={() => onNavigate('home')}
      />

      <section className="bg-[#F5F3EE] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-6">
          {INDUSTRIES.map((industry, idx) => (
            <motion.article
              key={industry.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.48, delay: (idx % 3) * 0.05, ease: EASE_ARCH }}
              className="bg-white border border-[#D8D3C8] p-7 sm:p-10 space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EAE6DC]">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs tabular-nums font-semibold text-[#8C7046]">
                    0{idx + 1}
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl text-[#101B2D]">
                    {industry.name}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onStartConsultation(`${industry.name} Operations`)
                  }
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#101B2D] hover:text-[#8C7046] min-h-[40px]"
                >
                  <span>Discuss {industry.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </button>
              </div>

              <p className="text-sm sm:text-[15px] text-[#303640] leading-relaxed max-w-4xl">
                {industry.operationalReality}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8994A3] mb-2">
                    Common Bottlenecks
                  </h3>
                  <ul className="space-y-1.5 text-sm text-[#4A5260]">
                    {industry.commonBottlenecks.map((b) => (
                      <li key={b}>— {b}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8C7046] mb-2">
                    Transformation Focus
                  </h3>
                  <p className="text-sm text-[#101B2D] leading-relaxed">
                    {industry.transformationFocus}
                  </p>
                </div>
              </div>

              {industry.illustrativeScenario && (
                <div className="mt-4 bg-[#F5F3EE] border border-[#B69A70] p-6 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8C7046]">
                    {industry.illustrativeScenario.label}
                  </p>
                  <h3 className="font-display text-2xl text-[#101B2D]">
                    {industry.illustrativeScenario.title}
                  </h3>
                  <p className="text-sm text-[#4A5260] leading-relaxed">
                    {industry.illustrativeScenario.context}
                  </p>
                  <p className="text-sm text-[#303640] leading-relaxed">
                    {industry.illustrativeScenario.structuralIntervention}
                  </p>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function InsightsPage({
  selectedArticleId,
  onSelectArticle,
  onNavigate,
  onStartConsultation,
}: {
  selectedArticleId: string | null;
  onSelectArticle: (id: string | null) => void;
  onNavigate: (route: RouteKey) => void;
  onStartConsultation: (focus?: string) => void;
}) {
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const categories = ['All', 'Philosophy', 'Process Design', 'AI & Automation'];

  const activeArticle = selectedArticleId
    ? INSIGHTS.find((a) => a.id === selectedArticleId) ?? null
    : null;

  const filtered =
    categoryFilter === 'All'
      ? INSIGHTS
      : INSIGHTS.filter((a) => a.category === categoryFilter);

  if (activeArticle) {
    return (
      <div>
        <SubPageHeader
          kicker={`${activeArticle.category} · ${activeArticle.readTime}`}
          title={activeArticle.title}
          subtitle={activeArticle.excerpt}
          onBackHome={() => onSelectArticle(null)}
        />

        <section className="bg-[#F5F3EE] py-12 sm:py-16 lg:py-24">
          <div className="max-w-[820px] mx-auto px-5 sm:px-8 space-y-8">
            <button
              type="button"
              onClick={() => onSelectArticle(null)}
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8C7046] hover:text-[#101B2D] min-h-[40px]"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-x-1" />
              <span>All Insights</span>
            </button>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE_ARCH }}
              className="bg-white border border-[#D8D3C8] p-8 sm:p-12 space-y-6"
            >
              {activeArticle.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-base text-[#303640] leading-[1.8]"
                >
                  {para}
                </p>
              ))}

              <div className="mt-8 pt-6 border-t border-[#EAE6DC] space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8C7046]">
                  Architectural Principle
                </p>
                <p className="font-display text-2xl sm:text-3xl italic text-[#101B2D]">
                  {activeArticle.keyTakeaway}
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
              <span className="text-sm text-[#4A5260]">
                Considering how this applies to your organisation?
              </span>
              <button
                type="button"
                onClick={() => onStartConsultation(activeArticle.category)}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#101B2D] text-[#F5F3EE] hover:bg-[#1C2D47] text-xs font-semibold uppercase tracking-wider min-h-[44px]"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <SubPageHeader
        kicker="Insights & Thought Leadership"
        title="Essays on operational architecture and practical innovation."
        subtitle="Clear, non-promotional briefings written for directors and operational leaders navigating growth, process complexity, and technology adoption."
        onBackHome={() => onNavigate('home')}
      />

      <section className="bg-[#F5F3EE] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-10">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors min-h-[40px] ${
                  categoryFilter === cat
                    ? 'bg-[#101B2D] border-[#101B2D] text-[#F5F3EE]'
                    : 'bg-white border-[#D8D3C8] text-[#303640] hover:border-[#B69A70]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={categoryFilter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: EASE_ARCH }}
              className="grid grid-cols-1 gap-6"
            >
              {filtered.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-[#D8D3C8] p-5 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6"
                >
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex items-center gap-2 text-xs text-[#6A7381]">
                      <span className="font-semibold text-[#8C7046]">
                        {article.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.editorialTag}</span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl text-[#101B2D]">
                      {article.title}
                    </h2>
                    <p className="text-sm sm:text-[15px] text-[#4A5260] leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectArticle(article.id)}
                    className="group inline-flex items-center gap-2 px-6 py-3 border border-[#101B2D] text-[#101B2D] hover:bg-[#101B2D] hover:text-[#F5F3EE] text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
                  >
                    <span>Read Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                  </button>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

export function ContactPage({
  initialFocus,
  onNavigate,
}: {
  initialFocus?: string;
  onNavigate: (route: RouteKey) => void;
}) {
  return (
    <div>
      <SubPageHeader
        kicker={`Contact ${BRAND.name}`}
        title="Begin a business-first conversation."
        subtitle="Use the form to prepare a consultation brief about your organisation’s operational context. This page does not send or store submissions."
        onBackHome={() => onNavigate('home')}
      />

      <section className="bg-[#F5F3EE] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_ARCH }}
            className="order-2 lg:order-1 lg:col-span-5 space-y-6 sm:space-y-8"
          >
            <div className="bg-white border border-[#D8D3C8] p-5 sm:p-8 space-y-4 sm:space-y-5">
              <h2 className="font-display text-3xl text-[#101B2D]">
                Prepare a consultation brief
              </h2>
              <p className="text-sm text-[#4A5260] leading-relaxed">
                Describe the operational challenge, goals, and context you want
                to discuss. Your entries stay in this page and are not submitted
                to a server.
              </p>
            </div>

            <div className="bg-[#101B2D] text-[#F5F3EE] p-5 sm:p-8 space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl text-[#F5F3EE]">
                What to include
              </h3>
              <ul className="space-y-3 text-sm text-[#C6CED9]">
                <li>
                  01. The workflow or operational challenge you want to address.
                </li>
                <li>
                  02. The business goals and practical constraints involved.
                </li>
                <li>
                  03. Any process, systems, or teams already involved.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE_ARCH }}
            className="order-1 lg:order-2 lg:col-span-7 bg-white border border-[#D8D3C8] p-5 sm:p-10"
          >
            <ConsultationForm theme="light" initialFocus={initialFocus} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
