import { useState } from "react";
import { Truck } from "lucide-react";

const ShippingCalculator = () => {
  const [cep, setCep] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const formatCep = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 5) {
      return digits;
    }
    return `${digits.slice(0, 5)}-${digits.slice(5, 8)}`;
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCep(e.target.value);
    setCep(formatted);
    setError(null);
    setDeliveryTime(null);
  };

  const validateCep = async (cepValue: string) => {
    const cleanCep = cepValue.replace(/\D/g, "");
    if (cleanCep.length !== 8) {
      return false;
    }
    
    // Validate CEP using ViaCEP API
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await response.json();
      return !data.erro;
    } catch {
      return false;
    }
  };

  const calculateDelivery = async () => {
    const cleanCep = cep.replace(/\D/g, "");
    
    if (cleanCep.length !== 8) {
      setError("Digite um CEP válido com 8 dígitos");
      return;
    }

    setIsLoading(true);
    setError(null);
    setDeliveryTime(null);

    const isValid = await validateCep(cep);
    
    if (!isValid) {
      setError("CEP não encontrado. Verifique e tente novamente.");
      setIsLoading(false);
      return;
    }

    // Simulate delivery time calculation based on region
    // In production, this would call a real shipping API
    const firstDigit = parseInt(cleanCep[0]);
    let days: string;
    
    // Approximate delivery times by region (based on first digit of CEP)
    switch (firstDigit) {
      case 0: // Grande São Paulo
      case 1: // Interior SP
        days = "3–5";
        break;
      case 2: // RJ, ES
      case 3: // MG
        days = "4–7";
        break;
      case 4: // BA, SE
      case 5: // PE, AL, PB, RN
        days = "6–10";
        break;
      case 6: // CE, PI, MA, PA, AP, AM, RR, AC
      case 7: // DF, GO, TO, MT, MS, RO
        days = "7–12";
        break;
      case 8: // PR, SC
      case 9: // RS
        days = "5–8";
        break;
      default:
        days = "5–10";
    }

    setDeliveryTime(days);
    setIsLoading(false);
  };

  return (
    <section className="py-4 border-b border-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Truck className="w-5 h-5 text-primary" />
          <h3 className="text-base font-semibold text-foreground italic">Frete e Entrega</h3>
        </div>
        <a 
          href="https://buscacepinter.correios.com.br/app/endereco/index.php"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground underline hover:text-foreground transition-colors"
        >
          Não sei meu CEP
        </a>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={cep}
          onChange={handleCepChange}
          placeholder="00000-000"
          maxLength={9}
          className="flex-1 px-4 py-3 border-2 border-primary/30 rounded-full text-foreground bg-background focus:border-primary focus:outline-none transition-colors text-base"
        />
        <button
          onClick={calculateDelivery}
          disabled={isLoading}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {isLoading ? "..." : "Calcular"}
        </button>
      </div>

      {error && (
        <p className="mt-2 text-sm text-destructive">{error}</p>
      )}

      {deliveryTime && (
        <p className="mt-2 text-sm text-success font-medium">
          Entrega estimada em {deliveryTime} dias úteis
        </p>
      )}
    </section>
  );
};

export default ShippingCalculator;
