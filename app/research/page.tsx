import type { Metadata } from "next";
import { AcademicShell } from "../_components/academic-shell";
import { expertise, projects } from "../site-data";

export const metadata: Metadata = {
  title: "研究与代表工作 · 张子钰",
};

export default function ResearchPage() {
  return (
    <AcademicShell active="research">
      <div className="route-header">
        <p>RESEARCH</p>
        <h2>研究与代表工作</h2>
        <span>
          关注三维几何表示、神经渲染、表面重建与 GPU 并行计算。
        </span>
      </div>

      <section className="route-section">
        <div className="section-heading">
          <p>01</p>
          <h2>研究方向</h2>
        </div>
        <div className="expertise-list">
          {expertise.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="route-section">
        <div className="section-heading">
          <p>02</p>
          <h2>代表工作</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-item" key={project.index}>
              <div className="project-index">{project.index}</div>
              <div>
                <p className="project-venue">{project.venue}</p>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <p className="project-result">{project.result}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="text-links">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AcademicShell>
  );
}
