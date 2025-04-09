"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import emailjs from "@emailjs/browser";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import Confetti from "react-dom-confetti";

import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

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

  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    await emailjs
      .send(
        "service_ux42ffh",
        "template_5iljmmn",
        {
          from_name: values.name,
          message: values.message,
          email: values.email,
        },
        "jXyy2ALGg-DjeNGDR"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setIsCompleted(true);
          form.reset();
          setIsError(false);
        },
        (err) => {
          console.log("ERRO", err);
          setIsError(true);
        }
      )
      .finally(() => setIsLoading(false));
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

        <div className=" mt-10 py-5 sm:flex gap-8 md:gap-0 justify-center  md:flex-col">
          <div className="flex  flex-col md:flex-row items-center mb-4 ">
            <div className="bg-gray-300 mb-2 md:mb-0 dark:bg-gray-800 p-3 rounded-full me-3">
              <Phone size={18} className=" " />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-center  md:text-left dark:text-white">
                Telefone
              </span>
              <span className="text-sm text-left">921 220 187 / 955 612 804</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-gray-300 mb-2 md:mb-0 dark:bg-gray-800 p-3 rounded-full me-3">
              <Mail size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-center  md:text-left  dark:text-white">
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

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  type="submit"
                  className="text-white font-medium w-full p-5"
                >
                  Enviar
                </Button>
              </DialogTrigger>

              <DialogContent className=" max-w-[95%] sm:max-w-[425px]">
                <Confetti
                  active={isCompleted}
                  config={{
                    spread: 90,
                    elementCount: 200,
                  }}
                />

                {isCompleted ? (
                  <>
                    <DialogHeader>
                      <DialogTitle>Parabéns! 🎉</DialogTitle>
                      <DialogDescription>
                        Obrigado, seu email foi recebido e responderei em breve.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogClose>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsCompleted(false);
                          form.reset();
                        }}
                      >
                        Fechar
                      </Button>
                    </DialogClose>
                  </>
                ) : (
                  <>
                    {error && (
                      <DialogHeader>
                        <DialogTitle>Erro!</DialogTitle>
                        <DialogDescription>
                          Desculpe aconteceu um erro ao enviar a sua mensagem,
                          tente novamente mais tarde ou contacte-me por uma
                          outra via!
                        </DialogDescription>
                      </DialogHeader>
                    )}

                    {isLoading && (
                      <span className="text-green-500">Enviando ...</span>
                    )}
                  </>
                )}
              </DialogContent>
            </Dialog>
          </form>
        </Form>
      </div>
    </section>
  );
}
