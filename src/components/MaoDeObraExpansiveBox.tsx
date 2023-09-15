import { Dispatch, useState } from "react";
import { MaoDeObra } from "../App";

interface MaoDeObraExpansiveBoxProps {
  mobra: MaoDeObra[];
  totalMoPecas: string;
  setTotalMoPecas: Dispatch<React.SetStateAction<string>>;
  onMoChange: (index: number, field: string, value: string | number) => void;
  handleRemoveMo: (index: number) => void;
  handleAddMo?: () => void;
}

export default function MaoDeObraExpansiveBox({
  mobra,
  onMoChange,
  handleAddMo,
  handleRemoveMo,
  totalMoPecas,
  setTotalMoPecas,
}: MaoDeObraExpansiveBoxProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-100/20 rounded p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Mão de Obra</h3>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Fechar" : "Expandir"}
        </button>
      </div>
      {isExpanded && (
        <div className="mt-4">
          {mobra.map((maodeobra, index) => (
            <div key={index} className="mb-4">
              <div
                key={index}
                className="flex flex-col border border-gray-100/10 rounded p-4 mb-4 gap-3"
              >
                <label className="block font-semibold mb-1">
                  Orçamento Serviço de M.O
                </label>
                <input
                  type="text"
                  value={maodeobra.orcamento}
                  onChange={(e) =>
                    onMoChange(index, "orcamento", e.target.value)
                  }
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                />
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-semibold mb-1">
                      Mão de Obra
                    </label>
                    <input
                      type="text"
                      value={maodeobra.maodeobra}
                      onChange={(e) =>
                        onMoChange(index, "maodeobra", e.target.value)
                      }
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">
                      Total M.O
                    </label>
                    <input
                      type="number"
                      value={maodeobra.totalmo}
                      onChange={(e) =>
                        onMoChange(index, "totalmo", parseFloat(e.target.value))
                      }
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    />
                  </div>
                </div>
                <div className="flex flex-col"></div>
                <button
                  onClick={() => handleRemoveMo(index)}
                  className="text-red-500 font-semibold"
                >
                  Remover M.O
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col mb-6">
            <label className="block font-semibold mb-1">Total M.O</label>
            <input
              type="number"
              value={totalMoPecas}
              onChange={(e) => setTotalMoPecas(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <button
            onClick={handleAddMo}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Adicionar Novo Serviço
          </button>
        </div>
      )}
    </div>
  );
}
