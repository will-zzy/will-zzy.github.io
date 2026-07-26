import type { Metadata } from "next";
import { AcademicShell } from "../_components/academic-shell";
import { awards } from "../site-data";

export const metadata: Metadata = {
  title: "竞赛经历 · 张子钰",
};

export default function CompetitionsPage() {
  return (
    <AcademicShell active="competitions">
      <div className="route-header">
        <p>COMPETITIONS</p>
        <h2>竞赛经历</h2>
        <span>三次担任队长，获得两项冠军与一项亚军。</span>
      </div>

      <section className="route-section">
        <div className="award-list">
          {awards.map((award, index) => (
            <article key={award.title}>
              <span>0{index + 1}</span>
              <div>
                <p className="award-date">{award.date}</p>
                <h3>{award.title}</h3>
                <p>{award.result}</p>
                {award.links.length > 0 && (
                  <div className="text-links">
                    {award.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target={
                          link.href.startsWith("#") ? undefined : "_blank"
                        }
                        rel={
                          link.href.startsWith("#") ? undefined : "noreferrer"
                        }
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="route-section competition-demo" id="cadcg-demo">
        <div className="demo-heading">
          <p>CAD/CG 2025 · RECONSTRUCTION DEMO</p>
          <h3>大型建筑场景高精度三维重建</h3>
          <span>稠密重建 · Mesh Refinement · 纹理映射</span>
        </div>
        <video
          controls
          playsInline
          preload="metadata"
          poster="/cadcg-demo-poster.png"
          aria-label="CAD/CG 2025 建筑场景三维重建演示"
        >
          <source src="/cadcg-demo.mp4" type="video/mp4" />
          你的浏览器不支持 HTML5 视频播放。
        </video>

      </section>
    </AcademicShell>
  );
}
