/* eslint-disable @typescript-eslint/no-misused-promises */
import ReactMarkdown from "react-markdown";
import { useContext } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LangContext } from "@/context/langContext";

import { Button } from "../../ui/button";

interface NewsletterProps {
  title: string;
  text: string;
}

const formSchema = z.object({
  email: z
    .string({
      required_error: "Tienes que ingresar un email",
    })
    .email({
      message: "Tienes que ingresar un email",
    }),
});

const Newsletter = ({ title, text }: NewsletterProps) => {
  const content = useContext(LangContext);

  const c = content.locale_file;

  return (
    <section className="bg-zinc-400 py-12">
      <div className="container md:w-3/4">
        <div className="mb-2 flex items-center gap-2">
          <svg
            id="uuid-f6bb387e-a9e3-4166-bb54-f6f2f08b060e"
            data-name="Capa 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 53.86 7.87"
            className="w-16"
          >
            <g id="uuid-c70e83a8-7b55-4598-be2c-639f9da187e0" data-name="Capa 1">
              <path
                id="uuid-91ef2cef-6a50-4022-908d-0a843e245b67"
                data-name="arrow-maiarc"
                d="M4.78,6.33c.83-.6,1.66-1.21,2.56-1.86-.16-.04-.24-.07-.32-.08-.82-.06-1.6,.07-2.37,.36-1.47,.57-2.96,1.07-4.44,1.6-.06,.03-.13,.04-.21,.03,1.08-.78,2.17-1.57,3.32-2.4C2.19,3.16,1.13,2.4,.07,1.63c0,0,0-.03,.02-.05,.24,.08,.49,.16,.73,.25,1.37,.5,2.75,.97,4.1,1.5,.75,.3,1.51,.18,2.29,.17-.73-.69-1.6-1.2-2.35-1.89,.3,.1,.58,.19,.86,.29,1.38,.5,2.76,1.02,4.14,1.5,.29,.1,.62,.14,.93,.14,11.9,0,23.79,0,35.69,0h1.15s.03-.07,.05-.1c-1.55-1.15-3.13-2.26-4.68-3.45,3.62,1.31,7.23,2.62,10.85,3.93,0,.02,0,.05,0,.07-3.61,1.29-7.23,2.58-10.84,3.87-.02,0-.03-.02-.04-.04,1.54-1.11,3.07-2.22,4.69-3.39-.19-.03-.29-.05-.38-.05H11.04c-.42,0-.81,.06-1.2,.2-1.62,.58-3.24,1.15-4.86,1.73-.06,.02-.12,.04-.18,.05-.01,0-.01-.03-.02-.04Z"
                fill="#f5f5f5"
              />
            </g>
          </svg>

          <h3 className="h3 uppercase text-slate-100">{title}</h3>
        </div>
        <div className="mb-8 text-slate-100">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>

        <div className="mx-auto flex flex-col justify-center gap-4 sm:flex-row">
          <NewsletterForm content={c.ctas.subscription} />
        </div>
      </div>
    </section>
  );
};

const NewsletterForm = ({ content }: { content: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/require-await
  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.promise(
      fetch("https://lobster-app-ywbip.ondigitalocean.app/api/newsletters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            lead: values.email,
          },
        }),
      }),
      {
        loading: "Enviando mail...",
        success: "Tu mensaje ha sido enviado",
        error: "Hubo un error al enviar tu mensaje",
      },
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-center justify-center gap-4 space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full rounded-full text-zinc-100">
              <FormControl>
                <Input className="rounded-full" placeholder={"juan@gmail.com"} {...field} />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />

        <Button variant="outline" className="!mt-0 rounded-full uppercase">
          {content}
        </Button>
      </form>
    </Form>
  );
};

export default Newsletter;
