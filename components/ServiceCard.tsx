import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  index = 0,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:ring-primary-200 sm:p-7"
    >
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-700 ring-1 ring-primary-100">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-xs font-bold tabular-nums text-gray-200">
          0{index + 1}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-bold text-primary-950">{title}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">
        {description}
      </p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors group-hover:text-accent-600">
        En savoir plus
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </span>

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 scale-x-0 rounded-full bg-accent-500 transition-transform duration-200 group-hover:scale-x-100" />
    </Link>
  );
}
