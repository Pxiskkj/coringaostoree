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
  { name: "YURI ALBERTO", number: "9" },
  { name: "MEMPHIS", number: "7" },
  { name: "RODRIGO GARRO", number: "10" },
  { name: "RANIELE", number: "14" },
  { name: "BRENO BIDON", number: "27" },
  { name: "HUGO SOUZA", number: "1" },
  { name: "CACÁ", number: "3" },
  { name: "FÉLIX TORRES", number: "4" },
  { name: "GUSTAVO HENRIQUE", number: "6" },
  { name: "MATHEUZINHO", number: "2" },
  { name: "HUGO", number: "26" },
  { name: "CARRILLO", number: "8" },
  { name: "WESLEY", number: "11" },
  { name: "ROMERO", number: "18" },
  { name: "FAGNER", number: "23" },
  { name: "GIL", number: "5" },
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
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab("custom")}
          className={`flex-1 py-2.5 px-4 rounded-full font-medium text-sm transition-all ${
            activeTab === "custom"
              ? "bg-info text-white"
              : "bg-transparent border-2 border-info text-info"
          }`}
        >
          Adicione um nome
        </button>
        <button
          onClick={() => setActiveTab("athlete")}
          className={`flex-1 py-2.5 px-4 rounded-full font-medium text-sm transition-all ${
            activeTab === "athlete"
              ? "bg-info text-white"
              : "bg-transparent border-2 border-info text-info"
          }`}
        >
          Escolha um atleta disponível
        </button>
      </div>

      {/* Custom Name/Number Form */}
      {activeTab === "custom" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              Nome (Máximo 12)
            </label>
            <input
              type="text"
              value={customName}
              onChange={handleNameChange}
              placeholder="Qual o nome desejado"
              className="w-full px-4 py-3 border-2 border-info/30 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-info transition-colors"
            />
            <span className="text-sm text-muted-foreground mt-1 block">
              {customName.length}/12 caracteres
            </span>
          </div>
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              Número (Máximo 2)
            </label>
            <input
              type="text"
              value={customNumber}
              onChange={handleNumberChange}
              placeholder="XX"
              className="w-24 px-4 py-3 border-2 border-info/30 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-info transition-colors text-center"
            />
            <span className="text-sm text-muted-foreground mt-1 block">
              {customNumber.length}/2 dígitos
            </span>
          </div>
        </div>
      )}

      {/* Athlete Selector */}
      {activeTab === "athlete" && (
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-4 py-3 border-2 border-info/30 rounded-xl text-left flex items-center justify-between focus:outline-none focus:border-info transition-colors"
          >
            <span className={selectedAthlete ? "text-foreground" : "text-muted-foreground"}>
              {selectedAthlete || "Selecione um atleta"}
            </span>
            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute z-20 w-full mt-2 bg-card border border-border rounded-xl shadow-lg max-h-64 overflow-y-auto">
              {corinthiansAthletes.map((athlete, index) => (
                <button
                  key={athlete.name}
                  onClick={() => handleAthleteSelect(athlete)}
                  className={`w-full px-4 py-3 text-left hover:bg-info hover:text-white transition-colors ${
                    index === 0 ? "rounded-t-xl bg-info text-white" : ""
                  } ${index === corinthiansAthletes.length - 1 ? "rounded-b-xl" : ""}`}
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
