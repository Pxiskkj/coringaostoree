import copoImage from "@/assets/copo-corinthians-banner.jpeg";

const CopoBanner = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden my-6 shadow-lg">
      <div className="relative aspect-[16/8] sm:aspect-[16/6] bg-corinthians-black">
        <img 
          src={copoImage} 
          alt="Kit Copo Corinthians - Leve junto com sua camisa"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>
    </div>
  );
};

export default CopoBanner;
