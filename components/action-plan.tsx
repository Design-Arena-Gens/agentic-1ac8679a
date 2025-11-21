const quickActions = [
  {
    title: "خلال الأسبوع الأول",
    steps: [
      "عين مسؤولاً للملكية الفكرية وحدد فريق الدعم",
      "ابدأ حصر الأصول الحالية والمتوقعة باستخدام جدول المتابعة",
      "تفعيل اتفاقيات عدم الإفصاح الحالية أو تحديثها"
    ]
  },
  {
    title: "خلال الشهر الأول",
    steps: [
      "تسليم سياسات الحماية للمديرين واعتمادها",
      "دمج ضوابط الوصول إلى الملفات الحساسة مع أنظمة التقنية الحالية",
      "بدء برنامج تدريب مصغر لجميع الموظفين"
    ]
  },
  {
    title: "خلال الربع الأول",
    steps: [
      "تسجيل الأصول ذات الأولوية العالية محلياً ودولياً عند الحاجة",
      "إجراء تحليل تكاليف/عوائد وتحديث خطة الاستثمار",
      "تدشين لوحة بيانات لمراقبة المؤشرات واتخاذ القرار"
    ]
  }
];

export function ActionPlan() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="section-heading">خطة عمل سريعة التنفيذ</h2>
          <p className="section-subtitle">
            نفذ الخطوات التالية للانتقال من الأفكار إلى حماية فعلية تغطي الجانب القانوني والتقني
            والبشري دون تعقيد.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quickActions.map((action) => (
            <div key={action.title} className="grid-card h-full">
              <h3 className="text-xl font-semibold text-primary-900">{action.title}</h3>
              <ul className="mt-4 list-disc space-y-2 pr-5 text-sm text-slate-600">
                {action.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
