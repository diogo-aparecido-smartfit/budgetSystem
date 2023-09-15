import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import BudgetList from "./components/BudgetList";
import NewBudgetModal from "./components/NewBudgetModal";
import EditBudgetForm from "./components/EditBudgetForm";
import { BsPlus } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export interface Orcamento {
  id?: string;
  cliente: string;
  endereco: string;
  telefone: string;
  cabecote: string;
  data: string;
  totalPecas: string;
  totalMoPecas: string;
  servicos: Servico[];
  mobra: MaoDeObra[];
}
export interface Servico {
  descricao: string;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
  [key: string]: string | number;
}

export interface MaoDeObra {
  orcamento: string;
  maodeobra: string;
  totalmo: string;
  [key: string]: string | number;
}

export default function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<Orcamento | null>(null);
  selectedBudget;
  const [orcamentos, setOrcamentos] = useState<Orcamento[]>([
    {
      id: "1",
      cliente: "Fulano de Tal",
      endereco: "Rua dos Bobos, 01",
      telefone: "(11) 9999-9999",
      cabecote: "1000",
      data: "2023-09-20",
      totalPecas: "500,00",
      totalMoPecas: "100,00",
      servicos: [
        {
          descricao: "Troca de cabeçote",
          quantidade: 1,
          valorUnitario: 500,
          valorTotal: 500,
        },
        {
          descricao: "Manutenção do motor",
          quantidade: 1,
          valorUnitario: 100,
          valorTotal: 100,
        },
      ],
      mobra: [
        {
          orcamento: "1",
          maodeobra: "Mão de obra",
          totalmo: "100",
        },
      ],
    },
    {
      id: "2",
      cliente: "Beltrano de Tal",
      endereco: "Rua da Paz, 02",
      telefone: "(11) 8888-8888",
      cabecote: "2000",
      data: "2023-09-21",
      totalPecas: "1000,00",
      totalMoPecas: "200,00",
      servicos: [
        {
          descricao: "Troca de motor",
          quantidade: 1,
          valorUnitario: 1000,
          valorTotal: 1000,
        },
        {
          descricao: "Manutenção da suspensão",
          quantidade: 1,
          valorUnitario: 200,
          valorTotal: 200,
        },
      ],
      mobra: [
        {
          orcamento: "2",
          maodeobra: "Mão de obra",
          totalmo: "200",
        },
      ],
    },
  ]);
  const [editingOrcamento, setEditingOrcamento] = useState<Orcamento | null>(
    null
  );

  // Função para abrir o modal de novo orçamento
  const handleCreateBudget = () => {
    setShowModal(true);
  };

  // Função para salvar um novo orçamento
  const handleSaveBudget = async (novoOrcamento: Orcamento) => {
    try {
      setOrcamentos([...orcamentos, novoOrcamento]);
      novoOrcamento.id = uuidv4();
      setShowModal(false);
      toast.success("🔥 Orçamento criado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log("Novo orçamento criado com ID:", novoOrcamento.id);
    } catch (error) {
      toast.error(`Erro ao criar novo orçamento:, ${error} `, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  // Função para editar um orçamento existente
  const handleSaveEditOrcamento = async (orcamentoEditado: Orcamento) => {
    try {
      setOrcamentos((prevOrcamentos) =>
        prevOrcamentos.map((orcamento) =>
          orcamento.id === orcamentoEditado.id ? orcamentoEditado : orcamento
        )
      );
      toast.success("✏️ Orçamento editado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setEditModalOpen(false); // Feche o modal de edição após salvar
    } catch (error) {
      toast.error(`Erro ao editar orçamento:, ${error} `, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error("Erro ao editar orçamento:", error);
    }
  };

  // Função para excluir um orçamento
  const handleDeleteOrcamento = async (deletarOrcamento: Orcamento) => {
    try {
      setOrcamentos((prevOrcamentos) =>
        prevOrcamentos.filter(
          (orcamento) => orcamento.id !== deletarOrcamento.id
        )
      );
      toast.success("🗑️ Orçamento deletado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      toast.error(`Erro ao deletar orçamento:, ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  // Função para ver detalhes do orçamento (tabela)
  const handleVerDetalhesClick = (orcamento: Orcamento) => {
    setSelectedBudget(orcamento);
  };

  // Função para fechar o modal de novo orçamento
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Função para abrir o modal de edição de orçamento
  const handleOpenEditModal = (orcamento: Orcamento) => {
    setEditingOrcamento(orcamento);
    setEditModalOpen(true);
  };

  // Função para fechar o modal de edição de orçamento
  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setEditingOrcamento(null); // Limpar o estado de edição após fechar o modal
  };

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <main className="flex flex-col mx-0 mt-64 mb-auto justify-center items-center">
        <div className="mb-4">
          <button
            className="flex flex-row gap-2 items-center bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded transition-all"
            onClick={handleCreateBudget}
          >
            Criar Novo Orçamento <BsPlus />
          </button>
        </div>
        <div className="overflow-y-auto">
          <BudgetList
            onEditar={handleOpenEditModal}
            orcamentos={orcamentos}
            onVerDetalhesClick={handleVerDetalhesClick}
            onDelete={handleDeleteOrcamento}
          />
        </div>
      </main>
      {showModal && (
        <NewBudgetModal onClose={handleCloseModal} onSave={handleSaveBudget} />
      )}

      {/* Modal para editar orçamento */}
      {isEditModalOpen && (
        <EditBudgetForm
          orcamento={editingOrcamento}
          onClose={handleCloseEditModal}
          onSave={handleSaveEditOrcamento}
        />
      )}
      <ToastContainer
        bodyClassName="bg-gray-800"
        toastClassName="bg-gray-800"
      />
    </div>
  );
}
