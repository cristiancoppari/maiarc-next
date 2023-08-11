interface IBgImageText {
  title: string;
  subtitle: string;
  text: string;
  cta?: string;
  bg_image?: string;
}

const BgImageText = ({ title, subtitle, text, bg_image }: IBgImageText) => {
  return (
    <div style={{ backgroundImage: `url(${bg_image})` }} className="relative bg-cover bg-center bg-no-repeat">
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black"></div>
      <div className="relative">
        {/* Add z-index to the text container */}
        <div className="section-padding container flex flex-col items-center gap-4 text-center text-zinc-100">
          <h2 className="h2 mb-8">{title}</h2>
          <h3 className="h3 mb-6">{subtitle}</h3>
          <div className="space-y-2">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgImageText;
