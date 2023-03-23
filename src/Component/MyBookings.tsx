import { PDFDownloadLink } from "@react-pdf/renderer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DocumentPDF from "../commons/PdfDocument/DocumentPDF";
import QRGenerator from "../commons/PdfDocument/QrGenerator";
import download from "../assets/icons/download.svg";
import bin from "../assets/icons/delete.svg";

function MyBookings() {
  const [booking, setBooking] = useState<any>([]);

  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    getBooking();
  }, [user]);

  const getBooking = async () => {
    const { data } = await axios.get<any, any>(
      `http://localhost:3001/api/booking/getBookingOfUser/${user.id}`
    );
    console.log(data);
    setBooking(data);
  };

  return (
    <>
      <div className="absolute hidden">
        {booking.length === 0
          ? null
          : booking.map((shift: any) => (
              <QRGenerator value={shift._id} documentId={`qr_${shift._id}`} />
            ))}
      </div>
      <section className="h-screen w-full p-5">
        <div className="max-w-6xl mx-auto">
          <h1 className="w-full font-roboto text-xl font-semibold p-2 mt-3 mb-3 text-start ">
            Reservas
          </h1>
          <div className="lg:flex lg:flex-wrap">
            {booking.length === 0
              ? null
              : booking.map((turno: any, key: string) => (
                  <div key={key} className=" p-2 lg:w-full md:w-1/2">
                    <div className="justify-between w-full flex items-center border-gray-200 border p-6 rounded-lg">
                      <div className=" grid grid-cols-1 lg:gap-32 lg:grid-cols-4">
                        <div>
                          <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                            Nombre y Apellido
                          </h2>
                          <p className="text-sm font-roboto font-semibold leading-4">
                            {turno.fullName}
                          </p>
                        </div>
                        <div>
                          <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                            Reserva
                          </h2>
                          <p className="text-sm font-roboto font-semibold leading-4">
                            {turno.time}
                          </p>
                        </div>
                        <div>
                          <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                            Sucursal
                          </h2>
                          <p className="text-sm font-roboto font-semibold leading-4">
                            {turno.branch ? turno.branch.name : ""}
                          </p>
                        </div>
                        <div>
                          <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                            N° de la reserva
                          </h2>
                          <p className="text-sm font-roboto font-semibold leading-4">
                            {turno._id.slice(0, 6)}...
                          </p>
                        </div>
                      </div>
                      <div>
                        <PDFDownloadLink
                          fileName={`${turno.fullName}_turno.pdf`}
                          document={
                            <DocumentPDF id={`qr_${turno._id}`} data={turno} />
                          }
                        >
                          <button
                            className="bg-violetSecondary hover:bg-violetSecondaryHover text-violet font-semibold font-roboto rounded p-3 pl-4 text-center inline-flex items-center"
                            type="button"
                            data-dropdown-toggle="dropdown"
                          >
                            PDF
                            <i className="fi fi-rr-download ml-[1rem]"></i>
                          </button>
                        </PDFDownloadLink>
                      </div>
                      <div>
                        <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                          Reserva
                        </h2>
                        <p className="text-sm font-roboto font-semibold leading-4">
                          {turno.time}
                        </p>
                      </div>
                      <div>
                        <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                          Sucursal
                        </h2>
                        <p className="text-sm font-roboto font-semibold leading-4">
                          {turno.branch.name}
                        </p>
                      </div>
                      <div>
                        <h2 className="text-grey8 font-roboto font-normal text-xs leading-4">
                          N° de la reserva
                        </h2>
                        <p className="text-sm font-roboto font-semibold leading-4">
                          {turno._id.slice(0, 12)}...
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <button className="bg-violetSecondary hover:bg-violetSecondaryHover text-violet font-semibold font-roboto rounded px-3 py-1.5 text-center inline-flex items-center">
                        Editar
                      </button>
                      <button className="bg-violetSecondary hover:bg-violetSecondaryHover text-violet font-semibold font-roboto rounded px-3 py-1.5 text-center inline-flex items-center">
                        <img src={download} alt="" />
                      </button>
                      <button className="bg-red-300 hover:bg-red-400 text-violet font-semibold font-roboto rounded px-3 py-1.5 text-center inline-flex items-center">
                        <img src={bin} alt="" />
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MyBookings;
