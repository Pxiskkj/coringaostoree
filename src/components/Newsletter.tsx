import { useState } from "react";
import newsletterBg from "@/assets/newsletter-bg.jpg";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: "", phone: "", email: "" });
    }, 1000);
  };

  return (
    <section 
      className="relative py-10 px-4 mt-8 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${newsletterBg})` }}
    >
      {/* Dark overlay - black to see players better */}
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 max-w-md mx-auto text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3 tracking-wide">
          NEWSLETTER
        </h2>
        <p className="text-white/90 text-sm mb-6">
          Inscreva-se e ganhe descontos de até 70% em produtos oficiais do Corinthians.
        </p>

        {success ? (
          <div className="bg-success/20 border border-success rounded-lg p-4">
            <p className="text-success font-medium">
              ✓ Cadastro realizado com sucesso!
            </p>
          </div>
        ) : (
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
        )}

        <p className="text-white/60 text-xs mt-4">
          Ao clicar em Cadastrar você declara que aceita os Termos de Privacidade.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
