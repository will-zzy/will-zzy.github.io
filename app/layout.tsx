import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://will-zzy.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "张子钰 · Ziyu Zhang — 3D Vision Researcher",
  description:
    "中科院自动化所博士研究生，研究方向包括 3D Gaussian Splatting、NeRF、表面重建、具身智能与 CUDA 并行计算。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "张子钰 · Ziyu Zhang",
    description: "3D Vision · Gaussian Splatting · CUDA",
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og-academic.png`,
        width: 1200,
        height: 630,
        alt: "张子钰个人网站分享封面",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "张子钰 · Ziyu Zhang",
    description: "3D Vision · Gaussian Splatting · CUDA",
    images: [`${siteUrl}/og-academic.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
