import type { Metadata } from "next";
import { AcademicShell } from "../_components/academic-shell";
import { skills } from "../site-data";

export const metadata: Metadata = {
  title: "教育、技能与简历 · 张子钰",
};

export default function CvPage() {
  return (
    <AcademicShell active="cv">
      <div className="route-header">
        <p>CURRICULUM VITAE</p>
        <h2>教育、技能与简历</h2>
        <span>预计于 2027 年 6 月获得博士学位。</span>
        <a className="download-button" href="/Ziyu_Zhang_CV.pdf" download>
          下载 PDF 简历 ↓
        </a>
      </div>

      <section className="route-section">
        <div className="section-heading">
          <p>01</p>
          <h2>教育经历</h2>
        </div>
        <div className="education-list">
          <article>
            <span>2021 — 2027（预计）</span>
            <div>
              <h3>中国科学院自动化研究所</h3>
              <p>计算机应用技术 · 博士研究生</p>
            </div>
          </article>
          <article>
            <span>2017 — 2021</span>
            <div>
              <h3>北京航空航天大学</h3>
              <p>自动化科学与电气工程 · 学士</p>
            </div>
          </article>
        </div>
      </section>

      <section className="route-section">
        <div className="section-heading">
          <p>02</p>
          <h2>技术栈</h2>
        </div>
        <div className="skills-list" aria-label="技术技能">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="route-section contact-section">
        <div className="section-heading">
          <p>03</p>
          <h2>联系我</h2>
        </div>
        <p>
          正在寻找三维视觉、具身智能、自动驾驶与高性能计算方向的研究和工程机会。
        </p>
        <a className="email-link" href="mailto:zhangziyu2021@ia.ac.cn">
          zhangziyu2021@ia.ac.cn ↗
        </a>
      </section>
    </AcademicShell>
  );
}
