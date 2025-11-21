export function SiteFooter() {
  return (
    <footer className="border-t border-primary-100 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-right md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-semibold text-primary-800">منصة درع الابتكار</div>
          <p className="mt-2 text-sm text-slate-600">
            حلول قابلة للتنفيذ لحماية حقوق الملكية الفكرية للمؤسسات الصغيرة والمتوسطة فى العالم
            العربي.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <a href="#framework" className="hover:text-primary-700">
            الإطار المتكامل
          </a>
          <a href="#roadmap" className="hover:text-primary-700">
            خارطة الطريق
          </a>
          <a href="#resources" className="hover:text-primary-700">
            الموارد
          </a>
          <a href="#faq" className="hover:text-primary-700">
            الأسئلة الشائعة
          </a>
        </div>
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
