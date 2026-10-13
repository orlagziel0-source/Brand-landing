"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { projectsCopy, projectsData } from "@/lib/projects";
import { postForProject } from "@/lib/posts";

// Text-only window with the story of one project. Opened from the events
// strip; arrows step through every project in `projectsData.order`.
export default function ProjectModal({
  projectKey,
  onChange,
  onClose,
}: {
  projectKey: string | null;
  onChange: (key: string) => void;
  onClose: () => void;
}) {
  const { locale } = useLanguage();
  const copy = projectsCopy(locale);
  const closeRef = useRef<HTMLButtonElement>(null);
  const project = projectKey ? copy.projects[projectKey] : null;

  useEffect(() => {
    if (!projectKey) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [projectKey, onClose]);

  if (!projectKey || !project) return null;

  const order = projectsData.order;
  const step = (d: number) =>
    onChange(order[(order.indexOf(projectKey) + d + order.length) % order.length]);
  const rtl = locale === "he";
  const postUrl = postForProject(locale, projectKey);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(20,18,16,0.62)] p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        dir={rtl ? "rtl" : "ltr"}
        className="relative flex max-h-[min(88vh,760px)] w-[min(620px,100%)] flex-col overflow-auto bg-paper px-[22px] pb-[22px] pt-9 text-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] sm:px-9 sm:pb-7 sm:pt-10"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={copy.close}
          className="absolute end-3 top-3 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-ink/20 bg-paper text-lg leading-none hover:border-accent hover:text-accent"
        >
          ✕
        </button>
        <p className="text-[0.85rem] tracking-[0.04em] text-stone">{project.org}</p>
        <h2 id="project-title" className="mt-1.5 text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-tight [text-wrap:balance]">
          {project.name}
        </h2>
        {(
          [
            ["challenge", project.challenge],
            ["did", project.did],
            ["result", project.result],
          ] as const
        ).map(([k, text]) => (
          <div key={k} className="mt-5">
            <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-accent">
              {copy.labels[k]}
            </h3>
            <p className="mt-1.5 max-w-[62ch] whitespace-pre-line text-[1.02rem] leading-[1.7]">{text}</p>
          </div>
        ))}
        {postUrl && (
          <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 self-start text-[0.9rem] font-semibold text-accent underline underline-offset-[3px]"
          >
            {rtl ? "כתבתי על זה בלינקדאין" : "I wrote about this on LinkedIn"} ↗
          </a>
        )}
        <div className="mt-auto flex justify-between gap-3 pt-6">
          <button
            type="button"
            onClick={() => step(-1)}
            className="rounded-full border border-ink/20 px-4 py-2 text-sm hover:border-accent hover:text-accent"
          >
            {rtl ? "→ " : "← "}
            {copy.prev}
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            className="rounded-full border border-ink/20 px-4 py-2 text-sm hover:border-accent hover:text-accent"
          >
            {copy.next}
            {rtl ? " ←" : " →"}
          </button>
        </div>
      </div>
    </div>
  );
}
