import { useState } from "react";
import { MaoDeObra, Orcamento, Servico } from "../App";
import ServicosExpansiveBox from "./ServicosExpansiveBox";
import MaoDeObraExpansiveBox from "./MaoDeObraExpansiveBox";
import InputMask from "react-input-mask";
interface NewBudgetModalProps {
  onClose: () => void;
  onSave: (novoOrcamento: Orcamento) => void;
}

export default function NewBudgetModal({
  onClose,
  onSave,
}: NewBudgetModalProps) {
  const [cliente, setCliente] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cabecote, setCabecote] = useState("");
  const [data, setData] = useState("");
  const [totalMoPecas, setTotalMoPecas] = useState("");
  const [totalPecas, setTotalPecas] = useState("");
  const [servicos, setServicos] = useState<Servico[]>([
    {
      descricao: "",
      quantidade: 0,
      valorUnitario: 0,
      valorTotal: 0,
    },
  ]);

  const [mobra, setMobra] = useState<MaoDeObra[]>([
    {
      orcamento: "",
      maodeobra: "",
      totalmo: "",
    },
  ]);

  // SERVIÇOS
  const handleAddServico = () => {
    setServicos((prevServicos) => [
      ...prevServicos,
      {
        descricao: "",
        quantidade: 0,
        valorUnitario: 0,
        valorTotal: 0,
      },
    ]);
  };

  const handleRemoveServico = (index: number) => {
    setServicos((prevServicos) => {
      const updatedServicos = [...prevServicos];
      updatedServicos.splice(index, 1);
      return updatedServicos;
    });
  };

  const handleServicoChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const updatedServicos: any = [...servicos];
    updatedServicos[index][field] = value;
    setServicos(updatedServicos);
  };

  // ORÇAMENTO SERVIÇO DE MÃO DE OBRAS
  const handleAddMo = () => {
    setMobra((prevMobra) => [
      ...prevMobra,
      {
        orcamento: "",
        maodeobra: "",
        totalmo: "",
      },
    ]);
  };

  const handleRemoveMo = (index: number) => {
    setMobra((prevMobra) => {
      const updatedMo = [...prevMobra];
      updatedMo.splice(index, 1);
      return updatedMo;
    });
  };

  const handleMoChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const updatedMo: any = [...mobra];
    updatedMo[index][field] = value;
    setMobra(updatedMo);
  };

  const handleSalvarOrcamento = () => {
    const novoOrcamento: Orcamento = {
      // id
      cliente,
      endereco,
      telefone,
      cabecote,
      data,
      servicos,
      mobra,
      totalPecas,
      totalMoPecas,
    };
    onSave(novoOrcamento);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-zinc-600 ">
      <div className="bg-gray-800 text-white p-6 rounded shadow-md w-96 max-h-[80vh] overflow-y-auto scale-[0.8] sm:scale-100">
        <h2 className="text-xl font-bold mb-4">Novo Orçamento</h2>
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
            type="tel"
            mask="(99) 99999-9999"
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
            type="text"
            mask="99/99/9999"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-4">
          <ServicosExpansiveBox
            handleAddServico={handleAddServico}
            servicos={servicos}
            onServicoChange={handleServicoChange}
            handleRemoveServico={handleRemoveServico}
            totalPecas={totalPecas}
            setTotalPecas={setTotalPecas}
          />
        </div>
        <div className="mb-4">
          <MaoDeObraExpansiveBox
            handleAddMo={handleAddMo}
            mobra={mobra}
            onMoChange={handleMoChange}
            handleRemoveMo={handleRemoveMo}
            totalMoPecas={totalMoPecas}
            setTotalMoPecas={setTotalMoPecas}
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
