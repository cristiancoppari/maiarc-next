import type { SvgImport } from "@/types/images";

import Link from "next/link";

import icon_fb from "@/assets/images/facebook.svg";
import icon_ig from "@/assets/images/instagram.svg";
import icon_wpp from "@/assets/images/whatsapp.svg";
import logo from "@/assets/images/logo-black-subtitle.png";

import { Button } from "../../ui/button";

const social: Array<{ icon: string; link: string }> = [
  {
    icon: (icon_fb as SvgImport).src,
    link: "https://www.facebook.com/maiarc.concierge",
  },
  {
    icon: (icon_ig as SvgImport).src,
    link: "https://www.instagram.com/maiarc.concierge",
  },
  {
    icon: (icon_wpp as SvgImport).src,
    link: "https://www.whatsapp.com",
  },
];

interface Footer {
  content: string;
}

const Footer = ({ content }: Footer) => {
  return (
    <footer className="mt-8 flex flex-col items-center pb-12">
      <img src={logo.src} alt="" className="mb-14 w-32" />

      <p className="mb-2 uppercase"> Ibiza | Tulum | Miami | Punta del Este</p>

      <div className="mb-4 flex flex-col items-center gap-4 uppercase md:flex-row">
        <p>contact@maiarconcierge.com</p> <p>|</p> <p>+52 984 202 8334</p>
      </div>

      <div>
        <Button variant="link" asChild>
          <Link href="/politicas-de-privacidad" className="mb-8 text-xs">
            {content}
          </Link>
        </Button>
      </div>

      <div className="flex items-center justify-center gap-4">
        {social.map((item, index) => (
          <a
            href={item.link}
            key={item.link}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 p-2"
          >
            <img src={item.icon} alt={`icon-${index}`} className="h-full" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
