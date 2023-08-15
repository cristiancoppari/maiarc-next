import ReactMarkdown from "react-markdown";
import { useContext } from "react";

import { LangContext } from "@/context/langContext";

import { Button } from "../../ui/button";

interface NewsletterProps {
  title: string;
  text: string;
}

const Newsletter = ({ title, text }: NewsletterProps) => {
  const content = useContext(LangContext);
  const c = content.locale_file;

  return (
    <section className="bg-zinc-800 py-8">
      <div className="container md:w-3/4">
        <h3 className="h3 mb-2 uppercase text-slate-100">{title}</h3>
        <div className="mb-8 text-slate-100">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>

        <div className="mx-auto flex flex-col justify-center gap-4 sm:flex-row">
          <input type="text" className="w-full rounded-full p-2 px-4" placeholder={`${c.newsletter.placeholder}`} />
          <Button variant="outline" className="rounded-full px-12 uppercase">
            {c.ctas.subscription}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
