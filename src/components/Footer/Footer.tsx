import type { SvgImport } from "@/types/images";

/* eslint-disable @next/next/no-img-element */
import icon_fb from "@/assets/images/facebook.svg";
import icon_ig from "@/assets/images/instagram.svg";
import icon_wpp from "@/assets/images/whatsapp.svg";

import { Button } from "../UI/button";
import Link from "next/link";

const social: Array<{ icon: string; link: string }> = [
  {
    icon: (icon_fb as SvgImport).src,
    link: "https://www.facebook.com",
  },
  {
    icon: (icon_ig as SvgImport).src,
    link: "https://www.instagram.com",
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
    <footer className="flex flex-col items-center py-12">
      <p className="mb-8">LOGO</p>

      <p className="mb-2 uppercase">Tulum | Ibiza | Miami | Punta del Este</p>

      <p className="mb-4 uppercase">welcome.guests@maiarc.com | 12345678</p>

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
