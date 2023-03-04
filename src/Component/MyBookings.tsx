function MyBookings() {
  return (
    <section className="h-screen w-full p-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="w-full font-roboto text-xl font-semibold p-2 mt-3 mb-3 text-start ">
          Reservas
        </h1>
        <div className="lg:flex lg:flex-wrap">
          {/* Aca va el .map */}
          <div className=" p-2 lg:w-full md:w-1/2">
            <div className="justify-between w-full flex items-center border-gray-200 border p-6 rounded-lg">
              <div className=" grid grid-cols-1 lg:gap-32 lg:grid-cols-4">
                <div>
                  <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                    Nombre y Apellido
                  </h2>
                  <p className="text-sm font-roboto font-semibold leading-4">
                    Contenido
                  </p>
                </div>
                <div>
                  <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                    Reserva
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
                    N° de la reserva
                  </h2>
                  <p className="text-sm font-roboto font-semibold leading-4">
                    Contenido
                  </p>
                </div>
              </div>
              <div>
                <button
                  className="bg-violetSecondary hover:bg-violetSecondaryHover text-violet font-semibold font-roboto py-2 px-4 rounded px-4 py-2.5 text-center inline-flex items-center"
                  type="button"
                  data-dropdown-toggle="dropdown"
                >
                  Editar
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <div
                  className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
                  id="dropdown"
                >
                  <ul className="py-1" aria-labelledby="dropdown">
                    <li>
                      <a
                        href="#"
                        className="text-sm font-roboto hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Editar
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm font-roboto hover:bg-red-400 text-gray-700 block px-4 py-2"
                      >
                        Cancelar
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Este se elimina, es solo de prueba */}
          <div className=" p-2 lg:w-full md:w-1/2">
            <div className="justify-between w-full flex items-center border-gray-200 border p-6 rounded-lg">
              <div className=" grid grid-cols-1 lg:gap-32 lg:grid-cols-4">
                <div>
                  <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                    Nombre y Apellido
                  </h2>
                  <p className="text-sm font-roboto font-semibold leading-4">
                    Contenido
                  </p>
                </div>
                <div>
                  <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                    Reserva
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
                    N° de la reserva
                  </h2>
                  <p className="text-sm font-roboto font-semibold leading-4">
                    Contenido
                  </p>
                </div>
              </div>
              <div>
                <button
                  className="bg-violetSecondary hover:bg-violetSecondaryHover text-violet font-semibold font-roboto py-2 px-4 rounded px-4 py-2.5 text-center inline-flex items-center"
                  type="button"
                  data-dropdown-toggle="dropdown"
                >
                  Editar
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <div
                  className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
                  id="dropdown"
                >
                  <ul className="py-1" aria-labelledby="dropdown">
                    <li>
                      <a
                        href="#"
                        className="text-sm font-roboto hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Editar
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm font-roboto hover:bg-red-400 text-gray-700 block px-4 py-2"
                      >
                        Cancelar
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyBookings;
