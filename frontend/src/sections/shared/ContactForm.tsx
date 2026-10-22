import { useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { type ContactRequest } from '../../lib/api';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const SERVICES = [
  'AI & ML', 'Generative AI', 'Full-Stack Development', 'Data Analytics', 
  'Software Engineering', 'Cloud & DevOps', 'CRM', 'ERP', 'HRMS', 
  'FinTech', 'Enterprise AI', 'BI', 'API Integration', 'Other'
];

const PREFERRED = ['Email', 'Phone', 'Video call'];

const emptyForm: ContactRequest = {
  name: '', email: '', company: '', service: '', message: '', preferredContact: '', website: '',
};

export function ContactForm() {
  const [form, setForm] = useState<ContactRequest>(emptyForm);
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const update = (field: keyof ContactRequest) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic client-side validation
    const errors: Record<string, string> = {};
    if (!form.name || form.name.length < 2) errors.name = 'Name is required';
    if (!form.email || !form.email.includes('@')) errors.email = 'Valid email is required';
    if (!form.service) errors.service = 'Select a service';
    if (!form.message || form.message.length < 10) errors.message = 'Message must be at least 10 characters';
    
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setState('submitting');
    setError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          company: form.company || 'N/A',
          service: form.service,
          message: form.message,
          preferredContact: form.preferredContact || 'N/A',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Send auto-reply to the client
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_ID,
        {
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setState('success');
      setForm(emptyForm);
    } catch (err: any) {
      setState('error');
      setError(err?.text || 'Failed to send message. Please try again.');
    }
  };

  if (state === 'success') {
    return (
      <div className="rounded-2xl border border-pink/30 bg-pink/5 p-8 text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-pink/15 text-pink mb-4">
          <CheckCircle2 size={26} />
        </div>
        <h3 className="font-display text-2xl font-semibold text-offwhite">Message received.</h3>
        <p className="mt-3 text-sm text-offwhite/70 max-w-md mx-auto leading-relaxed">
          Thanks for reaching out. We will get back to you shortly at the email you provided.
        </p>
        <button type="button" onClick={() => setState('idle')} className="mt-6 text-sm font-semibold text-pink hover:text-yellow transition-colors">
          Send another message
        </button>
      </div>
    );
  }

  const fieldError = (key: string) => fieldErrors[key] ? <p className="mt-1 text-xs text-pink">{fieldErrors[key]}</p> : null;

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {state === 'error' && (
        <div className="flex items-start gap-3 rounded-xl border border-pink/30 bg-pink/5 p-4">
          <AlertCircle size={18} className="shrink-0 mt-0.5 text-pink" />
          <p className="text-sm text-offwhite/85">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] text-offwhite/50 mb-2">Name *</label>
          <input type="text" required value={form.name} onChange={update('name')} className="w-full rounded-xl border border-white/[0.10] bg-jet/60 px-4 py-3 text-sm text-offwhite placeholder-offwhite/30 focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink" placeholder="Your name" />
          {fieldError('name')}
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] text-offwhite/50 mb-2">Email *</label>
          <input type="email" required value={form.email} onChange={update('email')} className="w-full rounded-xl border border-white/[0.10] bg-jet/60 px-4 py-3 text-sm text-offwhite placeholder-offwhite/30 focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink" placeholder="you@company.com" />
          {fieldError('email')}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] text-offwhite/50 mb-2">Company (optional)</label>
          <input type="text" value={form.company ?? ''} onChange={update('company')} className="w-full rounded-xl border border-white/[0.10] bg-jet/60 px-4 py-3 text-sm text-offwhite placeholder-offwhite/30 focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink" placeholder="Your company" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] text-offwhite/50 mb-2">Service required *</label>
          <select required value={form.service} onChange={update('service')} className="w-full rounded-xl border border-white/[0.10] bg-jet/60 px-4 py-3 text-sm text-offwhite focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink">
            <option value="">Select a service</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {fieldError('service')}
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.2em] text-offwhite/50 mb-2">Project description *</label>
        <textarea required rows={5} value={form.message} onChange={update('message')} className="w-full rounded-xl border border-white/[0.10] bg-jet/60 px-4 py-3 text-sm text-offwhite placeholder-offwhite/30 focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink resize-y" placeholder="What are you building? What constraints matter?" />
        {fieldError('message')}
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.2em] text-offwhite/50 mb-2">Preferred contact (optional)</label>
        <select value={form.preferredContact ?? ''} onChange={update('preferredContact')} className="w-full rounded-xl border border-white/[0.10] bg-jet/60 px-4 py-3 text-sm text-offwhite focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink">
          <option value="">Select a method</option>
          {PREFERRED.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="pt-2">
        <button type="submit" disabled={state === 'submitting'} className="inline-flex items-center justify-center gap-2 rounded-full bg-pink px-7 py-3 text-sm font-semibold text-jet transition-colors hover:bg-yellow disabled:opacity-60 disabled:cursor-not-allowed">
          {state === 'submitting' ? <><Loader2 size={16} className="animate-spin" />SendingÃ¢â‚¬Â¦</> : <><Send size={16} />Send inquiry</>}
        </button>
      </div>
    </form>
  );
}