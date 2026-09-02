import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { useSelector } from 'react-redux';

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.17.69-3.84-1.36-3.84-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.16a10.8 10.8 0 0 1 5.7 0c2.17-1.47 3.13-1.16 3.13-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.81 1.17 3.05 0 4.37-2.67 5.34-5.21 5.62.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.65.79.54A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Contact() {
   const contact = useSelector(state => state.contact.contact)
   const social = useSelector(state => state.contact.contact.social)
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend yet — this is where a POST to /api/contact will go.
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 3000);
    e.target.reset();
  };

  return (
    <section id="contact" className="mt-10 mb-16 scroll-mt-24">
      <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-5">
        Contact
      </p>

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
        <div className="rounded-3xl bg-brand-600 text-white p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-extrabold text-2xl leading-tight mb-3">
              {contact.heading}
            </h3>
            <div className="space-y-3 mt-6">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm">
                <Mail size={16} /> {contact.email}
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} /> {contact.location}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-8">
            <a
              href={social?.github}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={social?.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-paper-100 dark:bg-white/5 border border-transparent focus:border-brand-500 outline-none text-sm text-ink-950 dark:text-white placeholder:text-ink-900/40 dark:placeholder:text-paper-100/30"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-xl bg-paper-100 dark:bg-white/5 border border-transparent focus:border-brand-500 outline-none text-sm text-ink-950 dark:text-white placeholder:text-ink-900/40 dark:placeholder:text-paper-100/30"
            />
          </div>
          <input
            required
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-xl bg-paper-100 dark:bg-white/5 border border-transparent focus:border-brand-500 outline-none text-sm text-ink-950 dark:text-white placeholder:text-ink-900/40 dark:placeholder:text-paper-100/30"
          />
          <textarea
            required
            rows={4}
            placeholder="Your message"
            className="w-full px-4 py-3 rounded-xl bg-paper-100 dark:bg-white/5 border border-transparent focus:border-brand-500 outline-none text-sm text-ink-950 dark:text-white placeholder:text-ink-900/40 dark:placeholder:text-paper-100/30 resize-none"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors"
          >
            <Send size={16} />
            {status === 'sent' ? 'Message noted locally ✓' : 'Send Message'}
          </button>
          {/* <p className="text-xs text-ink-900/40 dark:text-paper-100/30 text-center">
            Form isn't wired to a backend yet — hook it up to your API's /contact route.
          </p> */}
        </form>
      </div>
    </section>
  );
}
