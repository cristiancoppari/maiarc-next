/* eslint-disable @typescript-eslint/no-misused-promises */
import { useContext } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { LangContext } from "@/context/langContext";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Btn } from "../Buttons/Button/Buttons";
import { Textarea } from "../ui/textarea";
import DatePicker from "../DatePicker/DatePicker";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Tienes que ingresar un nombre",
    })
    .min(1, {
      message: "Tienes que ingresar un nombre",
    }),
  phone: z
    .string({
      required_error: "Tienes que ingresar un teléfono",
    })
    .min(1, {
      message: "Tienes que ingresar un teléfono",
    }),
  email: z
    .string({
      required_error: "Tienes que ingresar un email",
    })
    .email({
      message: "Tienes que ingresar un email",
    }),
  message: z
    .string({
      required_error: "Tienes que ingresar un mensaje",
    })
    .min(1, {
      message: "Tienes que ingresar un mensaje",
    })
    .max(1000, {
      message: "El mensaje no puede tener más de 1000 caracteres",
    }),
  date_start: z
    .date({
      required_error: "Tienes que ingresar una fecha",
    })
    .optional(),
  date_end: z
    .date({
      required_error: "Tienes que ingresar una fecha",
    })
    .optional(),
  prefix: z
    .string({
      required_error: "Tienes que ingresar un nombre",
    })
    .min(1, {
      message: "Tienes que ingresar un nombre",
    }),
  service: z.string({
    required_error: "Tienes que ingresar un servicio",
  }),
  destination: z.string({
    required_error: "Tienes que ingresar un destino",
  }),
});

const ReservationForm = ({ name, destination }: { name: string; destination: string }) => {
  const content = useContext(LangContext);
  const c = content.locale_file.contact;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      prefix: "",
      service: name,
      destination: destination,
    },
  });

  // eslint-disable-next-line @typescript-eslint/require-await
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(JSON.stringify(values, null, 2));
    toast.promise(
      fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="container space-y-8 text-start md:max-w-xl">
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{c.form.name.label}</FormLabel>
              <FormControl>
                <Input placeholder={c.form.name.placeholder} {...field} />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{c.form.email.label}</FormLabel>
              <FormControl>
                <Input placeholder={c.form.name.placeholder} {...field} />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="prefix"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{c.form.prefix.label}</FormLabel>
                <FormControl>
                  <Input placeholder={c.form.prefix.label} {...field} />
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{c.form.phone.label}</FormLabel>
                <FormControl>
                  <Input placeholder={c.form.phone.label} {...field} />
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="date_start"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>{c.form.date_start.label}</FormLabel>
                <FormControl>
                  <DatePicker field={field} />
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date_end"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>{c.form.date_end.label}</FormLabel>
                <FormControl>
                  <DatePicker field={field} />
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{c.form.message.label}</FormLabel>
              <FormControl>
                <Textarea placeholder={c.form.name.placeholder} {...field} />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />

        <Btn type="submit" text={c.form.submit} classes="block mx-auto" />
      </form>
    </Form>
  );
};

export default ReservationForm;
