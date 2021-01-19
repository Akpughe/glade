import React from 'react';

const EmbededParamTable = () => {
  return (
    <table class="table-auto w-full">
      <thead style={{ backgroundColor: '#0faff0' }}>
        {/*  */}
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
            <code>MID</code>
          </td>
          <td className="border p-4 font-light">Merchant ID</td>
          <td className="border p-4">
            <span className="bg-red-500 text-white px-0.5 rounded">
              Required
            </span>
          </td>
        </tr>
        {/* 2 */}
        <tr className="">
          <td className="border p-4">
            <code>amount</code>
          </td>
          <td className="border p-4 font-light">
            Amount to charge the customers
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
            <code>currency</code>
          </td>
          <td className="border p-4 font-light">default in NGN</td>
          <td className="border p-4">
            <span className="bg-green-500 text-white px-0.5 rounded">
              Optional
            </span>
          </td>
        </tr>
        {/* 4 */}
        <tr className="">
          <td className="border p-4">
            <code>country</code>
          </td>
          <td className="border p-4 font-light">default in NG</td>
          <td className="border p-4">
            <span className="bg-green-500 text-white px-0.5 rounded">
              Optional
            </span>
          </td>
        </tr>
        {/* 5 */}
        <tr className="">
          <td className="border p-4">
            <code>email</code>
          </td>
          <td className="border p-4">email of the customer</td>
          <td className="border p-4">
            <span className="bg-red-500 text-white px-0.5 rounded">
              Required
            </span>
          </td>
        </tr>
        {/* 6 */}
        <tr className="">
          <td className="border p-4">
            <code>phone</code>
          </td>
          <td className="border p-4">phone number of customer</td>
          <td className="border p-4">
            <span className="bg-green-500 text-white px-0.5 rounded">
              Optional
            </span>
          </td>
        </tr>
        {/* 7 */}
        <tr className="">
          <td className="border p-4">
            <code>title</code>
          </td>
          <td className="border p-4">
            Text to be displayed as the title of the payment modal.
          </td>
          <td className="border p-4">
            <span className="bg-green-500 text-white px-0.5 rounded">
              Optional
            </span>
          </td>
        </tr>
        {/* 8 */}
        <tr className="">
          <td className="border p-4">
            <code>description</code>
          </td>
          <td className="border p-4">
            Text to be displayed as a short modal description.
          </td>
          <td className="border p-4">
            <span className="bg-green-500 text-white px-0.5 rounded">
              Optional
            </span>
          </td>
        </tr>
        {/* 9 */}
        <tr className="">
          <td className="border p-4">
            <code>meta_data</code>
          </td>
          <td className="border p-4">
            When you need to pass extra data to the API. The value should be a
            string stringify the value if its a JSON value.
          </td>
          <td className="border p-4">
            <span className="bg-green-500 text-white px-0.5 rounded">
              Optional
            </span>
          </td>
        </tr>
        {/* 10 */}
        <tr className="">
          <td className="border p-4">
            <code>payment_method</code>
          </td>
          <td className="border p-4">
            You can select which payment method you want available on the
            checkout, pass array of the payment methods you want available e.g
            ['card', 'bank', 'ussd', 'qr', 'mobilemoney']
          </td>
          <td className="border p-4">
            <span className="bg-green-500 text-white px-0.5 rounded">
              Optional
            </span>
          </td>
        </tr>
        {/* 11 */}
        <tr className="">
          <td className="border p-4">
            <code>bearer</code>
          </td>
          <td className="border p-4">
            You can use this option to determine who pay for the charges on the
            transaction default is set to the merchant's account. customer or
            account
          </td>
          <td className="border p-4">
            <span className="bg-green-500 text-white px-0.5 rounded">
              Optional
            </span>
          </td>
        </tr>
        {/* 12 */}
        <tr className="">
          <td className="border p-4">
            <code>logo</code>
          </td>
          <td className="border p-4">Link to the Logo image.</td>
          <td className="border p-4">
            <span className="bg-green-500 text-white px-0.5 rounded">
              Optional
            </span>
          </td>
        </tr>
        {/* 13 */}
        <tr className="">
          <td className="border p-4">
            <code>is_recurring</code>
          </td>
          <td className="border p-4">
            The is_recurring field default value is false, setting it to true
            will make the transaction recurrent and will generate a token
          </td>
          <td className="border p-4">
            <span className="bg-green-500 text-white px-0.5 rounded">
              Optional
            </span>
          </td>
        </tr>
        {/* 14 */}
        <tr className="">
          <td className="border p-4">
            <code>customer_xnref</code>
          </td>
          <td className="border p-4">
            Unquie reference you generate such as an order number, which can be
            used to verify transaction at a later time
          </td>
          <td className="border p-4">
            <span className="bg-green-500 text-white px-0.5 rounded">
              Optional
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EmbededParamTable;
