import { Dispatch, useState } from "react";
import { Servico } from "../App";
interface ServicosExpansiveBoxProps {
  servicos: Servico[];
  handleRemoveServico: (index: number) => void;
  handleAddServico?: () => void;
  onServicoChange: (
    index: number,
    field: string,
    value: string | number
  ) => void;
  totalPecas: string;
  setTotalPecas: Dispatch<React.SetStateAction<string>>;
}

export default function ServicosExpansiveBox({
  servicos,
  onServicoChange,
  handleAddServico,
  handleRemoveServico,
  totalPecas,
  setTotalPecas,
}: ServicosExpansiveBoxProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-100/20 rounded p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Serviços</h3>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Fechar" : "Expandir"}
        </button>
      </div>
      {isExpanded && (
        <div className="mt-4">
          {servicos.map((servico, index) => (
            <div key={index} className="mb-4">
              <div
                key={index}
                className="flex flex-col border border-gray-100/10  rounded p-4 mb-4 gap-3"
              >
                <label className="block font-semibold mb-1">Descrição</label>
                <input
                  type="text"
                  value={servico.descricao}
                  onChange={(e) =>
                    onServicoChange(index, "descricao", e.target.value)
                  }
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                />
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-semibold mb-1">
                      Quantidade
                    </label>
                    <input
                      type="number"
                      value={servico.quantidade}
                      onChange={(e) =>
                        onServicoChange(
                          index,
                          "quantidade",
                          parseInt(e.target.value, 10)
                        )
                      }
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">
                      Valor Unitário
                    </label>
                    <input
                      type="number"
                      value={servico.valorUnitario}
                      onChange={(e) =>
                        onServicoChange(
                          index,
                          "valorUnitario",
                          parseFloat(e.target.value)
                        )
                      }
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Valor Total
                  </label>
                  <input
                    type="number"
                    value={servico.valorTotal}
                    onChange={(e) =>
                      onServicoChange(
                        index,
                        "valorTotal",
                        parseFloat(e.target.value)
                      )
                    }
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  />
                </div>
                <button
                  onClick={() => handleRemoveServico(index)}
                  className="text-red-500 font-semibold"
                >
                  Remover Serviço
                </button>
              </div>
            </div>
          ))}
          <div>
            <button
              onClick={handleAddServico}
              className="bg-blue-500 hover:bg-blue-600 mt-1 text-white py-2 px-4 rounded"
            >
              Adicionar Novo Serviço
            </button>
            <label className="block font-semibold mb-1 mt-4">Valor Total</label>
            <input
              type="number"
              value={totalPecas}
              onChange={(e) => setTotalPecas(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
        </div>
      )}
    </div>
  );
}
