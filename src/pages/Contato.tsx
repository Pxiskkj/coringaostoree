import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";
import { Menu } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Contato = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.telefone || !form.mensagem) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    toast.success("Enviado com sucesso!", { description: "Em breve entraremos em contato." });
    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background border-b border-border py-3 px-4">
        <div className="container flex items-center justify-between relative">
          <button onClick={() => setMenuOpen(true)} className="p-1" aria-label="Menu">
            <Menu className="w-7 h-7 text-foreground" strokeWidth={2} />
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-xl font-extrabold text-primary tracking-tight">COPA</h1>
            <span className="text-sm font-bold text-foreground -mt-1 block">BRASIL</span>
          </div>
          <div className="w-7" />
        </div>
      </header>

      <main className="container py-6">
        <div className="text-xs text-muted-foreground mb-2">
          <Link to="/" className="hover:text-foreground">Início</Link> &gt; Contato
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-5">Contato</h1>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm">
            <WhatsAppIcon className="w-5 h-5 text-foreground flex-shrink-0" />
            <span>5521965113261</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-5 h-5 text-foreground flex-shrink-0" strokeWidth={1.8} />
            <span>21965113261</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-5 h-5 text-foreground flex-shrink-0" strokeWidth={1.8} />
            <span>contato@copabrasil.com.br</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-5 h-5 text-foreground flex-shrink-0" strokeWidth={1.8} />
            <span>Av. Paulista, 1337 - Bela Vista, São Paulo - SP, 01311-200</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1.5">Nome</label>
            <input
              type="text"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="ex.: Maria Perez"
              className="w-full px-4 py-3 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">E-mail</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="ex.: seuemail@email.com.br"
              className="w-full px-4 py-3 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">Telefone</label>
            <input
              type="tel"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              placeholder="ex.: 11971923030"
              className="w-full px-4 py-3 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">Mensagem</label>
            <textarea
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              placeholder="ex.: Sua mensagem"
              rows={5}
              className="w-full px-4 py-3 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-foreground text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Enviar
          </button>
        </form>
      </main>

      <Footer />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};

export default Contato;
