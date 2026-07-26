# Ziyu Zhang — Personal Website

面向 2027 届秋招的多页面个人网站，重点展示 3D Gaussian Splatting、NeRF、表面重建、CUDA 工程、具身智能、代表论文和竞赛经历。

线上地址：<https://will-zzy.github.io/>

## 页面

- `/`：个人介绍
- `/research/`：研究方向与代表工作
- `/experience/`：研究与工程经历
- `/competitions/`：竞赛经历与 CAD/CG Demo
- `/cv/`：教育、技能、联系方式和简历下载

## 本地运行

需要 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

浏览器访问终端显示的地址，通常是 <http://localhost:3000/>。

生产构建检查：

```bash
npm run build
```

构建后的静态网站位于 `out/`。

## 修改内容

- 首页介绍：`app/page.tsx`
- 项目、实习、竞赛和技能数据：`app/site-data.ts`
- 研究页面：`app/research/page.tsx`
- 经历页面：`app/experience/page.tsx`
- 竞赛与视频页面：`app/competitions/page.tsx`
- CV 页面：`app/cv/page.tsx`
- 公共导航、头像和个人信息：`app/_components/academic-shell.tsx`
- 颜色、字号、间距和响应式布局：`app/globals.css`
- 网页标题和分享信息：`app/layout.tsx`

常见资源替换：

- 头像：替换 `public/profile.jpg`
- 简历：替换 `public/Ziyu_Zhang_CV.pdf`
- CAD/CG Demo：添加或替换 `public/cadcg-demo.mp4`
- Demo 封面：替换 `public/cadcg-demo-poster.png`
- 社交分享封面：替换 `public/og-academic.png`

文件名保持不变时不需要修改代码。

## GitHub Pages 自动部署

仓库名称必须是 `will-zzy.github.io`。`.github/workflows/deploy-pages.yml` 会在代码推送到 `main` 后：

1. 安装依赖；
2. 执行 `npm run build`；
3. 上传 `out/`；
4. 发布到 <https://will-zzy.github.io/>。

首次部署时，在 GitHub 仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。之后每次推送到 `main` 都会自动更新网站。

日常更新命令：

```bash
git add .
git commit -m "Update portfolio"
git push
```

不要把密码、API Key 或其他私密信息写入仓库。头像、邮箱和 `public/Ziyu_Zhang_CV.pdf` 会随网站公开。
