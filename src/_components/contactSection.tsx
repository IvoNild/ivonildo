"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nome deve conter ao menos 2 caracteres." }),
  email: z.string().email({ message: "Email inválido" }),
  message: z.string().min(1, { message: "Descrição deve ser preenchida" }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section
      id="contacts"
      className="container  lg:px-0 max-w-[64rem] py-24 md:grid md:grid-cols-2 md:py-12 lg:py-24"
    >
      <div className="flex md:pe-10   flex-col space-y-4 text-center md:text-left">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-5xl md: ">
          Entre em Contato
        </h2>

        <p className=" leading-normal text-muted-foreground md:text-left sm:text-lg sm:leading-7">
          Estou disponível para colaborações, oportunidades de trabalho e
          qualquer outra consulta. Não hesite em entrar em contato comigo para
          discutir seus projetos e ideias. Estou ansioso para ouvir você!
        </p>

        <div className=" mt-10 sm:flex gap-8 md:gap-0 justify-center  md:flex-col">
          <div className="flex items-center mb-4 ">
            <div className="bg-gray-300 dark:bg-gray-800 p-3 rounded-full me-3">
              <MapPin size={18} className=" " />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-left dark:text-white">
                Telefone
              </span>
              <span className="text-sm text-left">999 999 999 / 912345678</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-gray-300 dark:bg-gray-800 p-3 rounded-full me-3">
              <Mail size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-left  dark:text-white">
                Email
              </span>
              <span className="text-sm">ivodasilvapedro@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-sm p-6 mt-10 md:mt-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input className="py-5" placeholder="Nome..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className="py-5" placeholder="Email..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      className="resize-none"
                      placeholder="Escreva a sua mensagem..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="text-white font-medium w-full p-5">
              Enviar
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
