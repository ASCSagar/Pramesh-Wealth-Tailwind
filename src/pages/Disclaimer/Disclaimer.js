import React, { useState } from "react";
import { TrendingUp, Shield, LoaderPinwheel, MonitorCog } from "lucide-react";

const disclaimer = [
  { id: "mutual funds", name: "Mutual Funds", icon: TrendingUp },
  { id: "insurance", name: "Insurance", icon: Shield },
  {
    id: "pramesh wealth private limited",
    name: "Pramesh Wealth Private Limited",
    icon: MonitorCog,
  },
  { id: "website", name: "Website", icon: LoaderPinwheel },
];

const Disclaimer = () => {
  const [activeSection, setActiveSection] = useState("mutual funds");
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Disclaimer
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
              <item.icon className="w-5 h-5 mr-2" />
              {item.name}
            </button>
          ))}
        </div>
        <section className="bg-white p-8 rounded-2xl shadow-soft">
          {activeSection === "mutual funds" && (
            <div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="text-lg text-primary-700">
                  Pramesh Wealth Private Limited is registered with Association
                  of Mutual Funds In India (AMFI) under the ARN No.
                  <strong> 100481</strong> and valid till 
                  <strong>
                    19.02.2027, having its registered office and Centralize
                    Point for processing and doing all Mutual Funds Distribution
                    (MFD) related functions at “Pramesh House”, B/8, Vedant
                    Bunglow, Main Kalali Road, Kalali, Vadodara – 390 012,
                    Gujarat State, India,
                  </strong>
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="text-lg text-primary-700">
                  All disputes with respect to the distribution activity would
                  not have access to Exchange Investor Redressal Forum or
                  Arbitration mechanism. In accordance with the applicable laws,
                  PWPL is permitted to render incidental advice with respect to
                  mutual fund products only to its mutual fund distribution
                  clients. For every other purpose, including distribution of
                  non-mutual fund products the circulated material is for
                  informational purposes only. Further, it is not intended as
                  investment advice or an opinion concerning securities or a
                  public offer proving a basis for an investment decision. The
                  views or expressions contained in the circulated material are
                  not necessarily of PWPL neither assumes any
                  responsibility/liability nor does guarantee its accuracy,
                  suitability, completeness, and adequacy. The figures and data
                  that may be appearing in the material are taken from various
                  sources deemed reliable by PWPL. The content of the material
                  including images, charts, graphics, and pictures are protected
                  intellectual properties and cannot be amended, copied,
                  reproduced, replicated, republished, uploaded, posted,
                  published, transmitted, displayed, or distributed for any
                  non-personal use without obtaining prior written permission,
                  any non-adherence of which may attract appropriate legal
                  action.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="font-semibold text-lg text-primary-700">
                  Mutual Fund investments are subject to market risk, read all
                  scheme related documents carefully. The past performance of
                  the scheme is not indicative of future performance.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300">
                <p className="text-lg text-primary-700">
                  Investors are advised to seek appropriate advice from experts
                  before taking any investment decisions. Nothing in the
                  circulated material is intended to construct an advertisement
                  or an investment, financial advice and/or solicitation, advice
                  to buy, sell or deal in any financial product.
                </p>
              </div>
            </div>
          )}
          {activeSection === "insurance" && (
            <div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="text-lg text-primary-700">
                  Pramesh Wealth Private Limited is registered with Insurance
                  Regulatory and Development Authority of India as Corporate
                  Agency (Registration No. CA0787 and valid till 26-Dec-2024),
                  having its registered and corporate office at{" "}
                  <strong>
                    “Pramesh House”, B/8, Vedant Bunglow, Main Kalali Road,
                    Kalali, Vadodara – 390 012, Gujarat State, India.
                  </strong>
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="text-lg text-primary-700">
                  Purchase of any insurance product by PWPL customer(s) is
                  purely voluntary and is not linked to availing of any other
                  facility/services/products.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="text-lg text-primary-700">
                  The insurance products available at{" "}
                  <a href="www.prameshwealth.com" target="_blank">
                    www.prameshwealth.com
                  </a>{" "}
                  or on the mobile application are offered and underwritten by
                  the respective insurers. PWPL as a Corporate Agency act as
                  solicitor and procurement of suitable Insurance Policy to
                  potential clients as a representative of the Insurer Company.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="text-lg text-primary-700">
                  PWPL is only assisting in collecting the premium on behalf of
                  the insurer chosen by clients to avail the insurance product.
                  The acceptance of the deposit as premium and final issuance of
                  the insurance policy is subject to the underwriting norms and
                  discretion of the insurer on which PWPL has no control.
                  Further, any product information displayed on the PWPL
                  Platform is solely based on the information received from the
                  concerned insurer.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="text-lg text-primary-700">
                  The insurer underwriting the insurance product purchased/
                  serviced through the PWPL Platform is solely responsible for
                  settling any claim thereunder or taking any decisions on claim
                  settlements. By its operation of the PWPL Platform or
                  otherwise, PWPL is only acting in the capacity of an Insurance
                  Corporate Agent and does not, in any circumstances, underwrite
                  any insurance business or partake in the conduct of insurance
                  business.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="text-lg text-primary-700">
                  For more details on risk factors, terms, and conditions,
                  please read the sales brochure/customer information sheet/
                  policy wordings of a particular plan carefully before
                  concluding a sale.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="font-semibold text-lg text-primary-700">
                  Insurance is a subject matter of solicitation, and the Policy
                  is issued, based on a contract between the insured and
                  insurer.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="text-lg text-primary-700">
                  Before client enter a contract of general insurance, client
                  have a duty under the law to disclose every matter that client
                  know or could reasonably be expected to know, that is relevant
                  to the insurer’s decision whether to accept the risk of
                  insurance and if so, on what terms. Client have the same duty
                  to disclose those matters before know renew, extend, vary, or
                  reinstate a contract of insurance.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300">
                <p className="text-lg text-primary-700">
                  If client fail to comply with their duty of disclosure, the
                  insurer may be entitled to repudiate or reduce its liability
                  under the contract in respect of a claim or may cancel the
                  contract. If client non-disclosure was fraudulent, the insurer
                  may also have the option of voiding the contract from the
                  beginning (i.e., treating it as if it never existed).
                  Information regarding the full extent of client duty of
                  disclosure is contained in client policy wording and should be
                  read carefully at any point in client insurance transaction
                  including when client policy is renewed, extended, varied or
                  reinstated.
                </p>
              </div>
            </div>
          )}
          {activeSection === "pramesh wealth private limited" && (
            <div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="text-lg text-primary-700">
                  PWPL makes no representation/s or warranty express or implied,
                  as to the accuracy, completeness or reliability of any
                  information compiled herein and hereby disclaims any liability
                  regarding the same, including, without limitation, any direct,
                  indirect, incidental, or consequential loss. Client shall
                  verify the veracity of the information on client own before
                  using the information provided in the document. Client are
                  requested to review the benefit illustration and policy
                  documents carefully and obtain expert professional advice.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300">
                <p className="text-lg text-primary-700">
                  PWPL does not make any representations that coverage does or
                  does not exist for any claim or loss, or type of claim or
                  loss, under any policy. Whether coverage exists or does not
                  exist for any claim or loss under any policy depends on the
                  facts and circumstances involved in the claim or loss and all
                  applicable policy wording. For more details on risk factors,
                  terms, and conditions, please read sales brochure carefully
                  before concluding a sale”.
                </p>
              </div>
            </div>
          )}
          {activeSection === "website" && (
            <div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="text-lg text-primary-700">
                  By accessing website and/or App or any of its associate/group
                  sites (“Website”), client have read, understood, and agree to
                  be legally bound by the terms of the following disclaimer and
                  user agreement. PWPL has taken due care and caution in
                  compilation of the data and the contents for all its web
                  sites. However, PWPL does not guarantee the adequacy or
                  completeness of any information and is not responsible for any
                  errors or omissions or for the results obtained from the use
                  of such information. PWPL specifically states that it cannot
                  be held liable for any damages (monetary, legal, or otherwise)
                  caused by any error, omission, interruption, deletion, defect,
                  failure, and that it has no financial liability whatsoever to
                  any user on account of the use of the information provided on
                  its website.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="text-lg text-primary-700">
                  PWPL advises its users to verify the veracity /
                  appropriateness of the information before taking any
                  decisions. The information on this website is updated from
                  time to time. PWPL, however, excludes any warranties (whether
                  expressed or implied), as to the quality, accuracy, efficacy,
                  completeness, performance, fitness, or any of the contents of
                  the website, including (but not limited) to any comments,
                  feedback and advertisements contained within the Site. PWPL is
                  not responsible for any errors, omissions, or representations
                  on any of our pages or on any links on any of our pages. PWPL
                  does not endorse in anyway any advertisers on our webpages.
                  Please verify the veracity of all information on client own
                  before undertaking any alliance or decision. This Website
                  contains articles contributed by individuals. The views are
                  exclusively their own and do not necessarily represent the
                  views of the Website owners or its management. The linked
                  sites are not under our control, and we are not responsible
                  for the contents of any linked site, or any link contained in
                  a linked site, or any changes or updates to such sites. PWPL
                  is providing these links to client only as a convenience, and
                  the inclusion of any link does not imply endorsement by us of
                  the site.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
                <p className="text-lg text-primary-700">
                  PWPL hereby expressly disclaims any implied warranties imputed
                  by the laws of any jurisdiction. We consider ourselves and
                  intend to be subject to the jurisdiction only of the court. If
                  client don’t agree with any of our disclaimers above, please
                  do not read the material on any of our pages and exit the
                  Website immediately. This site is specifically for users in
                  the territory of India. Although the access to users outside
                  India is not denied, PWPL shall have no legal liabilities
                  whatsoever in any laws of any jurisdiction other than India.
                  We reserve the right to make changes to our website and these
                  disclaimers, terms, and conditions at any time. No materials
                  in this Website or any of its associate/group sites should be
                  taken as investment advice directly, indirectly, implicitly,
                  or in any manner whatsoever, including but not limited to
                  trading of mutual funds or trading of any financial
                  instruments whatsoever. The information provided are NOT in
                  nature of any recommendation or solicitation to buy or sell
                  any securities. Client’s use of all the information contained
                  on this Website or any of its associate / group sites is
                  governed by this Terms and Conditions of Use.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300">
                <p className="text-lg text-primary-700">
                  Past Performance Is Not Indicative of Future Returns. Mutual
                  Fund investments are subject to market risks. Investors are
                  requested to read the Offer Document carefully before
                  investing.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
