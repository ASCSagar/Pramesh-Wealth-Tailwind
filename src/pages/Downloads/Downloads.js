import React from "react";
import { FaFilePdf } from "react-icons/fa";
import file1 from "../../files/CAMS_FATCA_Non_Individual.pdf";
import file2 from "../../files/CAMS_FATCA-Individuals.pdf";
import file3 from "../../files/CAMS_UBO_Declaration_Non_Indvidual.pdf";
import file4 from "../../files/KFINTECH_FATCA_CRS_Declaration_form_Individual.pdf";
import file5 from "../../files/KFINTECH_FATCA_UBO_NON_INDIVIDUALS.pdf";
import file6 from "../../files/Pramesh Comman Transaction Form.pdf";

const files = [
  {
    id: 1,
    name: "CAMS FATCA Non Individual",
    file: file1,
  },
  {
    id: 2,
    name: "CAMS FATCA-Individuals",
    file: file2,
  },
  {
    id: 3,
    name: "CAMS UBO Declaration Non Indvidual",
    file: file3,
  },
  {
    id: 4,
    name: "KFINTECH FATCA CRS Declaration form Individual",
    file: file4,
  },
  {
    id: 5,
    name: "KFINTECH FATCA UBO NON INDIVIDUALS",
    file: file5,
  },
  {
    id: 6,
    name: "Pramesh Comman Transaction Form",
    file: file6,
  },
];

const Downloads = () => {
  return (
    <div className="bg-gradient-to-b from-primary-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Downloads
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.map(({ id, name, file }) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              <FaFilePdf className="text-red-500 text-6xl mb-4" />
              <h2 className="text-lg font-semibold mb-2">{name}</h2>
              <a
                href={file}
                download={name}
                className="mt-auto bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
