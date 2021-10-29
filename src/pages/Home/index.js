import React, { useState } from "react";
import { Form } from "../../components";

function Home() {
  const [formOpened, setFormOpened] = useState(false);

  return (
    <>
      <div
        style={{ height: "768px" }}
        className="container mx-auto bg-blue-400"
      >
        <nav
          style={{ height: "55px" }}
          className="bg-gray-400 w-full flex items-center"
        >
          <ul className="pl-1">
            <li>
              <button
                onClick={() => {
                  setFormOpened(!formOpened);
                }}
                className="border rounded bg-white px-2"
              >
                Formulario
              </button>
            </li>
          </ul>
        </nav>

        {formOpened && <Form func={setFormOpened} closeForm={formOpened} />}
      </div>
    </>
  );
}

export default Home;
