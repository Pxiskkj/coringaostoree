import { X } from "lucide-react";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizeGuideModal = ({ isOpen, onClose }: SizeGuideModalProps) => {
  if (!isOpen) return null;

  const sizeData = [
    { size: "P", torax: "91 - 98", cintura: "80 - 85", quadril: "97 - 102" },
    { size: "M", torax: "99 - 106", cintura: "86 - 91", quadril: "103 - 108" },
    { size: "G", torax: "107 - 114", cintura: "92 - 97", quadril: "109 - 114" },
    { size: "GG", torax: "115 - 122", cintura: "98 - 103", quadril: "115 - 120" },
    { size: "2GG", torax: "123 - 128", cintura: "104 - 109", quadril: "121 - 126" },
    { size: "3GG", torax: "129 - 136", cintura: "110 - 115", quadril: "127 - 132" },
    { size: "4GG", torax: "137 - 144", cintura: "116 - 121", quadril: "133 - 138" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div 
        className="bg-background rounded-2xl w-[95%] max-w-lg max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Guia de Tamanhos</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* T-shirt illustration with brand */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Left side - T-shirt illustration */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="text-info font-bold text-sm mb-2">
                Coringão<span className="text-foreground">Store</span>
              </div>
              <svg viewBox="0 0 120 140" className="w-32 h-36">
                {/* T-shirt outline */}
                <path 
                  d="M20 35 L0 55 L15 60 L15 130 L105 130 L105 60 L120 55 L100 35 L85 35 L80 25 C75 18 45 18 40 25 L35 35 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-muted-foreground"
                />
                {/* A - Torax line */}
                <line x1="20" y1="55" x2="100" y2="55" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="4"/>
                <text x="8" y="58" className="text-xs fill-info font-medium">A</text>
                
                {/* B - Cintura line */}
                <line x1="18" y1="85" x2="102" y2="85" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="4"/>
                <text x="8" y="88" className="text-xs fill-info font-medium">B</text>
                
                {/* C - Quadril line */}
                <line x1="15" y1="120" x2="105" y2="120" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="4"/>
                <text x="5" y="123" className="text-xs fill-info font-medium">C</text>
              </svg>
            </div>

            {/* Right side - Size table */}
            <div className="flex-1 w-full">
              <div className="text-center mb-3">
                <h3 className="text-lg font-bold text-foreground">TABELA DE MEDIDAS</h3>
                <span className="inline-block bg-info text-white text-xs font-bold px-4 py-1 rounded">MASCULINO</span>
              </div>

              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-info text-white">
                    <th className="py-2 px-2 text-left font-bold text-xs">TAMANHO</th>
                    <th className="py-2 px-2 text-center font-bold text-xs">A. TÓRAX</th>
                    <th className="py-2 px-2 text-center font-bold text-xs">B. CINTURA</th>
                    <th className="py-2 px-2 text-center font-bold text-xs">C. QUADRIL</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeData.map((row, index) => (
                    <tr key={row.size} className={index % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                      <td className="py-2 px-2">
                        <span className="inline-block bg-foreground text-background text-xs font-bold px-2 py-0.5 rounded">
                          {row.size}
                        </span>
                      </td>
                      <td className="py-2 px-2 text-center text-muted-foreground">{row.torax}</td>
                      <td className="py-2 px-2 text-center text-muted-foreground">{row.cintura}</td>
                      <td className="py-2 px-2 text-center text-muted-foreground">{row.quadril}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="text-xs text-muted-foreground mt-3">*Medidas em centímetros</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuideModal;
