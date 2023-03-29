import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Operators() {
  const [operators, setOperators] = useState<any>([]);
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    getOperators();
  }, [user]);

  const getOperators = async () => {
    try {
      const { data } = await axios.post<any, any>(
        `http://localhost:3001/api/users/findAllOperators`,
        { token: window.localStorage.getItem("token") }
      );

      setOperators(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-screen w-full p-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <h1 className="font-roboto text-xl font-semibold p-2 mt-3 mb-3 text-start ">
            Operadores
          </h1>
          <Link to={"/newOperator"}>
            <button className="text-center bg-violetSecondary hover:bg-violetSecondaryHover text-violet font-semibold font-roboto py-2 px-4 rounded mr-2">
              Nuevo Operador
            </button>
          </Link>
        </div>
        <div className="lg:flex lg:flex-wrap">
          {operators.length === 0
            ? null
            : operators.map((operator: any, i: any) => (
                <div className=" p-2 lg:w-full md:w-1/2">
                  <div className="justify-between w-full flex items-center border-gray-200 border p-6 rounded-lg">
                    <div className=" grid grid-cols-1 lg:gap-44 lg:grid-cols-4">
                      <div>
                        <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                          Nombre
                        </h2>
                        <p className="text-sm font-roboto font-semibold leading-4">
                          {operator.fullName}
                        </p>
                      </div>
                      <div>
                        <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                          Mail
                        </h2>
                        <p className="text-sm font-roboto font-semibold leading-4">
                          {operator.email}
                        </p>
                      </div>
                      <div>
                        <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                          Sucursal
                        </h2>
                        <p className="text-sm font-roboto font-semibold leading-4">
                          {operator.branch}
                        </p>
                      </div>
                      <div>
                        <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                          Contraseña
                        </h2>
                        <p className="text-sm font-roboto font-semibold leading-4">
                          **********
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        className="bg-violetSecondary hover:bg-violetSecondaryHover text-violet font-semibold font-roboto rounded px-6 py-3 text-center inline-flex items-center"
                        type="button"
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default Operators;
