
import { ArrowUpRight, Camera, ZoomIn, ZoomOut } from "lucide-react";

import useHeroForm from "../hooks/useHeroForm";
import { useDispatch } from "react-redux";
import { fetchHero } from "../service/api";
import { useEffect } from "react";
import { useSelector } from 'react-redux';


const HomeSkeleton = () => {
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


export default function Hero({ editMode= false}) {
  const profile = useSelector(state => state?.hero);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHero());
  }, [dispatch]);
  
  const {
    formData,
    imagePreview,
    fileInputRef,
    isDragging,
    handleChange,
    handleImageChange,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleZoomIn,
    handleZoomOut,
    handleResetImage,
    handleSubmit,
  } = useHeroForm({profile:profile.data});

  if (profile?.loading || !formData.greeting){
    return (<HomeSkeleton/>)
  }
  
  return editMode ? (
    <section
      id="home"
      className="relative pt-10 lg:pt-4 pb-4 scroll-mt-20 overflow-hidden"
    >
      {/* =====================================================
          ORIGINAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block bg-grid bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      {/* =====================================================
          HIRE ME
      ===================================================== */}

      <div className="hidden lg:flex justify-end mb-4">
        <a
          href="#contact"
          className="flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full bg-ink-950 dark:bg-white text-white dark:text-ink-950 hover:bg-brand-600 dark:hover:bg-brand-500 dark:hover:text-white transition-colors"
        >
          Hire Me <ArrowUpRight size={16} />
        </a>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-[0.8fr_auto] gap-10 items-center">
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="lg:pl-20">
            {/* Greeting */}

            <input
              type="text"
              value={formData.greeting}
              onChange={(e) => handleChange("greeting", e.target.value)}
              className="block w-full bg-transparent border-none outline-none p-0 font-mono text-xs tracking-[0.25em] text-brand-600 dark:text-brand-400 uppercase mb-3"
              placeholder="Greeting"
            />

            {/* First Name */}

            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="block w-full bg-transparent border-none outline-none p-0 font-display font-extrabold leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink-950 dark:text-white"
              placeholder="First Name"
            />

            {/* Last Name */}

            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="block w-full bg-transparent border-none outline-none p-0 font-display font-extrabold leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-brand-600 dark:text-brand-400"
              placeholder="Last Name"
            />

            {/* Role */}

            <input
              type="text"
              value={formData.role}
              onChange={(e) => handleChange("role", e.target.value)}
              className="block w-full mt-5 bg-transparent border-none outline-none p-0 text-lg font-medium text-ink-900/80 dark:text-paper-100/90 max-w-lg"
              placeholder="Your role"
            />

            {/* Tagline */}

            <textarea
              value={formData.tagline}
              onChange={(e) => handleChange("tagline", e.target.value)}
              rows={2}
              className="block w-full mt-2 bg-transparent border-none outline-none p-0 resize-none text-ink-900/50 dark:text-paper-100/50 max-w-md"
              placeholder="Your tagline..."
            />

            {/* SAVE */}

            <button
              type="submit"
              className="inline-flex items-center gap-2 mt-7 px-6 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors shadow-glow"
            >
              Save Changes
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="relative mx-auto lg:mx-0">
            {/* Glow */}

            <div className="absolute inset-0 -z-10 rounded-full bg-brand-500/20 blur-3xl scale-110 animate-pulse-slow" />

            {/* =================================================
                AVATAR WRAPPER
            ================================================= */}

            <div className="relative w-52 h-52 sm:w-64 sm:h-64">
              {/* =================================================
                  PROFILE CIRCLE
              ================================================= */}

              <div
                className={`absolute inset-0 rounded-full border-4 border-brand-500/30 p-2 animate-float ${
                  imagePreview ? "cursor-grab" : ""
                } ${isDragging ? "cursor-grabbing" : ""}`}
              >
                {/* =================================================
                    IMAGE AREA
                ================================================= */}

                <div
                  className="relative w-full h-full rounded-full overflow-hidden bg-ink-800 flex items-center justify-center select-none touch-none"
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt={
                        formData.name ||
                        `${formData.firstName} ${formData.lastName}`
                      }
                      draggable={false}
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                      style={{
                        objectPosition: `${formData.avatarPositionX}% ${formData.avatarPositionY}%`,
                        transform: `scale(${formData.avatarScale})`,
                        transformOrigin: "center center",
                      }}
                    />
                  ) : (
                    <span className="font-display text-6xl font-bold text-brand-500/40">
                      {formData.firstName?.[0]}
                    </span>
                  )}

                  {/* Drag hint */}

                  {imagePreview && !isDragging && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 hover:opacity-100 bg-black/50 text-white text-[10px] px-3 py-1.5 rounded-full transition-opacity">
                        Drag to reposition
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* =================================================
                  CAMERA BUTTON
                  
                  IMPORTANT:
                  Outside overflow-hidden so it is always visible.
              ================================================= */}

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                title="Change profile image"
                className="absolute z-50 bottom-2 right-2 sm:bottom-3 sm:right-3 w-10 h-10 rounded-full bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center shadow-lg border-2 border-white dark:border-ink-900 transition-all hover:scale-105"
              >
                <Camera size={18} />
              </button>

              {/* Hidden file input */}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            {/* =================================================
                IMAGE CONTROLS
            ================================================= */}

            {imagePreview && (
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white dark:bg-ink-900 border border-paper-200 dark:border-white/10 rounded-full p-1.5 shadow-sm z-30">
                {/* Zoom Out */}

                <button
                  type="button"
                  onClick={handleZoomOut}
                  title="Zoom out"
                  className="w-7 h-7 rounded-full flex items-center justify-center text-ink-900/50 dark:text-paper-100/50 hover:bg-paper-100 dark:hover:bg-white/10 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  <ZoomOut size={14} />
                </button>

                {/* Zoom Value */}

                <span className="text-[10px] font-medium min-w-[34px] text-center text-ink-900/50 dark:text-paper-100/50">
                  {Math.round(formData.avatarScale * 100)}%
                </span>

                {/* Zoom In */}

                <button
                  type="button"
                  onClick={handleZoomIn}
                  title="Zoom in"
                  className="w-7 h-7 rounded-full flex items-center justify-center text-ink-900/50 dark:text-paper-100/50 hover:bg-paper-100 dark:hover:bg-white/10 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  <ZoomIn size={14} />
                </button>

                {/* Reset */}

                <button
                  type="button"
                  onClick={handleResetImage}
                  className="px-2 h-7 rounded-full text-[10px] font-medium text-ink-900/50 dark:text-paper-100/50 hover:bg-paper-100 dark:hover:bg-white/10 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  Reset
                </button>
              </div>
            )}

            {/* =================================================
                YEARS BADGE
                EXACT ORIGINAL POSITION/SIZE
            ================================================= */}

            <div className="absolute -top-4 -right-4 sm:right-48 bg-brand-600 text-white rounded-2xl px-4 py-3 text-center shadow-glow">
              <input
                type="text"
                value={formData.yearsLabel}
                onChange={(e) => handleChange("yearsLabel", e.target.value)}
                className="block w-[70px] h-[22px] mx-auto bg-transparent border-none outline-none p-0 text-center font-display font-extrabold text-lg leading-none text-white"
                placeholder="3+"
              />

              <input
                type="text"
                value={formData.yearsSub}
                onChange={(e) => handleChange("yearsSub", e.target.value)}
                className="block w-[70px] h-[22px] mx-auto bg-transparent border-none outline-none p-0 text-center text-[10px] leading-tight mt-1 opacity-90 text-white"
                placeholder="Years"
              />
            </div>

            {/* =================================================
                AVAILABILITY
                ORIGINAL POSITION
            ================================================= */}

            <div className="absolute -bottom-0 left-[26%] -translate-x-1/2 flex items-center gap-1.5 bg-white dark:bg-ink-900 border border-paper-200 dark:border-white/10 rounded-full px-3 py-1.5 text-xs font-medium text-ink-900 dark:text-paper-100 whitespace-nowrap shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-slow flex-shrink-0" />

              <input
                type="text"
                value={formData.availability}
                onChange={(e) => handleChange("availability", e.target.value)}
                className="w-[130px] bg-transparent border-none outline-none p-0 text-xs font-medium text-ink-900 dark:text-paper-100"
                placeholder="Available for work"
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  ) : (
    <section
      id="home"
      className="relative pt-10 lg:pt-4 pb-4 scroll-mt-20 overflow-hidden"
    >
      {/* ambient grid + glow backdrop, dark mode only */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block bg-grid bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="hidden lg:flex justify-end mb-4">
        <a
          href="#contact"
          className="flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full bg-ink-950 dark:bg-white text-white dark:text-ink-950 hover:bg-brand-600 dark:hover:bg-brand-500 dark:hover:text-white transition-colors"
        >
          Hire Me <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid lg:grid-cols-[0.8fr_auto] gap-10 items-center">
        <div className="lg:pl-20">
          <p className="font-mono text-xs tracking-[0.25em] text-brand-600 dark:text-brand-400 uppercase mb-3">
            {profile?.data?.greeting}
          </p>
          <h1 className="font-display font-extrabold leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink-950 dark:text-white">
            {profile?.data?.firstName}
            <br />
            <span className="text-brand-600 dark:text-brand-400">
              {profile?.data?.lastName}
            </span>
          </h1>

          <p className="mt-5 text-lg font-medium text-ink-900/80 dark:text-paper-100/90 max-w-lg">
            {profile?.data?.role}
          </p>
          <p className="mt-2 text-ink-900/50 dark:text-paper-100/50 max-w-md">
            {profile?.data?.tagline}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-7 px-6 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors shadow-glow"
          >
            Let's Connect <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="relative mx-auto lg:mx-0">
          <div className="absolute inset-0 -z-10 rounded-full bg-brand-500/20 blur-3xl scale-110 animate-pulse-slow" />
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full border-4 border-brand-500/30 p-2 animate-float">
            <div className="w-full h-full rounded-full overflow-hidden bg-ink-800 flex items-center justify-center">
              {profile?.data?.avatar?.avatar ? (
                <img
                  src={profile.data.avatar.avatar}
                  alt={profile.data.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : null}
              <span className="font-display text-6xl font-bold text-brand-500/40 absolute">
                {profile?.data?.firstName?.[0]}
              </span>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 sm:right-48 bg-brand-600 text-white rounded-2xl px-4 py-3 text-center shadow-glow">
            <p className="font-display font-extrabold text-lg leading-none">
              {profile?.data?.yearsLabel}
            </p>
            <p className="text-[10px] leading-tight mt-1 opacity-90 max-w-[70px]">
              {profile?.data?.yearsSub}
            </p>
          </div>

          <div className="absolute -bottom-0 left-[26%] -translate-x-1/2 flex items-center gap-1.5 bg-white dark:bg-ink-900 border border-paper-200 dark:border-white/10 rounded-full px-3 py-1.5 text-xs font-medium text-ink-900 dark:text-paper-100 whitespace-nowrap shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-slow" />
            {profile?.data?.availability}
          </div>
        </div>
      </div>
    </section>
  );
}
