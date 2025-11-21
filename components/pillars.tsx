const pillars = [
  {
    title: "حصر الأصول الفكرية",
    description:
      "تحديد جميع عناصر المعرفة والابتكار والشعارات والبرمجيات والعمليات والبيانات التي تمثل ميزة تنافسية قابلة للحماية.",
    actions: [
      "إنشاء سجل تصنيفى للأصول حسب نوع الحماية المطلوبة",
      "تقييم قيمة كل أصل وتأثير فقدانه أو تسريبه",
      "تحديد مالك كل أصل ومسؤول الحماية"
    ]
  },
  {
    title: "تحليل المخاطر القانونية",
    description:
      "فهم البيئة التشريعية المحلية والدولية وإعداد خطط امتثال واضحة تقلل من احتمالية النزاعات والتعديات.",
    actions: [
      "مراجعة القوانين الوطنية والاتفاقيات الدولية ذات الصلة",
      "تحديث العقود وسياسات الاستخدام لضمان نقل الحقوق بشكل صحيح",
      "بناء خطة استجابة للنزاعات والتعديات"
    ]
  },
  {
    title: "السياسات والإجراءات الداخلية",
    description:
      "إنشاء منظومة حوكمة للملكية الفكرية تغطي دورة حياة الابتكار من الفكرة وحتى تسويق المنتج، مع توزيع الصلاحيات بوضوح.",
    actions: [
      "تطوير سياسات مشاركة المعرفة والسرية",
      "تصميم إجراءات توثيق الفكرة وتسجيل الحقوق والأختام الزمنية",
      "تحديد ضوابط الوصول لكل فئة من الأصول الحساسة"
    ]
  },
  {
    title: "التدريب والثقافة المؤسسية",
    description:
      "بناء وعي لدى الموظفين والشركاء حول أهمية حماية الحقوق، وكيفية اكتشاف المخاطر والتصرف الصحيح عند حدوثها.",
    actions: [
      "برامج تدريب دورية حسب الفئات الوظيفية",
      "محتوى توعوى مختصر يمكن نشره عبر البريد أو من خلال المنصة الداخلية",
      "مؤشرات أداء لقياس التزام الفرق بالإجراءات"
    ]
  }
];

export function StrategyPillars() {
  return (
    <section id="framework" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-24 gradient-bar opacity-40" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl">
          <h2 className="section-heading">إطار الحماية المتكامل للمؤسسات الصغيرة والمتوسطة</h2>
          <p className="section-subtitle">
            اعتمد هذا الإطار ذي الأربع ركائز لتأسيس منظومة حماية متدرجة ومرنة تتطور مع نمو أعمالك
            وتوسعك في الأسواق الجديدة.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="grid-card flex flex-col gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-primary-800">{pillar.title}</h3>
                <p className="mt-2 text-slate-600">{pillar.description}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pr-5 text-sm text-slate-600">
                {pillar.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
