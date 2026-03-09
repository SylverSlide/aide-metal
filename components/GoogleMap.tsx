interface GoogleMapProps {
  query?: string;
  zoom?: number;
  className?: string;
}

export default function GoogleMap({
  query = "Île-de-France, France",
  zoom = 9,
  className = "",
}: GoogleMapProps) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`overflow-hidden ${className}`}>
      <iframe
        src={src}
        width="100%"
        className="h-[300px] sm:h-[420px] lg:h-[500px]"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Carte — ${query}`}
      />
    </div>
  );
}
