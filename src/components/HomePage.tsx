import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import {
  ARCHITECTURAL_STAGES,
  BRAND,
  CAPABILITIES,
  INDUSTRIES,
  INSIGHTS,
  MEDIA_ASSETS,
  METHODOLOGY_STAGES,
  OPERATIONAL_CHALLENGES,
  OUTCOME_PILLARS,
  type RouteKey,
} from '../data/consultancyData';
import { ArchitecturalViewport3D } from './ArchitecturalViewport3D';
import { ConsultationForm } from './ConsultationForm';
import { ResilientImage } from './ResilientImage';

interface HomePageProps {
  onNavigate: (route: RouteKey) => void;
  onOpenInsight: (articleId: string) => void;
  onStartConsultation: (focusTopic?: string) => void;
}

const EASE_ARCH: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HomePage({
  onNavigate,
  onOpenInsight,
  onStartConsultation,
}: HomePageProps) {
  const [heroStageIndex, setHeroStageIndex] = useState(0);
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState(0);
  const [activeMethodologyIndex, setActiveMethodologyIndex] = useState(0);
  const [activeIndustryId, setActiveIndustryId] = useState(INDUSTRIES[0].id);

  const activeStage = ARCHITECTURAL_STAGES[heroStageIndex] ?? ARCHITECTURAL_STAGES[0];
  const activeCapability =
    CAPABILITIES[activeCapabilityIndex] ?? CAPABILITIES[0];
  const activeMethodology =
    METHODOLOGY_STAGES[activeMethodologyIndex] ?? METHODOLOGY_STAGES[0];
  const activeIndustry =
    INDUSTRIES.find((ind) => ind.id === activeIndustryId) ?? INDUSTRIES[0];

  const scrollToMethodology = () => {
    const el = document.getElementById('homepage-methodology');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* 1. HERO & SIGNATURE ARCHITECTURAL EXPERIENCE */}
      <section className="relative bg-[#101B2D] text-[#F5F3EE] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#24344D] overflow-hidden">
        {/* Subtle architectural drafting grid accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #B69A70 1px, transparent 1px), linear-gradient(to bottom, #B69A70 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />

        <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Editorial Proposition */}
            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: EASE_ARCH }}
                  className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#B69A70]"
                >
                  {BRAND.concept}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.08, ease: EASE_ARCH }}
                  className="font-display text-[2.85rem] sm:text-[3.75rem] lg:text-[4.55rem] leading-[1.03] tracking-[-0.02em] text-[#F5F3EE] max-w-xl"
                >
                  Better businesses don&apos;t happen by accident. They&apos;re{' '}
                  <em className="italic text-[#E4D1B3] font-normal">designed.</em>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.16, ease: EASE_ARCH }}
                  className="text-base sm:text-[17px] text-[#C6CED9] leading-[1.7] max-w-xl"
                >
                  {BRAND.philosophy} {BRAND.name} partners with
                  mid-market leadership teams to turn fragmented operations into
                  clear, scalable systems where automation and AI deliver genuine
                  commercial value.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.24, ease: EASE_ARCH }}
                  className="pt-2 flex flex-wrap items-center gap-4"
                >
                  <button
                    type="button"
                    onClick={() => onStartConsultation()}
                    className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#B69A70] text-[#101B2D] hover:bg-[#C9AF87] text-sm font-semibold tracking-wide transition-colors duration-150 min-h-[44px] whitespace-nowrap shrink-0"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={scrollToMethodology}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#324766] text-[#F5F3EE] hover:border-[#B69A70] hover:text-[#B69A70] text-sm font-medium transition-colors duration-150 min-h-[44px] whitespace-nowrap shrink-0"
                  >
                    <span>Explore Methodology</span>
                  </button>
                </motion.div>
              </div>

              {/* Dynamic Architectural Stage Readout synced with 3D model */}
              <div className="mt-10 pt-6 border-t border-[#24344D] min-h-[124px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.28, ease: EASE_ARCH }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2.5 text-xs text-[#8994A3]">
                      <span className="uppercase tracking-[0.14em] text-[#B69A70] font-semibold">
                        Structural State {activeStage.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#F5F3EE] font-medium">
                        {activeStage.label}
                      </span>
                    </div>
                    <p className="text-sm text-[#C6CED9] leading-relaxed max-w-xl">
                      {activeStage.summary}
                    </p>
                    <p className="text-xs text-[#8994A3] leading-relaxed max-w-xl">
                      {activeStage.structuralPrinciple}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Interactive 3D Architectural Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.14, ease: EASE_ARCH }}
              className="lg:col-span-6 flex flex-col"
            >
              <ArchitecturalViewport3D
                activeStageIndex={heroStageIndex}
                onSelectStage={setHeroStageIndex}
              />
            </motion.div>
          </div>

          {/* Full-Width Architectural Positioning Strip below Hero Split */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE_ARCH }}
            className="mt-14 pt-8 border-t border-[#24344D] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <div className="space-y-1">
              <span className="block text-xs uppercase tracking-[0.14em] text-[#B69A70] font-semibold">
                Positioning
              </span>
              <p className="text-sm text-[#F5F3EE] font-medium">
                Operational Excellence
              </p>
            </div>
            <div className="space-y-1">
              <span className="block text-xs uppercase tracking-[0.14em] text-[#B69A70] font-semibold">
                Approach
              </span>
              <p className="text-sm text-[#F5F3EE] font-medium">
                Practical Innovation
              </p>
            </div>
            <div className="space-y-1">
              <span className="block text-xs uppercase tracking-[0.14em] text-[#B69A70] font-semibold">
                Objective
              </span>
              <p className="text-sm text-[#F5F3EE] font-medium">
                Sustainable Growth
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE OPERATIONAL CHALLENGES BUSINESSES FACE */}
      <section className="bg-[#F5F3EE] text-[#303640] py-20 lg:py-28 border-b border-[#E0DBD0]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: EASE_ARCH }}
              className="lg:col-span-5 flex flex-col justify-between gap-8"
            >
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C7046]">
                  Operational Reality
                </p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.06] text-[#101B2D]">
                  Where growing businesses quietly lose momentum
                </h2>
                <p className="text-[15px] sm:text-base text-[#4A5260] leading-relaxed">
                  Most mid-market organisations do not suffer from a lack of
                  effort. Friction emerges when operational structure fails to
                  evolve alongside commercial ambition.
                </p>
              </div>

              <div className="group relative aspect-[16/10] lg:aspect-auto lg:flex-1 min-h-[260px] overflow-hidden border border-[#D8D3C8]">
                <ResilientImage
                  src={MEDIA_ASSETS.atriumLight}
                  alt="Contemporary limestone and brushed brass architectural atrium showing clear geometric structure"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  fallbackTitle="Architectural Structure"
                />
              </div>
            </motion.div>

            <div className="lg:col-span-7 divide-y divide-[#D8D3C8] border-y border-[#D8D3C8]">
              {OPERATIONAL_CHALLENGES.map((challenge, idx) => (
                <motion.article
                  key={challenge.index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: EASE_ARCH,
                  }}
                  className="py-7 first:pt-6 last:pb-6 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start"
                >
                  <div className="sm:col-span-2">
                    <span className="text-xs font-semibold tabular-nums tracking-[0.14em] text-[#8C7046]">
                      {challenge.index}
                    </span>
                  </div>
                  <div className="sm:col-span-10 space-y-2.5">
                    <h3 className="font-display text-[1.75rem] text-[#101B2D]">
                      {challenge.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#303640] leading-relaxed">
                      {challenge.symptom}
                    </p>
                    <p className="text-xs sm:text-[13px] text-[#6A7381] leading-relaxed">
                      <span className="font-semibold text-[#101B2D]">
                        Structural root cause:
                      </span>{' '}
                      {challenge.structuralCause}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. AJ'S BUSINESS-FIRST PHILOSOPHY */}
      <section className="bg-white text-[#303640] py-20 lg:py-28 border-b border-[#E0DBD0]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65, ease: EASE_ARCH }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C7046]">
                  Core Philosophy
                </p>
                <blockquote className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.06] text-[#101B2D]">
                  &ldquo;We don&apos;t begin with technology. We begin with{' '}
                  <em className="italic font-normal text-[#8C7046]">
                    understanding your business.
                  </em>
                  &rdquo;
                </blockquote>
              </div>

              <p className="text-base text-[#4A5260] leading-[1.72] max-w-2xl">
                Software, automation, and AI only deliver lasting returns when
                anchored to sound commercial and operational design. Installing
                new tools onto fragmented workflows simply formalises confusion.
                Our work begins by examining how value is created, where decisions
                stall, and what your teams actually need to perform reliably.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#E4E0D7]">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8994A3]">
                    Common Technology-First Trap
                  </p>
                  <p className="text-sm text-[#4A5260] leading-relaxed">
                    Selecting platforms from feature demonstrations before
                    clarifying handoffs, accountability, or data ownership—leading
                    to unused licenses and persistent spreadsheet workarounds.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8C7046]">
                    AJ Architectural Sequence
                  </p>
                  <p className="text-sm text-[#101B2D] font-medium leading-relaxed">
                    Diagnose commercial friction first, simplify and align core
                    workflows second, and deploy automation or AI strictly where
                    structural leverage is verified.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#101B2D] hover:text-[#8C7046] transition-colors min-h-[44px]"
                >
                  <span>Read more about {BRAND.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65, delay: 0.12, ease: EASE_ARCH }}
              className="lg:col-span-5"
            >
              <div className="group aspect-[4/3] overflow-hidden border border-[#E0DBD0]">
                <ResilientImage
                  src={MEDIA_ASSETS.joineryDetail}
                  alt="Precision interlocking dark slate, travertine stone, and brushed champagne gold structural joinery"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  fallbackTitle="Precision Structural Joinery"
                />
              </div>
              <p className="mt-3 text-xs text-[#6A7381]">
                Structural alignment precedes tooling—every element carries load
                predictably when designed as one system.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SIX CORE CAPABILITIES (Interactive Architectural Index) */}
      <section className="bg-[#F5F3EE] text-[#303640] py-20 lg:py-28 border-b border-[#E0DBD0]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: EASE_ARCH }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D8D3C8]"
          >
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C7046]">
                Core Capabilities
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.06] text-[#101B2D]">
                Six integrated disciplines from diagnosis to execution
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('capabilities')}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#101B2D] hover:text-[#8C7046] transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
            >
              <span>Full Capabilities Overview</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Architectural Index */}
            <div
              className="lg:col-span-5 divide-y divide-[#D8D3C8] border-y border-[#D8D3C8]"
              role="tablist"
              aria-label="Core capabilities selector"
            >
              {CAPABILITIES.map((cap, idx) => {
                const isSelected = idx === activeCapabilityIndex;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveCapabilityIndex(idx)}
                    className={`relative w-full text-left py-4 px-4 flex items-center justify-between gap-4 transition-colors duration-150 min-h-[62px] ${
                      isSelected
                        ? 'text-[#F5F3EE]'
                        : 'bg-transparent text-[#303640] hover:bg-[#EAE6DC]'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="capability-active-bg"
                        transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                        className="absolute inset-0 bg-[#101B2D]"
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative z-10 flex items-baseline gap-4 min-w-0">
                      <span
                        className={`text-xs font-semibold tabular-nums shrink-0 ${
                          isSelected ? 'text-[#B69A70]' : 'text-[#8C7046]'
                        }`}
                      >
                        {cap.index}
                      </span>
                      <span className="font-display text-2xl truncate">
                        {cap.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`relative z-10 w-4 h-4 shrink-0 transition-transform duration-150 ${
                        isSelected
                          ? 'text-[#B69A70] translate-x-0.5'
                          : 'text-[#8994A3]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Active Capability Specification Sheet */}
            <div
              className="lg:col-span-7 bg-white border border-[#D8D3C8] p-7 sm:p-10 min-h-[430px]"
              role="tabpanel"
              aria-label={activeCapability.title}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: EASE_ARCH }}
                  className="space-y-8"
                >
                  <div className="space-y-3 pb-6 border-b border-[#EAE6DC]">
                    <div className="flex items-center gap-3 text-xs text-[#8994A3]">
                      <span className="tabular-nums font-semibold text-[#8C7046] uppercase tracking-[0.14em]">
                        Capability {activeCapability.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{activeCapability.shortThesis}</span>
                    </div>
                    <h3 className="font-display text-3xl sm:text-[2.4rem] text-[#101B2D]">
                      {activeCapability.title}
                    </h3>
                    <p className="text-[15px] text-[#4A5260] leading-relaxed">
                      {activeCapability.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8994A3]">
                        Operational Problem Addressed
                      </h4>
                      <p className="text-sm text-[#303640] leading-relaxed">
                        {activeCapability.businessProblem}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8C7046]">
                        Structural Intervention
                      </h4>
                      <p className="text-sm text-[#303640] leading-relaxed">
                        {activeCapability.intervention}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#EAE6DC] space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#101B2D]">
                      Key Deliverables
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-[13px] text-[#303640]">
                      {activeCapability.deliverables.map((item) => (
                        <li
                          key={item}
                          className="p-3.5 bg-[#F5F3EE] border border-[#E2DFD7] leading-snug"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-[#6A7381]">
                      Principle: {activeCapability.technologyRule}
                    </p>
                    <button
                      type="button"
                      onClick={() => onStartConsultation(activeCapability.title)}
                      className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#101B2D] text-[#F5F3EE] hover:bg-[#1C2D47] text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
                    >
                      <span>Discuss {activeCapability.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FIVE-STAGE TRANSFORMATION METHODOLOGY */}
      <section
        id="homepage-methodology"
        className="bg-[#101B2D] text-[#F5F3EE] py-20 lg:py-28 border-b border-[#24344D]"
      >
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: EASE_ARCH }}
            className="max-w-2xl space-y-3 mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B69A70]">
              Transformation Methodology
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.06] text-[#F5F3EE]">
              A disciplined five-stage sequence from clarity to scale
            </h2>
          </motion.div>

          {/* Interactive Five-Stage Sequence Bar */}
          <div
            className="grid grid-cols-2 sm:grid-cols-5 border border-[#24344D]"
            role="tablist"
            aria-label="Five-stage transformation methodology"
          >
            {METHODOLOGY_STAGES.map((stage, idx) => {
              const isActive = idx === activeMethodologyIndex;
              return (
                <button
                  key={stage.code}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveMethodologyIndex(idx)}
                  className={`relative p-5 text-left border-b sm:border-b-0 sm:border-r last:border-r-0 border-[#24344D] transition-colors duration-150 min-h-[84px] flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#182842]'
                      : 'bg-[#101B2D] hover:bg-[#142238]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="method-active-top"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#B69A70]"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={`text-xs tabular-nums font-semibold ${
                      isActive ? 'text-[#B69A70]' : 'text-[#8994A3]'
                    }`}
                  >
                    {stage.index}
                  </span>
                  <span className="mt-2 text-sm font-semibold tracking-[0.12em] text-[#F5F3EE] whitespace-nowrap">
                    {stage.code}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Specification */}
          <div className="mt-8 bg-[#142238] border border-[#24344D] p-7 sm:p-10 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMethodology.code}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: EASE_ARCH }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-[#8994A3]">
                    <span className="uppercase tracking-[0.14em] text-[#B69A70] font-semibold">
                      Stage {activeMethodology.index}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#F5F3EE]">{activeMethodology.focus}</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-[2.5rem] text-[#F5F3EE]">
                    {activeMethodology.title}
                  </h3>
                  <p className="text-base text-[#C6CED9] leading-relaxed">
                    {activeMethodology.description}
                  </p>
                  <div className="pt-3 border-t border-[#24344D]">
                    <span className="block text-xs uppercase tracking-[0.12em] text-[#8994A3] mb-1">
                      Diagnostic Question
                    </span>
                    <p className="font-display text-2xl sm:text-[1.7rem] italic text-[#E7DEC9]">
                      &ldquo;{activeMethodology.keyQuestion}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 lg:border-l lg:border-[#24344D] lg:pl-8 space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B69A70]">
                    Stage Outputs
                  </h4>
                  <ul className="space-y-3">
                    {activeMethodology.outputs.map((output, i) => (
                      <li
                        key={output}
                        className="flex items-start gap-3 text-sm text-[#C6CED9] py-2 border-b border-[#24344D] last:border-b-0"
                      >
                        <span className="text-xs tabular-nums text-[#B69A70] pt-0.5">
                          0{i + 1}
                        </span>
                        <span>{output}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveMethodologyIndex((prev) =>
                          prev === 0 ? METHODOLOGY_STAGES.length - 1 : prev - 1
                        )
                      }
                      className="px-4 py-2 text-xs font-medium border border-[#2A3D5A] text-[#C6CED9] hover:border-[#B69A70] hover:text-[#F5F3EE] min-h-[40px] transition-colors"
                    >
                      Previous Stage
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveMethodologyIndex(
                          (prev) => (prev + 1) % METHODOLOGY_STAGES.length
                        )
                      }
                      className="px-4 py-2 text-xs font-medium border border-[#B69A70] text-[#B69A70] hover:bg-[#B69A70] hover:text-[#101B2D] transition-colors min-h-[40px]"
                    >
                      Next Stage
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <section className="bg-white text-[#303640] py-20 lg:py-28 border-b border-[#E0DBD0]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: EASE_ARCH }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E0DBD0]"
          >
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C7046]">
                Industries Served
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.06] text-[#101B2D]">
                Operational structure built for real-world commercial environments
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('industries')}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#101B2D] hover:text-[#8C7046] transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
            >
              <span>View All 9 Sectors</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Sector Selector List */}
            <div
              className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2"
              role="tablist"
              aria-label="Industries served"
            >
              {INDUSTRIES.map((industry) => {
                const isSelected = industry.id === activeIndustry.id;
                return (
                  <button
                    key={industry.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveIndustryId(industry.id)}
                    className={`relative px-4 py-3 text-left text-sm font-medium border transition-colors min-h-[44px] flex items-center justify-between ${
                      isSelected
                        ? 'border-[#101B2D] text-[#F5F3EE]'
                        : 'border-[#E0DBD0] bg-[#F9F8F5] text-[#303640] hover:border-[#B69A70]'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="industry-active-bg"
                        transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                        className="absolute inset-0 bg-[#101B2D]"
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10 truncate">{industry.name}</span>
                    {industry.isIllustrative && (
                      <span
                        className={`relative z-10 text-[11px] ml-2 shrink-0 ${
                          isSelected ? 'text-[#B69A70]' : 'text-[#8C7046]'
                        }`}
                      >
                        Scenario
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Industry Operational Brief */}
            <div className="lg:col-span-8 bg-[#F5F3EE] border border-[#D8D3C8] p-7 sm:p-10 min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: EASE_ARCH }}
                  className="space-y-6"
                >
                  <div className="space-y-2 pb-5 border-b border-[#D8D3C8]">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8C7046]">
                      Sector Context · {activeIndustry.name}
                    </p>
                    <h3 className="font-display text-3xl sm:text-[2.4rem] text-[#101B2D]">
                      {activeIndustry.name}
                    </h3>
                    <p className="text-[15px] text-[#303640] leading-relaxed">
                      {activeIndustry.operationalReality}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8994A3]">
                        Recurring Structural Bottlenecks
                      </h4>
                      <ul className="space-y-2.5 text-sm text-[#303640]">
                        {activeIndustry.commonBottlenecks.map((item) => (
                          <li
                            key={item}
                            className="pb-2.5 border-b border-[#E2DFD7] last:border-b-0 leading-relaxed"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8C7046]">
                        Transformation Priority
                      </h4>
                      <p className="text-sm text-[#101B2D] leading-relaxed font-medium">
                        {activeIndustry.transformationFocus}
                      </p>
                    </div>
                  </div>

                  {activeIndustry.illustrativeScenario && (
                    <div className="mt-4 bg-white border border-[#B69A70] p-6 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8C7046]">
                        {activeIndustry.illustrativeScenario.label}
                      </p>
                      <h4 className="font-display text-2xl text-[#101B2D]">
                        {activeIndustry.illustrativeScenario.title}
                      </h4>
                      <p className="text-sm text-[#4A5260] leading-relaxed">
                        {activeIndustry.illustrativeScenario.context}
                      </p>
                      <p className="text-sm text-[#303640] leading-relaxed">
                        <strong className="text-[#101B2D]">
                          Business-First Sequence:
                        </strong>{' '}
                        {activeIndustry.illustrativeScenario.structuralIntervention}
                      </p>
                      <p className="text-xs text-[#6A7381] leading-relaxed">
                        <strong className="text-[#101B2D]">
                          Expected Direction:
                        </strong>{' '}
                        {activeIndustry.illustrativeScenario.outcomeDirection}
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BUSINESS TRANSFORMATION OUTCOMES */}
      <section className="bg-[#F5F3EE] text-[#303640] py-20 lg:py-28 border-b border-[#E0DBD0]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: EASE_ARCH }}
            className="max-w-2xl space-y-3 mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C7046]">
              Transformation Outcomes
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.06] text-[#101B2D]">
              What disciplined operational architecture achieves
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#D8D3C8] bg-white">
            {OUTCOME_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: EASE_ARCH,
                }}
                className="p-8 sm:p-10 border-r border-b border-[#D8D3C8] space-y-4 hover:bg-[#FCFBF8] transition-colors duration-200"
              >
                <div className="flex items-center justify-between text-xs text-[#8994A3]">
                  <span className="tabular-nums font-semibold text-[#8C7046]">
                    Outcome {pillar.index}
                  </span>
                </div>
                <h3 className="font-display text-[1.85rem] text-[#101B2D]">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#4A5260] leading-relaxed">
                  {pillar.description}
                </p>
                <p className="pt-3 border-t border-[#EAE6DC] text-xs font-medium text-[#101B2D]">
                  {pillar.structuralShift}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONSULTANCY APPROACH */}
      <section className="bg-white text-[#303640] py-20 lg:py-28 border-b border-[#E0DBD0]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: EASE_ARCH }}
              className="lg:col-span-9 lg:col-start-2 space-y-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C7046]">
                Our Approach
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] text-[#101B2D]">
                Better operations begin with understanding how work gets done.
              </h2>
              <p className="text-base text-[#303640] leading-[1.7] max-w-2xl">
                {BRAND.philosophy} AJ Transforms works with organisations to
                improve processes, reduce manual work, and adopt practical
                technology where it supports clear business goals.
              </p>
              <p className="text-[15px] text-[#4A5260] leading-[1.7] max-w-2xl">
                Each engagement starts by understanding existing operations,
                then identifying improvements before considering automation.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="group inline-flex items-center gap-2 px-6 py-3 border border-[#101B2D] text-[#101B2D] hover:bg-[#101B2D] hover:text-[#F5F3EE] text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
                >
                  <span>About {BRAND.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. INSIGHTS & THOUGHT LEADERSHIP */}
      <section className="bg-[#F5F3EE] text-[#303640] py-20 lg:py-28 border-b border-[#E0DBD0]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: EASE_ARCH }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D8D3C8]"
          >
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C7046]">
                Insights & Perspectives
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.06] text-[#101B2D]">
                Commercial thinking on structure, process, and automation
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('insights')}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#101B2D] hover:text-[#8C7046] transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
            >
              <span>All Briefings</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          <div className="divide-y divide-[#D8D3C8]">
            {INSIGHTS.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: EASE_ARCH,
                }}
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-3 flex items-center gap-2 text-xs text-[#6A7381]">
                  <span className="font-semibold text-[#8C7046]">
                    {article.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.editorialTag}</span>
                </div>

                <div className="lg:col-span-7 space-y-2">
                  <h3 className="font-display text-[1.75rem] sm:text-[2rem] text-[#101B2D]">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#4A5260] leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="lg:col-span-2 lg:text-right">
                  <button
                    type="button"
                    onClick={() => onOpenInsight(article.id)}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#101B2D] hover:text-[#8C7046] transition-colors min-h-[44px] whitespace-nowrap"
                  >
                    <span>Read Briefing</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CLOSING CONVERSION SECTION */}
      <section className="bg-[#101B2D] text-[#F5F3EE] py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: EASE_ARCH }}
              className="lg:col-span-5 space-y-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B69A70]">
                Start a Conversation
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.06] text-[#F5F3EE]">
                Design an operating model built for your next stage of growth
              </h2>
              <p className="text-base text-[#C6CED9] leading-relaxed">
                Every transformation begins with a candid, practical conversation
                about how your business operates today and where friction is
                slowing execution.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_ARCH }}
              className="lg:col-span-7 bg-[#142238] border border-[#24344D] p-7 sm:p-10"
            >
              <ConsultationForm theme="dark" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
