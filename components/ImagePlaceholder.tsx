import { Camera } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspect?: "video" | "square" | "portrait";
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
      : "aspect-video";

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl bg-gray-100 ${aspectClass} ${className}`}
    >
      <Camera className="mb-2 h-8 w-8 text-gray-300" />
      <span className="px-4 text-center text-xs text-gray-400">{label}</span>
    </div>
  );
}
