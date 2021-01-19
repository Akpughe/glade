import React from 'react';

const SplitPaymentTable = () => {
  return (
    <table class="table-auto w-full mb-4">
      <thead style={{ backgroundColor: '#0faff0' }}>
        <tr>
          <th className="p-4 text-white text-lg font-light text-left">
            Parameters
          </th>
          <th className="p-4 text-white text-lg font-light text-left">
            Meaning
          </th>
          <th className="p-4 text-white text-lg font-light text-left">
            Options
          </th>
        </tr>
      </thead>
      <tbody>
        {/* 1 */}
        <tr className="">
          <td className="border p-4">
            <code>ref_code</code>
          </td>
          <td className="border p-4 font-light">
            JReference code that was generated at the point of setting up the
            split payment accounts.
          </td>
          <td className="border p-4">
            <span className="bg-red-500 text-white px-0.5 rounded">
              Required
            </span>
          </td>
        </tr>
        {/* 2 */}
        <tr className="">
          <td className="border p-4">
            <code>percentage</code>
          </td>
          <td className="border p-4 font-light">
            The percentage of the transaction to be settled in the account.
          </td>
          <td className="border p-4">
            <span className="bg-red-500 text-white px-0.5 rounded">
              Required
            </span>
          </td>
        </tr>
        {/* 3 */}
        <tr className="">
          <td className="border p-4">
            <code>fixed</code>
          </td>
          <td className="border p-4 font-light">
            A fixed amount of the transaction to be settled in the account.
          </td>
          <td className="border p-4">
            <span className="bg-red-500 text-white px-0.5 rounded">
              Required
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SplitPaymentTable;
