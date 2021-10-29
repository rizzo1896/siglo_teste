import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

function Form({ func, closeForm }) {
  return (
    <>
      <div
        style={{ height: "calc(100% - 56px)" }}
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
            <div className="flex justify-between w-full">
              <div className="mt-3">
                <div className="flex flex-row">
                  <label className="bg-gray-800 border text-white">
                    Inscrição:
                  </label>
                </div>
                <input id="" name="" type="text" onChange={""} />
              </div>
              <div className="">
                <p>
                  Última Atualização:{" "}
                  <span className="text-gray-800">01/05/1980 11:55:00</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row border-b-2 justify-between border-gray-800 pb-2 w-full">
              <div className="flex flex-col w-24">
                <label>LOGRADOURO:</label>
                <input id="" name="" type="text" onChange={""} />
              </div>
              <div className="flex flex-col w-10">
                <label>FACE:</label>
                <input id="" name="" type="text" onChange={""} />
              </div>
              <div className="flex flex-col w-16">
                <label>QUADRA:</label>
                <input id="" name="" type="text" onChange={""} />
              </div>
              <div className="flex flex-col w-10">
                <label>LOTE:</label>
                <input id="" name="" type="text" onChange={""} />
              </div>
              <div className="flex flex-col w-40">
                <label>BAIRRO:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  onChange={""}
                  className="text-center"
                />
              </div>
              <div className="flex flex-col w-40">
                <label>LOTEAMENTO:</label>
                <input
                  id=""
                  name=""
                  type="text"
                  onChange={""}
                  className="text-center"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
