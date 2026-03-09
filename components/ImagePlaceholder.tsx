import { Camera } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspect?: "video" | "square" | "portrait" | "auto";
}

export default function ImagePlaceholder({
  label,
  className = "",
  aspect = "video",
}: ImagePlaceholderProps) {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "portrait"
      ? "aspect-[3/4]"
      : aspect === "auto"
      ? ""
      : "aspect-video";

  return (
    <div
      className={`flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 ${aspectClass} ${className}`}
    >
      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 px-6 py-5">
        <Camera className="mb-2 h-7 w-7 text-gray-300" />
        <span className="text-center text-[11px] leading-snug text-gray-400">
          {label}
        </span>
      </div>
    </div>
  );
}
