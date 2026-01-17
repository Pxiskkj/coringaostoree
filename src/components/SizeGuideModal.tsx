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
        <div className="p-4">
          {/* Title */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-foreground">TABELA DE MEDIDAS</h3>
            <span className="inline-block bg-info text-white text-xs font-bold px-4 py-1 rounded mt-1">MASCULINO</span>
          </div>

          {/* Size table like reference image */}
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-info text-white">
                <th className="py-2 px-2 text-left font-bold border-r border-info/50">TAMANHO</th>
                <th className="py-2 px-2 text-center font-bold border-r border-info/50">A. TÓRAX</th>
                <th className="py-2 px-2 text-center font-bold border-r border-info/50">B. CINTURA</th>
                <th className="py-2 px-2 text-center font-bold">C. QUADRIL</th>
              </tr>
            </thead>
            <tbody>
              {sizeData.map((row, index) => (
                <tr key={row.size} className={`border-b border-border ${index % 2 === 0 ? "bg-muted/20" : "bg-background"}`}>
                  <td className="py-2 px-2 border-r border-border">
                    <span className="inline-block bg-foreground text-background text-xs font-bold px-2 py-0.5 rounded">
                      {row.size}
                    </span>
                  </td>
                  <td className="py-2 px-2 text-center text-muted-foreground border-r border-border">{row.torax}</td>
                  <td className="py-2 px-2 text-center text-muted-foreground border-r border-border">{row.cintura}</td>
                  <td className="py-2 px-2 text-center text-muted-foreground">{row.quadril}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-xs text-muted-foreground mt-3">*Medidas em centímetros</p>
        </div>
      </div>
    </div>
  );
};

export default SizeGuideModal;