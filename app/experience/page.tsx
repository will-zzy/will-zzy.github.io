import type { Metadata } from "next";
import { AcademicShell } from "../_components/academic-shell";
import { experiences } from "../site-data";

export const metadata: Metadata = {
  title: "研究与工程经历 · 张子钰",
};

export default function ExperiencePage() {
  return (
    <AcademicShell active="experience">
      <div className="route-header">
        <p>EXPERIENCE</p>
        <h2>研究与工程经历</h2>
        <span>从研究原型到真实三维资产生产流程。</span>
      </div>

      <section className="route-section">
        <div className="timeline-list">
          {experiences.map((item) => (
            <article key={item.date}>
              <p className="timeline-date">{item.date}</p>
              <div>
                <h3>{item.company}</h3>
                <p className="timeline-role">{item.role}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AcademicShell>
  );
}
