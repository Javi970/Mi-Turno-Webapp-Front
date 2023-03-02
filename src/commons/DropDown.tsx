import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBookingData } from "../store/bookingData";

interface DropDownProps {
  options: string[];
}

type ClickEvent = React.MouseEvent<HTMLSelectElement>;

const Dropdown = (props: DropDownProps) => {
  const [array, setArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/branches/branches")
      .then((res) => res.data)
      .then((branch) => setArray(branch))

      .catch((error) => {
        console.log("este es el error!!", error);
      });
  }, []);

  const handleSelect = (e: ClickEvent) => {
    const target = e.target as HTMLSelectElement;

    console.log(target.value);
    // dispatch(setBookingData({field:"branch",data:target.value}))
  };

  return (
    <div className="relative w-full">
      <select
        className="w-full p-2.5 text-gray-500 bg-white border rounded-lg shadow-sm focus:border-indigo-600"
        placeholder="Elegir sucursal"
        onClick={handleSelect}
      >
        {array.length === 0
          ? null
          : array?.map((option: any, i) => (
              <option key={i} value={option.name}>
                {option.name}
              </option>
            ))}
      </select>
    </div>
  );
};

export default Dropdown;
