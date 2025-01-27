import React, { useState } from "react";

const disclaimer = [
  { id: "collection of information", name: "Collection of Information" },
  {
    id: "personal & financial information",
    name: "Personal & Financial Information",
  },
  {
    id: "amendments",
    name: "Amendments",
  },
  { id: "non-binding", name: "Non-Binding" },
];

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(
    "collection of information"
  );
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Privacy Policy
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {disclaimer.map((item) => (
            <button
              key={item.id}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-white text-primary-600 hover:bg-primary-100"
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <section className="bg-white p-8 rounded-2xl shadow-soft">
          {activeSection === "collection of information" && (
            <div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300">
                <p className="text-lg text-primary-700">
                  In the course of using this website/mobile application or
                  availing the products and services, PWPL may become privy to
                  the personal information of the Users of the website/mobile
                  application, including information that is of a confidential &
                  sensitive nature. We may collect information about you from
                  several sources. You may provide information as part of the
                  application or enrollment process or our landing pages during
                  online campaigns. We also develop and retain information about
                  you based on our transactions and experience with you.
                  Finally, we obtain information about you through Internet
                  technology, including our website/mobile application. For the
                  purposes of this document, the term Users means any person
                  accessing or using the website www.prameshwealth.com or mobile
                  application or any of its products or services or features.
                  PWMPL is strongly committed to protecting the privacy of the
                  Users and has taken all necessary and reasonable measures to
                  protect the confidentiality of the User information and its
                  transmission through the world wide web and it shall not be
                  held liable for disclosure of the confidential information
                  when in accordance with this Privacy Commitment or in terms of
                  the agreements, if any, with the Users. Therefore, you should
                  be careful with usage of the username and password by
                  maintaining confidentiality and ensure that you do not
                  knowingly or accidentally share, provide and facilitate
                  unauthorized use of it.
                </p>
              </div>
            </div>
          )}
          {activeSection === "personal & financial information" && (
            <div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300">
                <p className="text-lg text-primary-700">
                  We will protect your personal information against unauthorized
                  use, dissemination or publication in the same manner in which
                  we would protect our confidential information of like nature.
                  However under certain conditions we may share this
                  information. We may use the personal information to improve
                  our services to you and to keep you updated about our new
                  products or other information that may be of interest to you.
                  We may share information in the course of normal business
                  operations, such as providing services you have subscribed
                  for, and any activity related to these services such as
                  collection of fee. It may become necessary for PWMPL to
                  disclose your personal information to its agents and
                  contractors in the course of normal business operations for
                  the above referred purpose. However these parties would be
                  required to use the information obtained from PWMPL for such
                  purposes exclusively. PWMPL will endeavour to take all
                  reasonable steps to ensure that the confidentiality of your
                  information is maintained by imposing strict confidentiality
                  standards on all the third parties to whom it discloses such
                  information. The User authorises PWMPL to exchange, share,
                  part with all information related to the details and
                  transaction history of the Users to its Affiliates /
                  Subsidiaries / banks / financial institutions / credit bureaus
                  / agencies/participation in any telecommunication or
                  electronic clearing network as may be required by law,
                  customary practice, credit reporting, statistical analysis and
                  credit scoring, verification or risk management and shall not
                  hold PWMPL liable for use or disclosure of this information.
                </p>
              </div>
            </div>
          )}
          {activeSection === "amendments" && (
            <div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300">
                <p className="text-lg text-primary-700">
                  Due to changes in legislation or enhancements to functionality
                  and content on the website/mobile application, we may make
                  changes to privacy policy (without being obliged to do so) and
                  would reflect those changes in this privacy policy statement.
                  Hence you are requested to go through the privacy policy
                  statement on a regular basis.
                </p>
              </div>
            </div>
          )}
          {activeSection === "non-binding" && (
            <div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300">
                <p className="text-lg text-primary-700">
                  Please note that this privacy policy does not create any
                  contractual or other legal rights in or on behalf of any
                  party, nor is it intended to do so. At PWMPL, We only do
                  what's right for you and will at all-time strive to ensure
                  your privacy.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
