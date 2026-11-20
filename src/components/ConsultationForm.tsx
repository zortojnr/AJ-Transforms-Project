import { useState, type FormEvent } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { CAPABILITIES, INDUSTRIES } from '../data/consultancyData';

interface ConsultationFormProps {
  theme?: 'dark' | 'light';
  initialFocus?: string;
}

interface FormValues {
  fullName: string;
  email: string;
  organisation: string;
  role: string;
  industry: string;
  focusArea: string;
  context: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  organisation?: string;
  context?: string;
}

export function ConsultationForm({
  theme = 'light',
  initialFocus = '',
}: ConsultationFormProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    email: '',
    organisation: '',
    role: '',
    industry: '',
    focusArea: initialFocus || CAPABILITIES[0].title,
    context: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRecord, setSubmittedRecord] = useState<FormValues | null>(null);

  const isDark = theme === 'dark';

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!values.fullName.trim()) {
      next.fullName = 'Please enter your full name.';
    }
    if (!values.email.trim()) {
      next.email = 'Please provide a business email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!values.organisation.trim()) {
      next.organisation = 'Please enter your organisation name.';
    }
    if (!values.context.trim() || values.context.trim().length < 20) {
      next.context =
        'Please share a brief overview of your operational priorities (at least 20 characters).';
    }
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedRecord({ ...values });
  };

  const handleReset = () => {
    setSubmittedRecord(null);
    setValues({
      fullName: '',
      email: '',
      organisation: '',
      role: '',
      industry: '',
      focusArea: CAPABILITIES[0].title,
      context: '',
    });
  };

  if (submittedRecord) {
    return (
      <div
        className={`p-8 sm:p-10 border ${
          isDark
            ? 'bg-[#152338] border-[#B69A70]/60 text-[#F5F3EE]'
            : 'bg-white border-[#B69A70] text-[#303640]'
        }`}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="w-9 h-9 flex items-center justify-center bg-[#B69A70] text-[#101B2D]">
            <Check className="w-5 h-5" />
          </span>
          <div>
            <p
              className={`text-xs uppercase tracking-[0.14em] font-semibold ${
                isDark ? 'text-[#B69A70]' : 'text-[#8C7046]'
              }`}
            >
              Consultation Brief Prepared
            </p>
            <h3 className="font-display text-2xl sm:text-3xl">
              Thank you, {submittedRecord.fullName}
            </h3>
          </div>
        </div>

        <p
          className={`text-sm leading-relaxed mb-6 ${
            isDark ? 'text-[#C6CED9]' : 'text-[#4B5360]'
          }`}
        >
          Your consultation brief for <strong>{submittedRecord.organisation}</strong> has
          been prepared in this browser session. It has not been sent or stored.
        </p>

        <dl
          className={`grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-y text-sm mb-6 ${
            isDark ? 'border-[#24344D]' : 'border-[#E2DFD7]'
          }`}
        >
          <div>
            <dt className="text-xs uppercase tracking-wider text-[#8994A3]">
              Primary Focus
            </dt>
            <dd className="mt-1 font-medium">{submittedRecord.focusArea}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-[#8994A3]">Sector</dt>
            <dd className="mt-1 font-medium">
              {submittedRecord.industry || 'Cross-Sector / Mid-Market'}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-[#8994A3]">
              Reply Contact
            </dt>
            <dd className="mt-1 font-medium">{submittedRecord.email}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-[#8994A3]">Role</dt>
            <dd className="mt-1 font-medium">
              {submittedRecord.role || 'Leadership Team'}
            </dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={handleReset}
          className={`px-5 py-3 text-xs font-semibold uppercase tracking-wider border transition-colors min-h-[44px] ${
            isDark
              ? 'border-[#3A5070] text-[#F5F3EE] hover:border-[#B69A70]'
              : 'border-[#101B2D] text-[#101B2D] hover:bg-[#101B2D] hover:text-white'
          }`}
        >
          Prepare Another Brief
        </button>
      </div>
    );
  }

  const labelClass = `block text-xs font-semibold uppercase tracking-[0.12em] mb-2 ${
    isDark ? 'text-[#C6CED9]' : 'text-[#303640]'
  }`;

  const inputClass = `w-full px-4 py-3 text-sm border transition-colors min-h-[44px] ${
    isDark
      ? 'bg-[#0D1625] border-[#2A3D5A] text-[#F5F3EE] placeholder:text-[#8994A3]/70 focus:border-[#B69A70]'
      : 'bg-[#F9F8F5] border-[#D5D0C5] text-[#101B2D] placeholder:text-[#8994A3] focus:border-[#101B2D] focus:bg-white'
  }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="consult-name" className={labelClass}>
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="consult-name"
            type="text"
            value={values.fullName}
            onChange={(e) => setValues({ ...values, fullName: e.target.value })}
            placeholder="e.g. Jordan Mercer"
            aria-invalid={Boolean(errors.fullName)}
            className={inputClass}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-[#D97757]" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="consult-email" className={labelClass}>
            Business Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="consult-email"
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            placeholder="name@company.com"
            aria-invalid={Boolean(errors.email)}
            className={inputClass}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-[#D97757]" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="consult-org" className={labelClass}>
            Organisation <span aria-hidden="true">*</span>
          </label>
          <input
            id="consult-org"
            type="text"
            value={values.organisation}
            onChange={(e) => setValues({ ...values, organisation: e.target.value })}
            placeholder="Organisation name"
            aria-invalid={Boolean(errors.organisation)}
            className={inputClass}
          />
          {errors.organisation && (
            <p className="mt-1.5 text-xs text-[#D97757]" role="alert">
              {errors.organisation}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="consult-role" className={labelClass}>
            Role / Title
          </label>
          <input
            id="consult-role"
            type="text"
            value={values.role}
            onChange={(e) => setValues({ ...values, role: e.target.value })}
            placeholder="e.g. Managing Director, COO"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="consult-industry" className={labelClass}>
            Industry Sector
          </label>
          <select
            id="consult-industry"
            value={values.industry}
            onChange={(e) => setValues({ ...values, industry: e.target.value })}
            className={inputClass}
          >
            <option value="">Select industry sector</option>
            {INDUSTRIES.map((ind) => (
              <option key={ind.id} value={ind.name}>
                {ind.name}
              </option>
            ))}
            <option value="Other Mid-Market Sector">Other Mid-Market Sector</option>
          </select>
        </div>

        <div>
          <label htmlFor="consult-focus" className={labelClass}>
            Primary Area of Interest
          </label>
          <select
            id="consult-focus"
            value={values.focusArea}
            onChange={(e) => setValues({ ...values, focusArea: e.target.value })}
            className={inputClass}
          >
            {CAPABILITIES.map((cap) => (
              <option key={cap.id} value={cap.title}>
                {cap.title}
              </option>
            ))}
            <option value="Full Operational Diagnostic">Full Operational Diagnostic</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="consult-context" className={labelClass}>
          Operational Context & Priorities <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="consult-context"
          rows={4}
          value={values.context}
          onChange={(e) => setValues({ ...values, context: e.target.value })}
          placeholder="Briefly outline the operational challenges, workflow bottlenecks, or transformation goals your leadership team is addressing."
          aria-invalid={Boolean(errors.context)}
          className={`${inputClass} min-h-[116px] resize-y`}
        />
        {errors.context && (
          <p className="mt-1.5 text-xs text-[#D97757]" role="alert">
            {errors.context}
          </p>
        )}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#B69A70] text-[#101B2D] hover:bg-[#C9AF87] text-sm font-semibold tracking-wide transition-colors min-h-[44px]"
        >
          <span>Request Initial Conversation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <span
          className={`text-xs ${isDark ? 'text-[#8994A3]' : 'text-[#6A7381]'}`}
        >
          Confidential executive intake · No automated marketing
        </span>
      </div>
    </form>
  );
}
