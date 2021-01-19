import React from 'react';

const Table = ({ parameter, meaning, option }) => {
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
            <code>recurrent</code>
          </td>
          <td className="border p-4 font-light">
            JSON which holds the config of the recurrent setup
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
            <code>frequency</code>
          </td>
          <td className="border p-4 font-light">
            The frequency at which the recurring payment should occurs options
            available are <code>daily</code> or <code>weekly</code> or{' '}
            <code>monthly</code>
          </td>
          <td className="border p-4">
            <span className="bg-red-500 text-white px-0.5 rounded">
              Optional
            </span>
          </td>
        </tr>
        {/* 3 */}
        <tr className="">
          <td className="border p-4">
            <code>value</code>
          </td>
          <td className="border p-4 font-light">
            The value will determine when the charge should occur based on the
            frequency that has been set <br /> Daily (Hours):{' '}
            <code>0 - 23</code> <br /> Weekly (Day): <code>1 - 7</code>
            <br /> Monthly (Day): <code>1 - 30</code>
          </td>
          <td className="border p-4">
            <span className="bg-red-500 text-white px-0.5 rounded">
              Optional
            </span>
          </td>
        </tr>
        {/* 4 */}
        <tr className="">
          <td className="border p-4">
            <code>is_recurring</code>
          </td>
          <td className="border p-4 font-light">
            The is_recurring field default value is false, setting it to true
            will make the transaction recurrent and will generate a token which
            can charge the card at the required time.
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

export default Table;
