import Link from "next/link";

const links = [
  { href: "#framework", label: "الإطار المتكامل" },
  { href: "#roadmap", label: "خارطة الطريق" },
  { href: "#risks", label: "المخاطر" },
  { href: "#resources", label: "الأدوات" },
  { href: "#faq", label: "الأسئلة" }
];

export function TopNavigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-4 text-right md:flex-row md:justify-between">
        <div>
          <Link href="/" className="text-lg font-semibold text-primary-800">
            درع الابتكار للمؤسسات الصغيرة والمتوسطة
          </Link>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-primary-100 hover:text-primary-700"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
