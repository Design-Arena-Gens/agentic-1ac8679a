const impactAreas = [
  {
    title: "المجال القانوني",
    insights: [
      "انخفاض تكلفة النزاعات بنسبة تصل إلى 45%",
      "ارتفاع معدل تسجيل العلامات التجارية بنسبة 60%"
    ],
    recommendations: [
      "إجراء مراجعة قانونية نصف سنوية للعقود والرخص",
      "تعيين مسؤول داخلي للملكية الفكرية يتابع الالتزام"
    ]
  },
  {
    title: "المجال التشغيلي",
    insights: [
      "تسريع إطلاق المنتجات المحمية بمعدل 3 أضعاف",
      "تحسين التعاون بين الفرق عبر سياسات مشاركة واضحة"
    ],
    recommendations: [
      "ربط إجراءات الموافقة على المشاريع الجديدة بسجل الأصول",
      "استخدام أدوات تتبع النسخ وتسجيل التعديلات على المستندات"
    ]
  },
  {
    title: "المجال التجاري",
    insights: [
      "زيادة قيمة التقييم الاستثماري في جولات التمويل التالية",
      "تحسين ثقة العملاء والشركاء فى قدرة الشركة على حماية الابتكار"
    ],
    recommendations: [
      "إبراز الأصول المحمية فى المواد التسويقية والعروض للمستثمرين",
      "إطلاق برنامج ترخيص خارجى للأصول ذات الطلب المرتفع"
    ]
  }
];

export function ImpactAreas() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="section-heading">العائد الاستراتيجي من حماية الملكية الفكرية</h2>
          <p className="section-subtitle">
            فكر فى حماية الملكية الفكرية كاستثمار يعزز نمو أعمالك. ركز على المجالات التالية لتحقيق
            أعلى أثر ممكن.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {impactAreas.map((area) => (
            <div key={area.title} className="grid-card flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-semibold text-primary-900">{area.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pr-5 text-sm text-slate-600">
                  {area.insights.map((insight) => (
                    <li key={insight}>{insight}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-primary-50/80 p-4 text-sm text-primary-700">
                <div className="font-semibold">تحركات مقترحة</div>
                <ul className="mt-2 list-disc space-y-1 pr-5">
                  {area.recommendations.map((recommendation) => (
                    <li key={recommendation}>{recommendation}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
