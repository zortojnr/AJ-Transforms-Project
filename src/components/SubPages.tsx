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
  PLACEHOLDER_DIRECTORY,
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
    <section className="bg-[#101B2D] text-[#F5F3EE] pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#24344D]">
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
        kicker={`About ${BRAND.name}`}
        title="Commercially intelligent operational design."
        subtitle={`${BRAND.positioning} Led by ${BRAND.principal}, ${BRAND.name} helps mid-market organisations replace operational friction with deliberate, scalable systems.`}
        onBackHome={() => onNavigate('home')}
      />

      <section className="bg-[#F5F3EE] py-20 lg:py-24 border-b border-[#E0DBD0]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: EASE_ARCH }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C7046]">
              Our Standpoint
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#101B2D]">
              &ldquo;{BRAND.philosophy}&rdquo;
            </h2>
            <p className="text-[15px] text-[#303640] leading-relaxed">
              Many transformation efforts stall because technology is introduced
              before the organisation understands how work actually flows. We
              approach transformation as an architectural discipline: observing
              real operations, diagnosing structural bottlenecks, simplifying
              workflows, and only then applying automation or AI where it
              creates dependable value.
            </p>
            <p className="text-xs text-[#6A7381]">
              {PLACEHOLDER_DIRECTORY.credentialsNotice}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE_ARCH }}
            className="lg:col-span-6"
          >
            <div className="group aspect-[16/10] overflow-hidden border border-[#D8D3C8]">
              <ResilientImage
                src={MEDIA_ASSETS.consultancyStudio}
                alt="Minimalist executive strategy room with midnight navy walls and pale travertine table"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                fallbackTitle="Consultancy Strategy Environment"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8 border border-[#D8D3C8] p-8 sm:p-12 bg-[#F9F8F5]">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl text-[#101B2D]">
              Begin with a structured diagnostic conversation
            </h2>
            <p className="text-sm text-[#4A5260] leading-relaxed">
              Discuss your operational priorities directly with {BRAND.principal}.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onStartConsultation('Full Operational Diagnostic')}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#101B2D] text-[#F5F3EE] hover:bg-[#1C2D47] text-sm font-semibold whitespace-nowrap shrink-0 min-h-[44px]"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
          </button>
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

      <section className="bg-[#F5F3EE] py-20 lg:py-24">
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

      <section className="bg-[#F5F3EE] py-20 lg:py-24 border-b border-[#E0DBD0]">
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

      <section className="bg-[#101B2D] text-[#F5F3EE] py-16 lg:py-20">
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

      <section className="bg-[#F5F3EE] py-20 lg:py-24">
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

        <section className="bg-[#F5F3EE] py-16 lg:py-24">
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

      <section className="bg-[#F5F3EE] py-16 lg:py-24">
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
                  className="bg-white border border-[#D8D3C8] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
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
        subtitle="Tell us about your organisation’s operational context. We respond directly to senior decision-makers with a clear view on whether and how we can help."
        onBackHome={() => onNavigate('home')}
      />

      <section className="bg-[#F5F3EE] py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_ARCH }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white border border-[#D8D3C8] p-8 space-y-5">
              <h2 className="font-display text-3xl text-[#101B2D]">
                Direct Consultancy Details
              </h2>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="block text-xs uppercase tracking-[0.12em] text-[#8994A3]">
                    Principal
                  </span>
                  <span className="font-medium text-[#101B2D]">
                    {BRAND.principal} · {BRAND.principalRole}
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.12em] text-[#8994A3]">
                    Business Email
                  </span>
                  <span className="font-medium text-[#101B2D]">
                    {PLACEHOLDER_DIRECTORY.email}
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.12em] text-[#8994A3]">
                    Telephone
                  </span>
                  <span className="font-medium text-[#101B2D]">
                    {PLACEHOLDER_DIRECTORY.telephone}
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.12em] text-[#8994A3]">
                    Region
                  </span>
                  <span className="text-[#4A5260]">
                    {PLACEHOLDER_DIRECTORY.officeRegion}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#101B2D] text-[#F5F3EE] p-8 space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl text-[#F5F3EE]">
                What to expect in an initial call
              </h3>
              <ul className="space-y-3 text-sm text-[#C6CED9]">
                <li>
                  01. A focused discussion of your commercial priorities and
                  operational friction—no generic slide decks.
                </li>
                <li>
                  02. Candid assessment of whether process redesign, workflow
                  automation, or diagnostic analysis is the right first step.
                </li>
                <li>
                  03. Clear outline of scope and next steps if there is mutual fit.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE_ARCH }}
            className="lg:col-span-7 bg-white border border-[#D8D3C8] p-7 sm:p-10"
          >
            <ConsultationForm theme="light" initialFocus={initialFocus} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
