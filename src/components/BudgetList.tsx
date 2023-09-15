import { Orcamento } from "../App";
import BudgetListItem from "./BudgetListItem";

interface BudgetListProps {
  orcamentos: Orcamento[];
  onVerDetalhesClick: (orcamento: Orcamento) => void;
  onEditar: (orcamento: Orcamento) => void;
  onDelete: (orcamento: Orcamento) => Promise<void>;
}

export default function BudgetList({
  orcamentos,
  onVerDetalhesClick,
  onEditar,
  onDelete,
}: BudgetListProps) {
  return (
    <div className="relative overflow-x-auto shadow-md w-screen sm:w-fit sm:rounded-lg">
      <table className="w-full min-w-[700px] text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Cliente
            </th>
            <th scope="col" className="px-6 py-3">
              Telefone
            </th>
            <th scope="col" className="px-6 py-3">
              Data
            </th>
            <th scope="col" className="px-6 py-3">
              Endereço
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orcamentos.map((orcamento) => (
            <BudgetListItem
              onEditarOrcamento={() => onEditar(orcamento)}
              key={orcamento.id}
              orcamento={orcamento}
              onVerDetalhesClick={() => onVerDetalhesClick(orcamento)}
              onDelete={() => onDelete(orcamento)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
