import React from 'react';

const InstallmentTable = () => {
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
            <code>payment_schedule</code>
          </td>
          <td className="border p-4 font-light">
            This option will be used to determine how the system will handle the
            installments. <br />
            <code>
              This option will be used to determine how the system will handle
              the installments.
            </code>
          </td>
          <td className="border p-4">
            <span className="bg-red-500 text-white px-0.5 rounded">
              Dependent
            </span>
          </td>
        </tr>
        {/* 2 */}
        <tr className="">
          <td className="border p-4">
            <code>total</code>
          </td>
          <td className="border p-4 font-light">
            The total amount to be collect over a period of time. <br />
            <code>This option should be used for initial transaction. </code>
          </td>
          <td className="border p-4">
            <span className="bg-red-500 text-white px-0.5 rounded">
              Dependent
            </span>
          </td>
        </tr>
        {/* 3 */}
        <tr className="">
          <td className="border p-4">
            <code>txtRef</code>
          </td>
          <td className="border p-4 font-light">
            <code>
              The reference of the initial transaction that you want the user or
              customer to complete to the total amount.
            </code>
          </td>
          <td className="border p-4">
            <span className="bg-red-500 text-white px-0.5 rounded">
              Dependent
            </span>
          </td>
        </tr>
        {/* 4 */}
        <tr className="">
          <td className="border p-4">
            <code>is_recurring</code>
          </td>
          <td className="border p-4 font-light">
            <code>
              The is_recurring field default value is false, setting it to true
              will make the transaction recurrent and will generate a token
              which can charge the card at the required time.
            </code>
          </td>
          <td className="border p-4">
            <span className="bg-red-500 text-white px-0.5 rounded">
              Dependent
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default InstallmentTable;
