import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "motion/react";

export default function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_g0qzd9o",
        "template_l3aofxj",
        form.current,
        "CRPHNdzbj58kZQLig"
      );
      toast.success("Email enviado com sucesso!");
      form.current.reset();
    } catch (error) {
      toast.error("Erro ao enviar email. Tente novamente mais tarde!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // só anima uma vez, quando 20% do elemento estiver visível
      transition={{ duration: 0.5 }}
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-4 md:w-[80%] max-md:w-[90vw] mt-6"
    >
      <input
        name="user_name"
        type="text"
        placeholder="Seu nome"
        required
        className="w-full p-3 rounded bg-[#333] text-white focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        name="user_email"
        type="email"
        placeholder="Seu e-mail"
        required
        className="w-full p-3 rounded bg-[#333] text-white focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <textarea
        name="message"
        placeholder="Sua mensagem"
        required
        className="w-full p-3 rounded bg-[#333] text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        type="submit"
        disabled={loading}
        className={`w-full flex justify-center items-center gap-2 bg-red-500 py-3 rounded text-white font-semibold transition ${loading
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-red-600"}`}
      >
        {loading ? "Enviando..." : "Enviar Mensagem"}
      </button>
    </motion.form>
  );
}
