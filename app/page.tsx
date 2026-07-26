import type { Metadata } from "next";
import { AcademicShell } from "./_components/academic-shell";

export const metadata: Metadata = {
  title: "张子钰 · Ziyu Zhang",
};

export default function HomePage() {
  return (
    <AcademicShell active="home">
      <section className="intro-section">
        <p className="page-kicker">3D VISION RESEARCHER</p>
        <h2>博士研究生 · 计算机应用技术</h2>
        <p className="institution-line">中国科学院自动化研究所</p>
        <p className="intro-lead">
          我的研究聚焦于 3D 深度学习、神经渲染与高质量表面重建，
          尤其关注 Gaussian Splatting 的几何表示、可微渲染与 CUDA
          工程实现。我独立完成多项研究的理论推导、代码实现、实验与论文撰写，
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

        <div className="home-links">
          <a href="/research">查看代表工作 →</a>
          <a href="/cv">查看个人简历 →</a>
        </div>
      </section>
    </AcademicShell>
  );
}
