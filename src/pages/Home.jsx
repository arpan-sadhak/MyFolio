import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import FeaturedProjects from "../components/FeaturedProjects";
import { AboutMe } from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";


const AboutSkeleton = () => {
  return (
    <section
      id="about"
      className="mt-10 scroll-mt-24 rounded-3xl border border-paper-200 dark:border-white/5 bg-paper-50 dark:bg-ink-900/60 p-6 sm:p-8"
    >
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
        {/* Left side */}
        <div>
          {/* Heading */}
          <div className="skeleton-shimmer h-3 w-32 rounded mb-4" />

          {/* Body */}
          <div className="space-y-2">
            <div className="skeleton-shimmer h-3 w-full rounded" />
            <div className="skeleton-shimmer h-3 w-[95%] rounded" />
            <div className="skeleton-shimmer h-3 w-[85%] rounded" />
            <div className="skeleton-shimmer h-3 w-[70%] rounded" />
          </div>

          {/* Link */}
          <div className="skeleton-shimmer h-4 w-28 rounded mt-6" />
        </div>

        {/* Right side - Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white dark:bg-ink-900 border border-paper-200 dark:border-white/5 p-4 flex flex-col gap-2"
            >
              {/* Icon */}
              <div className="skeleton-shimmer h-5 w-5 rounded" />

              {/* Value */}
              <div className="skeleton-shimmer h-6 w-16 rounded mt-1" />

              {/* Label */}
              <div className="skeleton-shimmer h-3 w-20 rounded" />
              <div className="skeleton-shimmer h-3 w-14 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogSkeleton = () => {
  return (
    <section id="blog" className="mt-10 scroll-mt-24">
      <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-5">
        Blog
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 p-5 flex flex-col justify-between"
          >
            <div>
              <div className="h-5 w-3/4 rounded skeleton-shimmer mb-3" />

              <div className="space-y-2">
                <div className="h-3 w-full rounded skeleton-shimmer" />
                <div className="h-3 w-5/6 rounded skeleton-shimmer" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="h-3 w-12 rounded skeleton-shimmer" />

              <div className="h-4 w-4 rounded skeleton-shimmer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

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

const ExperienceSkeleton = ({ count = 3 }) => {
  return (
    <section id="experience" className="mt-10 scroll-mt-24">
      {/* Section title */}
      <div className="skeleton-shimmer h-3 w-24 rounded mb-5" />

      <div className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="relative pl-8 pb-4 border-l-2 border-paper-200 dark:border-white/10 last:border-transparent"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[7px] top-14 w-3 h-3 rounded-full skeleton-shimmer" />

            <div className="rounded-2xl border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 p-5">
              {/* Role + Period */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="skeleton-shimmer h-5 w-40 rounded" />

                <div className="skeleton-shimmer h-3 w-24 rounded" />
              </div>

              {/* Organization */}
              <div className="skeleton-shimmer h-3 w-32 rounded mb-4" />

              {/* Description */}
              <div className="space-y-2">
                <div className="skeleton-shimmer h-3 w-full rounded" />
                <div className="skeleton-shimmer h-3 w-[90%] rounded" />
                <div className="skeleton-shimmer h-3 w-[75%] rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectsSkeleton = () => {
  const ProjectCardSkeleton = () => {
    return (
      <div className="rounded-2xl overflow-hidden border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 flex flex-col">
        {/* Image */}
        <div className="aspect-[4/3] relative overflow-hidden">
          <div className="skeleton-shimmer w-full h-full" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Title */}
          <div className="skeleton-shimmer h-5 w-3/5 rounded" />

          {/* Description */}
          <div className="mt-3 space-y-2 flex-1">
            <div className="skeleton-shimmer h-3 w-full rounded" />
            <div className="skeleton-shimmer h-3 w-[90%] rounded" />
            <div className="skeleton-shimmer h-3 w-[70%] rounded" />
          </div>

          {/* Tags + Button */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="skeleton-shimmer h-6 w-14 rounded-full" />
              <div className="skeleton-shimmer h-6 w-16 rounded-full" />
              <div className="skeleton-shimmer h-6 w-12 rounded-full" />
            </div>

            {/* Action button */}
            <div className="skeleton-shimmer w-8 h-8 shrink-0 rounded-full" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="mt-10 scroll-mt-24">
      {/* Header */}
      <div className="flex items-end justify-between mb-5">
        <div className="skeleton-shimmer h-3 w-28 rounded" />

        <div className="skeleton-shimmer h-4 w-32 rounded" />
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Project skeletons */}
        {Array.from({ length: 3 }).map((_, index) => (
          <ProjectCardSkeleton key={index} />
        ))}

        {/* Signature / CTA skeleton */}
        <div className="rounded-2xl bg-brand-600 p-6 flex flex-col justify-between min-h-[220px] relative overflow-hidden">
          {/* Icon */}
          <div className="absolute right-4 top-4 skeleton-shimmer w-20 h-20 rounded-full opacity-30" />

          {/* Heading */}
          <div className="space-y-2">
            <div className="skeleton-shimmer h-5 w-40 rounded" />
            <div className="skeleton-shimmer h-5 w-32 rounded" />
          </div>

          {/* Bottom content */}
          <div>
            <div className="skeleton-shimmer h-3 w-52 rounded mb-4" />
            <div className="skeleton-shimmer h-7 w-32 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FooterSkeleton = () => {
  return (
    <footer className="pb-8 pt-2 flex justify-center">
      <div className="skeleton-shimmer h-3 w-64 rounded" />
    </footer>
  );
};

const HeroSkeleton = () => {
  return (
    <section
      id="home"
      className="relative pt-10 lg:pt-4 pb-4 scroll-mt-20 overflow-hidden"
    >
      {/* Ambient grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block bg-grid bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      {/* Hire Me */}
      <div className="hidden lg:flex justify-end mb-4">
        <div className="skeleton-shimmer h-10 w-28 rounded-full" />
      </div>

      <div className="grid lg:grid-cols-[0.8fr_auto] gap-10 items-center">
        {/* Left content */}
        <div className="lg:pl-20">
          {/* Greeting */}
          <div className="skeleton-shimmer h-3 w-28 rounded mb-4" />

          {/* Name */}
          <div className="space-y-2">
            <div className="skeleton-shimmer h-14 sm:h-16 lg:h-[67px] w-48 sm:w-56 lg:w-64 rounded" />
            <div className="skeleton-shimmer h-14 sm:h-16 lg:h-[67px] w-40 sm:w-48 lg:w-56 rounded" />
          </div>

          {/* Role */}
          <div className="skeleton-shimmer h-5 w-64 rounded mt-6" />

          {/* Tagline */}
          <div className="space-y-2 mt-3 max-w-md">
            <div className="skeleton-shimmer h-4 w-full rounded" />
            <div className="skeleton-shimmer h-4 w-[85%] rounded" />
          </div>

          {/* Let's Connect */}
          <div className="skeleton-shimmer h-12 w-36 rounded-full mt-7" />
        </div>

        {/* Right / Avatar */}
        <div className="relative mx-auto lg:mx-0">
          {/* Glow */}
          <div className="absolute inset-0 -z-10 rounded-full bg-brand-500/10 blur-3xl scale-110" />

          {/* Avatar */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full border-4 border-brand-500/10 p-2">
            <div className="skeleton-shimmer w-full h-full rounded-full" />
          </div>

          {/* Years badge */}
          <div className="absolute -top-4 -right-4 sm:right-48 skeleton-shimmer rounded-2xl px-4 py-3 w-24 h-16" />

          {/* Availability */}
          <div className="absolute -bottom-0 left-[26%] -translate-x-1/2 skeleton-shimmer rounded-full w-32 h-8" />
        </div>
      </div>
    </section>
  );
};

const SkillsSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
      {" "}
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {" "}
          <div className="flex items-center justify-between mb-1.5">
            {" "}
            <div className="skeleton-shimmer h-4 w-24 rounded" />{" "}
            <div className="skeleton-shimmer h-3 w-8 rounded" />{" "}
          </div>{" "}
          <div className="h-2 rounded-full bg-paper-100 dark:bg-white/5 overflow-hidden">
            {" "}
            <div className="skeleton-shimmer h-full w-full rounded-full" />{" "}
          </div>{" "}
        </div>
      ))}{" "}
    </div>
  );
};

function TechStackSkeleton() {
  return (
    <section className="mt-10">
      {" "}
      <div className="rounded-3xl border border-paper-200 dark:border-white/5 bg-paper-50 dark:bg-ink-900/60 p-6">
        {" "}
        <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-4">
          {" "}
          Tech Stack{" "}
        </p>{" "}
        <div className="flex flex-wrap gap-3">
          {" "}
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="skeleton-shimmer h-10 w-24 rounded-xl"
            />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

function PageSkeleton({ mobileOpen, setMobileOpen }) {
  return (
    <div className="bg-white dark:bg-ink-950 min-h-screen transition-colors duration-300">
      <Sidebar
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />
      <Topbar onOpenMenu={() => setMobileOpen(true)} />

      <main className="lg:pl-[250px]">
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-10">
          <HeroSkeleton />
          <AboutSkeleton />
          <TechStackSkeleton />
          <SkillsSkeleton />
          <ProjectsSkeleton />
          <ExperienceSkeleton />
          <BlogSkeleton />
          <ContactSkeleton />
          <FooterSkeleton />
        </div>
      </main>
    </div>
  );
}

export default function Home({ editMode = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const loaded = useSelector((state) => state.data.loaded);
  const loading = useSelector((state) => state.data.loading);

  return loading || !loaded ? (
    <PageSkeleton mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
  ) : (
    <div className="bg-white dark:bg-ink-950 min-h-screen transition-colors duration-300">
      
      <Sidebar
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
        editMode={editMode}
      />
      <Topbar onOpenMenu={() => setMobileOpen(true)} />

      <main className="lg:pl-[250px]">
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-10">
          <Hero editMode={editMode} />
          <AboutMe editMode={editMode} />
          <TechStack editMode={editMode} />
          <Skills editMode={editMode} />
          <FeaturedProjects editMode={editMode} />
          <Experience editMode={editMode} />
          <Blog editMode={editMode} />
          <Contact editMode={editMode} />
          <Footer editMode={editMode} />
        </div>
      </main>
    </div>
  );
}
