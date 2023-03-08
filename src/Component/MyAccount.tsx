import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/updateUser";
import { UserState } from "../store/updateUser";

type buttonEvent = React.MouseEvent<HTMLButtonElement>

const MyAccount = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");  

  const [isDisabled, setIsDisabled] = useState(true);
 
  useEffect(() => {
    setfullName(user.fullName);
    setEmail(user.email);
    setDni(user.dni);
    setPhone(user.phone);
    
  }, [user])
  
  console.log({fullName, email, dni, phone});

  const handleEdit = (e: buttonEvent) => {
    e.preventDefault();

    setIsDisabled(!isDisabled);
  };
  console.log(isDisabled);
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!isDisabled) {
        const { data } = await axios.put(
          `http://localhost:3001/api/users/updateUser`,
          {
            _id: user.id,
            fullName: fullName,
            email: email,
            dni: dni,
            phone: phone,
          }
        );
        const options = 
          { id: data.id,
           fullName: data.fullName,
           email: data.email,
           dni: data.dni,
           phone: data.phone };
        dispatch(updateUser(options));
      }
      setIsDisabled(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="shadow-rl flex flex-col justify-center items-center w-full max-w-4xl p-8 mx-auto my-10 rounded-lg text-lg bg-white">
        <h1 className="w-full font-roboto text-xl font-semibold mt-5 mb-5 text-start ">
          Mi cuenta
        </h1>
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-black font-roboto"
            >
              Nombre
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={fullName}
                onChange={(e) => setfullName(e.target.value)}
                required
                className=" border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600 "
                disabled={isDisabled}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm text-black font-roboto"
            >
              Correo electrónico
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className=" border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600 "
                disabled={isDisabled}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            <div>
              <label
                htmlFor="dni"
                className="block text-sm text-black font-roboto"
              >
                DNI
              </label>
              <div className="mt-1">
                <input
                  id="dni"
                  name="dni"
                  type="number"
                  defaultValue={dni}
                  onChange={(e) => setDni(e.target.value)}
                  required
                  className="border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600"
                  disabled={isDisabled}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm text-black font-roboto"
              >
                Teléfono
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  defaultValue={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600"
                  disabled={isDisabled}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={
                handleEdit
              }
              className="text-purple-600"
            >
              Editar datos
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="flex items-center justify-center w-full px-10 py-4 text-base font-roboto text-center text-white transition duration-500 ease-in-out transform bg-purple-600 rounded-xl hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 mb-5 "
              disabled={isDisabled}
            >
              Aceptar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MyAccount;
