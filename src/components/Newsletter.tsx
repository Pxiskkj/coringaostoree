import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import newsletterBg from "@/assets/newsletter-bg.jpg";

const Newsletter = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Format phone number as (XX)XXXXX-XXXX
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) {
      return numbers.length > 0 ? `(${numbers}` : '';
    }
    if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)})${numbers.slice(2)}`;
    }
    return `(${numbers.slice(0, 2)})${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setFormData({
        ...formData,
        phone: formatPhone(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", phone: "", email: "" });
      
      // Show toast notification
      toast({
        title: "Cadastro realizado!",
        description: "Você receberá nossas novidades em breve.",
        duration: 4000,
      });
    }, 1000);
  };

  return (
    <section 
      className="relative py-12 px-4 bg-cover bg-center overflow-hidden min-h-[500px] w-full"
      style={{ backgroundImage: `url(${newsletterBg})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 max-w-md mx-auto text-center pt-4 px-4">
        <h2 className="text-2xl font-extrabold text-white mb-3 tracking-wide">
          NEWSLETTER
        </h2>
        <p className="text-white/90 text-sm mb-6">
          Inscreva-se e ganhe descontos de até 70% em produtos oficiais do Corinthians.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome completo"
            required
            className="w-full px-5 py-3 bg-white/10 border border-white/30 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors backdrop-blur-sm"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Telefone"
            required
            maxLength={14}
            className="w-full px-5 py-3 bg-white/10 border border-white/30 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors backdrop-blur-sm"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
            className="w-full px-5 py-3 bg-white/10 border border-white/30 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors backdrop-blur-sm"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>

        <p className="text-white/60 text-xs mt-4">
          Ao clicar em Cadastrar você declara que aceita os Termos de Privacidade.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
