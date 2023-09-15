import { useEffect, useState } from "react";
import { Orcamento } from "../App";
import ServicosExpansiveBox from "./ServicosExpansiveBox";
import MaoDeObraExpansiveBox from "./MaoDeObraExpansiveBox";
import InputMask from "react-input-mask";

interface EditBudgetModalProps {
  orcamento: Orcamento | null;
  onClose: () => void;
  onSave: (orcamentoEditado: Orcamento) => Promise<void>;
}

export default function EditBudgetForm({
  orcamento,
  onClose,
  onSave,
}: EditBudgetModalProps) {
  if (!orcamento) {
    return null;
  }

  const [cliente, setCliente] = useState(orcamento?.cliente || "");
  const [endereco, setEndereco] = useState(orcamento?.endereco || "");
  const [telefone, setTelefone] = useState(orcamento?.telefone || "");
  const [cabecote, setCabecote] = useState(orcamento?.cabecote || "");
  const [data, setData] = useState(orcamento?.data || "");
  const [servicos, setServicos] = useState(orcamento?.servicos || []);
  const [totalMoPecas, setTotalMoPecas] = useState("");
  const [totalPecas, setTotalPecas] = useState("");
  const [maoDeObra, setMaoDeObra] = useState(orcamento?.mobra || []);

  useEffect(() => {
    const servicosNaoNulos = orcamento.servicos.filter(
      (servico) =>
        servico.descricao !== "" ||
        servico.quantidade !== 0 ||
        servico.valorUnitario !== 0 ||
        servico.valorTotal !== 0
    );

    setServicos(servicosNaoNulos);
  }, [orcamento.servicos]);

  useEffect(() => {
    const moNaoNulas = orcamento.mobra.filter(
      (mobra) =>
        mobra.maodeobra !== "" || mobra.orcamento !== "" || mobra.totalmo !== ""
    );

    setMaoDeObra(moNaoNulas);
  }, [orcamento.mobra]);

  // Serviços
  const handleServicoChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const updatedServicos = [...servicos];
    const updatedServico = { ...updatedServicos[index] };
    updatedServico[field] = value;
    updatedServicos[index] = updatedServico;
    setServicos(updatedServicos);
  };

  const handleRemoveServico = (index: number) => {
    const updatedServicos = [...servicos];
    updatedServicos.splice(index, 1);
    setServicos(updatedServicos);
  };

  const handleAddServico = () => {
    setServicos([
      ...servicos,
      {
        descricao: "",
        quantidade: 0,
        valorUnitario: 0,
        valorTotal: 0,
      },
    ]);
  };

  // Mão de obras
  const handleMoChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const updatedMos = [...maoDeObra];
    const updatedMo = { ...updatedMos[index] };
    updatedMo[field] = value;
    updatedMos[index] = updatedMo;
    setMaoDeObra(updatedMos);
  };

  const handleRemoveMo = (index: number) => {
    const updatedMos = [...maoDeObra];
    updatedMos.splice(index, 1);
    setMaoDeObra(updatedMos);
  };

  const handleAddMo = () => {
    setMaoDeObra([
      ...maoDeObra,
      {
        orcamento: "",
        maodeobra: "",
        totalmo: "",
      },
    ]);
  };

  const handleSalvarOrcamento = () => {
    const orcamentoEditado: Orcamento = {
      ...orcamento,
      cliente,
      endereco,
      telefone,
      cabecote,
      data,
      servicos,
      mobra: maoDeObra,
      totalMoPecas,
      totalPecas,
    };

    onSave(orcamentoEditado);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-zinc-600">
      <div className="bg-gray-800 text-white p-6 rounded shadow-md w-96 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Editar Orçamento</h2>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Cliente</label>
          <input
            type="text"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Endereço</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Telefone</label>
          <InputMask
            mask="(99) 99999-9999"
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Cabeçote</label>
          <input
            type="text"
            value={cabecote}
            onChange={(e) => setCabecote(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Data</label>
          <InputMask
            mask="99/99/9999"
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <ServicosExpansiveBox
            setTotalPecas={setTotalPecas}
            totalPecas={totalPecas}
            servicos={servicos}
            onServicoChange={handleServicoChange}
            handleRemoveServico={handleRemoveServico}
            handleAddServico={handleAddServico}
          />
          <MaoDeObraExpansiveBox
            mobra={maoDeObra}
            totalMoPecas={totalMoPecas}
            setTotalMoPecas={setTotalMoPecas}
            handleRemoveMo={handleRemoveMo}
            handleAddMo={handleAddMo}
            onMoChange={handleMoChange}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSalvarOrcamento}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mr-2"
          >
            Salvar Orçamento
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
