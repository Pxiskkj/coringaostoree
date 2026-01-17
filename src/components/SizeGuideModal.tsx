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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div 
        className="bg-background rounded-xl w-full max-w-md max-h-[85vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-border">
          <h2 className="text-base font-bold text-foreground">Guia de Tamanhos</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-3">
          {/* T-shirt illustration with brand */}
          <div className="flex gap-4 items-start">
            {/* Left side - T-shirt illustration */}
            <div className="flex-shrink-0 flex flex-col items-center w-28">
              <div className="text-info font-bold text-xs mb-1">
                Coringão<span className="text-foreground">Store</span>
              </div>
              {/* Professional T-shirt SVG */}
              <svg viewBox="0 0 100 120" className="w-24 h-28">
                {/* T-shirt body */}
                <path 
                  d="M50 8 C45 8 42 12 40 16 L35 14 L20 20 L8 38 L18 42 L18 110 L82 110 L82 42 L92 38 L80 20 L65 14 L60 16 C58 12 55 8 50 8 Z"
                  fill="hsl(var(--muted))"
                  stroke="hsl(var(--foreground))"
                  strokeWidth="1.5"
                />
                {/* Collar */}
                <path 
                  d="M40 16 C43 22 47 25 50 25 C53 25 57 22 60 16"
                  fill="none"
                  stroke="hsl(var(--foreground))"
                  strokeWidth="1.5"
                />
                {/* Left sleeve seam */}
                <path 
                  d="M18 42 L35 32"
                  fill="none"
                  stroke="hsl(var(--foreground))"
                  strokeWidth="1"
                  strokeDasharray="2"
                />
                {/* Right sleeve seam */}
                <path 
                  d="M82 42 L65 32"
                  fill="none"
                  stroke="hsl(var(--foreground))"
                  strokeWidth="1"
                  strokeDasharray="2"
                />
                
                {/* A - Torax measurement line */}
                <line x1="20" y1="48" x2="80" y2="48" stroke="hsl(var(--info))" strokeWidth="1.5"/>
                <circle cx="20" cy="48" r="2" fill="hsl(var(--info))"/>
                <circle cx="80" cy="48" r="2" fill="hsl(var(--info))"/>
                <text x="6" y="51" className="text-[8px] font-bold" fill="hsl(var(--info))">A</text>
                
                {/* B - Cintura measurement line */}
                <line x1="19" y1="72" x2="81" y2="72" stroke="hsl(var(--info))" strokeWidth="1.5"/>
                <circle cx="19" cy="72" r="2" fill="hsl(var(--info))"/>
                <circle cx="81" cy="72" r="2" fill="hsl(var(--info))"/>
                <text x="6" y="75" className="text-[8px] font-bold" fill="hsl(var(--info))">B</text>
                
                {/* C - Quadril measurement line */}
                <line x1="18" y1="100" x2="82" y2="100" stroke="hsl(var(--info))" strokeWidth="1.5"/>
                <circle cx="18" cy="100" r="2" fill="hsl(var(--info))"/>
                <circle cx="82" cy="100" r="2" fill="hsl(var(--info))"/>
                <text x="6" y="103" className="text-[8px] font-bold" fill="hsl(var(--info))">C</text>
              </svg>
            </div>

            {/* Right side - Size table */}
            <div className="flex-1 min-w-0">
              <div className="text-center mb-2">
                <h3 className="text-sm font-bold text-foreground">TABELA DE MEDIDAS</h3>
                <span className="inline-block bg-info text-white text-[10px] font-bold px-2 py-0.5 rounded">MASCULINO</span>
              </div>

              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-info text-white">
                    <th className="py-1 px-1 text-left font-bold text-[10px]">TAM</th>
                    <th className="py-1 px-1 text-center font-bold text-[10px]">A</th>
                    <th className="py-1 px-1 text-center font-bold text-[10px]">B</th>
                    <th className="py-1 px-1 text-center font-bold text-[10px]">C</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeData.map((row, index) => (
                    <tr key={row.size} className={index % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                      <td className="py-1 px-1">
                        <span className="inline-block bg-foreground text-background text-[10px] font-bold px-1.5 py-0.5 rounded">
                          {row.size}
                        </span>
                      </td>
                      <td className="py-1 px-1 text-center text-muted-foreground text-[10px]">{row.torax}</td>
                      <td className="py-1 px-1 text-center text-muted-foreground text-[10px]">{row.cintura}</td>
                      <td className="py-1 px-1 text-center text-muted-foreground text-[10px]">{row.quadril}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="text-[10px] text-muted-foreground mt-2">*Medidas em centímetros (cm)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuideModal;