const resources = [
  {
    title: "نموذج سياسة حماية الملكية الفكرية",
    type: "قالب مستند",
    description:
      "ملف جاهز بصيغة قابلة للتعديل يتضمن بنود السرية، إدارة الوصول، مشاركة الملكية، وسياسات التطوير الداخلى.",
    link: "https://docs.google.com"
  },
  {
    title: "قائمة التحقق للتسجيل القانوني",
    type: "Checklist",
    description:
      "مسار واضح لتسجيل العلامات التجارية، براءات الاختراع، حقوق النشر فى الدول العربية الأساسية وأسواق التصدير.",
    link: "https://docs.google.com"
  },
  {
    title: "لوحة متابعة مؤشرات الامتثال",
    type: "Google Sheet",
    description:
      "أداة جاهزة لتتبع الالتزام بالإجراءات، وإدارة البلاغات، وتقدير العائد على الاستثمار من حماية الملكية الفكرية.",
    link: "https://docs.google.com"
  }
];

const partners = [
  {
    name: "مكاتب تسجيل محلية",
    value: "تعاون مع مكاتب تتبع معايير WIPO لنشر حقوقك سريعاً.",
    badge: "تجاري"
  },
  {
    name: "حاضنات أعمال",
    value: "استخدم برامج الحاضنات المتخصصة في حماية الابتكار لتوفير الخبرة القانونية.",
    badge: "حكومي"
  },
  {
    name: "مزودو حلول رقمية",
    value: "اختر مزودين يقدمون تتبع النسخ ودعم التشفير وإدارة الوصول.",
    badge: "تقني"
  }
];

export function ResourceToolkit() {
  return (
    <section id="resources" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="section-heading">مجموعة الأدوات التنفيذية</h2>
          <p className="section-subtitle">
            اختر الأدوات والقوالب لدعم تنفيذ استراتيجيتك بسرعة. جميع الموارد قابلة للتخصيص ويمكن
            مشاركتها مع فرقك وشركائك.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="glass-panel space-y-6 p-8">
            <h3 className="text-xl font-semibold text-primary-900">قوالب قابلة للتنزيل</h3>
            <div className="space-y-6">
              {resources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-primary-100 bg-white/80 p-6 transition hover:border-primary-200 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-primary-600">{resource.type}</div>
                    <svg
                      className="h-5 w-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.25 6.75L21 3m0 0h-5.25M21 3v5.25M18 14v4.75A2.25 2.25 0 0115.75 21h-9.5A2.25 2.25 0 014 18.75v-9.5A2.25 2.25 0 016.25 7H11"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 text-lg font-semibold text-primary-900">{resource.title}</div>
                  <p className="mt-3 text-sm text-slate-600">{resource.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8">
            <h3 className="text-xl font-semibold text-primary-900">شراكات موصى بها</h3>
            <div className="mt-6 space-y-5">
              {partners.map((partner) => (
                <div key={partner.name} className="rounded-2xl border border-primary-100 bg-white/80 p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-primary-800">{partner.name}</div>
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                      {partner.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{partner.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
