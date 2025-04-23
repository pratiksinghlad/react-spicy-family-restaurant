const MapIframeNoKey = ({
  zoom = 35,
  placeName = 'Spicy Family Restaurant, Jagatpura, Uttarakhand',
  width = '600px',
  height = '450px'
}) => {
  const src = `https://maps.google.com/maps?q=28.9803219,79.3928444,${encodeURIComponent(placeName)}&z=${zoom}&output=embed`;

  return (
    <iframe
      title="Google Map"
      width={width}
      height={height}
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src={src}
    />
  );
};

export default MapIframeNoKey;