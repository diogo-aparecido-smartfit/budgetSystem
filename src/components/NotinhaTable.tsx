import logo from "../../public/black-logo.svg";
import { Orcamento, Servico } from "../App";

interface NotinhaTableProps {
  orcamento: Orcamento | null;
  onClose: () => void;
}

export default function NotinhaTable({ orcamento }: NotinhaTableProps) {
  if (!orcamento) {
    return null;
  }

  const dataParts = orcamento.data.split("/");

  const dia = parseInt(dataParts[0], 10);
  const mes = parseInt(dataParts[1], 10);
  const ano = parseInt(dataParts[2], 10);

  function obterNomeDoMes(numeroMes: number) {
    const nomesDosMeses = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];
    return nomesDosMeses[numeroMes - 1];
  }

  function calcularSomaTotal(servicos: Servico[]) {
    return servicos.reduce((total, servico) => total + servico.valorTotal, 0);
  }

  return (
    <div id="tabelaNotinha">
      <table className="border-collapse border border-gray-950 w-[812px] max-w-[912px] bg-white text-black text-center">
        <thead>
          <tr>
            <th
              colSpan={1}
              className="w-[357px] h-24 p-6 border border-gray-950"
            >
              <img src={logo} alt="" />
            </th>
            <th className=" font-normal p-4 w-[554px] border border-gray-950">
              Rener Force Especial Heads Turbo e Aspro <br /> Endereço: Rua: Rua
              do fulano de não sei das quantas. CEP: 99999-999 Uberlandia-MG{" "}
              <br /> Preparados (34) 99999-9999 Rener <br /> Originais (34)
              99999-9999 Fulano
            </th>
          </tr>
        </thead>
      </table>
      <div className="bg-white text-black border border-gray-950">
        <div className="flex flex-col justify-around p-2">
          <p className="">
            Uberlândia, <span className="underline">{dia ? dia : "??"}</span> de{" "}
            <span className="underline">
              {obterNomeDoMes(mes) ? obterNomeDoMes(mes) : "??"}
            </span>{" "}
            de <span className="underline">{ano ? ano : "????"}</span>
          </p>
          <p className="flex flex-row">
            Cabeçote:{" "}
            <span className="ml-1 underline-full-width w-full">
              {orcamento.cabecote}
            </span>
          </p>
          <p className="flex flex-row">
            Cliente:
            <span className="ml-1 underline-full-width w-full">
              {orcamento.cliente}
            </span>
          </p>
          <p className="flex flex-row">
            End:
            <span className="ml-1 underline-full-width w-full">
              {orcamento.endereco}
            </span>
          </p>
          <p className="flex flex-row">
            Fone:
            <span className="ml-1 underline-full-width w-full">
              {orcamento.telefone}
            </span>
          </p>
        </div>
      </div>
      <table className="border-collapse border border-gray-950 w-[812px] max-w-[912px] bg-white text-black text-center">
        <thead>
          <th className="border border-gray-950">QUANT</th>
          <th className="border border-gray-950 px-32">DESCRIÇÃO</th>
          <th className="border border-gray-950">VALOR UNITÁRIO</th>
          <th className="border border-gray-950">VALOR TOTAL</th>
        </thead>
        <tbody>
          {orcamento.servicos.map((servico, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-950">
                {servico.quantidade ? servico.quantidade : "ㅤ"}
              </td>
              <td className="border border-gray-950">{servico.descricao}</td>
              <td className="border border-gray-950">
                {servico.valorUnitario ? `R$${servico.valorUnitario}` : "ㅤ"}
              </td>
              <td className="border border-gray-950">
                {servico.valorTotal ? `R$${servico.valorTotal}` : "ㅤ"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="w-[812px] max-w-[912px] bg-white text-black text-center">
        <tbody>
          <th className="border-l border-gray-950"></th>
          <th className=""></th>
          <th className="border-l border-gray-950">VALOR TOTAL R$:</th>
          <th className="border-l border-r border-gray-950">
            R${" "}
            {calcularSomaTotal(orcamento.servicos).toFixed(2)
              ? calcularSomaTotal(orcamento.servicos).toFixed(2)
              : "Não definido."}
          </th>
        </tbody>
        <tbody className="text-start">
          <th className="p-4 border border-gray-950">
            Cond. Pagto.
            <p className="font-normal"></p>
          </th>
          <th className="p-4 border border-gray-950">
            Vencimento:
            <p className="font-normal"></p>
          </th>
          <th colSpan={2} className="p-4 border border-gray-950">
            Ass Cliente:
            <p className="font-normal"></p>
          </th>
        </tbody>
        <th className="font-normal p-1 border border-gray-950" colSpan={4}>
          <p className="text-xs">
            <strong>Observação:</strong> Certificamos que o cabeçote acima
            especificado possui garantia de (03) três meses. Observando as
            condições de uso adequadamente e manutenção periódica convencional
            de normas técnicas as quais serão avaliadas caso apresente algum
            defeito no uso do veículo.
          </p>
        </th>
      </table>
    </div>
  );
}
