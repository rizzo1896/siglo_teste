import React, { useEffect, useState } from "react";
import axios from "axios";
import CancelIcon from "@mui/icons-material/Cancel";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import PrintIcon from "@mui/icons-material/Print";
import StyledButton from "../Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Form({ func, closeForm }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=1&limit=6")
      .then((res) => setImages(res.data));
  }, []);

  return (
    <>
      <div
        style={{ height: "calc(100% - 55px)" }}
        className="w-6/12 bg-gray-200 border border-gray-600"
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
          <form className="text-sm font-medium px-3 text-gray-600">
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
                    // onChange={""}
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
                  // onChange={""}
                  className="rounded border border-gray-400"
                />
              </div>
              <div className="flex flex-col w-10">
                <label>FACE:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="rounded border border-gray-400"
                />
              </div>
              <div className="flex flex-col w-16">
                <label>QUADRA:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="rounded border border-gray-400"
                />
              </div>
              <div className="flex flex-col w-10">
                <label>LOTE:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="rounded border border-gray-400"
                />
              </div>
              <div className="flex flex-col w-40">
                <label>BAIRRO:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="text-center rounded border border-gray-400"
                />
              </div>
              <div className="flex flex-col w-40">
                <label>LOTEAMENTO:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="text-center rounded border border-gray-400"
                />
              </div>
            </div>
            {/* Segundo bloco Fim */}
            {/* terceiro bloco inicio */}
            <div className="flex justify-between border-b-2 border-gray-800 pb-2">
              <div className="">
                <p className="font-medium text-lg">Propriedade:</p>
                <div className="">
                  <div className="flex flex-col">
                    <label>PROPRIETÁRIO:</label>
                    <input
                      id=""
                      name=""
                      type="text"
                      // onChange={""}
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
                        // onChange={""}
                        className="pl-2 rounded border border-gray-400"
                      />
                    </div>
                    <div className="flex flex-col ml-1">
                      <label>CPF./CNPJ.:</label>
                      <input
                        id=""
                        name=""
                        type="text"
                        // onChange={""}
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
                      // onChange={""}
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
                        // onChange={""}
                        className="pl-2 rounded border border-gray-400"
                      />
                    </div>
                    <div className="flex flex-col ml-1">
                      <label>CPF./CNPJ.:</label>
                      <input
                        id=""
                        name=""
                        type="text"
                        // onChange={""}
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
                      // onChange={""}
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
                        // onChange={""}
                        className="pl-2 rounded border border-gray-400"
                      />
                    </div>
                    <div className="flex flex-col ml-1">
                      <label>CPF./CNPJ.:</label>
                      <input
                        id=""
                        name=""
                        type="text"
                        // onChange={""}
                        className="pl-2 rounded border border-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-1">
                {/* Carrousel de imagens */}
                <div className="w-72 h-64">
                  <Carousel
                    // showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    infiniteLoop={true}
                  >
                    {images.map((item, index) => {
                      return (
                        <img
                          className="h-64"
                          src={`${item.download_url}.jpg`}
                          alt={item.author}
                          key={index}
                        />
                      );
                    })}
                  </Carousel>
                </div>

                <div className="flex justify-end">
                  {/* <div>
                    <p>1 de 5</p>
                  </div> */}
                  <div className="mt-1">
                    <StyledButton color="#008000">Fachada</StyledButton>
                    <StyledButton color="#008000ac">Croqui</StyledButton>
                  </div>
                </div>
              </div>
            </div>
            {/* terceiro bloco FIM */}
            <p className="font-medium text-lg -my-1">Terreno:</p>
            <div className="w-full flex justify-between text-xs">
              <div className="flex flex-col w-72">
                <label>LOGRADOURO:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 py-1"
                />
              </div>
              <div className="flex flex-col w-24">
                <label>FORMA:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 py-1"
                />
              </div>
              <div className="flex flex-col w-32">
                <label>SITUAÇÃO:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 py-1"
                />
              </div>
              <div className="flex flex-col w-32">
                <label>ÁREA TERRENO (m²):</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 py-1"
                />
              </div>
            </div>
            <div
              // style={{ fontSize: "10px" }}
              className="w-full flex justify-between mt-1 text-xs border-b-2 border-gray-800 pb-1"
            >
              <div className="w-1/6 flex flex-col">
                <label>USO DO IMÓVEL:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 py-1"
                />
              </div>
              <div className="w-24 flex flex-col">
                <label>VALOR m²(R$):</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 py-1"
                />
              </div>
              <div className="w-28 flex flex-col ">
                <label>VALOR VENAL (R$):</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 py-1"
                />
              </div>
              <div className="w-20 flex flex-col ">
                <label>TESTADA 01:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 py-1"
                />
              </div>
              <div className="w-20 flex flex-col ">
                <label>TESTADA 01:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 py-1"
                />
              </div>
              <div className="w-20 flex flex-col ">
                <label>TESTADA 01:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 py-1"
                />
              </div>
              <div className="w-20 flex flex-col">
                <label>TESTADA 01:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 py-1"
                />
              </div>
            </div>

            <p className="font-medium text-lg -my-1">Edificação</p>
            <div className="w-full flex justify-between text-xs border-b-2 border-gray-800 pb-1">
              <div className="flex flex-col w-20">
                <label>NÚMERO:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 p-1"
                />
              </div>
              <div className="flex flex-col w-24">
                <label>COMPLEMENTO:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 p-1"
                />
              </div>
              <div className="flex flex-col w-24">
                <label>COMPLEMENTO:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 p-1"
                />
              </div>
              <div className="flex flex-col w-28">
                <label>TIPO CONSTRUÇÃO:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 p-1"
                />
              </div>
              <div className="flex flex-col w-28">
                <label>CATEGORIA USO:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 p-1"
                />
              </div>
              <div className="flex flex-col w-28">
                <label>VALOR VENAL (R$):</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 p-1"
                />
              </div>
            </div>

            <p className="font-medium text-lg -my-1">Características da Área</p>
            <div
              style={{ fontSize: "10px" }}
              className="w-full flex justify-between"
            >
              <div className="flex flex-col w-24">
                <label>ÁREA CONSTRUÍDA:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 p-1"
                />
              </div>
              <div className="flex flex-col w-24">
                <label>ÁREA CONSTRUÍDA:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 p-1"
                />
              </div>
              <div className="flex flex-col w-24">
                <label>ÁREA CONSTRUÍDA:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 p-1"
                />
              </div>
              <div className="flex flex-col w-24">
                <label>ÁREA CONSTRUÍDA:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 p-1"
                />
              </div>
              <div className="flex flex-col w-24">
                <label>ÁREA CONSTRUÍDA:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 p-1"
                />
              </div>
              <div className="flex flex-col w-24">
                <label>ÁREA CONSTRUÍDA:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  // onChange={""}
                  className="pl-2 rounded border border-gray-400 p-1"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-3">
              <div className="">
                <StyledButton color="#305ec0">Atualizar</StyledButton>
                <StyledButton color="#305ec0">Novo Cadastro</StyledButton>
                <StyledButton color="#008000ac">Histórico</StyledButton>
                <StyledButton color="#008000ac">Ficha Imobiliária</StyledButton>
                <StyledButton color="#008000ac">Anexos</StyledButton>
              </div>
              <div className="flex">
                <div className="bg-black w-6 h-6 mr-2 cursor-pointer">
                  <DownloadForOfflineIcon style={{ color: "white" }} />
                </div>
                <div className="bg-black w-6 h-6 cursor-pointer">
                  <PrintIcon style={{ color: "white" }} />
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
