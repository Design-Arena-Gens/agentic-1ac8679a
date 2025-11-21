const faqs = [
  {
    question: "ما الخطوة الأولى إذا لم يكن لدينا أصول مسجلة بعد؟",
    answer:
      "ابدأ بحصر الابتكارات الحالية والمخطط لها، ثم قيم أهميتها التجارية. استخدم قائمة التحقق لتحديد نوع الحماية المناسب لكل أصل: علامة تجارية، براءة اختراع، حق نشر، أو سر تجاري."
  },
  {
    question: "كيف نضمن الالتزام دون زيادة البيروقراطية؟",
    answer:
      "اعتمد آليات مبسطة تعتمد على الأدوات الموجودة أصلاً في المؤسسة (مثل نظم إدارة المشاريع أو Google Workspace) وادمج سياسات الحماية ضمن سير العمل اليومي بدلاً من إنشاء عمليات منفصلة."
  },
  {
    question: "ما تكلفة تنفيذ البرنامج؟",
    answer:
      "تعتمد التكلفة على حجم الأصول ودرجة التعقيد القانوني. يمكن البدء بإجراءات أساسية منخفضة التكلفة مثل العقود، التدريب، وضبط الوصول، ثم التدرج نحو تسجيل دولي أو حلول تقنية متقدمة."
  },
  {
    question: "هل نحتاج إلى فريق متخصص؟",
    answer:
      "يوصى بتعيين مسؤول للملكية الفكرية حتى لو كان جزءاً من وظيفة أخرى. يمكن الاستعانة بخبراء خارجيين للمراجعات الدورية أو التراخيص الدولية مع الحفاظ على المعرفة الأساسية داخلياً."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-4xl px-6 text-right">
        <h2 className="section-heading">أسئلة متكررة</h2>
        <p className="section-subtitle">
          إجابات واضحة على أكثر الاستفسارات شيوعاً من المؤسسات الصغيرة والمتوسطة التى بدأت رحلتها
          في حماية الملكية الفكرية.
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-primary-100 bg-white/80 p-6 transition hover:border-primary-200 hover:shadow-lg"
            >
              <summary className="cursor-pointer text-lg font-semibold text-primary-900 outline-none transition group-open:text-primary-700">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
