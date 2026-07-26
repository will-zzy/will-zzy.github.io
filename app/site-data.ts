export const projects = [
  {
    index: "01",
    venue: "ICCV 2025",
    title: "Quadratic Gaussian Splatting",
    summary:
      "提出二次曲面高斯基元，以测地距离作为优化度量，在保持实时渲染的同时生成高质量表面网格。",
    result: "DTU +10% · T&T +33% · 25 FPS",
    tags: ["3DGS", "Surface Reconstruction", "CUDA","Kernel Optimization"],
    links: [
      { label: "论文", href: "https://arxiv.org/pdf/2411.16392" },
      { label: "代码", href: "https://github.com/will-zzy/QGS" },
      { label: "项目主页", href: "https://will-zzy.github.io/QGS/" },
    ],
  },
  {
    index: "02",
    venue: "arXiv 2025 · Robotics",
    title: "Dexbotic",
    summary:
      "参与构建面向具身智能研究的开源 Vision-Language-Action 工具箱，统一支持主流 VLA 策略的复现、训练、推理与评测。",
    result: "Open-source VLA Toolbox · 1.3k+ GitHub Stars",
    tags: ["VLA", "Embodied AI", "PyTorch"],
    links: [
      { label: "技术报告", href: "https://arxiv.org/abs/2510.23511" },
      { label: "代码", href: "https://github.com/Dexmal/dexbotic" },
      { label: "项目主页", href: "https://dexbotic.com/" },
    ],
  },
  {
    index: "03",
    venue: "SIGGRAPH Asia 2025 Challenge",
    title: "1-Minute Reconstruction",
    summary:
      "以前馈式 Gaussian Splatting 辅助初始化并优化关键 CUDA Kernel，在 60 秒内完成场景重建。",
    result: "48 支队伍第 1 名 · PSNR 28.4",
    tags: ["Fast GS", "Kernel Optimization"],
    links: [
      { label: "论文", href: "https://arxiv.org/abs/2601.19489" },
      { label: "代码", href: "https://github.com/will-zzy/siggraph_asia" },
    ],
  },
  {
    index: "04",
    venue: "Transactions in GIS 2025",
    title: "LCA-NeRF",
    summary:
      "面向城市级场景的分块隐式重建，通过几何聚类外观嵌入缓解跨块外观不一致。",
    result: "训练时间缩短至 1/10 · PSNR +0.2",
    tags: ["NeRF", "Large-scale Scene", "iNGP"],
    links: [
      { label: "论文", href: "https://doi.org/10.1111/tgis.70102" },
    ],
  },
  {
    index: "05",
    venue: "Open-source Reproduction",
    title: "2DGS from Scratch",
    summary:
      "在官方尚未开源时独立完成前向与反向梯度推导，并实现完整 CUDA Forward / Backward。",
    result: "端到端可训练 · 56 GitHub Stars",
    tags: ["Differentiable Rendering", "CUDA", "PyTorch"],
    links: [
      {
        label: "代码",
        href: "https://github.com/will-zzy/2dgs-non-official",
      },
    ],
  },
];

export const expertise = [
  {
    title: "三维表面重建",
    text: "从多视图输入恢复高质量、可编辑的几何表面。",
  },
  {
    title: "神经渲染",
    text: "研究 NeRF 与 Gaussian Splatting 的表示和优化。",
  },
  {
    title: "CUDA 并行计算",
    text: "实现可微算子、前反向 Kernel 与训练流程加速。",
  },
  {
    title: "3D AIGC/数据资产",
    text: "构建面向仿真与具身智能的高保真三维资产。",
  },
];

export const experiences = [
  {
    date: "2025.03 — 2025.10",
    company: "原力灵机",
    role: "Robotics 组",
    description:
      "从 0 到 1 搭建三维资产扫描、表面重建与逆渲染流程，支撑 1,000+ 资产入库，单个采集员每天可处理约 18 个资产，并用于内部仿真 Demo 展示。",
  },
  {
    date: "2022.11 — 2024.11",
    company: "中科院自动化所 × 商汤科技",
    role: "联合实验室",
    description:
      "主导 3D Gaussian Splatting 表面重建研究；参与城市级 NeRF 的分块训练与加速渲染。",
  },
];

export const awards = [
  {
    date: "2025",
    title: "SIGGRAPH Asia 2025 3DGS 挑战赛",
    result: "第 1 名 · 48 支队伍",
    links: [
      { label: "论文", href: "https://arxiv.org/abs/2601.19489" },
      { label: "代码", href: "https://github.com/will-zzy/siggraph_asia" },
    ],
  },
  {
    date: "2025",
    title: "CAD/CG 2025 高精度三维重建挑战赛",
    result: "第 1 名 · 领先第 2 名 10 分",
    links: [{ label: "Demo", href: "#cadcg-demo" }],
  },
  {
    date: "2025",
    title: "ICRA 2025 Sim2Real 挑战赛",
    result: "第 2 名",
    links: [],
  },
];

export const skills = [
  "Python",
  "C / C++",
  "CUDA",
  "PyTorch",
  "OpenGL",
  "3D Gaussian Splatting",
  "NeRF",
  "SfM / SLAM",
  "COLMAP",
  "OpenCV",
  "Open3D",
  "Blender",
  "nvdiffrast",
  "PBR 逆渲染",
  "Linux",
  "Git",
  "CMake",
];
