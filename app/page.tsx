import type { Metadata } from "next";
import { AcademicShell } from "./_components/academic-shell";
import { projects } from "./site-data";

export const metadata: Metadata = {
  title: "张子钰 · Ziyu Zhang",
};

const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <AcademicShell active="home">
      <section className="intro-section">
        <p className="page-kicker">3D VISION RESEARCHER</p>
        <h2>博士研究生 · 计算机应用技术</h2>
        <p className="institution-line">
          中国科学院自动化研究所 ·{" "}
          <a href="http://3dv.ac.cn/" target="_blank" rel="noreferrer">
            3DV 研究组 ↗
          </a>
        </p>
        <p className="intro-lead">
          我的研究聚焦于 3D 深度学习、神经渲染与高质量表面重建，
          尤其关注 Gaussian Splatting 的几何表示、可微渲染、CUDA
          工程实现与 3D AIGC。我独立完成多项研究的理论推导、代码实现、实验与论文撰写，
          并希望将三维技术应用于具身智能、自动驾驶与真实世界系统。
        </p>

        <div className="research-interests">
          <h3>Research Interests</h3>
          <ul>
            <li>3D Gaussian Splatting</li>
            <li>Neural Rendering</li>
            <li>Surface Reconstruction</li>
            <li>Embodied AI</li>
            <li>CUDA & Differentiable Rendering</li>
          </ul>
        </div>

        <section
          className="featured-works"
          aria-labelledby="featured-works-title"
        >
          <div className="featured-works-heading">
            <h3 id="featured-works-title">Selected Works</h3>
            <span>代表作</span>
          </div>

          <div className="featured-work-grid">
            {featuredProjects.map((project) => (
              <article className="featured-work" key={project.index}>
                <p className="featured-work-venue">{project.venue}</p>
                <h4>{project.title}</h4>
                <p className="featured-work-summary">{project.summary}</p>
                <p className="featured-work-result">{project.result}</p>
                <div className="featured-work-links">
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
              </article>
            ))}
          </div>
        </section>

        <div className="home-links">
          <a href="/research">查看代表工作 →</a>
          <a href="/cv">查看个人简历 →</a>
        </div>

        <section
          className="home-education"
          aria-labelledby="home-education-title"
        >
          <div className="featured-works-heading">
            <h3 id="home-education-title">Education</h3>
            <span>教育经历</span>
          </div>

          <div className="education-list">
            <article>
              <span>2021.09 — 2027.06（预计）</span>
              <div>
                <h3>中国科学院自动化研究所</h3>
                <p>计算机应用技术 · 博士研究生</p>
                <a
                  className="education-affiliation-link"
                  href="http://3dv.ac.cn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  3DV 研究组 ↗
                </a>
              </div>
            </article>
            <article>
              <span>2017.09 — 2021.06</span>
              <div>
                <h3>北京航空航天大学</h3>
                <p>自动化科学与电气工程学院 · 学士</p>
              </div>
            </article>
          </div>
        </section>
      </section>
    </AcademicShell>
  );
}
