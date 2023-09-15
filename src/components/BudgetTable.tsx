import { Orcamento } from "../App";
import logo from "../../public/logo.svg";
interface BudgetTableProps {
  orcamento: Orcamento | null;
  onClose: () => void;
}

export default function BudgetTable({ orcamento }: BudgetTableProps) {
  if (!orcamento) {
    return null;
  }

  return (
    <table
      id="tabelaOrcamento"
      className="border-collapse border border-gray-950 w-[912px] max-w-[912px] bg-white text-black text-center"
    >
      <thead>
        <tr className="bg-red-400">
          <th colSpan={4}>
            <p className="justify-center">Orçamento</p>
          </th>
        </tr>
        <tr>
          <th colSpan={1} className="w-[357px] h-24 p-6 border border-gray-950">
            <img src={logo} alt="" />
          </th>
          <th className="border border-gray-950 font-normal p-4 w-[554px]">
            Rener Force Especial Heads Turbo e Aspro <br /> Endereço: Rua: Rua
            do fulano de não sei das quantas. CEP: 99999-999 Uberlandia-MG{" "}
            <br /> Preparados (34) 99999-9999 Rener <br /> Originais (34)
            99999-9999 Fulano
          </th>
        </tr>
        <tr>
          <th colSpan={4} className="bg-red-700 h-4 "></th>
        </tr>
      </thead>
      <tbody>
        <td colSpan={4}>
          <tr>
            <th className="border border-gray-950 px-1 py-1">Cliente</th>
            <td className="border border-gray-950 w-full px-1 text-left">
              {orcamento.cliente}
            </td>
          </tr>
          <tr>
            <th className="border border-gray-950 px-1 py-1">Endereço</th>
            <td className="border border-gray-950 w-full px-1 text-left">
              {orcamento.endereco}
            </td>
          </tr>
          <tr>
            <th className="border border-gray-950 px-1 py-1">Telefone</th>
            <td className="border border-gray-950 w-full px-1 text-left">
              {orcamento.telefone}
            </td>
          </tr>
          <tr>
            <th className="border border-gray-950 px-1 py-1">Cabeçote</th>
            <td className="border border-gray-950 w-full px-1 text-left">
              {orcamento.cabecote}
            </td>
          </tr>
          <tr>
            <th className="border border-gray-950 px-1 py-1">Data</th>
            <td className="border border-gray-950 w-full px-1 text-left">
              {orcamento.data}
            </td>
          </tr>
        </td>
      </tbody>
      <tbody>
        <tr>
          <td colSpan={5}>
            <table className="border-collapse border border-gray-950 w-full">
              <thead>
                <tr className="bg-red-400 text-sm">
                  <th className="border border-gray-950 px-8 py-1">
                    DESCRIÇÃO
                  </th>
                  <th className="border border-gray-950 px-4 py-1">
                    QUANTIDADE
                  </th>
                  <th className="border border-gray-950 px-4 py-1">
                    VALOR UNITÁRIO
                  </th>
                  <th className="border border-gray-950 px-4 py-1">
                    VALOR TOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                {orcamento.servicos.map((servico, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-950 ext-">
                      {servico.descricao}
                    </td>
                    <td className="border border-gray-950 ext-">
                      {servico.quantidade ? servico.quantidade : "ㅤ"}
                    </td>
                    <td className="border border-gray-950 ext-">
                      {servico.valorUnitario
                        ? `R$${servico.valorUnitario}`
                        : "ㅤ"}
                    </td>
                    <td className="border border-gray-950 ext-">
                      {servico.valorTotal ? `R$${servico.valorTotal}` : "ㅤ"}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tbody>
                <tr>
                  <th className="border border-gray-950"></th>
                  <th className="border border-gray-950"></th>
                  <th className="border border-gray-950 bg-red-400 text-sm">
                    TOTAL PEÇAS
                  </th>
                  <td className="border border-gray-950 bg-red-400 text-sm">
                    R$ {orcamento.totalPecas}
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr className="bg-red-400 text-sm">
                  <th className="border border-gray-950 px-8 py-1">
                    ORÇAMENTO SERVIÇO DE MÃO DE OBRAS
                  </th>
                  <th className="border border-gray-950 px-4 py-1">
                    MÃO DE OBRA
                  </th>
                  <th colSpan={2} className="border border-gray-950 px-4 py-1">
                    TOTAL MO
                  </th>
                </tr>
              </thead>
              <tbody>
                {orcamento.mobra.map((maodeobra, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-950">
                      {maodeobra.orcamento}
                    </td>
                    <td className="border border-gray-950">
                      {maodeobra.maodeobra}
                    </td>
                    <td colSpan={2} className="border border-gray-950">
                      {maodeobra.totalmo ? `R$${maodeobra.totalmo}` : "ㅤ"}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tbody>
                <tr>
                  <th rowSpan={3} className="border border-gray-950">
                    Orçamentos sujeito a alterações, o mesmo só será iniciado o
                    preparo após autorização por WhatsApp
                  </th>
                  <th className="border border-gray-950 bg-red-400 text-sm">
                    TOTAL MO COM PEÇAS
                  </th>
                  <td
                    colSpan={2}
                    className="border border-gray-950 bg-red-400 text-sm"
                  >
                    {orcamento.totalMoPecas
                      ? `R$${orcamento.totalMoPecas}`
                      : "ㅤ"}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th className="p-6 bg-red-400" colSpan={4}>
            GARANTIA DE 3 MESES
          </th>
        </tr>
      </tfoot>
    </table>
  );
}
