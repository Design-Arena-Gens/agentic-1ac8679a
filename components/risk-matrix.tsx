const threats = [
  {
    name: "تسريب المعرفة من الموظفين",
    description:
      "إمكانية نقل أسرار التصنيع أو قواعد البيانات عند الانتقال لمنافس أو عبر قنوات غير رسمية.",
    probability: "متوسط",
    impact: "عالٍ",
    controls: [
      "اتفاقيات عدم إفصاح محدثة وموقعة إلكترونياً",
      "نظام تصنيف المستندات وتقييد التحميل الخارجي",
      "برنامج إنهاء خدمة يحذف الوصول ويذكر بالالتزامات"
    ]
  },
  {
    name: "القرصنة أو النسخ غير القانوني",
    description:
      "استنساخ البرمجيات أو المحتوى دون إذن، خاصة فى حالة التوزيع الرقمى عبر الإنترنت.",
    probability: "عالٍ",
    impact: "متوسط",
    controls: [
      "إجراءات تسجيل الملكية الفكرية دولياً (مدريد/برن)",
      "حلول إدارة الحقوق الرقمية والتتبع المائي",
      "خطط مراقبة الأسواق والمنصات الإلكترونية"
    ]
  },
  {
    name: "الشراكات غير المتوازنة",
    description:
      "فقدان الحقوق بسبب بنود غير دقيقة في عقود الموردين أو المستثمرين أو برامج الحاضنات.",
    probability: "منخفض",
    impact: "عالٍ",
    controls: [
      "مراجعة قانونية للعقود، مع تحديد الملكية المشتركة بوضوح",
      "بنود إعادة الترخيص وإعادة الشراء في حالة النزاعات",
      "تضمين آليات التحكيم والاختصاص القضائي"
    ]
  }
];

export function RiskMatrix() {
  return (
    <section id="risks" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="section-heading">مصفوفة المخاطر ومراقبة الضوابط</h2>
          <p className="section-subtitle">
            حدد التهديدات الرئيسية ورتبها حسب تأثيرها واحتماليتها لتنفيذ ضوابط فعّالة عبر فرقك.
            استخدم الجدول التالي كنقطة بداية وخصصه حسب واقع شركتك.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-xl">
          <div className="grid grid-cols-1 bg-primary-50 text-right text-sm font-medium text-primary-800 sm:grid-cols-5">
            <div className="px-6 py-4 sm:col-span-2">التهديد</div>
            <div className="px-6 py-4">الاحتمالية</div>
            <div className="px-6 py-4">الأثر</div>
            <div className="px-6 py-4">ضوابط رئيسية</div>
          </div>

          <div className="divide-y divide-primary-50">
            {threats.map((threat) => (
              <div key={threat.name} className="grid grid-cols-1 sm:grid-cols-5">
                <div className="sm:col-span-2 border-l border-primary-50 px-6 py-6">
                  <div className="text-lg font-semibold text-primary-900">{threat.name}</div>
                  <p className="mt-2 text-sm text-slate-600">{threat.description}</p>
                </div>
                <div className="border-l border-primary-50 px-6 py-6 text-sm font-medium text-slate-600">
                  {threat.probability}
                </div>
                <div className="border-l border-primary-50 px-6 py-6 text-sm font-medium text-slate-600">
                  {threat.impact}
                </div>
                <div className="px-6 py-6 text-sm text-slate-600">
                  <ul className="list-disc space-y-2 pr-5">
                    {threat.controls.map((control) => (
                      <li key={control}>{control}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
