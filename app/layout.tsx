import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const headingFont = Tajawal({
  subsets: ["arabic"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "700"]
});

const bodyFont = Cairo({
  subsets: ["arabic"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "حماية حقوق الملكية الفكرية للمؤسسات الصغيرة والمتوسطة",
  description:
    "دليل شامل لتطوير استراتيجيات فعّالة لحماية حقوق الملكية الفكرية في المؤسسات الصغيرة والمتوسطة مع أدوات وأطر عمل قابلة للتطبيق."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
