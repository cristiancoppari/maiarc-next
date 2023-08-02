import { Button } from "../ui/button";

interface NewsletterProps {
  content: {
    title: string;
    text: string;
    cta: string;
  };
}

const Newsletter = ({ content }: NewsletterProps) => {
  return (
    <section className="bg-zinc-800 py-8">
      <div className="container md:w-3/4">
        <h3 className="h3 mb-2 uppercase text-slate-100">{content.title}</h3>
        <p className="mb-8 text-slate-100">{content.text}</p>

        <div className="mx-auto flex flex-col justify-center gap-4 sm:flex-row">
          <input
            type="text"
            className="w-full rounded-full p-2 px-4"
            placeholder="Ingresá tu correo electrónico"
          />
          <Button variant="outline" className="rounded-full px-12 uppercase">
            {content.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
