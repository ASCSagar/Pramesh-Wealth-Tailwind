import React from "react";

const Disclosure = () => {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Disclosure
        </h1>

        <section className="bg-white p-8 rounded-2xl shadow-soft">
          <div>
            <h4 className="text-2xl md:text-3xl mb-8 text-center ">
              Commission Receivable
            </h4>
            <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
              <div class="overflow-x-auto">
                <table class="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="px-6 py-3 border-b border-gray-300 text-left text-gray-600 font-bold">
                        Sr
                      </th>
                      <th class="px-6 py-3 border-b border-gray-300 text-left text-gray-600 font-bold">
                        Scheme Type
                      </th>
                      <th class="px-6 py-3 border-b border-gray-300 text-left text-gray-600 font-bold">
                        Trail Brokerage (1st year onwards)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        1
                      </td>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        Liquid/ Overnight scheme
                      </td>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        0.05% - 0.10%
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        2
                      </td>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        Debt category of Scheme
                      </td>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        0.20% - 0.80%
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        3
                      </td>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        Arbitrage category
                      </td>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        0.50% - 0.65%
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        4
                      </td>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        Index & Fund of Funds Category of Schemes
                      </td>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        0.15% - 0.50%
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        5
                      </td>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        Hybrid and Asset Allocator category of scheme
                      </td>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        0.50% - 1.25%
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        6
                      </td>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        Solution Oriented Schemes
                      </td>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        0.80% - 1.15%
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        7
                      </td>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        Equity Related Schemes
                      </td>
                      <td class="px-6 py-4 border-b border-gray-300 text-gray-700">
                        0.50% - 1.45%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
              <p className="text-lg text-primary-700">
                Brokerage Structures are subject to the term of empanelment and
                applicable laws and regulations, including SEBI (Mutual Fund )
                Regulations, AMFI Regulations, laws relating to Goods and
                Services Tax, Income Tax, SEBI/AMFI circulars etc.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 mb-8">
              <p className="font-semibold text-lg text-primary-700">
                The objective of this publication is to promote the Science &
                Art of TECHNICAL ANALYSIS to forecast price movements. This
                information should not be construed as an offer to buy or sell
                securities of any kind. It is assumed that readers would act
                with due knowledge of all risks involved as per the dynamics &
                market fluctuations. The author does not assume any
                responsibility or liability, whatsoever, resulting from the use
                of such information, judgments and opinions for Trading or
                Investment purposes. Author does not have any positions in the
                above mentioned items.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Disclosure;
