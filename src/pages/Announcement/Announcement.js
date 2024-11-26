import React from "react";
import { FaFilePdf } from "react-icons/fa";

const files = [
  {
    id: 1,
    name: "SBI MF",
    link: "https://www.sbimf.com/notice-and-addendums",
  },
  {
    id: 2,
    name: "HDFC FUNDS",
    link: "https://www.hdfcfund.com/investor-services/form-disclosures/addenda-notices",
  },
  {
    id: 3,
    name: "360 ONE",
    link: "https://www.360.one/asset-management/mutualfund/downloads/disclosures/",
  },
  {
    id: 4,
    name: "ADITYA BIRLA MUTUAL FUND",
    link: "https://mutualfund.adityabirlacapital.com/forms-and-downloads/addendums",
  },
  {
    id: 5,
    name: "AXIS MF",
    link: "https://www.axismf.com/statutory-disclosures",
  },
  {
    id: 6,
    name: "BAJAJ AMC",
    link: "https://www.bajajamc.com/downloads?notice-addendums",
  },
  {
    id: 7,
    name: "BANDHAN MUTUAL",
    link: "https://bandhanmutual.com/downloads/addendums",
  },
  {
    id: 8,
    name: "CANARA ROBECO",
    link: "https://www.canararobeco.com/forms-downloads/notice-addendum/notice-cum-addendum",
  },
  {
    id: 9,
    name: "DSPIM",
    link: "https://www.dspim.com/downloads?category=Notices%20and%20Addendum&sub_category=Addendum",
  },
  {
    id: 10,
    name: "EDELWEISS MF",
    link: "https://www.edelweissmf.com/downloads/notice-cum-addendum",
  },
  {
    id: 11,
    name: "FRANKLIN TEMPLATE ON INDIA",
    link: "https://www.franklintempletonindia.com/downloads/updates",
  },
  {
    id: 12,
    name: "GROWW MF",
    link: "https://www.growwmf.in/downloads/addendum",
  },
  {
    id: 13,
    name: "HELIOS MF",
    link: "https://www.heliosmf.in/downloads/",
  },
  {
    id: 14,
    name: "ICICI PRUAMC",
    link: "https://www.archive.icicipruamc.com/news-and-updates/all-news",
  },
  {
    id: 15,
    name: "IDBI MUTUAL",
    link: "https://www.idbimutual.co.in/Downloads/Addendum#",
  },
  {
    id: 16,
    name: "INVESCO MUTUAL FUND",
    link: "https://www.invescomutualfund.com/literature-and-form?tab=Addendums",
  },
  {
    id: 17,
    name: "ITI AMC",
    link: "https://www.itiamc.com/downloads",
  },
  {
    id: 18,
    name: "KOTAK MF",
    link: "https://www.kotakmf.com/Information/forms-and-downloads",
  },
  {
    id: 19,
    name: "KOTAK MF",
    link: "https://www.kotakmf.com/Information/forms-and-downloads",
  },
  {
    id: 20,
    name: "LIC MF",
    link: "https://www.licmf.com/addendum-notice",
  },
  {
    id: 21,
    name: "MAHINDRA MANU LIFE",
    link: "https://www.mahindramanulife.com/downloads#mandatory-disclosures",
  },
  {
    id: 22,
    name: "MIRAE ASSET MF",
    link: "https://www.miraeassetmf.co.in/downloads/statutory-disclosure/addendum",
  },
  {
    id: 23,
    name: "MOTILAL OSWAL MF",
    link: "https://www.motilaloswalmf.com/download/addendums",
  },
  {
    id: 24,
    name: "NIPPON INDIA MF",
    link: "https://mf.nipponindiaim.com/investor-service/downloads/notice-addendum",
  },
  {
    id: 25,
    name: "PGIM INDIA MF",
    link: "https://www.pgimindiamf.com/downloads/addenda-and-notices",
  },
  {
    id: 26,
    name: "PPFAS AMC",
    link: "https://amc.ppfas.com/downloads/addendum/",
  },
  {
    id: 27,
    name: "QUANT MUTUAL",
    link: "https://quantmutual.com/downloads/addendum",
  },
  {
    id: 28,
    name: "SHRIRAM AMC",
    link: "https://www.shriramamc.in/investor-downloads",
  },
  {
    id: 29,
    name: "TATA MUTUAL FUND",
    link: "https://www.tatamutualfund.com/notice-addendum",
  },
  {
    id: 30,
    name: "UNION MF",
    link: "https://unionmf.com/about-us/downloads",
  },
  {
    id: 31,
    name: "UTI MF",
    link: "https://www.utimf.com/statutory-disclosures/additional-disclosures",
  },
  {
    id: 32,
    name: "WHITE OAK AMC",
    link: "https://mf.whiteoakamc.com/regulatory-disclosures",
  },
  {
    id: 33,
    name: "HSBC MUTUAL FUNDS",
    link: "https://www.assetmanagement.hsbc.co.in/en/mutual-funds/investor-resources?Date=&Cap=&Doc=notice-ads,kim,sid#&module-17=1",
  },
  {
    id: 34,
    name: "QUANTUM AMC",
    link: "https://www.quantumamc.com/download-document",
  },
  {
    id: 35,
    name: "SUNDRAM MUTUAL",
    link: "https://www.sundarammutual.com/Downloads",
  },
];

const Announcement = () => {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen mb-12">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Notice & Addendum
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.map(({ id, name, link }) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              <FaFilePdf className="text-red-500 text-6xl mb-4" />
              <h2 className="text-lg font-semibold mb-2">{name}</h2>
              <a
                href={link}
                target="_blank"
                download={name}
                className="mt-auto bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition" rel="noreferrer"
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

export default Announcement;
