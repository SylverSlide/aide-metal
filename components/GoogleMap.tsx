interface GoogleMapProps {
  query?: string;
  zoom?: number;
  className?: string;
  height?: number;
}

export default function GoogleMap({
  query = "Île-de-France, France",
  zoom = 9,
  className = "",
  height = 400,
}: GoogleMapProps) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`overflow-hidden ${className}`}>
      <iframe
        src={src}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Carte — ${query}`}
      />
    </div>
  );
}
