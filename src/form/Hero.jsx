import { ArrowUpRight, Camera, ZoomIn, ZoomOut } from "lucide-react";

import useHeroForm from "../hooks/useHeroForm";

export default function Hero() {
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
  } = useHeroForm();

  return (
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
  );
}
