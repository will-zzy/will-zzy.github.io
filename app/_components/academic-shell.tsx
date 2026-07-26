import type { ReactNode } from "react";

type ActivePage = "home" | "research" | "experience" | "competitions" | "cv";

const navigation = [
  { id: "home", label: "首页", href: "/" },
  { id: "research", label: "研究", href: "/research" },
  { id: "experience", label: "经历", href: "/experience" },
  { id: "competitions", label: "竞赛", href: "/competitions" },
  { id: "cv", label: "简历", href: "/cv" },
] as const;

export function AcademicShell({
  active,
  children,
}: {
  active: ActivePage;
  children: ReactNode;
}) {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="site-title" href="/">
            张子钰 · Ziyu Zhang
          </a>
          <nav aria-label="主要导航">
            {navigation.map((item) => (
              <a
                key={item.id}
                className={active === item.id ? "active" : undefined}
                href={item.href}
                aria-current={active === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="site-shell">
        <aside className="profile-sidebar" aria-label="个人信息">
          <img
            className="profile-photo"
            src="/profile.jpg"
            alt="张子钰的个人照片"
          />
          <h1>张子钰</h1>
          <p className="profile-name-en">Ziyu Zhang</p>
          <p className="profile-affiliation">中国科学院自动化研究所</p>
          <p className="profile-status">Ph.D. Candidate · 2027</p>

          <div className="profile-links">
            <a href="mailto:zhangziyu2021@ia.ac.cn">
              <span>Email</span>
              zhangziyu2021@ia.ac.cn
            </a>
            <a
              href="https://github.com/will-zzy"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              will-zzy ↗
            </a>
            <a
              href="https://www.zhihu.com/people/willi-18/posts"
              target="_blank"
              rel="noreferrer"
            >
              <span>Blog</span>
              知乎 ↗
            </a>
            <a href="/Ziyu_Zhang_CV.pdf" download>
              <span>CV</span>
              下载简历 ↓
            </a>
          </div>
        </aside>

        <main className="content-column">{children}</main>
      </div>

      <footer>
        <div>
          <p>© 2026 Ziyu Zhang</p>
          <p>3D Vision · Neural Rendering · CUDA</p>
        </div>
      </footer>
    </>
  );
}
