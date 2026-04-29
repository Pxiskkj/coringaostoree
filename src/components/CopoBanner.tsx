import copoImage from "@/assets/copo-brinde-banner.png";

const CopoBanner = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden my-6 shadow-lg">
      <img
        src={copoImage}
        alt="Kit Copo de Brinde Brasil - Leve junto com sua camisa"
        className="w-full h-auto block"
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export default CopoBanner;
