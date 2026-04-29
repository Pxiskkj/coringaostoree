import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface PersonalizationSelectorProps {
  onPersonalizationChange?: (data: {
    type: "custom" | "athlete";
    name?: string;
    number?: string;
    athlete?: string;
  }) => void;
}

const corinthiansAthletes = [
  { name: "ALISSON", number: "1" },
  { name: "DANILO", number: "2" },
  { name: "MARQUINHOS", number: "3" },
  { name: "GABRIEL MAGALHÃES", number: "4" },
  { name: "CASEMIRO", number: "5" },
  { name: "WENDELL", number: "6" },
  { name: "VINICIUS JR", number: "7" },
  { name: "BRUNO GUIMARÃES", number: "8" },
  { name: "ENDRICK", number: "9" },
  { name: "RODRYGO", number: "10" },
  { name: "RAPHINHA", number: "11" },
  { name: "EDERSON", number: "12" },
  { name: "DANI ALVES", number: "13" },
  { name: "ÉDER MILITÃO", number: "14" },
  { name: "BREMER", number: "15" },
  { name: "RENAN LODI", number: "16" },
  { name: "ANDRÉ", number: "17" },
  { name: "JOÃO GOMES", number: "18" },
  { name: "ANTONY", number: "19" },
  { name: "SAVINHO", number: "20" },
  { name: "MATHEUS CUNHA", number: "21" },
  { name: "ESTEVÃO", number: "22" },
  { name: "BENTO", number: "23" },
];

const PersonalizationSelector = ({ onPersonalizationChange }: PersonalizationSelectorProps) => {
  const [activeTab, setActiveTab] = useState<"custom" | "athlete">("custom");
  const [customName, setCustomName] = useState("");
  const [customNumber, setCustomNumber] = useState("");
  const [selectedAthlete, setSelectedAthlete] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0, 12).toUpperCase();
    setCustomName(value);
    onPersonalizationChange?.({
      type: "custom",
      name: value,
      number: customNumber,
    });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 2);
    setCustomNumber(value);
    onPersonalizationChange?.({
      type: "custom",
      name: customName,
      number: value,
    });
  };

  const handleAthleteSelect = (athlete: typeof corinthiansAthletes[0]) => {
    setSelectedAthlete(`${athlete.name} - ${athlete.number}`);
    setIsDropdownOpen(false);
    onPersonalizationChange?.({
      type: "athlete",
      athlete: `${athlete.name} - ${athlete.number}`,
    });
  };

  return (
    <div className="mb-4">
      {/* Tabs */}
      <div className="flex gap-1.5 mb-3">
        <button
          onClick={() => setActiveTab("custom")}
          className={`flex-1 py-1.5 px-2 rounded-full font-medium text-xs transition-all ${
            activeTab === "custom"
              ? "bg-info text-white"
              : "bg-transparent border border-info text-info"
          }`}
        >
          Adicione um nome
        </button>
        <button
          onClick={() => setActiveTab("athlete")}
          className={`flex-1 py-1.5 px-2 rounded-full font-medium text-xs transition-all ${
            activeTab === "athlete"
              ? "bg-info text-white"
              : "bg-transparent border border-info text-info"
          }`}
        >
          Escolha um atleta
        </button>
      </div>

      {/* Custom Name/Number Form */}
      {activeTab === "custom" && (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-foreground mb-1">
              Nome (Máximo 12)
            </label>
            <input
              type="text"
              value={customName}
              onChange={handleNameChange}
              placeholder="Qual o nome desejado"
              className="w-full px-3 py-2 border border-info/30 rounded-full text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-info transition-colors"
            />
            <span className="text-xs text-muted-foreground mt-0.5 block">
              {customName.length}/12
            </span>
          </div>
          <div>
            <label className="block text-xs font-bold text-foreground mb-1">
              Número (Máximo 2)
            </label>
            <input
              type="text"
              value={customNumber}
              onChange={handleNumberChange}
              placeholder="XX"
              className="w-16 px-3 py-2 border border-info/30 rounded-full text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-info transition-colors text-center"
            />
            <span className="text-xs text-muted-foreground mt-0.5 block">
              {customNumber.length}/2
            </span>
          </div>
        </div>
      )}

      {/* Athlete Selector */}
      {activeTab === "athlete" && (
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-3 py-2 border border-info/30 rounded-lg text-left flex items-center justify-between focus:outline-none focus:border-info transition-colors text-sm"
          >
            <span className={selectedAthlete ? "text-foreground" : "text-muted-foreground"}>
              {selectedAthlete || "Selecione um atleta"}
            </span>
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute z-20 w-full mt-1 bg-card border border-border rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {corinthiansAthletes.map((athlete, index) => (
                <button
                  key={athlete.name}
                  onClick={() => handleAthleteSelect(athlete)}
                  className={`w-full px-3 py-2 text-left text-sm hover:bg-info hover:text-white transition-colors ${
                    index === 0 ? "rounded-t-lg bg-info text-white" : ""
                  } ${index === corinthiansAthletes.length - 1 ? "rounded-b-lg" : ""}`}
                >
                  {athlete.name} - {athlete.number}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PersonalizationSelector;
