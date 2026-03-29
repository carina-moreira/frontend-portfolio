/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Project, projects } from "./data/projects";
import { Tag } from "./ui/tag";
import ProjectGallery from "./ProjectGallery";

type Props = {
  project: Project;
};

export default function ProjectDetail({ project }: Props) {
  return (
    <main className="min-h-screen  max-w-3xl mx-auto flex flex-col flex-1 items-center justify-center pt-16 px-8 lg:pt-32 lg:px-16 sm:items-start">
      <nav className="w-full py-6 ">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-grey hover:text-blue transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
      </nav>

      <header className="w-full pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline leading-[1.1] tracking-tight mb-4">
          {project.title}
        </h1>
        <p className="text-lg text-grey max-w-2xl leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-grey">
          <span>
            <span className="font-medium text-foreground">Role</span> —{" "}
            {project.role}
          </span>
          <span>
            <span className="font-medium text-foreground">Year</span> —{" "}
            {project.year}
          </span>
        </div>
      </header>

      <ProjectGallery
        media={project.media ?? []}
        projectTitle={project.title}
      />

      <div className=" pb-24">
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl md:text-3xl font-headline mb-4">
              Overview
            </h2>
            <p className="text-grey leading-relaxed">{project.overview}</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-headline mb-4">
              The Challenge
            </h2>
            <p className="text-grey leading-relaxed">{project.challenge}</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-headline mb-4">
              The Solution
            </h2>
            <p className="text-grey leading-relaxed">{project.solution}</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-headline mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag
                  key={tag}
                  label={tag}
                  bgColor="bg-light-grey"
                  textColor="text-black"
                />
              ))}
            </div>
          </section>
        </div>

        <div className="mt-24 pt-8 border-t border-border">
          <h3 className="text-sm font-medium uppercase tracking-widest text-grey mb-6">
            Other Projects
          </h3>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-32">
            {projects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/project/${p.slug}`}
                  className="block group py-2 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-body font-medium group-hover:text-blue transition-colors">
                      {p.title}
                    </span>
                    <span className="text-grey group-hover:text-blue text-sm">
                      ↗
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
