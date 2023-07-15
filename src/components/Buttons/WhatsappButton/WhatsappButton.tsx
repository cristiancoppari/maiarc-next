/* eslint-disable @next/next/no-img-element */
import whatsapp from "@/assets/images/whatsapp.svg";

type SvgImport = {
  src: string;
};

const WhatsappButton = () => {
  return (
    <a href="#" className="fixed bottom-12 right-12 z-10">
      <img src={(whatsapp as SvgImport).src} alt="WhatsApp" className="w-12" />
    </a>
  );
};

export default WhatsappButton;
