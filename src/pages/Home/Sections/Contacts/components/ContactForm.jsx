import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { motionConfig } from "../../../../../utils/functions";
import Input from "../../../../../components/Global/Input";
import TextArea from "../../../../../components/Global/TextArea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  user_name: z
    .string()
    .min(1, "Nome completo é obrigatório")
    .max(100, "Nome completo deve ter no máximo 100 caracteres"),
  user_email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
  message: z
    .string()
    .min(1, "Mensagem é obrigatória")
    .max(500, "Mensagem deve ter no máximo 500 caracteres"),
});

export default function ContactForm() {
  const form = useRef();
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_g0qzd9o",
        "template_l3aofxj",
        form.current,
        "CRPHNdzbj58kZQLig"
      );
      reset();
    
    } catch (error) {
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      {...motionConfig}
      ref={form}
      onSubmit={hookFormHandleSubmit(onSubmit)}
      className="flex flex-col gap-4 md:w-[80%] max-md:w-[90vw] mt-6"
    >
      <Input
        {...register("user_name")}
        name="user_name"
        label="Seu nome"
        error={errors.user_name?.message}
      />
      <Input
        {...register("user_email")}
        name="user_email"
        type="email"
        label="Seu E-mail"
        error={errors.user_email?.message}
      />
      <TextArea
        {...register("message")}
        name="message"
        label="Sua mensagem"
        error={errors.message?.message}
      />
      <button
        type="submit"
        disabled={loading}
        className={`w-full flex justify-center items-center gap-2 cursor-pointer neon-red-button py-3 rounded text-white font-semibold transition ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-neon-red-hover"
        }`}
      >
        {loading ? "Enviando..." : "Enviar Mensagem"}
      </button>
    </motion.form>
  );
}
