import { useInput } from "../Hooks/useInput";
interface FormData {
  email: string;
  password: string;
}

function Login() {
  const { formulario, handleChange } = useInput<FormData>({
    email: "",
    password: "",
  });

  const { email, password } = formulario;

  return (
    <section>
      <div className="shadow-rl flex flex-col justify-center items-center w-full max-w-2xl p-8 mx-auto my-10 rounded-lg text-lg">
        <h1 className="font-roboto text-2xl font-bold mt-5 mb-5 text-center ">
          Iniciar sesión
        </h1>
        <form action="#" method="POST" className="space-y-6 w-full">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-black font-roboto"
            >
              Usuario
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                type="email"
                required
                className=" border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600 "
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm text-black font-roboto"
            >
              Contraseña
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                type="password"
                required
                className=" border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600 "
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-sm ">
              <a
                href="#"
                className="font-roboto text-center text-sm text-purple-600 hover:text-purple-500"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex items-center justify-center w-full px-10 py-4 text-base font-roboto text-center text-white transition duration-500 ease-in-out transform bg-purple-600 rounded-xl hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 mb-5 "
            >
              Ingresar
            </button>
            <hr className="border-1 border-gray-300 " />
          </div>
        </form>
        <div className="w-full">
          <a href="/register">
            <button
              type="submit"
              className="flex items-center justify-center w-full px-10 py-4 text-base font-roboto text-center text-purple-600 transition duration-500 ease-in-out transform bg-purple-200 rounded-xl hover:bg-purple-300  mt-5 "
            >
              ¿No tenés cuenta? Registrate
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Login;
