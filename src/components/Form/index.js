import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import StyledButton from "../Button";

function Form({ func, closeForm }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div
        style={{ height: "calc(100% - 55px)" }}
        className="w-6/12 bg-gray-200"
      >
        <div className="h-full">
          <div className="h-6 bg-gray-800 text-white text-center font-light">
            Ficha Cadastral
            <span
              className="float-right cursor-pointer"
              onClick={() => {
                func(!closeForm);
              }}
            >
              <CancelIcon />
            </span>
          </div>
          <form className="text-sm px-3 text-gray-600">
            {/* Primeiro bloco Inicio */}
            <div className="flex justify-between w-full mt-3">
              <div className="">
                <div className="flex">
                  <label className="bg-gray-800 border text-white px-1">
                    Inscrição:
                  </label>
                  <input
                    className="pl-2 rounded border border-gray-400 border-l-0"
                    id=""
                    name=""
                    type="text"
                    onChange={""}
                  />
                </div>
              </div>
              <div className="">
                <p>
                  Última Atualização:{" "}
                  <span className="text-gray-800">01/05/1980 11:55:00</span>
                </p>
              </div>
            </div>
            {/* Primeiro bloco Fim */}
            {/* segundo bloco inicio */}
            <div className="flex flex-row border-b-2 justify-between border-gray-800 pb-2 mt-1 w-full ">
              <div className="flex flex-col w-24">
                <label>LOGRADOURO:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  onChange={""}
                  className="rounded border border-gray-400"
                />
              </div>
              <div className="flex flex-col w-10">
                <label>FACE:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  onChange={""}
                  className="rounded border border-gray-400"
                />
              </div>
              <div className="flex flex-col w-16">
                <label>QUADRA:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  onChange={""}
                  className="rounded border border-gray-400"
                />
              </div>
              <div className="flex flex-col w-10">
                <label>LOTE:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  onChange={""}
                  className="rounded border border-gray-400"
                />
              </div>
              <div className="flex flex-col w-40">
                <label>BAIRRO:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  onChange={""}
                  className="text-center rounded border border-gray-400"
                />
              </div>
              <div className="flex flex-col w-40">
                <label>LOTEAMENTO:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  onChange={""}
                  className="text-center rounded border border-gray-400"
                />
              </div>
            </div>
            {/* Segundo bloco Fim */}

            {/* terceiro bloco inicio */}
            <div className="flex justify-between border-b-2 border-gray-800">
              <div className="">
                Propriedade:
                <div className="">
                  <div className="flex flex-col">
                    <label>PROPRIETÁRIO:</label>
                    <input
                      id=""
                      name=""
                      type="text"
                      onChange={""}
                      className="pl-2 rounded border border-gray-400"
                    />
                  </div>
                  <div className="flex">
                    <div className="flex flex-col">
                      <label>RG:</label>
                      <input
                        id=""
                        name=""
                        type="text"
                        onChange={""}
                        className="pl-2 rounded border border-gray-400"
                      />
                    </div>
                    <div className="flex flex-col ml-1">
                      <label>CPF./CNPJ.:</label>
                      <input
                        id=""
                        name=""
                        type="text"
                        onChange={""}
                        className="pl-2 rounded border border-gray-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col">
                    <label>COMPROMISSÁRIO:</label>
                    <input
                      id=""
                      name=""
                      type="text"
                      onChange={""}
                      className="pl-2 rounded border border-gray-400"
                    />
                  </div>
                  <div className="flex">
                    <div className="flex flex-col">
                      <label>RG:</label>
                      <input
                        id=""
                        name=""
                        type="text"
                        onChange={""}
                        className="pl-2 rounded border border-gray-400"
                      />
                    </div>
                    <div className="flex flex-col ml-1">
                      <label>CPF./CNPJ.:</label>
                      <input
                        id=""
                        name=""
                        type="text"
                        onChange={""}
                        className="pl-2 rounded border border-gray-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col">
                    <label>NOME DO A/C:</label>
                    <input
                      id=""
                      name=""
                      type="text"
                      onChange={""}
                      className="pl-2 rounded border border-gray-400"
                    />
                  </div>
                  <div className="flex">
                    <div className="flex flex-col">
                      <label>RG:</label>
                      <input
                        id=""
                        name=""
                        type="text"
                        onChange={""}
                        className="pl-2 rounded border border-gray-400"
                      />
                    </div>
                    <div className="flex flex-col ml-1">
                      <label>CPF./CNPJ.:</label>
                      <input
                        id=""
                        name=""
                        type="text"
                        onChange={""}
                        className="pl-2 rounded border border-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-1">
                {/* Carrousel de imagens */}
                <div className="w-72 h-64 bg-red-500"></div>

                <div className="flex justify-between">
                  <div>
                    <p>1 de 5</p>
                  </div>
                  <div className="mt-1">
                    <StyledButton color="green">Fachada</StyledButton>
                    <StyledButton color="green">Croqui</StyledButton>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
