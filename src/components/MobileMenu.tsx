import { X, ChevronRight, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!isOpen) return null;

  const goHome = () => {
    onClose();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goCamisas = () => {
    onClose();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "camisas" } });
      setTimeout(() => {
        document.querySelector("main")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector("main")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goContato = () => {
    onClose();
    navigate("/contato");
  };

  return (
    <div className="fixed inset-0 z-50 bg-background animate-fade-in flex flex-col">
      <div className="flex justify-end p-4">
        <button onClick={onClose} aria-label="Fechar" className="p-1">
          <X className="w-6 h-6 text-foreground" strokeWidth={2} />
        </button>
      </div>

      <nav className="flex-1 px-5">
        <button
          onClick={goHome}
          className="w-full flex items-center justify-between py-4 border-b border-border text-left"
        >
          <span className="text-base font-semibold text-foreground">INÍCIO</span>
        </button>
        <button
          onClick={goCamisas}
          className="w-full flex items-center justify-between py-4 border-b border-border text-left"
        >
          <span className="text-base font-semibold text-foreground">CAMISAS</span>
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={goContato}
          className="w-full flex items-center justify-between py-4 border-b border-border text-left"
        >
          <span className="text-base font-semibold text-foreground">CONTATO</span>
        </button>
      </nav>

      <div className="border-t border-border px-5 py-4 flex items-center gap-3">
        <User className="w-5 h-5 text-foreground" strokeWidth={1.8} />
        <span className="text-base text-foreground">Minha conta</span>
      </div>
    </div>
  );
};

export default MobileMenu;
