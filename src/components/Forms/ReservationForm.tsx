/* eslint-disable @typescript-eslint/no-misused-promises */
import { useContext } from "react";
import { LangContext } from "@/context/langContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DatePicker from "../DatePicker/DatePicker";
import * as z from "zod";

import { ButtonBlack } from "../Buttons/ButtonBlack/ButtonBlack";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

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
  date_start: z.date({
    required_error: "Tienes que ingresar una fecha",
  }),
  date_end: z.date({
    required_error: "Tienes que ingresar una fecha",
  }),
  persons: z
    .string({
      required_error: "Tienes que ingresar una cantidad de personas",
    })
    .min(1, {
      message: "Tienes que ingresar una cantidad de personas",
    }),
});

const ReservationForm = () => {
  const content = useContext(LangContext);
  const c = content.contact;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      persons: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container space-y-8 text-start md:max-w-xl"
      >
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{c.form.name.label}</FormLabel>
                <FormControl>
                  <Input placeholder={c.form.name.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{c.form.email.label}</FormLabel>
                <FormControl>
                  <Input placeholder={c.form.name.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{c.form.phone.label}</FormLabel>
                <FormControl>
                  <Input placeholder={c.form.phone.label} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="persons"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{c.form.phone.label}</FormLabel>
                <FormControl>
                  <Input placeholder={c.form.phone.label} {...field} />
                </FormControl>
                <FormMessage />
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
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date_end"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>{c.form.date_start.label}</FormLabel>
                <FormControl>
                  <DatePicker field={field} />
                </FormControl>
                <FormMessage />
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
              <FormMessage />
            </FormItem>
          )}
        />

        <ButtonBlack
          type="submit"
          text={c.form.submit}
          classes="block mx-auto"
        />
      </form>
    </Form>
  );
};

export default ReservationForm;