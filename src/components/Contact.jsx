import {  useState } from "react";
import useContactForm from "../hooks/useContactForm";
import {
  Mail,
  MapPin,
  Send,
  Plus,
  Trash2,
  X,
  Search,
  Globe,
} from "lucide-react";
import { useSelector } from "react-redux";


function GithubIcon({ size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.17.69-3.84-1.36-3.84-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.16a10.8 10.8 0 0 1 5.7 0c2.17-1.47 3.13-1.16 3.13-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.81 1.17 3.05 0 4.37-2.67 5.34-5.21 5.62.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.65.79.54A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.55.45-1 1-1Z" />
    </svg>
  );
}

function YoutubeIcon({ size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.4.58A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.86.58 9.4.58 9.4.58s7.54 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

function XIcon({ size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L3 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.85h1.73L8.48 4.05H6.62L17.8 19.85Z" />
    </svg>
  );
}

function DiscordIcon({ size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.54 5.33A16.4 16.4 0 0 0 15.6 4l-.48.98a14.8 14.8 0 0 0-6.24 0L8.4 4a16.4 16.4 0 0 0-3.94 1.33C1.96 9.13 1.28 12.85 1.62 16.52A16.2 16.2 0 0 0 6.48 19l1.18-1.62c-.65-.25-1.27-.58-1.84-.98l.45-.34c3.55 1.65 7.39 1.65 10.9 0l.46.34c-.58.4-1.2.73-1.85.98L16.96 19a16.2 16.2 0 0 0 4.86-2.48c.4-4.25-.68-7.93-2.28-11.19ZM8.55 14.5c-1.06 0-1.93-.98-1.93-2.18s.85-2.18 1.93-2.18 1.94.98 1.93 2.18c0 1.2-.86 2.18-1.93 2.18Zm6.9 0c-1.06 0-1.93-.98-1.93-2.18s.85-2.18 1.93-2.18 1.94.98 1.93 2.18c0 1.2-.86 2.18-1.93 2.18Z" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  x: XIcon,
  discord: DiscordIcon,
};

const SOCIAL_OPTIONS = [
  {
    value: "github",
    label: "GitHub",
  },
  {
    value: "linkedin",
    label: "LinkedIn",
  },
  {
    value: "instagram",
    label: "Instagram",
  },
  {
    value: "facebook",
    label: "Facebook",
  },
  {
    value: "youtube",
    label: "YouTube",
  },
  {
    value: "x",
    label: "X / Twitter",
  },
  {
    value: "discord",
    label: "Discord",
  },
];

function SocialPicker({ value, onChange, onClose }) {
  const [search, setSearch] = useState("");

  const filteredOptions = SOCIAL_OPTIONS.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className="absolute left-0 bottom-12 z-50 w-72 rounded-2xl border border-white/10 bg-ink-950 shadow-2xl p-3"
      onClick={(e) => e.stopPropagation()}
    >
      {/* HEADER */}

      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-white">Choose Platform</p>

        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-md text-white/40 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {/* SEARCH */}

      <div className="relative mb-3">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search platform..."
          className="w-full rounded-lg bg-white/5 border border-white/10 py-2 pl-9 pr-3 text-xs text-white placeholder:text-white/30 outline-none focus:border-white/30"
          autoFocus
        />
      </div>

      {/* PLATFORM GRID */}

      <div className="grid grid-cols-4 gap-2 max-h-60 overflow-y-auto">
        {filteredOptions.map((option) => {
          const Icon = SOCIAL_ICONS[option.value];

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                onClose();
              }}
              title={option.label}
              className={`flex flex-col items-center justify-center gap-1 rounded-lg p-2 transition-colors ${
                value === option.value
                  ? "bg-white/15 text-white"
                  : "text-white/50 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={20} />

              <span className="text-[9px] truncate w-full text-center">
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const ContactSkeleton = () => {
  return (
    <section id="contact" className="mt-10 mb-16 scroll-mt-24">
      {/* Section title */}
      <div className="skeleton-shimmer h-3 w-20 rounded mb-5" />

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
        {/* Contact information skeleton */}
        <div className="rounded-3xl bg-brand-600 p-6 sm:p-8 flex flex-col justify-between min-h-[300px]">
          <div>
            {/* Heading */}
            <div className="space-y-2">
              <div className="skeleton-shimmer h-7 w-[85%] rounded" />
              <div className="skeleton-shimmer h-7 w-[60%] rounded" />
            </div>

            {/* Email + Location */}
            <div className="space-y-4 mt-7">
              <div className="flex items-center gap-3">
                <div className="skeleton-shimmer h-4 w-4 rounded-full" />
                <div className="skeleton-shimmer h-3 w-40 rounded" />
              </div>

              <div className="flex items-center gap-3">
                <div className="skeleton-shimmer h-4 w-4 rounded-full" />
                <div className="skeleton-shimmer h-3 w-32 rounded" />
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-8">
            <div className="skeleton-shimmer w-9 h-9 rounded-full" />
            <div className="skeleton-shimmer w-9 h-9 rounded-full" />
          </div>
        </div>

        {/* Keep form visible because it is interactive */}
        <form className="rounded-3xl border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 p-6 sm:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="skeleton-shimmer w-full h-[46px] rounded-xl" />
            <div className="skeleton-shimmer w-full h-[46px] rounded-xl" />
          </div>

          <div className="skeleton-shimmer w-full h-[46px] rounded-xl" />

          <div className="skeleton-shimmer w-full h-[116px] rounded-xl" />

          <div className="skeleton-shimmer w-full h-[50px] rounded-xl" />
        </form>
      </div>
    </section>
  );
};

export default function Contact({ editMode = false }) {
  const contact = useSelector((state) => state.data?.data?.contact);
const loading = useSelector((state) => state.data.loading);  



  const {
    handleSubmit,
    handleSave,
    handleDeleteSocial,
    handleAddSocial,
    handleSocialChange,
    handleContactChange,
    setOpenPicker,
    openPicker,
    contactData,
    status,
  } = useContactForm({ contact: contact });

  if (loading) {
    return <ContactSkeleton />;
  }
  

  return editMode ? (
    <section id="contact" className="mt-10 mb-16 scroll-mt-24">
      {/* TITLE */}

      <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-5">
        Contact
      </p>

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
        {/* ===================================================
            LEFT SIDE
        ==================================================== */}

        <div className="rounded-3xl bg-brand-600 text-white p-6 sm:p-8 flex flex-col justify-between">
          {/* CONTACT INFO */}

          <div>
            {/* HEADING */}

            <input
              type="text"
              value={contactData.heading}
              onChange={(e) => handleContactChange("heading", e.target.value)}
              placeholder="Contact heading"
              className="w-full bg-transparent border-none outline-none font-display font-extrabold text-2xl leading-tight mb-3 placeholder:text-white/50"
            />

            <div className="space-y-3 mt-6">
              {/* EMAIL */}

              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="shrink-0" />

                <input
                  type="email"
                  value={contactData.email}
                  onChange={(e) => handleContactChange("email", e.target.value)}
                  placeholder="Email"
                  className="w-full bg-transparent border-none outline-none text-sm text-white placeholder:text-white/50"
                />
              </div>

              {/* LOCATION */}

              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="shrink-0" />

                <input
                  type="text"
                  value={contactData.location}
                  onChange={(e) =>
                    handleContactChange("location", e.target.value)
                  }
                  placeholder="Location"
                  className="w-full bg-transparent border-none outline-none text-sm text-white placeholder:text-white/50"
                />
              </div>
            </div>
          </div>

          {/* =================================================
              SOCIAL LINKS
          ================================================== */}

          <div className="mt-8">
            <div className="space-y-3">
              {contactData.social.map((item, index) => {
                const Icon = SOCIAL_ICONS[item.platform] || Globe;

                return (
                  <div key={index} className="relative flex items-center gap-3">
                    {/* ICON BUTTON */}

                    <div className="relative shrink-0">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenPicker(openPicker === index ? null : index)
                        }
                        title="Change platform"
                        className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors"
                      >
                        <Icon size={16} />
                      </button>

                      {/* PICKER */}

                      {openPicker === index && (
                        <SocialPicker
                          value={item.platform}
                          onChange={(value) =>
                            handleSocialChange(index, "platform", value)
                          }
                          onClose={() => setOpenPicker(null)}
                        />
                      )}
                    </div>

                    {/* URL */}

                    <input
                      type="url"
                      value={item.url}
                      onChange={(e) =>
                        handleSocialChange(index, "url", e.target.value)
                      }
                      placeholder={`${item.platform} URL`}
                      className="flex-1 min-w-0 bg-white/10 rounded-lg px-3 py-2 border border-transparent focus:border-white/40 outline-none text-xs text-white placeholder:text-white/50"
                    />

                    {/* DELETE */}

                    <button
                      type="button"
                      onClick={() => handleDeleteSocial(index)}
                      title="Delete"
                      className="shrink-0 p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* ADD */}

            <button
              type="button"
              onClick={handleAddSocial}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                <Plus size={16} />
              </span>
              Add Social
            </button>

            {/* SAVE */}

            <div className="mt-5">
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-white/80 transition-colors"
              >
                Save Changes
                <span>✓</span>
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================
            RIGHT SIDE
            VISITOR FORM
        ==================================================== */}

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-paper-100 dark:bg-white/5 border border-transparent focus:border-brand-500 outline-none text-sm text-ink-950 dark:text-white placeholder:text-ink-900/40 dark:placeholder:text-paper-100/30"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-xl bg-paper-100 dark:bg-white/5 border border-transparent focus:border-brand-500 outline-none text-sm text-ink-950 dark:text-white placeholder:text-ink-900/40 dark:placeholder:text-paper-100/30"
            />
          </div>

          <input
            required
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-xl bg-paper-100 dark:bg-white/5 border border-transparent focus:border-brand-500 outline-none text-sm text-ink-950 dark:text-white placeholder:text-ink-900/40 dark:placeholder:text-paper-100/30"
          />

          <textarea
            required
            name="message"
            rows={4}
            placeholder="Your message"
            className="w-full px-4 py-3 rounded-xl bg-paper-100 dark:bg-white/5 border border-transparent focus:border-brand-500 outline-none text-sm text-ink-950 dark:text-white placeholder:text-ink-900/40 dark:placeholder:text-paper-100/30 resize-none"
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors"
          >
            <Send size={16} />

            {status === "sent" ? "Message noted locally ✓" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  ) : (
    <section id="contact" className="mt-10 mb-16 scroll-mt-24">
      <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-5">
        Contact
      </p>

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
        <div className="rounded-3xl bg-brand-600 text-white p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-extrabold text-2xl leading-tight mb-3">
              {contact?.heading}
            </h3>
            <div className="space-y-3 mt-6">
              <a
                href={`mailto:${contact?.email}`}
                className="flex items-center gap-3 text-sm"
              >
                <Mail size={16} /> {contact?.email}
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} /> {contact?.location}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-8">
            {/* <a
              href={contact?.social?.github}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={contact?.social?.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a> */}
            {contact?.social?.map((item, index) => {
              const Icon = SOCIAL_ICONS[item.platform] || Globe;

              return (
                <div key={index} className="relative flex items-center gap-3">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors"
                    aria-label={item.platform}
                  >
                    <Icon size={16} />
                  </a>
                </div>
              );
            })}
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
            {status === "sent" ? "Message noted locally ✓" : "Send Message"}
          </button>
          {/* <p className="text-xs text-ink-900/40 dark:text-paper-100/30 text-center">
            Form isn't wired to a backend yet — hook it up to your API's /contact route.
          </p> */}
        </form>
      </div>
    </section>
  );
}
