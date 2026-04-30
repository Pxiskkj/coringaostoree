import { useEffect, useState } from "react";
import { CheckCircle, Package, Truck } from "lucide-react";

const Obrigado = () => {
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    const num = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(`#${num}`);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="py-4 px-4 text-center border-b border-border">
        <h1 className="text-xl font-extrabold text-primary tracking-tight">COPA</h1>
        <span className="text-sm font-bold text-foreground -mt-1 block">BRASIL</span>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-10 text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-2">Pedido Confirmado!</h2>
        <p className="text-muted-foreground mb-6">Obrigado pela sua compra. Seu pedido foi recebido com sucesso.</p>

        <div className="bg-muted/50 rounded-2xl p-6 w-full max-w-sm mb-8">
          <p className="text-sm text-muted-foreground mb-1">Número do Pedido</p>
          <p className="text-3xl font-extrabold text-foreground">{orderNumber}</p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-sm text-left">
          <div className="flex items-center gap-3">
            <Package className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm text-foreground">Seu pedido está sendo preparado</p>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm text-foreground">Você receberá o código de rastreio por e-mail</p>
          </div>
        </div>
      </main>

      {/* Blue footer */}
      <div className="bg-blue-700 text-white py-8 px-6 text-center">
        <p className="font-bold text-lg mb-1">COPA BRASIL</p>
        <p className="text-sm text-blue-200">Obrigado por escolher a Copa Brasil. Volte sempre!</p>
        <p className="text-xs text-blue-300 mt-4">© 2026 Copa Brasil - Todos os direitos reservados</p>
      </div>
    </div>
  );
};

export default Obrigado;
