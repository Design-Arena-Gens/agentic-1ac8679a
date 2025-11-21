'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { label: "فرص نمو محفوظة", value: "68%", info: "زيادة فى قيمة الشركات المحمية" },
  { label: "تقليل النزاعات", value: "45%", info: "انخفاض متوسط فى النزاعات القانونية" },
  { label: "سرعة الابتكار", value: "3x", info: "تسارع إطلاق المنتجات المحمية" }
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute -top-32 left-0 h-72 w-72 rounded-full bg-primary-200/60 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-primary-400/40 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-panel p-12 md:p-16"
        >
          <div className="badge">برنامج حماية الملكية الفكرية للمؤسسات الصغيرة والمتوسطة</div>
          <h1 className="mt-6 text-4xl font-bold text-primary-900 md:text-5xl lg:text-6xl">
            حوّل ابتكاراتك إلى أصول استراتيجية محمية قانونياً
          </h1>
          <p className="mt-6 text-lg text-slate-600 md:text-xl">
            يوفر هذا الدليل إطار عمل متكامل لبناء منظومة حماية فاعلة، من تقييم الأصول الفكرية إلى
            تنفيذ السياسات والتدريب والتقنيات الرقابية، لتمكين النمو المستدام للمؤسسات الناشئة
            والمتوسطة.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#framework"
              className="inline-flex items-center justify-center rounded-full bg-primary-600 px-7 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-primary-700"
            >
              ابدأ خطة الحماية المتكاملة
            </Link>
            <Link
              href="#resources"
              className="inline-flex items-center justify-center rounded-full border border-primary-200 px-7 py-3 text-base font-semibold text-primary-700 transition hover:border-primary-300 hover:text-primary-800"
            >
              أدوات ونماذج جاهزة
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-white/70 p-6 text-center shadow-md">
                <div className="text-4xl font-bold text-primary-700">{stat.value}</div>
                <div className="mt-2 text-sm font-semibold text-slate-500">{stat.label}</div>
                <p className="mt-3 text-sm text-slate-500">{stat.info}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
