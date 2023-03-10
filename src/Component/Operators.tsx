function Operators() {
  return (
    <section className="h-screen w-full p-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="w-full font-roboto text-xl font-semibold p-2 mt-3 mb-3 text-start ">
          Operadores
        </h1>
        <div className="lg:flex lg:flex-wrap">
          {/* Aca va el .map */}
          <div className=" p-2 lg:w-full md:w-1/2">
            <div className="justify-between w-full flex items-center border-gray-200 border p-6 rounded-lg">
              <div className=" grid grid-cols-1 lg:gap-44 lg:grid-cols-4">
                <div>
                  <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                    Nombre
                  </h2>
                  <p className="text-sm font-roboto font-semibold leading-4">
                    Contenido
                  </p>
                </div>
                <div>
                  <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                    Mail
                  </h2>
                  <p className="text-sm font-roboto font-semibold leading-4">
                    Contenido
                  </p>
                </div>
                <div>
                  <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                    Sucursal
                  </h2>
                  <p className="text-sm font-roboto font-semibold leading-4">
                    Contenido
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
          {/* Este se elimina, es solo de prueba */}
          <div className=" p-2 lg:w-full md:w-1/2">
            <div className="justify-between w-full flex items-center border-gray-200 border p-6 rounded-lg">
              <div className=" grid grid-cols-1 lg:gap-44 lg:grid-cols-4">
                <div>
                  <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                    Nombre
                  </h2>
                  <p className="text-sm font-roboto font-semibold leading-4">
                    Contenido
                  </p>
                </div>
                <div>
                  <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                    Mail
                  </h2>
                  <p className="text-sm font-roboto font-semibold leading-4">
                    Contenido
                  </p>
                </div>
                <div>
                  <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                    Sucursal
                  </h2>
                  <p className="text-sm font-roboto font-semibold leading-4">
                    Contenido
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
        </div>
      </div>
    </section>
  );
}

export default Operators;
