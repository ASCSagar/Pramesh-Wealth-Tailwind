import React from "react";
import validateOne from "../../assets/images/first.jpg";
import validateTwo from "../../assets/images/second.jpg";
import validateThree from "../../assets/images/third.jpg";
import validateFour from "../../assets/images/fourth.jpg";
import checkOne from "../../assets/images/checkOne.jpg";
import checkTwo from "../../assets/images/Checktwo.jpg";
import checkThree from "../../assets/images/checkthree.jpg";

const files = [
  {
    id: 1,
    name: "Check Your KYC Status",
    items: [
      {
        image: checkOne,
        link: "https://www.cvlkra.com/",
        linkText: "Check",
      },
      {
        image: checkTwo,
        link: "https://kra.ndml.in/kra-web/jsps/pos/KYCClientInquiry_NEW.jsp",
        linkText: "Check",
      },
      {
        image: checkThree,
        link: "https://www.camsonline.com/Investors/Transactions/KYC/KYC-Status",
        linkText: "Check",
      },
    ],
    downloadLink: "https://www.sbimf.com/notice-and-addendums",
  },
  {
    id: 2,
    name: "Validate Your KYC",
    items: [
      {
        image: validateOne,
        link: "https://validate.cvlindia.com/CVLKRAVerification_V1/",
        linkText: "Validate",
      },
      {
        image: validateTwo,
        link: "https://kra.ndml.in/ClientInitiatedKYC-webApp/#/ClientinitiatedKYC",
        linkText: "Validate",
      },
      {
        image: validateThree,
        link: "https://www.camskra.com/PanDetailsUpdate.aspx",
        linkText: "Validate",
      },
      {
        image: validateFour,
        link: "https://www.karvykra.com/KYC_Validation/Default.aspx",
        linkText: "Validate",
      },
    ],
    downloadLink:
      "https://www.hdfcfund.com/investor-services/form-disclosures/addenda-notices",
  },
];

const Kyc = () => {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen mb-12">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          KYC
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {files.map(({ id, name, items }) => (
            <div key={id} className="bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-8 text-center text-primary-600">
                {name}
              </h2>
              <div className="space-y-8">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center gap-6"
                  >
                    <div className="w-full md:w-2/3">
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={item.image}
                          alt={`${name} Option ${index + 1}`}
                          className="w-full h-auto rounded-md object-contain"
                          style={{ maxHeight: "100px", maxWidth: "100px" }}
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200 text-center font-medium shadow-sm hover:shadow-md"
                      >
                        {item.linkText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kyc;
