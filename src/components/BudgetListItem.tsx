import { useState } from "react";
import { BsFiletypePdf, BsImage } from "react-icons/bs";
import { BiDownload, BiTrash } from "react-icons/bi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import BudgetTable from "./BudgetTable";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import { Orcamento } from "../App";
import NotinhaTable from "./NotinhaTable";

interface BudgetListItemProps {
  orcamento: Orcamento;
  onVerDetalhesClick: () => void;
  onEditarOrcamento: (orcamento: Orcamento) => void;
  onDelete: (orcamento: Orcamento) => void;
}

export default function BudgetListItem({
  orcamento,
  onEditarOrcamento,
  onDelete,
}: BudgetListItemProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [showNotinhaDetails, setShowNotinhaDetails] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  /* Orçamento */
  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  /* Notinha */
  const handleShowNotinhaDetails = () => {
    setShowNotinhaDetails(true);
  };

  const handleCloseNotinhaDetails = () => {
    setShowNotinhaDetails(false);
  };

  const handleShowExportModal = () => {
    setShowExportModal(true);
  };

  const handleCloseExportModal = () => {
    setShowExportModal(false);
  };

  const handleExportImageClick = () => {
    const tabela = document.getElementById("tabelaOrcamento");

    if (!tabela) {
      return null;
    }

    htmlToImage
      .toPng(tabela)
      .then(function (dataUrl) {
        // Usando a biblioteca file-saver para salvar a imagem gerada
        saveAs(dataUrl, orcamento.cliente + "_orcamento");
      })
      .catch(function (error) {
        console.error("Erro ao exportar tabela como imagem:", error);
      });
  };

  const handleExportPDFClick = () => {
    const tabela = document.getElementById("tabelaOrcamento");

    if (tabela) {
      htmlToImage
        .toPng(tabela)
        .then(function (dataUrl) {
          const pdf = new jsPDF();
          pdf.addImage(dataUrl, "PNG", 0, 0, 210, 0);
          pdf.save(orcamento.cliente + "_orcamento");
        })
        .catch(function (error) {
          console.error("Erro ao exportar tabela como imagem:", error);
        });
    }
  };

  const handleExportNotinhaImage = () => {
    const tabela = document.getElementById("tabelaNotinha");

    if (!tabela) {
      return null;
    }

    htmlToImage
      .toPng(tabela)
      .then(function (dataUrl) {
        // Usando a biblioteca file-saver para salvar a imagem gerada
        saveAs(dataUrl, orcamento.cliente + "_notinha");
      })
      .catch(function (error) {
        console.error("Erro ao exportar tabela como imagem:", error);
      });
  };

  const handleExportNotinhaPDF = () => {
    const tabela = document.getElementById("tabelaNotinha");

    if (tabela) {
      htmlToImage
        .toPng(tabela)
        .then(function (dataUrl) {
          const pdf = new jsPDF();
          pdf.addImage(dataUrl, "PNG", 0, 0, 210, 0);
          pdf.save(orcamento.cliente + "_notinha");
        })
        .catch(function (error) {
          console.error("Erro ao exportar tabela como imagem:", error);
        });
    }
  };

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {orcamento.cliente ? orcamento.cliente : "???"}
        </th>
        <td className="px-6 py-4">
          {orcamento.telefone ? orcamento.telefone : "???"}
        </td>
        <td className="px-6 py-4">{orcamento.data ? orcamento.data : "???"}</td>
        <td className="px-6 py-4">
          {orcamento.endereco ? orcamento.endereco : "???"}
        </td>
        <td className="px-6 py-4 text-right">
          <button
            onClick={handleShowDetails}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline border-none p-0"
          >
            Ver Detalhes
          </button>
        </td>

        <td className="px-6 py-4 text-right">
          <button
            onClick={() => onEditarOrcamento(orcamento)}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline border-none p-0"
          >
            Editar
          </button>
        </td>
        <td className="px-6 py-4 text-right">
          <button
            onClick={handleShowNotinhaDetails}
            className="font-medium text-green-600 dark:text-green-500 hover:text-green-900 border-none p-0"
          >
            <FaFileInvoiceDollar />
          </button>
        </td>
        <td className="px-6 py-4 text-right">
          <button
            onClick={() => onDelete(orcamento)}
            className="text-base text-red-600 dark:text-red-500 border-none hover:text-red-900 p-0"
          >
            <BiTrash />
          </button>
        </td>
      </tr>

      {showDetails && (
        <div className="fixed inset-0 flex flex-row items-center justify-center bg-opacity-50 bg-gray-700">
          <div className="flex bg-zinc-700 p-6 rounded shadow-md w-fit scale-[0.8] sm:scale-100  max-h-[80vh] overflow-y-auto">
            <div className="min-w-fit">
              <BudgetTable orcamento={orcamento} onClose={handleCloseDetails} />
            </div>
          </div>
          <div className="flex flex-col">
            <button
              onClick={handleShowExportModal}
              className="flex flex-row items-center gap-2 absolute top-4 right-36 text-green-500 font-semibold"
            >
              <BiDownload /> Exportar
            </button>
            <button
              onClick={handleCloseDetails}
              className="flex flex-row gap-2 items-center absolute top-4 right-4 text-red-500 font-semibold"
            >
              <IoClose /> Fechar
            </button>
          </div>
        </div>
      )}

      {showNotinhaDetails && (
        <div className="fixed inset-0 flex flex-row items-center justify-center bg-opacity-50 bg-gray-700">
          <div className="flex bg-zinc-700 p-6 rounded shadow-md w-fit scale-[0.8] sm:scale-100  max-h-[80vh] overflow-y-auto">
            <div className="min-w-fit">
              <NotinhaTable
                orcamento={orcamento}
                onClose={handleCloseNotinhaDetails}
              />
              {/* <BudgetTable orcamento={orcamento} onClose={handleCloseDetails} /> */}
            </div>
          </div>
          <div className="flex flex-col">
            <button
              onClick={handleShowExportModal}
              className="flex flex-row items-center gap-2 absolute top-4 right-36 text-green-500 font-semibold"
            >
              <BiDownload /> Exportar
            </button>
            <button
              onClick={handleCloseNotinhaDetails}
              className="flex flex-row gap-2 items-center absolute top-4 right-4 text-red-500 font-semibold"
            >
              <IoClose /> Fechar
            </button>
          </div>
        </div>
      )}

      {showExportModal && (
        <div className="fixed inset-0 flex flex-row items-center justify-center bg-opacity-50 bg-gray-700">
          <div className="flex flex-col text-center items-center gap-8 bg-gray-700 p-6 rounded shadow-md w-1/4">
            {showDetails ? (
              <>
                <button
                  onClick={handleExportPDFClick}
                  className="flex flex-row items-center gap-2 font-medium text-blue-600 dark:text-blue-500 hover:underline border-none p-0"
                >
                  Salvar como PDF <BsFiletypePdf />
                </button>
                <button
                  onClick={handleExportImageClick}
                  className="flex flex-row items-center gap-2 font-medium text-blue-600 dark:text-blue-500 hover:underline border-none p-0"
                >
                  Salvar como PNG <BsImage />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleExportNotinhaPDF}
                  className="flex flex-row items-center gap-2 font-medium text-blue-600 dark:text-blue-500 hover:underline border-none p-0"
                >
                  Salvar como PDF <BsFiletypePdf />
                </button>
                <button
                  onClick={handleExportNotinhaImage}
                  className="flex flex-row items-center gap-2 font-medium text-blue-600 dark:text-blue-500 hover:underline border-none p-0"
                >
                  Salvar como PNG <BsImage />
                </button>
              </>
            )}

            <button
              onClick={handleCloseExportModal}
              className="flex flex-row items-center gap-2 font-medium text-red-600 hover:underline border-none p-0"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
