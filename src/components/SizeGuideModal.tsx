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
          {/* Title */}
          <div className="text-center mb-3">
            <h3 className="text-sm font-bold text-foreground">TABELA DE MEDIDAS</h3>
            <span className="inline-block bg-info text-white text-[10px] font-bold px-3 py-0.5 rounded mt-1">MASCULINO</span>
          </div>

          {/* Shirt illustration with measurement indicators */}
          <div className="flex justify-center mb-3">
            <svg viewBox="0 0 200 180" className="w-40 h-36">
              {/* Shirt outline */}
              <path
                d="M100 20 L60 35 L40 70 L55 75 L55 160 L145 160 L145 75 L160 70 L140 35 L100 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted-foreground"
              />
              {/* Collar */}
              <path
                d="M85 20 Q100 35 115 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted-foreground"
              />
              {/* Sleeve left */}
              <path
                d="M40 70 L20 90 L35 95 L55 75"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted-foreground"
              />
              {/* Sleeve right */}
              <path
                d="M160 70 L180 90 L165 95 L145 75"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted-foreground"
              />
              
              {/* A - Tórax line */}
              <line x1="55" y1="85" x2="145" y2="85" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4,2"/>
              <circle cx="55" cy="85" r="3" fill="#3B82F6"/>
              <circle cx="145" cy="85" r="3" fill="#3B82F6"/>
              <text x="150" y="88" className="text-[10px] fill-info font-bold">A</text>
              
              {/* B - Cintura line */}
              <line x1="58" y1="115" x2="142" y2="115" stroke="#10B981" strokeWidth="2" strokeDasharray="4,2"/>
              <circle cx="58" cy="115" r="3" fill="#10B981"/>
              <circle cx="142" cy="115" r="3" fill="#10B981"/>
              <text x="147" y="118" className="text-[10px] fill-green-500 font-bold">B</text>
              
              {/* C - Quadril line */}
              <line x1="55" y1="145" x2="145" y2="145" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4,2"/>
              <circle cx="55" cy="145" r="3" fill="#F59E0B"/>
              <circle cx="145" cy="145" r="3" fill="#F59E0B"/>
              <text x="150" y="148" className="text-[10px] fill-amber-500 font-bold">C</text>
            </svg>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-4 mb-3 text-[10px]">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-info"></span>
              <span className="text-muted-foreground">A. Tórax</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="text-muted-foreground">B. Cintura</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span className="text-muted-foreground">C. Quadril</span>
            </div>
          </div>

          {/* Size table */}
          <table className="w-full text-[11px] border-collapse">
            <thead>
              <tr className="bg-info text-white">
                <th className="py-1.5 px-1.5 text-left font-bold border-r border-info/50">TAM</th>
                <th className="py-1.5 px-1.5 text-center font-bold border-r border-info/50">A. TÓRAX</th>
                <th className="py-1.5 px-1.5 text-center font-bold border-r border-info/50">B. CINTURA</th>
                <th className="py-1.5 px-1.5 text-center font-bold">C. QUADRIL</th>
              </tr>
            </thead>
            <tbody>
              {sizeData.map((row, index) => (
                <tr key={row.size} className={`border-b border-border ${index % 2 === 0 ? "bg-muted/20" : "bg-background"}`}>
                  <td className="py-1 px-1.5 border-r border-border">
                    <span className="inline-block bg-foreground text-background text-[10px] font-bold px-1.5 py-0.5 rounded">
                      {row.size}
                    </span>
                  </td>
                  <td className="py-1 px-1.5 text-center text-muted-foreground border-r border-border">{row.torax}</td>
                  <td className="py-1 px-1.5 text-center text-muted-foreground border-r border-border">{row.cintura}</td>
                  <td className="py-1 px-1.5 text-center text-muted-foreground">{row.quadril}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-[10px] text-muted-foreground mt-2">*Medidas em centímetros</p>
        </div>
      </div>
    </div>
  );
};

export default SizeGuideModal;