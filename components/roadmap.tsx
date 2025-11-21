const roadmap = [
  {
    phase: "الأسبوع 1-2",
    title: "تقييم الوضع الحالي",
    deliverables: [
      "اجتماع إطلاق المشروع وتحديد الفريق المسؤول",
      "إنشاء سجل أولي للأصول الفكرية الحالية والمحتملة",
      "تقييم المخاطر والتعرض القانوني باستخدام مصفوفة الأثر/الاحتمال"
    ],
    outcome: "رؤية شاملة للأصول والمخاطر ذات الأولوية."
  },
  {
    phase: "الأسبوع 3-6",
    title: "بناء البنية القانونية والإجرائية",
    deliverables: [
      "صياغة سياسات حماية الملكية الفكرية وتعميمها على الأقسام",
      "تحديث العقود والعلاقات مع الشركاء والموردين",
      "إعداد مجموعة نماذج جاهزة: اتفاقيات عدم الإفصاح، عقود نقل الملكية، بنود العمل الحر"
    ],
    outcome: "إطار قانوني محدث ومتوافق مع المعايير المحلية والدولية."
  },
  {
    phase: "الأسبوع 7-10",
    title: "تعزيز الثقافة والأنظمة التقنية",
    deliverables: [
      "برنامج تدريبي متعدد المستويات يشمل الألعاب التعليمية والاختبارات القصيرة",
      "تطبيق حلول رقابية (تصنيف البيانات، إدارة الوصول، تتبع الإصدارات)",
      "إطلاق لوحة تحكم لمراقبة مؤشرات الالتزام والبلاغات"
    ],
    outcome: "موظفون واعون وأنظمة تقنية تدعم التنفيذ."
  },
  {
    phase: "الأسبوع 11-14",
    title: "التحسين المستمر والقياس",
    deliverables: [
      "إجراء محاكاة لاختبار الاستجابة لحوادث التسريب أو الاعتداء",
      "إطلاق برنامج مراجعة ربع سنوي لتقييم حقوق الملكية الفكرية",
      "إعداد تقرير تنفيذي يعرض المكاسب والعائد على الاستثمار"
    ],
    outcome: "منظومة حماية قابلة للقياس والتحسين المستمر."
  }
];

export function ImplementationRoadmap() {
  return (
    <section id="roadmap" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="section-heading">خارطة طريق تنفيذية لمدة 90 يوماً</h2>
          <p className="section-subtitle">
            خطط المرور السريع تساعدك على التحرك بثقة. وزع المهام عبر المراحل الأربع التالية لضمان
            تحقيق نتائج ملموسة فى فترة قصيرة.
          </p>
        </div>

        <div className="relative mt-16 space-y-8 md:space-y-10">
          <div className="timeline pointer-events-none absolute inset-x-0 top-0 hidden h-full md:block" />
          {roadmap.map((item, index) => (
            <div
              key={item.phase}
              className="relative glass-panel flex flex-col gap-4 border-primary-100 p-8 md:flex-row md:items-start md:gap-10"
              style={{ marginRight: index % 2 === 0 ? "0" : "4rem" }}
            >
              <div className="flex min-w-[8rem] flex-col gap-2 text-primary-700">
                <span className="text-sm font-medium uppercase tracking-wide">{item.phase}</span>
                <span className="text-xl font-semibold text-primary-900">{item.title}</span>
              </div>
              <div className="flex-1">
                <ul className="list-disc space-y-2 pr-5 text-slate-600">
                  {item.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl bg-primary-50 px-4 py-3 text-sm text-primary-800">
                  <span className="font-medium">نتيجة المرحلة:</span> {item.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
